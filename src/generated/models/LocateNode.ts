/* tslint:disable */
/* eslint-disable */
/**
 * Stadia Maps Geospatial APIs
 * The Stadia Maps Geospatial APIs provide you with the data you need to build awesome applications.
 *
 * The version of the OpenAPI document: 10.0.1
 * Contact: support@stadiamaps.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from "../runtime";
import type { Administrative } from "./Administrative";
import {
  AdministrativeFromJSON,
  AdministrativeFromJSONTyped,
  AdministrativeToJSON,
  AdministrativeToJSONTyped,
} from "./Administrative";
import type { NodeType } from "./NodeType";
import {
  NodeTypeFromJSON,
  NodeTypeFromJSONTyped,
  NodeTypeToJSON,
  NodeTypeToJSONTyped,
} from "./NodeType";
import type { Access } from "./Access";
import {
  AccessFromJSON,
  AccessFromJSONTyped,
  AccessToJSON,
  AccessToJSONTyped,
} from "./Access";
import type { NodeId } from "./NodeId";
import {
  NodeIdFromJSON,
  NodeIdFromJSONTyped,
  NodeIdToJSON,
  NodeIdToJSONTyped,
} from "./NodeId";

/**
 *
 * @export
 * @interface LocateNode
 */
export interface LocateNode {
  /**
   * The latitude of a point in the shape.
   * @type {number}
   * @memberof LocateNode
   */
  lat: number;
  /**
   * The longitude of a point in the shape.
   * @type {number}
   * @memberof LocateNode
   */
  lon: number;
  /**
   *
   * @type {boolean}
   * @memberof LocateNode
   */
  trafficSignal?: boolean;
  /**
   *
   * @type {NodeType}
   * @memberof LocateNode
   */
  type?: NodeType;
  /**
   *
   * @type {NodeId}
   * @memberof LocateNode
   */
  nodeId?: NodeId;
  /**
   *
   * @type {Access}
   * @memberof LocateNode
   */
  access?: Access;
  /**
   *
   * @type {number}
   * @memberof LocateNode
   */
  edgeCount?: number;
  /**
   *
   * @type {Administrative}
   * @memberof LocateNode
   */
  administrative?: Administrative;
  /**
   *
   * @type {string}
   * @memberof LocateNode
   */
  intersectionType?: LocateNodeIntersectionTypeEnum;
  /**
   *
   * @type {number}
   * @memberof LocateNode
   */
  density?: number;
  /**
   *
   * @type {number}
   * @memberof LocateNode
   */
  localEdgeCount?: number;
  /**
   *
   * @type {boolean}
   * @memberof LocateNode
   */
  modeChange?: boolean;
}

/**
 * @export
 */
export const LocateNodeIntersectionTypeEnum = {
  Regular: "regular",
  False: "false",
  DeadEnd: "dead-end",
  Fork: "fork",
} as const;
export type LocateNodeIntersectionTypeEnum =
  (typeof LocateNodeIntersectionTypeEnum)[keyof typeof LocateNodeIntersectionTypeEnum];

/**
 * Check if a given object implements the LocateNode interface.
 */
export function instanceOfLocateNode(value: object): value is LocateNode {
  if (!("lat" in value) || value["lat"] === undefined) return false;
  if (!("lon" in value) || value["lon"] === undefined) return false;
  return true;
}

export function LocateNodeFromJSON(json: any): LocateNode {
  return LocateNodeFromJSONTyped(json, false);
}

export function LocateNodeFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): LocateNode {
  if (json == null) {
    return json;
  }
  return {
    lat: json["lat"],
    lon: json["lon"],
    trafficSignal:
      json["traffic_signal"] == null ? undefined : json["traffic_signal"],
    type: json["type"] == null ? undefined : NodeTypeFromJSON(json["type"]),
    nodeId:
      json["node_id"] == null ? undefined : NodeIdFromJSON(json["node_id"]),
    access: json["access"] == null ? undefined : AccessFromJSON(json["access"]),
    edgeCount: json["edge_count"] == null ? undefined : json["edge_count"],
    administrative:
      json["administrative"] == null
        ? undefined
        : AdministrativeFromJSON(json["administrative"]),
    intersectionType:
      json["intersection_type"] == null ? undefined : json["intersection_type"],
    density: json["density"] == null ? undefined : json["density"],
    localEdgeCount:
      json["local_edge_count"] == null ? undefined : json["local_edge_count"],
    modeChange: json["mode_change"] == null ? undefined : json["mode_change"],
  };
}

export function LocateNodeToJSON(json: any): LocateNode {
  return LocateNodeToJSONTyped(json, false);
}

export function LocateNodeToJSONTyped(
  value?: LocateNode | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    lat: value["lat"],
    lon: value["lon"],
    traffic_signal: value["trafficSignal"],
    type: NodeTypeToJSON(value["type"]),
    node_id: NodeIdToJSON(value["nodeId"]),
    access: AccessToJSON(value["access"]),
    edge_count: value["edgeCount"],
    administrative: AdministrativeToJSON(value["administrative"]),
    intersection_type: value["intersectionType"],
    density: value["density"],
    local_edge_count: value["localEdgeCount"],
    mode_change: value["modeChange"],
  };
}
