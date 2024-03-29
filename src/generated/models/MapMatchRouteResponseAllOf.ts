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
/**
 * 
 * @export
 * @interface MapMatchRouteResponseAllOf
 */
export interface MapMatchRouteResponseAllOf {
    /**
     * 
     * @type {Array<string>}
     * @memberof MapMatchRouteResponseAllOf
     */
    linearReferences?: Array<string>;
}

/**
 * Check if a given object implements the MapMatchRouteResponseAllOf interface.
 */
export function instanceOfMapMatchRouteResponseAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MapMatchRouteResponseAllOfFromJSON(json: any): MapMatchRouteResponseAllOf {
    return MapMatchRouteResponseAllOfFromJSONTyped(json, false);
}

export function MapMatchRouteResponseAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): MapMatchRouteResponseAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'linearReferences': !exists(json, 'linear_references') ? undefined : json['linear_references'],
    };
}

export function MapMatchRouteResponseAllOfToJSON(value?: MapMatchRouteResponseAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'linear_references': value.linearReferences,
    };
}

