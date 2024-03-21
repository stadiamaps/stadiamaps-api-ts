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
 * @interface IsochroneProperties
 */
export interface IsochroneProperties {
    /**
     * 
     * @type {string}
     * @memberof IsochroneProperties
     */
    fillColor?: string;
    /**
     * 
     * @type {number}
     * @memberof IsochroneProperties
     */
    opacity?: number;
    /**
     * 
     * @type {string}
     * @memberof IsochroneProperties
     */
    fill?: string;
    /**
     * 
     * @type {number}
     * @memberof IsochroneProperties
     */
    fillOpacity?: number;
    /**
     * 
     * @type {string}
     * @memberof IsochroneProperties
     */
    color?: string;
    /**
     * 
     * @type {number}
     * @memberof IsochroneProperties
     */
    contour?: number;
    /**
     * 
     * @type {string}
     * @memberof IsochroneProperties
     */
    metric?: IsochronePropertiesMetricEnum;
}


/**
 * @export
 */
export const IsochronePropertiesMetricEnum = {
    Time: 'time',
    Distance: 'distance'
} as const;
export type IsochronePropertiesMetricEnum = typeof IsochronePropertiesMetricEnum[keyof typeof IsochronePropertiesMetricEnum];


/**
 * Check if a given object implements the IsochroneProperties interface.
 */
export function instanceOfIsochroneProperties(value: object): boolean {
    return true;
}

export function IsochronePropertiesFromJSON(json: any): IsochroneProperties {
    return IsochronePropertiesFromJSONTyped(json, false);
}

export function IsochronePropertiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): IsochroneProperties {
    if (json == null) {
        return json;
    }
    return {
        
        'fillColor': json['fillColor'] == null ? undefined : json['fillColor'],
        'opacity': json['opacity'] == null ? undefined : json['opacity'],
        'fill': json['fill'] == null ? undefined : json['fill'],
        'fillOpacity': json['fillOpacity'] == null ? undefined : json['fillOpacity'],
        'color': json['color'] == null ? undefined : json['color'],
        'contour': json['contour'] == null ? undefined : json['contour'],
        'metric': json['metric'] == null ? undefined : json['metric'],
    };
}

export function IsochronePropertiesToJSON(value?: IsochroneProperties | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'fillColor': value['fillColor'],
        'opacity': value['opacity'],
        'fill': value['fill'],
        'fillOpacity': value['fillOpacity'],
        'color': value['color'],
        'contour': value['contour'],
        'metric': value['metric'],
    };
}

