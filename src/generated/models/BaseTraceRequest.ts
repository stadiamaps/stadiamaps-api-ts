/* tslint:disable */
/* eslint-disable */
/**
 * Stadia Maps Geospatial APIs
 * The Stadia Maps Geospatial APIs provide you with the data you need to build awesome applications.
 *
 * The version of the OpenAPI document: 6.0.0
 * Contact: support@stadiamaps.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
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
import type { MapMatchCostingModel } from './MapMatchCostingModel';
import {
    MapMatchCostingModelFromJSON,
    MapMatchCostingModelFromJSONTyped,
    MapMatchCostingModelToJSON,
} from './MapMatchCostingModel';
import type { MapMatchWaypoint } from './MapMatchWaypoint';
import {
    MapMatchWaypointFromJSON,
    MapMatchWaypointFromJSONTyped,
    MapMatchWaypointToJSON,
} from './MapMatchWaypoint';
import type { ValhallaLanguages } from './ValhallaLanguages';
import {
    ValhallaLanguagesFromJSON,
    ValhallaLanguagesFromJSONTyped,
    ValhallaLanguagesToJSON,
} from './ValhallaLanguages';

/**
 * 
 * @export
 * @interface BaseTraceRequest
 */
export interface BaseTraceRequest {
    /**
     * 
     * @type {DistanceUnit}
     * @memberof BaseTraceRequest
     */
    units?: DistanceUnit;
    /**
     * 
     * @type {ValhallaLanguages}
     * @memberof BaseTraceRequest
     */
    language?: ValhallaLanguages;
    /**
     * The level of directional narrative to include. Locations and times will always be returned, but narrative generation verbosity can be controlled with this parameter.
     * @type {string}
     * @memberof BaseTraceRequest
     */
    directionsType?: BaseTraceRequestDirectionsTypeEnum;
    /**
     * An identifier to disambiguate requests (echoed by the server).
     * @type {string}
     * @memberof BaseTraceRequest
     */
    id?: string;
    /**
     * REQUIRED if `encoded_polyline` is not present. Note that `break` type locations are only supported when `shape_match` is set to `map_match`.
     * @type {Array<MapMatchWaypoint>}
     * @memberof BaseTraceRequest
     */
    shape?: Array<MapMatchWaypoint>;
    /**
     * REQUIRED if `shape` is not present. An encoded polyline (https://developers.google.com/maps/documentation/utilities/polylinealgorithm). Note that the polyline must be encoded with 6 digits of precision rather than the usual 5.
     * @type {string}
     * @memberof BaseTraceRequest
     */
    encodedPolyline?: string;
    /**
     * 
     * @type {MapMatchCostingModel}
     * @memberof BaseTraceRequest
     */
    costing: MapMatchCostingModel;
    /**
     * 
     * @type {CostingOptions}
     * @memberof BaseTraceRequest
     */
    costingOptions?: CostingOptions;
    /**
     * Three snapping modes provide some control over how the map matching occurs. `edge_walk` is fast, but requires extremely precise data that matches the route graph almost perfectly. `map_snap` can handle significantly noisier data, but is very expensive. `walk_or_snap`, the default, tries to use edge walking first and falls back to map matching if edge walking fails.
     * In general, you should not need to change this parameter unless you want to trace a multi-leg route with multiple `break` locations in the `shape`.
     * @type {string}
     * @memberof BaseTraceRequest
     */
    shapeMatch?: BaseTraceRequestShapeMatchEnum;
}


/**
 * @export
 */
export const BaseTraceRequestDirectionsTypeEnum = {
    None: 'none',
    Maneuvers: 'maneuvers',
    Instructions: 'instructions'
} as const;
export type BaseTraceRequestDirectionsTypeEnum = typeof BaseTraceRequestDirectionsTypeEnum[keyof typeof BaseTraceRequestDirectionsTypeEnum];

/**
 * @export
 */
export const BaseTraceRequestShapeMatchEnum = {
    EdgeWalk: 'edge_walk',
    MapSnap: 'map_snap',
    WalkOrSnap: 'walk_or_snap'
} as const;
export type BaseTraceRequestShapeMatchEnum = typeof BaseTraceRequestShapeMatchEnum[keyof typeof BaseTraceRequestShapeMatchEnum];


/**
 * Check if a given object implements the BaseTraceRequest interface.
 */
export function instanceOfBaseTraceRequest(value: object): boolean {
    if (!('costing' in value)) return false;
    return true;
}

export function BaseTraceRequestFromJSON(json: any): BaseTraceRequest {
    return BaseTraceRequestFromJSONTyped(json, false);
}

export function BaseTraceRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BaseTraceRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'units': json['units'] == null ? undefined : DistanceUnitFromJSON(json['units']),
        'language': json['language'] == null ? undefined : ValhallaLanguagesFromJSON(json['language']),
        'directionsType': json['directions_type'] == null ? undefined : json['directions_type'],
        'id': json['id'] == null ? undefined : json['id'],
        'shape': json['shape'] == null ? undefined : ((json['shape'] as Array<any>).map(MapMatchWaypointFromJSON)),
        'encodedPolyline': json['encoded_polyline'] == null ? undefined : json['encoded_polyline'],
        'costing': MapMatchCostingModelFromJSON(json['costing']),
        'costingOptions': json['costing_options'] == null ? undefined : CostingOptionsFromJSON(json['costing_options']),
        'shapeMatch': json['shape_match'] == null ? undefined : json['shape_match'],
    };
}

export function BaseTraceRequestToJSON(value?: BaseTraceRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'units': DistanceUnitToJSON(value['units']),
        'language': ValhallaLanguagesToJSON(value['language']),
        'directions_type': value['directionsType'],
        'id': value['id'],
        'shape': value['shape'] == null ? undefined : ((value['shape'] as Array<any>).map(MapMatchWaypointToJSON)),
        'encoded_polyline': value['encodedPolyline'],
        'costing': MapMatchCostingModelToJSON(value['costing']),
        'costing_options': CostingOptionsToJSON(value['costingOptions']),
        'shape_match': value['shapeMatch'],
    };
}

