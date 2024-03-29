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
 * @interface TruckCostingOptionsAllOf
 */
export interface TruckCostingOptionsAllOf {
    /**
     * The height of the truck (in meters).
     * @type {number}
     * @memberof TruckCostingOptionsAllOf
     */
    height?: number;
    /**
     * The width of the truck (in meters).
     * @type {number}
     * @memberof TruckCostingOptionsAllOf
     */
    width?: number;
    /**
     * The length of the truck (in meters).
     * @type {number}
     * @memberof TruckCostingOptionsAllOf
     */
    length?: number;
    /**
     * The weight of the truck (in tonnes).
     * @type {number}
     * @memberof TruckCostingOptionsAllOf
     */
    weight?: number;
    /**
     * The axle load of the truck (in tonnes).
     * @type {number}
     * @memberof TruckCostingOptionsAllOf
     */
    axleLoad?: number;
    /**
     * Whether or not the truck is carrying hazardous materials.
     * @type {boolean}
     * @memberof TruckCostingOptionsAllOf
     */
    hazmat?: boolean;
}

/**
 * Check if a given object implements the TruckCostingOptionsAllOf interface.
 */
export function instanceOfTruckCostingOptionsAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TruckCostingOptionsAllOfFromJSON(json: any): TruckCostingOptionsAllOf {
    return TruckCostingOptionsAllOfFromJSONTyped(json, false);
}

export function TruckCostingOptionsAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): TruckCostingOptionsAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'height': !exists(json, 'height') ? undefined : json['height'],
        'width': !exists(json, 'width') ? undefined : json['width'],
        'length': !exists(json, 'length') ? undefined : json['length'],
        'weight': !exists(json, 'weight') ? undefined : json['weight'],
        'axleLoad': !exists(json, 'axle_load') ? undefined : json['axle_load'],
        'hazmat': !exists(json, 'hazmat') ? undefined : json['hazmat'],
    };
}

export function TruckCostingOptionsAllOfToJSON(value?: TruckCostingOptionsAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'height': value.height,
        'width': value.width,
        'length': value.length,
        'weight': value.weight,
        'axle_load': value.axleLoad,
        'hazmat': value.hazmat,
    };
}

