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
/**
 * 
 * @export
 * @interface GeoJSONGeometryBase
 */
export interface GeoJSONGeometryBase {
    /**
     * 
     * @type {string}
     * @memberof GeoJSONGeometryBase
     */
    type: GeoJSONGeometryBaseTypeEnum;
}


/**
 * @export
 */
export const GeoJSONGeometryBaseTypeEnum = {
    Point: 'Point',
    MultiPoint: 'MultiPoint',
    LineString: 'LineString',
    MultiLineString: 'MultiLineString',
    Polygon: 'Polygon',
    MultiPolygon: 'MultiPolygon'
} as const;
export type GeoJSONGeometryBaseTypeEnum = typeof GeoJSONGeometryBaseTypeEnum[keyof typeof GeoJSONGeometryBaseTypeEnum];


/**
 * Check if a given object implements the GeoJSONGeometryBase interface.
 */
export function instanceOfGeoJSONGeometryBase(value: object): boolean {
    if (!('type' in value)) return false;
    return true;
}

export function GeoJSONGeometryBaseFromJSON(json: any): GeoJSONGeometryBase {
    return GeoJSONGeometryBaseFromJSONTyped(json, false);
}

export function GeoJSONGeometryBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GeoJSONGeometryBase {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
    };
}

export function GeoJSONGeometryBaseToJSON(value?: GeoJSONGeometryBase | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'type': value['type'],
    };
}

