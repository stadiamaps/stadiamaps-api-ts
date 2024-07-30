import { GeospatialApi, Configuration } from "../src";
import { shouldRunIntegrationTests, apiKey } from "./utils";
import { disableFetchMocks, enableFetchMocks } from "jest-fetch-mock";

// Fixtures captured from the API
const seoul = { lat: 37.56, lng: 126.99 };
const heightReq = { id: "Seoul", shape: [{ lat: seoul.lat, lon: seoul.lng }] };
const rangedHeightReq = { range: true, ...heightReq };
const mockTzRes = {
  tz_id: "Asia/Seoul",
  base_utc_offset: 32400,
  dst_offset: 0,
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
    expect(res.baseUtcOffset).toEqual(mockTzRes.base_utc_offset);
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
