/* tslint:disable */
/* eslint-disable */
/**
 * Stadia Maps Geospatial APIs
 * The Stadia Maps Geospatial APIs provide you with the data you need to build awesome applications.
 *
 * The version of the OpenAPI document: 6.6.3
 * Contact: support@stadiamaps.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from "../runtime";
import type { LocateEdgeInfo } from "./LocateEdgeInfo";
import {
  LocateEdgeInfoFromJSON,
  LocateEdgeInfoFromJSONTyped,
  LocateEdgeInfoToJSON,
} from "./LocateEdgeInfo";
import type { LocateDetailedEdge } from "./LocateDetailedEdge";
import {
  LocateDetailedEdgeFromJSON,
  LocateDetailedEdgeFromJSONTyped,
  LocateDetailedEdgeToJSON,
} from "./LocateDetailedEdge";
import type { NodeId } from "./NodeId";
import { NodeIdFromJSON, NodeIdFromJSONTyped, NodeIdToJSON } from "./NodeId";

/**
 *
 * @export
 * @interface LocateEdge
 */
export interface LocateEdge {
  /**
   *
   * @type {NodeId}
   * @memberof LocateEdge
   */
  edgeId?: NodeId;
  /**
   * The OSM way ID associated with this edge (absent in verbose response; see the edge info).
   * @type {number}
   * @memberof LocateEdge
   */
  wayId?: number;
  /**
   *
   * @type {number}
   * @memberof LocateEdge
   */
  correlatedLat: number;
  /**
   *
   * @type {number}
   * @memberof LocateEdge
   */
  correlatedLon: number;
  /**
   *
   * @type {number}
   * @memberof LocateEdge
   */
  percentAlong: number;
  /**
   *
   * @type {string}
   * @memberof LocateEdge
   */
  sideOfStreet: LocateEdgeSideOfStreetEnum;
  /**
   * A base64-encoded [OpenLR location reference](https://www.openlr-association.com/fileadmin/user_upload/openlr-whitepaper_v1.5.pdf), for a graph edge of the road network matched by the query.
   * @type {string}
   * @memberof LocateEdge
   */
  linearReference?: string;
  /**
   *
   * @type {number}
   * @memberof LocateEdge
   */
  outboundReach?: number;
  /**
   *
   * @type {number}
   * @memberof LocateEdge
   */
  heading?: number;
  /**
   *
   * @type {number}
   * @memberof LocateEdge
   */
  inboundReach?: number;
  /**
   *
   * @type {number}
   * @memberof LocateEdge
   */
  distance?: number;
  /**
   * Predicted speed information based on historical data. If available, this will include 2016 entries. Each entry represents 5 minutes, where the first entry represents midnight on Monday, the second entry represents 00:05 on Monday, etc.
   * @type {Array<number>}
   * @memberof LocateEdge
   */
  predictedSpeeds?: Array<number>;
  /**
   *
   * @type {LocateEdgeInfo}
   * @memberof LocateEdge
   */
  edgeInfo?: LocateEdgeInfo;
  /**
   *
   * @type {LocateDetailedEdge}
   * @memberof LocateEdge
   */
  edge?: LocateDetailedEdge;
  /**
   *
   * @type {Array<string>}
   * @memberof LocateEdge
   */
  warnings?: Array<string>;
}

/**
 * @export
 */
export const LocateEdgeSideOfStreetEnum = {
  Left: "left",
  Right: "right",
  Neither: "neither",
} as const;
export type LocateEdgeSideOfStreetEnum =
  (typeof LocateEdgeSideOfStreetEnum)[keyof typeof LocateEdgeSideOfStreetEnum];

/**
 * Check if a given object implements the LocateEdge interface.
 */
export function instanceOfLocateEdge(value: object): value is LocateEdge {
  if (!("correlatedLat" in value) || value["correlatedLat"] === undefined)
    return false;
  if (!("correlatedLon" in value) || value["correlatedLon"] === undefined)
    return false;
  if (!("percentAlong" in value) || value["percentAlong"] === undefined)
    return false;
  if (!("sideOfStreet" in value) || value["sideOfStreet"] === undefined)
    return false;
  return true;
}

export function LocateEdgeFromJSON(json: any): LocateEdge {
  return LocateEdgeFromJSONTyped(json, false);
}

export function LocateEdgeFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): LocateEdge {
  if (json == null) {
    return json;
  }
  return {
    edgeId:
      json["edge_id"] == null ? undefined : NodeIdFromJSON(json["edge_id"]),
    wayId: json["way_id"] == null ? undefined : json["way_id"],
    correlatedLat: json["correlated_lat"],
    correlatedLon: json["correlated_lon"],
    percentAlong: json["percent_along"],
    sideOfStreet: json["side_of_street"],
    linearReference:
      json["linear_reference"] == null ? undefined : json["linear_reference"],
    outboundReach:
      json["outbound_reach"] == null ? undefined : json["outbound_reach"],
    heading: json["heading"] == null ? undefined : json["heading"],
    inboundReach:
      json["inbound_reach"] == null ? undefined : json["inbound_reach"],
    distance: json["distance"] == null ? undefined : json["distance"],
    predictedSpeeds:
      json["predicted_speeds"] == null ? undefined : json["predicted_speeds"],
    edgeInfo:
      json["edge_info"] == null
        ? undefined
        : LocateEdgeInfoFromJSON(json["edge_info"]),
    edge:
      json["edge"] == null
        ? undefined
        : LocateDetailedEdgeFromJSON(json["edge"]),
    warnings: json["warnings"] == null ? undefined : json["warnings"],
  };
}

export function LocateEdgeToJSON(value?: LocateEdge | null): any {
  if (value == null) {
    return value;
  }
  return {
    edge_id: NodeIdToJSON(value["edgeId"]),
    way_id: value["wayId"],
    correlated_lat: value["correlatedLat"],
    correlated_lon: value["correlatedLon"],
    percent_along: value["percentAlong"],
    side_of_street: value["sideOfStreet"],
    linear_reference: value["linearReference"],
    outbound_reach: value["outboundReach"],
    heading: value["heading"],
    inbound_reach: value["inboundReach"],
    distance: value["distance"],
    predicted_speeds: value["predictedSpeeds"],
    edge_info: LocateEdgeInfoToJSON(value["edgeInfo"]),
    edge: LocateDetailedEdgeToJSON(value["edge"]),
    warnings: value["warnings"],
  };
}
