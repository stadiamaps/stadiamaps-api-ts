/* tslint:disable */
/* eslint-disable */
/**
 * Stadia Maps Geospatial APIs
 * The Stadia Maps Geospatial APIs provide you with the data you need to build awesome applications.
 *
 * The version of the OpenAPI document: 6.1.0
 * Contact: support@stadiamaps.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface MatrixDistance
 */
export interface MatrixDistance {
    /**
     * The distance (in `units`) between the location in `sources` at `from_index` and the location in `targets` at `to_index`.
     * @type {number}
     * @memberof MatrixDistance
     */
    distance: number;
    /**
     * The travel time (in seconds) between the location in `sources` at `from_index` and the location in `targets` at `to_index`.
     * @type {number}
     * @memberof MatrixDistance
     */
    time: number;
    /**
     * The index of the start location in the `sources` array.
     * @type {number}
     * @memberof MatrixDistance
     */
    fromIndex: number;
    /**
     * The index of the end location in the `targets` array.
     * @type {number}
     * @memberof MatrixDistance
     */
    toIndex: number;
}

/**
 * Check if a given object implements the MatrixDistance interface.
 */
export function instanceOfMatrixDistance(value: object): boolean {
    if (!('distance' in value)) return false;
    if (!('time' in value)) return false;
    if (!('fromIndex' in value)) return false;
    if (!('toIndex' in value)) return false;
    return true;
}

export function MatrixDistanceFromJSON(json: any): MatrixDistance {
    return MatrixDistanceFromJSONTyped(json, false);
}

export function MatrixDistanceFromJSONTyped(json: any, ignoreDiscriminator: boolean): MatrixDistance {
    if (json == null) {
        return json;
    }
    return {
        
        'distance': json['distance'],
        'time': json['time'],
        'fromIndex': json['from_index'],
        'toIndex': json['to_index'],
    };
}

export function MatrixDistanceToJSON(value?: MatrixDistance | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'distance': value['distance'],
        'time': value['time'],
        'from_index': value['fromIndex'],
        'to_index': value['toIndex'],
    };
}

