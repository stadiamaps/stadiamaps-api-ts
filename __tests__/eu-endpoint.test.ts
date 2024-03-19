import {GeocodingApi, Configuration, PeliasResponse} from '../src';
// @ts-ignore
import {shouldRunIntegrationTests, apiKey} from "./utils";
import {disableFetchMocks, enableFetchMocks} from "jest-fetch-mock";

const euBaseUrl = "https://api-eu.stadiamaps.com";
const address = "Põhja pst 27";
const kultuurikatel = {"geometry":{"coordinates":[24.750645,59.444351],"type":"Point"},"properties":{"accuracy":"point","addendum":{"osm":{"wikidata":"Q101521394"}},"borough":"Pőhja-Tallinna","borough_gid":"whosonfirst:borough:1713348883","confidence":0.9,"continent":"Europe","continent_gid":"whosonfirst:continent:102191581","country":"Estonia","country_a":"EST","country_code":"EE","country_gid":"whosonfirst:country:85633135","county":"Tallinn","county_gid":"whosonfirst:county:1713305645","distance":0.004,"gid":"openstreetmap:address:way/109867749","housenumber":"27","id":"way/109867749","label":"27 Põhja pst, Tallinn, HA, Estonia","layer":"address","localadmin":"Mustamäe","localadmin_gid":"whosonfirst:localadmin:1713305847","locality":"Tallinn","locality_gid":"whosonfirst:locality:101748153","name":"27 Põhja pst","neighbourhood":"Vanalinn","neighbourhood_gid":"whosonfirst:neighbourhood:85907845","region":"Harju","region_a":"HA","region_gid":"whosonfirst:region:85683055","source":"openstreetmap","source_id":"way/109867749","street":"Põhja pst"},"type":"Feature"};
const mockRes = {"bbox":[24.750645,59.444351,24.750645,59.444351],"features":[kultuurikatel],"geocoding":{"attribution":"https://stadiamaps.com/attribution/","engine":{"author":"Mapzen","name":"Pelias","version":"1.0"},"query":{"boundary.circle.lat":59.44436,"boundary.circle.lon":24.75071,"lang":{"defaulted":true,"iso6391":"en","iso6393":"eng","name":"English","via":"default"},"point.lat":59.44436,"point.lon":24.75071,"private":false,"querySize":2,"size":1},"timestamp":1684398093246,"version":"0.2"},"type":"FeatureCollection"};

describe('GeocodingApi unit tests', () => {
    const config = new Configuration({ basePath: euBaseUrl });
    const api = new GeocodingApi(config);

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

    test('EU endpoint is used in request URL', async () => {
        const res = await api.autocomplete({ text: address });
        expect(fetchMock.mock.calls.length).toEqual(1);

        let [url, req] = fetchMock.mock.calls[0];
        expect(url).toContain(euBaseUrl);
    });
});

(shouldRunIntegrationTests ? describe : describe.skip)('EU Endpoint integration tests', () => {
    const config = new Configuration({ apiKey: apiKey, basePath: euBaseUrl });
    const api = new GeocodingApi(config);

    test('autocomplete endpoint integration test', async () => {
        const res = await api.autocomplete({ text: address });
        expect(res.features.length).toBeGreaterThanOrEqual(1);
        expect(res.features[0]?.properties?.country).toEqual("Estonia");
        expect(res.features[0]?.properties?.layer).toEqual("address");
    })
});
