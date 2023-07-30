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
 * @interface RouteResponseTrip
 */
export interface RouteResponseTrip {
    /**
     * The response status code
     * @type {number}
     * @memberof RouteResponseTrip
     */
    status: number;
    /**
     * The response status message
     * @type {string}
     * @memberof RouteResponseTrip
     */
    statusMessage: string;
    /**
     * 
     * @type {ValhallaLongUnits}
     * @memberof RouteResponseTrip
     */
    units: ValhallaLongUnits;
    /**
     * 
     * @type {ValhallaLanguages}
     * @memberof RouteResponseTrip
     */
    language: ValhallaLanguages;
    /**
     * 
     * @type {Array<RoutingResponseWaypoint>}
     * @memberof RouteResponseTrip
     */
    locations: Array<RoutingResponseWaypoint>;
    /**
     * 
     * @type {Array<RouteLeg>}
     * @memberof RouteResponseTrip
     */
    legs: Array<RouteLeg>;
    /**
     * 
     * @type {RouteSummary}
     * @memberof RouteResponseTrip
     */
    summary: RouteSummary;
}

/**
 * Check if a given object implements the RouteResponseTrip interface.
 */
export function instanceOfRouteResponseTrip(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "statusMessage" in value;
    isInstance = isInstance && "units" in value;
    isInstance = isInstance && "language" in value;
    isInstance = isInstance && "locations" in value;
    isInstance = isInstance && "legs" in value;
    isInstance = isInstance && "summary" in value;

    return isInstance;
}

export function RouteResponseTripFromJSON(json: any): RouteResponseTrip {
    return RouteResponseTripFromJSONTyped(json, false);
}

export function RouteResponseTripFromJSONTyped(json: any, ignoreDiscriminator: boolean): RouteResponseTrip {
    if ((json === undefined) || (json === null)) {
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

export function RouteResponseTripToJSON(value?: RouteResponseTrip | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'status_message': value.statusMessage,
        'units': ValhallaLongUnitsToJSON(value.units),
        'language': ValhallaLanguagesToJSON(value.language),
        'locations': ((value.locations as Array<any>).map(RoutingResponseWaypointToJSON)),
        'legs': ((value.legs as Array<any>).map(RouteLegToJSON)),
        'summary': RouteSummaryToJSON(value.summary),
    };
}

