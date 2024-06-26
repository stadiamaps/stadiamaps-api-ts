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
import type { RouteLeg } from './RouteLeg';
import {
    RouteLegFromJSON,
    RouteLegFromJSONTyped,
    RouteLegToJSON,
} from './RouteLeg';
import type { RouteSummary } from './RouteSummary';
import {
    RouteSummaryFromJSON,
    RouteSummaryFromJSONTyped,
    RouteSummaryToJSON,
} from './RouteSummary';
import type { RoutingResponseWaypoint } from './RoutingResponseWaypoint';
import {
    RoutingResponseWaypointFromJSON,
    RoutingResponseWaypointFromJSONTyped,
    RoutingResponseWaypointToJSON,
} from './RoutingResponseWaypoint';
import type { ValhallaLanguages } from './ValhallaLanguages';
import {
    ValhallaLanguagesFromJSON,
    ValhallaLanguagesFromJSONTyped,
    ValhallaLanguagesToJSON,
} from './ValhallaLanguages';
import type { ValhallaLongUnits } from './ValhallaLongUnits';
import {
    ValhallaLongUnitsFromJSON,
    ValhallaLongUnitsFromJSONTyped,
    ValhallaLongUnitsToJSON,
} from './ValhallaLongUnits';

/**
 * 
 * @export
 * @interface RouteTrip
 */
export interface RouteTrip {
    /**
     * The response status code
     * @type {number}
     * @memberof RouteTrip
     */
    status: number;
    /**
     * The response status message
     * @type {string}
     * @memberof RouteTrip
     */
    statusMessage: string;
    /**
     * 
     * @type {ValhallaLongUnits}
     * @memberof RouteTrip
     */
    units: ValhallaLongUnits;
    /**
     * 
     * @type {ValhallaLanguages}
     * @memberof RouteTrip
     */
    language: ValhallaLanguages;
    /**
     * 
     * @type {Array<RoutingResponseWaypoint>}
     * @memberof RouteTrip
     */
    locations: Array<RoutingResponseWaypoint>;
    /**
     * 
     * @type {Array<RouteLeg>}
     * @memberof RouteTrip
     */
    legs: Array<RouteLeg>;
    /**
     * 
     * @type {RouteSummary}
     * @memberof RouteTrip
     */
    summary: RouteSummary;
}

/**
 * Check if a given object implements the RouteTrip interface.
 */
export function instanceOfRouteTrip(value: object): boolean {
    if (!('status' in value)) return false;
    if (!('statusMessage' in value)) return false;
    if (!('units' in value)) return false;
    if (!('language' in value)) return false;
    if (!('locations' in value)) return false;
    if (!('legs' in value)) return false;
    if (!('summary' in value)) return false;
    return true;
}

export function RouteTripFromJSON(json: any): RouteTrip {
    return RouteTripFromJSONTyped(json, false);
}

export function RouteTripFromJSONTyped(json: any, ignoreDiscriminator: boolean): RouteTrip {
    if (json == null) {
        return json;
    }
    return {
        
        'status': json['status'],
        'statusMessage': json['status_message'],
        'units': ValhallaLongUnitsFromJSON(json['units']),
        'language': ValhallaLanguagesFromJSON(json['language']),
        'locations': ((json['locations'] as Array<any>).map(RoutingResponseWaypointFromJSON)),
        'legs': ((json['legs'] as Array<any>).map(RouteLegFromJSON)),
        'summary': RouteSummaryFromJSON(json['summary']),
    };
}

export function RouteTripToJSON(value?: RouteTrip | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'status': value['status'],
        'status_message': value['statusMessage'],
        'units': ValhallaLongUnitsToJSON(value['units']),
        'language': ValhallaLanguagesToJSON(value['language']),
        'locations': ((value['locations'] as Array<any>).map(RoutingResponseWaypointToJSON)),
        'legs': ((value['legs'] as Array<any>).map(RouteLegToJSON)),
        'summary': RouteSummaryToJSON(value['summary']),
    };
}

