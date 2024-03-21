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
 * @interface GeoAttributes
 */
export interface GeoAttributes {
    /**
     * Curvature factor.
     * @type {number}
     * @memberof GeoAttributes
     */
    curvature?: number;
    /**
     * The maximum downward slope. Uses 1 degree precision for slopes to -16 degrees, and 4 degree precision afterwards (up to a max of -76 degrees).
     * @type {number}
     * @memberof GeoAttributes
     */
    maxDownSlope?: number;
    /**
     * The maximum upward slope. Uses 1 degree precision for slopes to 16 degrees, and 4 degree precision afterwards (up to a max of 76 degrees).
     * @type {number}
     * @memberof GeoAttributes
     */
    maxUpSlope?: number;
    /**
     * The weighted estimate of the grade.
     * @type {number}
     * @memberof GeoAttributes
     */
    weightedGrade?: number;
    /**
     * The length of the edge, in meters.
     * @type {number}
     * @memberof GeoAttributes
     */
    length?: number;
}

/**
 * Check if a given object implements the GeoAttributes interface.
 */
export function instanceOfGeoAttributes(value: object): boolean {
    return true;
}

export function GeoAttributesFromJSON(json: any): GeoAttributes {
    return GeoAttributesFromJSONTyped(json, false);
}

export function GeoAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GeoAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'curvature': json['curvature'] == null ? undefined : json['curvature'],
        'maxDownSlope': json['max_down_slope'] == null ? undefined : json['max_down_slope'],
        'maxUpSlope': json['max_up_slope'] == null ? undefined : json['max_up_slope'],
        'weightedGrade': json['weighted_grade'] == null ? undefined : json['weighted_grade'],
        'length': json['length'] == null ? undefined : json['length'],
    };
}

export function GeoAttributesToJSON(value?: GeoAttributes | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'curvature': value['curvature'],
        'max_down_slope': value['maxDownSlope'],
        'max_up_slope': value['maxUpSlope'],
        'weighted_grade': value['weightedGrade'],
        'length': value['length'],
    };
}

