/* tslint:disable */
/* eslint-disable */
/**
 * Stadia Maps Geospatial APIs
 * The Stadia Maps Geospatial APIs provide you with the data you need to build awesome applications.
 *
 * The version of the OpenAPI document: 6.6.0
 * Contact: support@stadiamaps.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Traversability } from './Traversability';
import {
    TraversabilityFromJSON,
    TraversabilityFromJSONTyped,
    TraversabilityToJSON,
} from './Traversability';
import type { EdgeUse } from './EdgeUse';
import {
    EdgeUseFromJSON,
    EdgeUseFromJSONTyped,
    EdgeUseToJSON,
} from './EdgeUse';
import type { RoadClass } from './RoadClass';
import {
    RoadClassFromJSON,
    RoadClassFromJSONTyped,
    RoadClassToJSON,
} from './RoadClass';

/**
 * 
 * @export
 * @interface IntersectingEdge
 */
export interface IntersectingEdge {
    /**
     * The direction at the beginning of an edge. The units are degrees clockwise from north.
     * @type {number}
     * @memberof IntersectingEdge
     */
    beginHeading?: number;
    /**
     * True if this intersecting edge at the end node has consistent names with the path from the other edge.
     * @type {boolean}
     * @memberof IntersectingEdge
     */
    fromEdgeNameConsistency?: boolean;
    /**
     * True if this intersecting edge at the end node has consistent names with the path to the other edge.
     * @type {boolean}
     * @memberof IntersectingEdge
     */
    toEdgeNameConsistency?: boolean;
    /**
     * 
     * @type {Traversability}
     * @memberof IntersectingEdge
     */
    driveability?: Traversability;
    /**
     * 
     * @type {Traversability}
     * @memberof IntersectingEdge
     */
    cyclability?: Traversability;
    /**
     * 
     * @type {Traversability}
     * @memberof IntersectingEdge
     */
    walkability?: Traversability;
    /**
     * 
     * @type {EdgeUse}
     * @memberof IntersectingEdge
     */
    use?: EdgeUse;
    /**
     * 
     * @type {RoadClass}
     * @memberof IntersectingEdge
     */
    roadClass?: RoadClass;
}

/**
 * Check if a given object implements the IntersectingEdge interface.
 */
export function instanceOfIntersectingEdge(value: object): value is IntersectingEdge {
    return true;
}

export function IntersectingEdgeFromJSON(json: any): IntersectingEdge {
    return IntersectingEdgeFromJSONTyped(json, false);
}

export function IntersectingEdgeFromJSONTyped(json: any, ignoreDiscriminator: boolean): IntersectingEdge {
    if (json == null) {
        return json;
    }
    return {
        
        'beginHeading': json['begin_heading'] == null ? undefined : json['begin_heading'],
        'fromEdgeNameConsistency': json['from_edge_name_consistency'] == null ? undefined : json['from_edge_name_consistency'],
        'toEdgeNameConsistency': json['to_edge_name_consistency'] == null ? undefined : json['to_edge_name_consistency'],
        'driveability': json['driveability'] == null ? undefined : TraversabilityFromJSON(json['driveability']),
        'cyclability': json['cyclability'] == null ? undefined : TraversabilityFromJSON(json['cyclability']),
        'walkability': json['walkability'] == null ? undefined : TraversabilityFromJSON(json['walkability']),
        'use': json['use'] == null ? undefined : EdgeUseFromJSON(json['use']),
        'roadClass': json['road_class'] == null ? undefined : RoadClassFromJSON(json['road_class']),
    };
}

export function IntersectingEdgeToJSON(value?: IntersectingEdge | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'begin_heading': value['beginHeading'],
        'from_edge_name_consistency': value['fromEdgeNameConsistency'],
        'to_edge_name_consistency': value['toEdgeNameConsistency'],
        'driveability': TraversabilityToJSON(value['driveability']),
        'cyclability': TraversabilityToJSON(value['cyclability']),
        'walkability': TraversabilityToJSON(value['walkability']),
        'use': EdgeUseToJSON(value['use']),
        'road_class': RoadClassToJSON(value['roadClass']),
    };
}

