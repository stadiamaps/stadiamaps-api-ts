import {
  GeocodingApi,
  Configuration,
  GeocodeResponse,
  GeocodeResponseEnvelopePropertiesV2,
} from "../src";
// @ts-ignore
import { shouldRunIntegrationTests, apiKey } from "./utils";
import { disableFetchMocks, enableFetchMocks } from "jest-fetch-mock";

// Fixtures captured from the API
const address = "Põhja pst 27";
const kultuurikatel = {
  geometry: { coordinates: [24.750645, 59.444351], type: "Point" },
  properties: {
    accuracy: "point",
    addendum: { osm: { wikidata: "Q101521394" } },
    borough: "Pőhja-Tallinna",
    borough_gid: "whosonfirst:borough:1713348883",
    confidence: 0.9,
    continent: "Europe",
    continent_gid: "whosonfirst:continent:102191581",
    country: "Estonia",
    country_a: "EST",
    country_code: "EE",
    country_gid: "whosonfirst:country:85633135",
    county: "Tallinn",
    county_gid: "whosonfirst:county:1713305645",
    distance: 0.004,
    gid: "openstreetmap:address:way/109867749",
    housenumber: "27",
    id: "way/109867749",
    label: "27 Põhja pst, Tallinn, HA, Estonia",
    layer: "address",
    localadmin: "Mustamäe",
    localadmin_gid: "whosonfirst:localadmin:1713305847",
    locality: "Tallinn",
    locality_gid: "whosonfirst:locality:101748153",
    name: "27 Põhja pst",
    neighbourhood: "Vanalinn",
    neighbourhood_gid: "whosonfirst:neighbourhood:85907845",
    region: "Harju",
    region_a: "HA",
    region_gid: "whosonfirst:region:85683055",
    source: "openstreetmap",
    source_id: "way/109867749",
    street: "Põhja pst",
  },
  type: "Feature",
};
const mockRes = {
  bbox: [24.750645, 59.444351, 24.750645, 59.444351],
  features: [kultuurikatel],
  geocoding: {
    attribution: "https://stadiamaps.com/attribution/",
    engine: { author: "Stadia Maps", name: "Theseus", version: "1.0" },
    query: {
      "boundary.circle.lat": 59.44436,
      "boundary.circle.lon": 24.75071,
      lang: {
        defaulted: true,
        iso6391: "en",
        iso6393: "eng",
        name: "English",
        via: "default",
      },
      "point.lat": 59.44436,
      "point.lon": 24.75071,
      private: false,
      querySize: 2,
      size: 1,
    },
    timestamp: 1684398093246,
    version: "0.2",
  },
  type: "FeatureCollection",
};

const mockResV2 = {
  geocoding: {
    attribution: "https://stadiamaps.com/attribution/",
  },
  type: "FeatureCollection",
  bbox: [126.776403, 37.426604, 127.20553, 37.697176],
  features: [
    {
      // type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [127.009676, 37.539619],
      },
      bbox: [126.776403, 37.426604, 127.20553, 37.697176],
      properties: {
        gid: "whosonfirst:locality:102026327",
        layer: "locality",
        sources: [
          {
            source: "whosonfirst",
            source_id: "102026327",
          },
        ],
        precision: "centroid",
        name: "Seoul",
        coarse_location: "서울특별시, South Korea",
        context: {
          whosonfirst: {
            continent: {
              gid: "whosonfirst:continent:102191569",
              name: "Asia",
            },
            country: {
              gid: "whosonfirst:country:85632231",
              name: "South Korea",
            },
            region: {
              gid: "whosonfirst:region:85673185",
              name: "서울특별시",
            },
            county: {
              gid: "whosonfirst:county:890475295",
              name: "Yongsan District",
            },
            locality: {
              gid: "whosonfirst:locality:102026327",
              name: "Seoul",
            },
          },
          iso_3166_a2: "KR",
          iso_3166_a3: "KOR",
        },
        addendum: {
          whosonfirst_concordances: {
            geonames_id: 1835848,
            geoplanet_id: 1132599,
            quattroshapes_pg_id: 1073966,
            wikidata_id: "Q8684",
            factual_id: "14700d1c-8f76-11e1-848f-cfd5bf3ef515",
          },
        },
      },
    },
  ],
};

const mockResV2Parsed: GeocodeResponseEnvelopePropertiesV2 = {
  geocoding: {
    attribution: "https://stadiamaps.com/attribution/",
  },
  type: "FeatureCollection",
  bbox: [126.776403, 37.426604, 127.20553, 37.697176],
  features: [
    {
      // type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [127.009676, 37.539619],
      },
      bbox: [126.776403, 37.426604, 127.20553, 37.697176],
      properties: {
        gid: "whosonfirst:locality:102026327",
        layer: "locality",
        sources: [
          {
            source: "whosonfirst",
            sourceId: "102026327",
          },
        ],
        precision: "centroid",
        name: "Seoul",
        coarseLocation: "서울특별시, South Korea",
        context: {
          whosonfirst: {
            continent: {
              gid: "whosonfirst:continent:102191569",
              name: "Asia",
            },
            country: {
              gid: "whosonfirst:country:85632231",
              name: "South Korea",
            },
            region: {
              gid: "whosonfirst:region:85673185",
              name: "서울특별시",
            },
            county: {
              gid: "whosonfirst:county:890475295",
              name: "Yongsan District",
            },
            locality: {
              gid: "whosonfirst:locality:102026327",
              name: "Seoul",
            },
          },
          iso3166A2: "KR",
          iso3166A3: "KOR",
        },
        addendum: {
          whosonfirstConcordances: {
            factualId: "14700d1c-8f76-11e1-848f-cfd5bf3ef515",
            geonamesId: 1835848,
            geoplanetId: 1132599,
            quattroshapesPgId: 1073966,
            wikidataId: "Q8684",
          },
        },
      },
    },
  ],
};

const mockResAutocompleteV2 = {
  geocoding: {
    attribution: "https://stadiamaps.com/attribution/",
  },
  type: "FeatureCollection",
  features: [
    {
      // type: "Feature",
      geometry: null,
      properties: {
        gid: "whosonfirst:locality:102026327",
        layer: "locality",
        precision: "centroid",
        name: "Seoul",
        coarse_location: "서울특별시, South Korea",
      },
    },
  ],
};

const mockResAutocompleteV2Parsed: GeocodeResponseEnvelopePropertiesV2 = {
  geocoding: {
    attribution: "https://stadiamaps.com/attribution/",
  },
  type: "FeatureCollection",
  features: [
    {
      // type: "Feature",
      properties: {
        gid: "whosonfirst:locality:102026327",
        layer: "locality",
        precision: "centroid",
        name: "Seoul",
        coarseLocation: "서울특별시, South Korea",
      },
    },
  ],
};

// Checks that the parsed response *approximately* equals the exact response. Some fields are added with a value of
// undefined because TypeScript is explicit, and other properties have key changes to make them more friendly.
function assertResponseEqualsMock(res: GeocodeResponse) {
  expect(res.bbox).toEqual(mockRes.bbox);
  res.features.forEach((feature, index) => {
    let mockFeature = mockRes.features[index];
    expect(feature.geometry).toEqual(mockFeature.geometry);
    expect(feature.type).toEqual(mockFeature.type);
    expect(feature.properties).toEqual(
      expect.objectContaining(mockFeature.properties),
    );
  });
}

function assertResponseEqualsMockV2(
  res: GeocodeResponseEnvelopePropertiesV2,
  mockRes: GeocodeResponseEnvelopePropertiesV2,
) {
  expect(res.bbox).toEqual(mockRes.bbox);
  res.features.forEach((feature, index) => {
    let mockFeature = mockRes.features[index];
    expect(feature.geometry).toEqual(mockFeature.geometry);
    expect(feature.type).toEqual(mockFeature.type);
    expect(feature.properties).toEqual(
      expect.objectContaining(mockFeature.properties),
    );
  });
}

describe("GeocodingApi V1 unit tests", () => {
  const api = new GeocodingApi();

  beforeAll(() => {
    enableFetchMocks();
  });

  beforeEach(() => {
    fetchMock.resetMocks();
    fetchMock.mockResponse(JSON.stringify(mockRes));
  });

  afterAll(() => {
    disableFetchMocks();
  });

  test("autocomplete endpoint data parsing", async () => {
    const res = await api.autocomplete({ text: address });
    expect(fetchMock.mock.calls.length).toEqual(1);

    let [url, req] = fetchMock.mock.calls[0];
    expect(req?.method).toEqual("GET");
    expect(url).toContain(`text=${encodeURIComponent(address)}`);

    assertResponseEqualsMock(res);
  });

  test("autocomplete endpoint memoization", async () => {
    const res1 = await api.autocomplete({ text: "foobar" });
    expect(fetchMock.mock.calls.length).toEqual(1);

    const res2 = await api.autocomplete({ text: "foobar" });
    // Second call should not trigger an additional network fetch!
    expect(fetchMock.mock.calls.length).toEqual(1);

    expect(res1).toEqual(res2);
  });

  test("search endpoint data parsing", async () => {
    const res = await api.search({ text: address });
    expect(fetchMock.mock.calls.length).toEqual(1);

    let [url, req] = fetchMock.mock.calls[0];
    expect(req?.method).toEqual("GET");
    expect(url).toContain(`text=${encodeURIComponent(address)}`);

    assertResponseEqualsMock(res);
  });

  test("structured search endpoint data parsing", async () => {
    const res = await api.searchStructured({
      address: address,
      country: "EE",
    });
    expect(fetchMock.mock.calls.length).toEqual(1);

    let [url, req] = fetchMock.mock.calls[0];
    expect(req?.method).toEqual("GET");
    expect(url).toContain(`address=${encodeURIComponent(address)}`);
    expect(url).toContain("country=EE");

    assertResponseEqualsMock(res);
  });

  test("reverse endpoint data parsing", async () => {
    const res = await api.reverse({
      pointLat: kultuurikatel.geometry.coordinates[1],
      pointLon: kultuurikatel.geometry.coordinates[0],
    });
    expect(fetchMock.mock.calls.length).toEqual(1);

    let [url, req] = fetchMock.mock.calls[0];
    expect(req?.method).toEqual("GET");
    expect(url).toContain(
      `point.lat=${encodeURIComponent(kultuurikatel.geometry.coordinates[1])}`,
    );
    expect(url).toContain(
      `point.lon=${encodeURIComponent(kultuurikatel.geometry.coordinates[0])}`,
    );

    assertResponseEqualsMock(res);
  });

  test("place endpoint data parsing", async () => {
    const res = await api.placeDetails({
      ids: [kultuurikatel.properties.gid, "foo:bar"],
    });
    expect(fetchMock.mock.calls.length).toEqual(1);

    let [url, req] = fetchMock.mock.calls[0];
    expect(req?.method).toEqual("GET");
    expect(url).toContain(
      `ids=${encodeURIComponent(kultuurikatel.properties.gid)}%2C${encodeURIComponent("foo:bar")}`,
    );

    assertResponseEqualsMock(res);
  });
});

describe("GeocodingApi Autocomplete V2 unit tests", () => {
  const api = new GeocodingApi();

  beforeAll(() => {
    enableFetchMocks();
  });

  beforeEach(() => {
    fetchMock.resetMocks();
    fetchMock.mockResponse(JSON.stringify(mockResAutocompleteV2));
  });

  afterAll(() => {
    disableFetchMocks();
  });

  test("autocomplete endpoint data parsing", async () => {
    const res = await api.autocompleteV2({ text: address });
    expect(fetchMock.mock.calls.length).toEqual(1);

    let [url, req] = fetchMock.mock.calls[0];
    expect(req?.method).toEqual("GET");
    expect(url).toContain(`text=${encodeURIComponent(address)}`);

    assertResponseEqualsMockV2(res, mockResAutocompleteV2Parsed);
  });
});

describe("GeocodingApi V2 unit tests", () => {
  const api = new GeocodingApi();

  beforeAll(() => {
    enableFetchMocks();
  });

  beforeEach(() => {
    fetchMock.resetMocks();
    fetchMock.mockResponse(JSON.stringify(mockResV2));
  });

  afterAll(() => {
    disableFetchMocks();
  });

  test("place detail endpoint data parsing", async () => {
    const res = await api.placeDetailsV2({
      ids: [kultuurikatel.properties.gid, "foo:bar"],
    });
    expect(fetchMock.mock.calls.length).toEqual(1);

    let [url, req] = fetchMock.mock.calls[0];
    expect(req?.method).toEqual("GET");
    expect(url).toContain(
      `ids=${encodeURIComponent(kultuurikatel.properties.gid)}%2C${encodeURIComponent("foo:bar")}`,
    );

    assertResponseEqualsMockV2(res, mockResV2Parsed);
  });
});

(shouldRunIntegrationTests ? describe : describe.skip)(
  "GeocodingApi v1 integration tests",
  () => {
    const config = new Configuration({
      apiKey: apiKey,
    });
    const api = new GeocodingApi(config);

    test("autocomplete endpoint integration test", async () => {
      const res = await api.autocomplete({ text: address });
      expect(res.features.length).toBeGreaterThanOrEqual(1);
      expect(res.features[0]?.properties?.country).toEqual("Estonia");
      expect(res.features[0]?.properties?.layer).toEqual("address");
    });

    test("search endpoint integration test", async () => {
      const res = await api.search({ text: address });
      expect(res.features.length).toBeGreaterThanOrEqual(1);
      expect(res.features[0]?.properties?.country).toEqual("Estonia");
      expect(res.features[0]?.properties?.layer).toEqual("address");
    });

    test("structured search endpoint integration test", async () => {
      const res = await api.searchStructured({
        address: address,
        country: "EE",
      });
      expect(res.features.length).toBeGreaterThanOrEqual(1);
      expect(res.features[0]?.properties?.country).toEqual("Estonia");
      expect(res.features[0]?.properties?.layer).toEqual("address");
    });

    test("reverse endpoint integration test", async () => {
      const res = await api.reverse({
        pointLat: kultuurikatel.geometry.coordinates[1],
        pointLon: kultuurikatel.geometry.coordinates[0],
      });
      expect(res.features.length).toBeGreaterThanOrEqual(1);
      expect(res.features[0]?.properties?.country).toEqual("Estonia");
    });

    test("reverse endpoint explicit layer integration test", async () => {
      const res = await api.reverse({
        pointLat: kultuurikatel.geometry.coordinates[1],
        pointLon: kultuurikatel.geometry.coordinates[0],
        layers: ["address"],
      });
      expect(res.features.length).toBeGreaterThanOrEqual(1);
      expect(res.features[0]?.properties?.country).toEqual("Estonia");
      expect(res.features[0]?.properties?.layer).toEqual("address");
    });

    test("reverse endpoint uncommon layer integration test", async () => {
      const res = await api.reverse({
        pointLat: kultuurikatel.geometry.coordinates[0],
        pointLon: kultuurikatel.geometry.coordinates[1],
      });
      expect(res.features.length).toBeGreaterThanOrEqual(1);
      expect(res.features[0]?.properties?.layer).toEqual("marinearea");
    });

    test("place endpoint integration test", async () => {
      const res = await api.placeDetails({
        ids: [kultuurikatel.properties.gid],
      });
      expect(res.features).toHaveLength(1);
      expect(res.features[0]?.properties?.country).toEqual("Estonia");
      expect(res.features[0]?.properties?.layer).toEqual("address");
    });

    test("bulk geocode endpoint integration test", async () => {
      const responses = await api.searchBulk({
        bulkRequest: [
          { endpoint: "/v1/search", query: { text: address } },
          {
            endpoint: "/v1/search/structured",
            query: {
              address: "Kursi tänav 3",
              country: "EE",
              layers: ["coarse", "address"],
            },
          },
        ],
      });
      expect(responses).toHaveLength(2);
      for (const res of responses.values()) {
        expect(res.status).toEqual(200);
        expect(res.response?.features[0]?.properties?.country).toEqual(
          "Estonia",
        );
        expect(res.response?.features[0]?.properties?.layer).toEqual("address");
      }
    });
  },
);

(shouldRunIntegrationTests ? describe : describe.skip)(
  "GeocodingApi v2 integration tests",
  () => {
    const config = new Configuration({
      apiKey: apiKey,
    });
    const api = new GeocodingApi(config);

    test("autocomplete endpoint integration test", async () => {
      const res = await api.autocompleteV2({ text: address });
      expect(res.features.length).toBeGreaterThanOrEqual(1);
      expect(res.features[0]?.properties?.context).toBeUndefined();
      expect(res.features[0]?.properties?.layer).toEqual("address");
    });

    test("place endpoint integration test", async () => {
      const res = await api.placeDetailsV2({
        ids: [kultuurikatel.properties.gid],
      });
      expect(res.features).toHaveLength(1);
      expect(
        res.features[0]?.properties?.context?.whosonfirst?.country?.name,
      ).toEqual("Estonia");
      expect(res.features[0]?.properties?.context?.iso3166A3).toEqual("EST");
      expect(res.features[0]?.properties?.layer).toEqual("address");
    });
  },
);
