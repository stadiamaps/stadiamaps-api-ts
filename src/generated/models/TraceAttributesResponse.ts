/* tslint:disable */
/* eslint-disable */
/**
 * Stadia Maps Geospatial APIs
 * The Stadia Maps Geospatial APIs provide you with the data you need to build awesome applications.
 *
 * The version of the OpenAPI document: 5.0.6
 * Contact: support@stadiamaps.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AdminRegion } from './AdminRegion';
import {
    AdminRegionFromJSON,
    AdminRegionFromJSONTyped,
    AdminRegionToJSON,
} from './AdminRegion';
import type { MatchedPoint } from './MatchedPoint';
import {
    MatchedPointFromJSON,
    MatchedPointFromJSONTyped,
    MatchedPointToJSON,
} from './MatchedPoint';
import type { TraceAttributesBaseResponse } from './TraceAttributesBaseResponse';
import {
    TraceAttributesBaseResponseFromJSON,
    TraceAttributesBaseResponseFromJSONTyped,
    TraceAttributesBaseResponseToJSON,
} from './TraceAttributesBaseResponse';
import type { TraceEdge } from './TraceEdge';
import {
    TraceEdgeFromJSON,
    TraceEdgeFromJSONTyped,
    TraceEdgeToJSON,
} from './TraceEdge';
import type { ValhallaLongUnits } from './ValhallaLongUnits';
import {
    ValhallaLongUnitsFromJSON,
    ValhallaLongUnitsFromJSONTyped,
    ValhallaLongUnitsToJSON,
} from './ValhallaLongUnits';

/**
 * 
 * @export
 * @interface TraceAttributesResponse
 */
export interface TraceAttributesResponse {
    /**
     * The list of edges matched along the path.
     * @type {Array<TraceEdge>}
     * @memberof TraceAttributesResponse
     */
    edges?: Array<TraceEdge>;
    /**
     * The set of administrative regions matched along the path. Rather than repeating this information for every end node, the admins in this list are referenced by index.
     * @type {Array<AdminRegion>}
     * @memberof TraceAttributesResponse
     */
    admins?: Array<AdminRegion>;
    /**
     * List of match results when using the map_snap shape match algorithm. There is a one-to-one correspondence with the input set of latitude, longitude coordinates and this list of match results.
     * @type {Array<MatchedPoint>}
     * @memberof TraceAttributesResponse
     */
    matchedPoints?: Array<MatchedPoint>;
    /**
     * 
     * @type {number}
     * @memberof TraceAttributesResponse
     */
    osmChangeset?: number;
    /**
     * The encoded polyline (https://developers.google.com/maps/documentation/utilities/polylinealgorithm) of the matched path.
     * @type {string}
     * @memberof TraceAttributesResponse
     */
    shape?: string;
    /**
     * 
     * @type {number}
     * @memberof TraceAttributesResponse
     */
    confidenceScore?: number;
    /**
     * An identifier to disambiguate requests (echoed by the server).
     * @type {string}
     * @memberof TraceAttributesResponse
     */
    id?: string;
    /**
     * 
     * @type {ValhallaLongUnits}
     * @memberof TraceAttributesResponse
     */
    units?: ValhallaLongUnits;
    /**
     * Alternate paths, if any, that were not classified as the best match.
     * @type {Array<TraceAttributesBaseResponse>}
     * @memberof TraceAttributesResponse
     */
    alternatePaths?: Array<TraceAttributesBaseResponse>;
}

/**
 * Check if a given object implements the TraceAttributesResponse interface.
 */
export function instanceOfTraceAttributesResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TraceAttributesResponseFromJSON(json: any): TraceAttributesResponse {
    return TraceAttributesResponseFromJSONTyped(json, false);
}

export function TraceAttributesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TraceAttributesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'edges': !exists(json, 'edges') ? undefined : ((json['edges'] as Array<any>).map(TraceEdgeFromJSON)),
        'admins': !exists(json, 'admins') ? undefined : ((json['admins'] as Array<any>).map(AdminRegionFromJSON)),
        'matchedPoints': !exists(json, 'matched_points') ? undefined : ((json['matched_points'] as Array<any>).map(MatchedPointFromJSON)),
        'osmChangeset': !exists(json, 'osm_changeset') ? undefined : json['osm_changeset'],
        'shape': !exists(json, 'shape') ? undefined : json['shape'],
        'confidenceScore': !exists(json, 'confidence_score') ? undefined : json['confidence_score'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'units': !exists(json, 'units') ? undefined : ValhallaLongUnitsFromJSON(json['units']),
        'alternatePaths': !exists(json, 'alternate_paths') ? undefined : ((json['alternate_paths'] as Array<any>).map(TraceAttributesBaseResponseFromJSON)),
    };
}

export function TraceAttributesResponseToJSON(value?: TraceAttributesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'edges': value.edges === undefined ? undefined : ((value.edges as Array<any>).map(TraceEdgeToJSON)),
        'admins': value.admins === undefined ? undefined : ((value.admins as Array<any>).map(AdminRegionToJSON)),
        'matched_points': value.matchedPoints === undefined ? undefined : ((value.matchedPoints as Array<any>).map(MatchedPointToJSON)),
        'osm_changeset': value.osmChangeset,
        'shape': value.shape,
        'confidence_score': value.confidenceScore,
        'id': value.id,
        'units': ValhallaLongUnitsToJSON(value.units),
        'alternate_paths': value.alternatePaths === undefined ? undefined : ((value.alternatePaths as Array<any>).map(TraceAttributesBaseResponseToJSON)),
    };
}

