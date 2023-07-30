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
import type { IntersectingEdge } from './IntersectingEdge';
import {
    IntersectingEdgeFromJSON,
    IntersectingEdgeFromJSONTyped,
    IntersectingEdgeToJSON,
} from './IntersectingEdge';
import type { NodeType } from './NodeType';
import {
    NodeTypeFromJSON,
    NodeTypeFromJSONTyped,
    NodeTypeToJSON,
} from './NodeType';

/**
 * The node at the end of this edge
 * @export
 * @interface EndNode
 */
export interface EndNode {
    /**
     * A set of edges intersecting this node.
     * @type {Array<IntersectingEdge>}
     * @memberof EndNode
     */
    intersectingEdges?: Array<IntersectingEdge>;
    /**
     * The elapsed time along the path to arrive at this node.
     * @type {number}
     * @memberof EndNode
     */
    elapsedTime?: number;
    /**
     * The index into the `admins` list in which this node lies.
     * @type {number}
     * @memberof EndNode
     */
    adminIndex?: number;
    /**
     * 
     * @type {NodeType}
     * @memberof EndNode
     */
    type?: NodeType;
    /**
     * True if this node is a fork.
     * @type {boolean}
     * @memberof EndNode
     */
    fork?: boolean;
    /**
     * The canonical TZDB identifier for the node's time zone.
     * @type {string}
     * @memberof EndNode
     */
    timeZone?: string;
}

/**
 * Check if a given object implements the EndNode interface.
 */
export function instanceOfEndNode(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EndNodeFromJSON(json: any): EndNode {
    return EndNodeFromJSONTyped(json, false);
}

export function EndNodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): EndNode {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'intersectingEdges': !exists(json, 'intersecting_edges') ? undefined : ((json['intersecting_edges'] as Array<any>).map(IntersectingEdgeFromJSON)),
        'elapsedTime': !exists(json, 'elapsed_time') ? undefined : json['elapsed_time'],
        'adminIndex': !exists(json, 'admin_index') ? undefined : json['admin_index'],
        'type': !exists(json, 'type') ? undefined : NodeTypeFromJSON(json['type']),
        'fork': !exists(json, 'fork') ? undefined : json['fork'],
        'timeZone': !exists(json, 'time_zone') ? undefined : json['time_zone'],
    };
}

export function EndNodeToJSON(value?: EndNode | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'intersecting_edges': value.intersectingEdges === undefined ? undefined : ((value.intersectingEdges as Array<any>).map(IntersectingEdgeToJSON)),
        'elapsed_time': value.elapsedTime,
        'admin_index': value.adminIndex,
        'type': NodeTypeToJSON(value.type),
        'fork': value.fork,
        'time_zone': value.timeZone,
    };
}

