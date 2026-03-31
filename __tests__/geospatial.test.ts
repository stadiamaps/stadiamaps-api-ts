import { GeospatialApi, Configuration } from "../src";
import { shouldRunIntegrationTests, apiKey } from "./utils";
import { disableFetchMocks, enableFetchMocks } from "jest-fetch-mock";

// Fixtures captured from the API
const seoul = { lat: 37.56, lng: 126.99 };
const tallinn = { lat: 59.437, lng: 24.7536 };
const heightReq = { id: "Seoul", shape: [{ lat: seoul.lat, lon: seoul.lng }] };
const rangedHeightReq = { range: true, ...heightReq };
const mockTzRes = {
  tz_id: "Asia/Seoul",
  base_utc_offset: 32400,
  dst_offset: 0,
  local_rfc_2822_timestamp: "Wed, 01 Apr 2026 01:06:32 +0900",
  local_rfc_3389_timestamp: "2026-04-01T01:06:32+09:00",
};
const mockTzV2Res = {
  tz_id: "Europe/Tallinn",
  utc_offset: 10800,
  is_dst: true,
  timestamp: 1774973192,
  local_rfc_2822_timestamp: "Tue, 31 Mar 2026 19:06:32 +0300",
  local_rfc_3339_timestamp: "2026-03-31T19:06:32+03:00",
};
const mockHeightRes = {
  id: "Seoul",
  shape: [
    {
      lat: 37.56,
      lon: 126.99,
    },
  ],
  height: [52],
};

describe("GeospatialApi unit tests", () => {
  const api = new GeospatialApi();

  beforeAll(() => {
    enableFetchMocks();
  });

  beforeEach(() => {
    fetchMock.resetMocks();
  });

  afterAll(() => {
    disableFetchMocks();
  });

  test("TZ endpoint data parsing", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockTzRes));

    const res = await api.tzLookup(seoul);
    expect(fetchMock.mock.calls.length).toEqual(1);

    let [url, req] = fetchMock.mock.calls[0];
    expect(req?.method).toEqual("GET");
    expect(url).toContain(`lat=${seoul.lat}`);
    expect(url).toContain(`lng=${seoul.lng}`);

    expect(res.baseUtcOffset).toEqual(mockTzRes.base_utc_offset);
    expect(res.tzId).toEqual(mockTzRes.tz_id);
    expect(res.localRfc2822Timestamp).toEqual(
      mockTzRes.local_rfc_2822_timestamp,
    );
    expect(res.localRfc3389Timestamp).toEqual(
      mockTzRes.local_rfc_3389_timestamp,
    );
  });

  test("TZ v2 endpoint data parsing", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockTzV2Res));

    const res = await api.tzLookupV2({
      ...tallinn,
      timestamp: mockTzV2Res.timestamp,
    });
    expect(fetchMock.mock.calls.length).toEqual(1);

    let [url, req] = fetchMock.mock.calls[0];
    expect(req?.method).toEqual("GET");
    expect(url).toContain(`lat=${tallinn.lat}`);
    expect(url).toContain(`lng=${tallinn.lng}`);
    expect(url).toContain(`timestamp=${mockTzV2Res.timestamp}`);

    expect(res.tzId).toEqual(mockTzV2Res.tz_id);
    expect(res.utcOffset).toEqual(mockTzV2Res.utc_offset);
    expect(res.isDst).toEqual(mockTzV2Res.is_dst);
    expect(res.timestamp).toEqual(mockTzV2Res.timestamp);
    expect(res.localRfc2822Timestamp).toEqual(
      mockTzV2Res.local_rfc_2822_timestamp,
    );
    expect(res.localRfc3339Timestamp).toEqual(
      mockTzV2Res.local_rfc_3339_timestamp,
    );
  });

  test("Elevation endpoint data parsing", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockHeightRes));

    const res = await api.elevation({ heightRequest: heightReq });
    expect(fetchMock.mock.calls.length).toEqual(1);

    let [url, req] = fetchMock.mock.calls[0];
    expect(req?.method).toEqual("POST");

    expect(res).toEqual(mockHeightRes);
  });
});

(shouldRunIntegrationTests ? describe : describe.skip)(
  "GeospatialApi integration tests",
  () => {
    const config = new Configuration({ apiKey: apiKey });
    const api = new GeospatialApi(config);

    test("tz endpoint integration test (Seoul)", async () => {
      const res = await api.tzLookup(seoul);
      expect(res.tzId).toEqual("Asia/Seoul");
    });

    test("tz v2 endpoint integration test (Tallinn)", async () => {
      const res = await api.tzLookupV2(tallinn);
      expect(res.tzId).toEqual("Europe/Tallinn");
      expect(typeof res.utcOffset).toEqual("number");
      expect(typeof res.isDst).toEqual("boolean");
      expect(res.localRfc3339Timestamp).toBeTruthy();
    });

    test("elevation endpoint integration test (Seoul)", async () => {
      const res = await api.elevation({ heightRequest: heightReq });
      expect(res.id).toEqual(heightReq.id);
      expect(res.height?.length).toBeGreaterThanOrEqual(1);
      expect(res.height![0]).toBeGreaterThanOrEqual(0);
      expect(res.shape).toEqual(heightReq.shape);
    });

    test("elevation endpoint integration test (Seoul), with height ranges", async () => {
      const res = await api.elevation({ heightRequest: rangedHeightReq });
      expect(res.id).toEqual(heightReq.id);
      expect(res.rangeHeight?.length).toBeGreaterThanOrEqual(1);
      expect(res.rangeHeight![0][0]).toEqual(0); // Always null for the first height
      expect(res.rangeHeight![0][1]).toBeGreaterThanOrEqual(0);
      expect(res.shape).toEqual(heightReq.shape);
    });
  },
);
