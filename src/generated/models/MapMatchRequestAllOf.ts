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
import type { MapMatchTraceOptions } from './MapMatchTraceOptions';
import {
    MapMatchTraceOptionsFromJSON,
    MapMatchTraceOptionsFromJSONTyped,
    MapMatchTraceOptionsToJSON,
} from './MapMatchTraceOptions';

/**
 * 
 * @export
 * @interface MapMatchRequestAllOf
 */
export interface MapMatchRequestAllOf {
    /**
     * The timestamp at the start of the trace. Combined with `durations`, this provides a way to include timing information for an `encoded_polyline` trace.
     * @type {number}
     * @memberof MapMatchRequestAllOf
     */
    beginTime?: number;
    /**
     * A list of durations (in seconds) between each successive pair of points in a polyline.
     * @type {number}
     * @memberof MapMatchRequestAllOf
     */
    durations?: number;
    /**
     * If true, the input timestamps or durations should be used when computing elapsed time for each edge along the matched path rather than the routing algorithm estimates.
     * @type {boolean}
     * @memberof MapMatchRequestAllOf
     */
    useTimestamps?: boolean;
    /**
     * 
     * @type {MapMatchTraceOptions}
     * @memberof MapMatchRequestAllOf
     */
    traceOptions?: MapMatchTraceOptions;
    /**
     * If true, the response will include a `linear_references` value that contains an array of base64-encoded [OpenLR location references](https://www.openlr-association.com/fileadmin/user_upload/openlr-whitepaper_v1.5.pdf), one for each graph edge of the road network matched by the trace.
     * @type {boolean}
     * @memberof MapMatchRequestAllOf
     */
    linearReferences?: boolean;
}

/**
 * Check if a given object implements the MapMatchRequestAllOf interface.
 */
export function instanceOfMapMatchRequestAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MapMatchRequestAllOfFromJSON(json: any): MapMatchRequestAllOf {
    return MapMatchRequestAllOfFromJSONTyped(json, false);
}

export function MapMatchRequestAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): MapMatchRequestAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'beginTime': !exists(json, 'begin_time') ? undefined : json['begin_time'],
        'durations': !exists(json, 'durations') ? undefined : json['durations'],
        'useTimestamps': !exists(json, 'use_timestamps') ? undefined : json['use_timestamps'],
        'traceOptions': !exists(json, 'trace_options') ? undefined : MapMatchTraceOptionsFromJSON(json['trace_options']),
        'linearReferences': !exists(json, 'linear_references') ? undefined : json['linear_references'],
    };
}

export function MapMatchRequestAllOfToJSON(value?: MapMatchRequestAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'begin_time': value.beginTime,
        'durations': value.durations,
        'use_timestamps': value.useTimestamps,
        'trace_options': MapMatchTraceOptionsToJSON(value.traceOptions),
        'linear_references': value.linearReferences,
    };
}

