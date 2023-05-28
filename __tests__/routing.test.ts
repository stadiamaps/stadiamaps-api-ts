import {
    RoutingApi,
    Configuration,
    RouteRequest,
    RoutingWaypointTypeEnum,
    DirectionsOptionsUnitsEnum,
    RouteSummary, RouteResponse
} from '../src';
import {shouldRunIntegrationTests, apiKey} from "./utils";
import {disableFetchMocks, enableFetchMocks} from "jest-fetch-mock";

const locationA = {
    "lon": -149.543469,
    "lat": 60.5347155,
    "type": RoutingWaypointTypeEnum.Break
};
const locationB = {
    "lon": -149.5485806,
    "lat": 60.5349908,
    "type": RoutingWaypointTypeEnum.Break
};
const routeRequest: RouteRequest = {
    id: "42",
    locations: [
        locationA,
        locationB
    ],
    costing: "auto",
    costingOptions: {
        auto: {
            useTolls: 1,
            useHighways: 0,
        }
    },
    directionsOptions: {
        units: DirectionsOptionsUnitsEnum.Mi
    }
};
const mockRouteRes = {"id": "42", "trip":{"locations":[{"type":"break","lat":60.534715,"lon":-149.543469,"original_index":0},{"type":"break","lat":60.53499,"lon":-149.54858,"original_index":1}],"legs":[{"maneuvers":[{"type":1,"instruction":"Drive west on AK 1/Seward Highway.","verbal_pre_transition_instruction":"Drive west on Alaska 1, Seward Highway. Then You will arrive at your destination.","verbal_post_transition_instruction":"Continue for 900 feet.","street_names":["AK 1","Seward Highway"],"time":11.487,"length":0.176,"cost":15.508,"begin_shape_index":0,"end_shape_index":9,"verbal_multi_cue":true,"travel_mode":"drive","travel_type":"car"},{"type":4,"instruction":"You have arrived at your destination.","verbal_transition_alert_instruction":"You will arrive at your destination.","verbal_pre_transition_instruction":"You have arrived at your destination.","time":0,"length":0,"cost":0,"begin_shape_index":9,"end_shape_index":9,"travel_mode":"drive","travel_type":"car"}],"summary":{"has_time_restrictions":false,"min_lat":60.534715,"min_lon":-149.54858,"max_lat":60.535008,"max_lon":-149.543469,"time":11.487,"length":0.176,"cost":15.508},"shape":"wzvmrBxalf|GcCrX}A|Nu@jI}@pMkBtZ{@x^_Afj@Inn@`@veB"}],"summary":{"has_time_restrictions":false,"min_lat":60.534715,"min_lon":-149.54858,"max_lat":60.535008,"max_lon":-149.543469,"time":11.487,"length":0.176,"cost":15.508},"status_message":"Found route between points","status":0,"units":"miles","language":"en-US"}};

function assertRouteSummaryEquals(summary: RouteSummary, obj: any) {
    expect(summary).toEqual({
        length: obj.length,
        time: obj.time,
        maxLat: obj.max_lat,
        minLat: obj.min_lat,
        maxLon: obj.max_lon,
        minLon: obj.min_lon,
    });
}

function assertRouteResponseMatchesMock(res: RouteResponse, obj: any) {
    expect(res.id).toEqual(mockRouteRes.id);
    expect(res.trip.units).toEqual(mockRouteRes.trip.units);
    expect(res.trip.language).toEqual(mockRouteRes.trip.language);
    expect(res.trip.status).toEqual(mockRouteRes.trip.status);
    expect(res.trip.statusMessage).toEqual(mockRouteRes.trip.status_message);
    expect(res.trip.locations).toEqual(mockRouteRes.trip.locations.map((loc) => {
        return expect.objectContaining({
            lat: loc.lat,
            lon: loc.lon,
            type: loc.type,
            originalIndex: loc.original_index
        });
    }));
    assertRouteSummaryEquals(res.trip.summary, mockRouteRes.trip.summary);
    for (const [i, leg] of res.trip.legs.entries()) {
        const mockLeg = mockRouteRes.trip.legs[i];
        expect(leg.shape).toEqual(mockLeg.shape);
        assertRouteSummaryEquals(leg.summary, mockLeg.summary);
    }
}

describe('GeospatialApi unit tests', () => {
    const api = new RoutingApi();

    beforeAll(() => {
        enableFetchMocks();
    });

    beforeEach(() => {
        fetchMock.resetMocks();
    });

    afterAll(() => {
        disableFetchMocks();
    });

    test('route endpoint data parsing', async () => {
        fetchMock.mockResponseOnce(JSON.stringify(mockRouteRes));

        const res = await api.route({routeRequest: routeRequest});
        expect(fetchMock.mock.calls.length).toEqual(1);

        let [url, req] = fetchMock.mock.calls[0];
        expect(req?.method).toEqual("POST");

        assertRouteResponseMatchesMock(res, mockRouteRes);
    });

    test('optimized_route endpoint data parsing', async () => {
        fetchMock.mockResponseOnce(JSON.stringify(mockRouteRes));

        const res = await api.optimizedRoute({optimizedRouteRequest: routeRequest});
        expect(fetchMock.mock.calls.length).toEqual(1);

        let [url, req] = fetchMock.mock.calls[0];
        expect(req?.method).toEqual("POST");

        assertRouteResponseMatchesMock(res, mockRouteRes);
    });
});

(shouldRunIntegrationTests ? describe : describe.skip)('Routing integration tests', () => {
    const config = new Configuration({apiKey: apiKey});
    const api = new RoutingApi(config);

    test('route endpoint integration test', async () => {
        const res = await api.route({routeRequest: routeRequest});

        expect(res.id).toEqual(routeRequest.id);
        expect(res.trip.status).toEqual(0);
        expect(res.trip.units).toEqual("miles");
        expect(res.trip.legs.length).toBeGreaterThanOrEqual(1);
    });

    test('optimized_route endpoint integration test', async () => {
        const res = await api.optimizedRoute({optimizedRouteRequest: routeRequest});

        expect(res.id).toEqual(routeRequest.id);
        expect(res.trip.status).toEqual(0);
        expect(res.trip.units).toEqual("miles");
        expect(res.trip.legs.length).toBeGreaterThanOrEqual(1);
    });
});