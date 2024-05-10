/* tslint:disable */
/* eslint-disable */
/**
 * Stadia Maps Geospatial APIs
 * The Stadia Maps Geospatial APIs provide you with the data you need to build awesome applications.
 *
 * The version of the OpenAPI document: 6.3.0
 * Contact: support@stadiamaps.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { CostingModel } from './CostingModel';
import {
    CostingModelFromJSON,
    CostingModelFromJSONTyped,
    CostingModelToJSON,
} from './CostingModel';
import type { CostingOptions } from './CostingOptions';
import {
    CostingOptionsFromJSON,
    CostingOptionsFromJSONTyped,
    CostingOptionsToJSON,
} from './CostingOptions';
import type { DistanceUnit } from './DistanceUnit';
import {
    DistanceUnitFromJSON,
    DistanceUnitFromJSONTyped,
    DistanceUnitToJSON,
} from './DistanceUnit';
import type { RoutingWaypoint } from './RoutingWaypoint';
import {
    RoutingWaypointFromJSON,
    RoutingWaypointFromJSONTyped,
    RoutingWaypointToJSON,
} from './RoutingWaypoint';
import type { ValhallaLanguages } from './ValhallaLanguages';
import {
    ValhallaLanguagesFromJSON,
    ValhallaLanguagesFromJSONTyped,
    ValhallaLanguagesToJSON,
} from './ValhallaLanguages';

/**
 * 
 * @export
 * @interface RouteRequest
 */
export interface RouteRequest {
    /**
     * 
     * @type {DistanceUnit}
     * @memberof RouteRequest
     */
    units?: DistanceUnit;
    /**
     * 
     * @type {ValhallaLanguages}
     * @memberof RouteRequest
     */
    language?: ValhallaLanguages;
    /**
     * The level of directional narrative to include. Locations and times will always be returned, but narrative generation verbosity can be controlled with this parameter.
     * @type {string}
     * @memberof RouteRequest
     */
    directionsType?: RouteRequestDirectionsTypeEnum;
    /**
     * An identifier to disambiguate requests (echoed by the server).
     * @type {string}
     * @memberof RouteRequest
     */
    id?: string;
    /**
     * 
     * @type {Array<RoutingWaypoint>}
     * @memberof RouteRequest
     */
    locations: Array<RoutingWaypoint>;
    /**
     * 
     * @type {CostingModel}
     * @memberof RouteRequest
     */
    costing: CostingModel;
    /**
     * 
     * @type {CostingOptions}
     * @memberof RouteRequest
     */
    costingOptions?: CostingOptions;
    /**
     * This has the same format as the locations list. Locations are mapped to the closed road(s), and these road(s) are excluded from the route path computation.
     * @type {Array<RoutingWaypoint>}
     * @memberof RouteRequest
     */
    excludeLocations?: Array<RoutingWaypoint>;
    /**
     * One or multiple exterior rings of polygons in the form of nested JSON arrays. Roads intersecting these rings will be avoided during path finding. Open rings will be closed automatically. If you only need to avoid a few specific roads, it's much more efficient to use `exclude_locations`.
     * @type {Array<Array<Array<number>>>}
     * @memberof RouteRequest
     */
    excludePolygons?: Array<Array<Array<number>>>;
    /**
     * How many alternate routes are desired. Note that fewer or no alternates may be returned. Alternates are not yet supported on routes with more than 2 locations or on time-dependent routes.
     * @type {number}
     * @memberof RouteRequest
     */
    alternates?: number;
    /**
     * If greater than zero, attempts to include elevation along the route at regular intervals. The "native" internal resolution is 30m, so we recommend you use this when possible. This number is interpreted as either meters or feet depending on the unit parameter.
     * Elevation for route sections containing a bridge or tunnel is interpolated linearly. This doesn't always match the true elevation of the bridge/tunnel, but it prevents sharp artifacts from the surrounding terrain. This functionality is unique to the route endpoint and is not available via the elevation API.
     * @type {number}
     * @memberof RouteRequest
     */
    elevationInterval?: number;
    /**
     * Determines whether the output should include roundabout exit instructions.
     * @type {boolean}
     * @memberof RouteRequest
     */
    roundaboutExits?: boolean;
}


/**
 * @export
 */
export const RouteRequestDirectionsTypeEnum = {
    None: 'none',
    Maneuvers: 'maneuvers',
    Instructions: 'instructions'
} as const;
export type RouteRequestDirectionsTypeEnum = typeof RouteRequestDirectionsTypeEnum[keyof typeof RouteRequestDirectionsTypeEnum];


/**
 * Check if a given object implements the RouteRequest interface.
 */
export function instanceOfRouteRequest(value: object): boolean {
    if (!('locations' in value)) return false;
    if (!('costing' in value)) return false;
    return true;
}

export function RouteRequestFromJSON(json: any): RouteRequest {
    return RouteRequestFromJSONTyped(json, false);
}

export function RouteRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RouteRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'units': json['units'] == null ? undefined : DistanceUnitFromJSON(json['units']),
        'language': json['language'] == null ? undefined : ValhallaLanguagesFromJSON(json['language']),
        'directionsType': json['directions_type'] == null ? undefined : json['directions_type'],
        'id': json['id'] == null ? undefined : json['id'],
        'locations': ((json['locations'] as Array<any>).map(RoutingWaypointFromJSON)),
        'costing': CostingModelFromJSON(json['costing']),
        'costingOptions': json['costing_options'] == null ? undefined : CostingOptionsFromJSON(json['costing_options']),
        'excludeLocations': json['exclude_locations'] == null ? undefined : ((json['exclude_locations'] as Array<any>).map(RoutingWaypointFromJSON)),
        'excludePolygons': json['exclude_polygons'] == null ? undefined : json['exclude_polygons'],
        'alternates': json['alternates'] == null ? undefined : json['alternates'],
        'elevationInterval': json['elevation_interval'] == null ? undefined : json['elevation_interval'],
        'roundaboutExits': json['roundabout_exits'] == null ? undefined : json['roundabout_exits'],
    };
}

export function RouteRequestToJSON(value?: RouteRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'units': DistanceUnitToJSON(value['units']),
        'language': ValhallaLanguagesToJSON(value['language']),
        'directions_type': value['directionsType'],
        'id': value['id'],
        'locations': ((value['locations'] as Array<any>).map(RoutingWaypointToJSON)),
        'costing': CostingModelToJSON(value['costing']),
        'costing_options': CostingOptionsToJSON(value['costingOptions']),
        'exclude_locations': value['excludeLocations'] == null ? undefined : ((value['excludeLocations'] as Array<any>).map(RoutingWaypointToJSON)),
        'exclude_polygons': value['excludePolygons'],
        'alternates': value['alternates'],
        'elevation_interval': value['elevationInterval'],
        'roundabout_exits': value['roundaboutExits'],
    };
}

