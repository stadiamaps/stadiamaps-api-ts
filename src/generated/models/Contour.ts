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
 * @interface Contour
 */
export interface Contour {
    /**
     * The time in minutes for the contour. Mutually exclusive of distance.
     * @type {number}
     * @memberof Contour
     */
    time?: number;
    /**
     * The distance in km for the contour. Mutually exclusive of time.
     * @type {number}
     * @memberof Contour
     */
    distance?: number;
    /**
     * The color for the output contour, specified as a hex value (without a leading `#`). If no color is specified, one will be assigned automatically.
     * @type {string}
     * @memberof Contour
     */
    color?: string;
}

/**
 * Check if a given object implements the Contour interface.
 */
export function instanceOfContour(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ContourFromJSON(json: any): Contour {
    return ContourFromJSONTyped(json, false);
}

export function ContourFromJSONTyped(json: any, ignoreDiscriminator: boolean): Contour {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'time': !exists(json, 'time') ? undefined : json['time'],
        'distance': !exists(json, 'distance') ? undefined : json['distance'],
        'color': !exists(json, 'color') ? undefined : json['color'],
    };
}

export function ContourToJSON(value?: Contour | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'time': value.time,
        'distance': value.distance,
        'color': value.color,
    };
}

