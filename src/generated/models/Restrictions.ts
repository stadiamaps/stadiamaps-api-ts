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
/**
 * 
 * @export
 * @interface Restrictions
 */
export interface Restrictions {
    /**
     * 
     * @type {boolean}
     * @memberof Restrictions
     */
    golfCart?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Restrictions
     */
    truck?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Restrictions
     */
    pedestrian?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Restrictions
     */
    wheelchair?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Restrictions
     */
    taxi?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Restrictions
     */
    hOV?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Restrictions
     */
    emergency?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Restrictions
     */
    motorcycle?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Restrictions
     */
    car?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Restrictions
     */
    moped?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Restrictions
     */
    bus?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Restrictions
     */
    bicycle?: boolean;
}

/**
 * Check if a given object implements the Restrictions interface.
 */
export function instanceOfRestrictions(value: object): boolean {
    return true;
}

export function RestrictionsFromJSON(json: any): Restrictions {
    return RestrictionsFromJSONTyped(json, false);
}

export function RestrictionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Restrictions {
    if (json == null) {
        return json;
    }
    return {
        
        'golfCart': json['golf_cart'] == null ? undefined : json['golf_cart'],
        'truck': json['truck'] == null ? undefined : json['truck'],
        'pedestrian': json['pedestrian'] == null ? undefined : json['pedestrian'],
        'wheelchair': json['wheelchair'] == null ? undefined : json['wheelchair'],
        'taxi': json['taxi'] == null ? undefined : json['taxi'],
        'hOV': json['HOV'] == null ? undefined : json['HOV'],
        'emergency': json['emergency'] == null ? undefined : json['emergency'],
        'motorcycle': json['motorcycle'] == null ? undefined : json['motorcycle'],
        'car': json['car'] == null ? undefined : json['car'],
        'moped': json['moped'] == null ? undefined : json['moped'],
        'bus': json['bus'] == null ? undefined : json['bus'],
        'bicycle': json['bicycle'] == null ? undefined : json['bicycle'],
    };
}

export function RestrictionsToJSON(value?: Restrictions | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'golf_cart': value['golfCart'],
        'truck': value['truck'],
        'pedestrian': value['pedestrian'],
        'wheelchair': value['wheelchair'],
        'taxi': value['taxi'],
        'HOV': value['hOV'],
        'emergency': value['emergency'],
        'motorcycle': value['motorcycle'],
        'car': value['car'],
        'moped': value['moped'],
        'bus': value['bus'],
        'bicycle': value['bicycle'],
    };
}

