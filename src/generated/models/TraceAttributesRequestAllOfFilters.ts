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
import type { TraceAttributeKey } from './TraceAttributeKey';
import {
    TraceAttributeKeyFromJSON,
    TraceAttributeKeyFromJSONTyped,
    TraceAttributeKeyToJSON,
} from './TraceAttributeKey';

/**
 * If present, provides either a whitelist or a blacklist of keys to include/exclude in the response. This key is optional, and if omitted from the request, all available info will be returned.
 * @export
 * @interface TraceAttributesRequestAllOfFilters
 */
export interface TraceAttributesRequestAllOfFilters {
    /**
     * 
     * @type {Array<TraceAttributeKey>}
     * @memberof TraceAttributesRequestAllOfFilters
     */
    attributes: Array<TraceAttributeKey>;
    /**
     * Determines whether the list of attributes will be used as a whitelist or a blacklist.
     * @type {string}
     * @memberof TraceAttributesRequestAllOfFilters
     */
    action: TraceAttributesRequestAllOfFiltersActionEnum;
}


/**
 * @export
 */
export const TraceAttributesRequestAllOfFiltersActionEnum = {
    Include: 'include',
    Exclude: 'exclude'
} as const;
export type TraceAttributesRequestAllOfFiltersActionEnum = typeof TraceAttributesRequestAllOfFiltersActionEnum[keyof typeof TraceAttributesRequestAllOfFiltersActionEnum];


/**
 * Check if a given object implements the TraceAttributesRequestAllOfFilters interface.
 */
export function instanceOfTraceAttributesRequestAllOfFilters(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "action" in value;

    return isInstance;
}

export function TraceAttributesRequestAllOfFiltersFromJSON(json: any): TraceAttributesRequestAllOfFilters {
    return TraceAttributesRequestAllOfFiltersFromJSONTyped(json, false);
}

export function TraceAttributesRequestAllOfFiltersFromJSONTyped(json: any, ignoreDiscriminator: boolean): TraceAttributesRequestAllOfFilters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attributes': ((json['attributes'] as Array<any>).map(TraceAttributeKeyFromJSON)),
        'action': json['action'],
    };
}

export function TraceAttributesRequestAllOfFiltersToJSON(value?: TraceAttributesRequestAllOfFilters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attributes': ((value.attributes as Array<any>).map(TraceAttributeKeyToJSON)),
        'action': value.action,
    };
}

