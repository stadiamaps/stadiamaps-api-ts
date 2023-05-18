import { GeocodingApi } from '@stadiamaps/api';
import {PeliasResponse} from "../models";
import _ from 'lodash';

function convertKeysToCamelCase(obj: any): any {
    if (_.isPlainObject(obj)) {
        return _.reduce(obj, (result: any, value, key) => {
            result[_.camelCase(key)] = convertKeysToCamelCase(value);
            return result;
        }, {});
    } else if (_.isArray(obj)) {
        return obj.map(value => convertKeysToCamelCase(value));
    }
    return obj;
}


describe('GeocodingApi', () => {
    // A verbatim JSON format response captured from the API
    const address = "Põhja pst 27a";
    const kultuurikatel = {"geometry":{"coordinates":[24.750645,59.444351],"type":"Point"},"properties":{"accuracy":"point","addendum":{"osm":{"wikidata":"Q101521394"}},"borough":"Pőhja-Tallinna","borough_gid":"whosonfirst:borough:1713348883","confidence":0.9,"continent":"Europe","continent_gid":"whosonfirst:continent:102191581","country":"Estonia","country_a":"EST","country_code":"EE","country_gid":"whosonfirst:country:85633135","county":"Tallinn","county_gid":"whosonfirst:county:1713305645","distance":0.004,"gid":"openstreetmap:address:way/109867749","housenumber":"27a","id":"way/109867749","label":"27a Põhja pst, Tallinn, HA, Estonia","layer":"address","localadmin":"Mustamäe","localadmin_gid":"whosonfirst:localadmin:1713305847","locality":"Tallinn","locality_gid":"whosonfirst:locality:101748153","name":"27a Põhja pst","neighbourhood":"Vanalinn","neighbourhood_gid":"whosonfirst:neighbourhood:85907845","region":"Harju","region_a":"HA","region_gid":"whosonfirst:region:85683055","source":"openstreetmap","source_id":"way/109867749","street":"Põhja pst"},"type":"Feature"};
    const mockRes = {"bbox":[24.750645,59.444351,24.750645,59.444351],"features":[kultuurikatel],"geocoding":{"attribution":"https://stadiamaps.com/attribution/","engine":{"author":"Mapzen","name":"Pelias","version":"1.0"},"query":{"boundary.circle.lat":59.44436,"boundary.circle.lon":24.75071,"lang":{"defaulted":true,"iso6391":"en","iso6393":"eng","name":"English","via":"default"},"point.lat":59.44436,"point.lon":24.75071,"private":false,"querySize":2,"size":1},"timestamp":1684398093246,"version":"0.2"},"type":"FeatureCollection"};
    const api = new GeocodingApi();

    beforeEach(() => {
        fetchMock.resetMocks();
        fetchMock.mockResponseOnce(JSON.stringify(mockRes));
    });

    // Checks that the parsed response *approximately* equals the exact response. Some fields are added with a value of
    // undefined because TypeScript is explicit, and other properties have key changes to make them more friendly.
    function assertResponseEqualsMock(res: PeliasResponse) {
        expect(res.bbox).toEqual(mockRes.bbox);
        res.features.forEach((feature, index) => {
            let mockFeature = mockRes.features[index];
            expect(feature.geometry).toEqual(mockFeature.geometry);
            expect(feature.type).toEqual(mockFeature.type);
            expect(feature.properties).toEqual(expect.objectContaining(mockFeature.properties));
        })
    }

    test('autocomplete endpoint data parsing', async () => {
        const res = await api.autocomplete({ text: address });
        expect(fetchMock.mock.calls.length).toEqual(1);

        let [url, req] = fetchMock.mock.calls[0];
        expect(req?.method).toEqual("GET");
        expect(url).toContain(`text=${encodeURIComponent(address)}`);

        assertResponseEqualsMock(res);
    });

    test('search endpoint data parsing', async () => {
        const res = await api.search({ text: address });
        expect(fetchMock.mock.calls.length).toEqual(1);

        let [url, req] = fetchMock.mock.calls[0];
        expect(req?.method).toEqual("GET");
        expect(url).toContain(`text=${encodeURIComponent(address)}`);

        assertResponseEqualsMock(res);
    });

    test('reverse endpoint data parsing', async () => {
        const res = await api.reverse({ pointLat: kultuurikatel.geometry.coordinates[1], pointLon: kultuurikatel.geometry.coordinates[0] });
        expect(fetchMock.mock.calls.length).toEqual(1);

        let [url, req] = fetchMock.mock.calls[0];
        expect(req?.method).toEqual("GET");
        expect(url).toContain(`point.lat=${encodeURIComponent(kultuurikatel.geometry.coordinates[1])}`);
        expect(url).toContain(`point.lon=${encodeURIComponent(kultuurikatel.geometry.coordinates[0])}`);

        assertResponseEqualsMock(res);
    });

    test('place endpoint data parsing', async () => {
        const res = await api.place({ ids: [kultuurikatel.properties.gid, "foo:bar"] });
        expect(fetchMock.mock.calls.length).toEqual(1);

        let [url, req] = fetchMock.mock.calls[0];
        expect(req?.method).toEqual("GET");
        expect(url).toContain(`ids=${encodeURIComponent(kultuurikatel.properties.gid)}%2C${encodeURIComponent("foo:bar")}`);

        assertResponseEqualsMock(res);
    });
});
