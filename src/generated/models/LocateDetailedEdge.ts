/* tslint:disable */
/* eslint-disable */
/**
 * Stadia Maps Geospatial APIs
 * The Stadia Maps Geospatial APIs provide you with the data you need to build awesome applications.
 *
 * The version of the OpenAPI document: 6.6.2
 * Contact: support@stadiamaps.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from "../runtime";
import type { Speeds } from "./Speeds";
import { SpeedsFromJSON, SpeedsFromJSONTyped, SpeedsToJSON } from "./Speeds";
import type { NodeId } from "./NodeId";
import { NodeIdFromJSON, NodeIdFromJSONTyped, NodeIdToJSON } from "./NodeId";
import type { HighwayClassification } from "./HighwayClassification";
import {
  HighwayClassificationFromJSON,
  HighwayClassificationFromJSONTyped,
  HighwayClassificationToJSON,
} from "./HighwayClassification";
import type { GeoAttributes } from "./GeoAttributes";
import {
  GeoAttributesFromJSON,
  GeoAttributesFromJSONTyped,
  GeoAttributesToJSON,
} from "./GeoAttributes";
import type { Restrictions } from "./Restrictions";
import {
  RestrictionsFromJSON,
  RestrictionsFromJSONTyped,
  RestrictionsToJSON,
} from "./Restrictions";

/**
 *
 * @export
 * @interface LocateDetailedEdge
 */
export interface LocateDetailedEdge {
  /**
   * Is there a sidewalk to the left of the edge?
   * @type {boolean}
   * @memberof LocateDetailedEdge
   */
  sidewalkLeft?: boolean;
  /**
   * Is there a sidewalk to the right of the edge?
   * @type {boolean}
   * @memberof LocateDetailedEdge
   */
  sidewalkRight?: boolean;
  /**
   *
   * @type {number}
   * @memberof LocateDetailedEdge
   */
  laneCount?: number;
  /**
   * Is there a stop sign at end of the directed edge?
   * @type {boolean}
   * @memberof LocateDetailedEdge
   */
  stopSign?: boolean;
  /**
   *
   * @type {string}
   * @memberof LocateDetailedEdge
   */
  sacScale?: LocateDetailedEdgeSacScaleEnum;
  /**
   * Is there a yield sign at end of the directed edge?
   * @type {boolean}
   * @memberof LocateDetailedEdge
   */
  yieldSign?: boolean;
  /**
   * Does the edge lead to a "no-through" region?
   * @type {boolean}
   * @memberof LocateDetailedEdge
   */
  notThru?: boolean;
  /**
   * Is the edge info forward? If false, then reverse is implied.
   * @type {boolean}
   * @memberof LocateDetailedEdge
   */
  forward?: boolean;
  /**
   *
   * @type {NodeId}
   * @memberof LocateDetailedEdge
   */
  endNode?: NodeId;
  /**
   * Is the edge part of a truck route/network?
   * @type {boolean}
   * @memberof LocateDetailedEdge
   */
  truckRoute?: boolean;
  /**
   *
   * @type {Speeds}
   * @memberof LocateDetailedEdge
   */
  speeds?: Speeds;
  /**
   * Is the edge part of a bicycle network?
   * @type {boolean}
   * @memberof LocateDetailedEdge
   */
  bikeNetwork?: boolean;
  /**
   * Is the edge part of a roundabout?
   * @type {boolean}
   * @memberof LocateDetailedEdge
   */
  roundAbout?: boolean;
  /**
   * Is there a traffic signal at the end of the directed edge?
   * @type {boolean}
   * @memberof LocateDetailedEdge
   */
  trafficSignal?: boolean;
  /**
   * Is there a general restriction or access condition?
   * @type {boolean}
   * @memberof LocateDetailedEdge
   */
  accessRestriction?: boolean;
  /**
   * Is the edge destination only? If so, it will not be routed through.
   * @type {boolean}
   * @memberof LocateDetailedEdge
   */
  destinationOnly?: boolean;
  /**
   *
   * @type {GeoAttributes}
   * @memberof LocateDetailedEdge
   */
  geoAttributes?: GeoAttributes;
  /**
   *
   * @type {Restrictions}
   * @memberof LocateDetailedEdge
   */
  startRestriction?: Restrictions;
  /**
   * Indication of the type of cycle lane (if any) present along an edge.
   * @type {string}
   * @memberof LocateDetailedEdge
   */
  cycleLane?: LocateDetailedEdgeCycleLaneEnum;
  /**
   *
   * @type {Restrictions}
   * @memberof LocateDetailedEdge
   */
  endRestriction?: Restrictions;
  /**
   * Is access seasonal (ex. no access in winter)?
   * @type {boolean}
   * @memberof LocateDetailedEdge
   */
  seasonal?: boolean;
  /**
   * Does the edge cross into a new country?
   * @type {boolean}
   * @memberof LocateDetailedEdge
   */
  countryCrossing?: boolean;
  /**
   * Is the edge part of a complex restriction?
   * @type {boolean}
   * @memberof LocateDetailedEdge
   */
  partOfComplexRestriction?: boolean;
  /**
   * Do exit signs exist for the edge?
   * @type {boolean}
   * @memberof LocateDetailedEdge
   */
  hasSign?: boolean;
  /**
   *
   * @type {Restrictions}
   * @memberof LocateDetailedEdge
   */
  access?: Restrictions;
  /**
   * Is the edge part of a bridge?
   * @type {boolean}
   * @memberof LocateDetailedEdge
   */
  bridge?: boolean;
  /**
   *
   * @type {HighwayClassification}
   * @memberof LocateDetailedEdge
   */
  classification?: HighwayClassification;
  /**
   * Is the edge a toll road?
   * @type {boolean}
   * @memberof LocateDetailedEdge
   */
  toll?: boolean;
  /**
   * Is the edge a tunnel?
   * @type {boolean}
   * @memberof LocateDetailedEdge
   */
  tunnel?: boolean;
}

/**
 * @export
 */
export const LocateDetailedEdgeSacScaleEnum = {
  None: "none",
  Hiking: "hiking",
  MountainHiking: "mountain hiking",
  DemandingMountainHiking: "demanding mountain hiking",
  AlpineHiking: "alpine hiking",
  DemandingAlpineHiking: "demanding alpine hiking",
  DifficultAlpineHiking: "difficult alpine hiking",
} as const;
export type LocateDetailedEdgeSacScaleEnum =
  (typeof LocateDetailedEdgeSacScaleEnum)[keyof typeof LocateDetailedEdgeSacScaleEnum];

/**
 * @export
 */
export const LocateDetailedEdgeCycleLaneEnum = {
  None: "none",
  Shared: "shared",
  Dedicated: "dedicated",
  Separated: "separated",
} as const;
export type LocateDetailedEdgeCycleLaneEnum =
  (typeof LocateDetailedEdgeCycleLaneEnum)[keyof typeof LocateDetailedEdgeCycleLaneEnum];

/**
 * Check if a given object implements the LocateDetailedEdge interface.
 */
export function instanceOfLocateDetailedEdge(
  value: object,
): value is LocateDetailedEdge {
  return true;
}

export function LocateDetailedEdgeFromJSON(json: any): LocateDetailedEdge {
  return LocateDetailedEdgeFromJSONTyped(json, false);
}

export function LocateDetailedEdgeFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): LocateDetailedEdge {
  if (json == null) {
    return json;
  }
  return {
    sidewalkLeft:
      json["sidewalk_left"] == null ? undefined : json["sidewalk_left"],
    sidewalkRight:
      json["sidewalk_right"] == null ? undefined : json["sidewalk_right"],
    laneCount: json["lane_count"] == null ? undefined : json["lane_count"],
    stopSign: json["stop_sign"] == null ? undefined : json["stop_sign"],
    sacScale: json["sac_scale"] == null ? undefined : json["sac_scale"],
    yieldSign: json["yield_sign"] == null ? undefined : json["yield_sign"],
    notThru: json["not_thru"] == null ? undefined : json["not_thru"],
    forward: json["forward"] == null ? undefined : json["forward"],
    endNode:
      json["end_node"] == null ? undefined : NodeIdFromJSON(json["end_node"]),
    truckRoute: json["truck_route"] == null ? undefined : json["truck_route"],
    speeds: json["speeds"] == null ? undefined : SpeedsFromJSON(json["speeds"]),
    bikeNetwork:
      json["bike_network"] == null ? undefined : json["bike_network"],
    roundAbout: json["round_about"] == null ? undefined : json["round_about"],
    trafficSignal:
      json["traffic_signal"] == null ? undefined : json["traffic_signal"],
    accessRestriction:
      json["access_restriction"] == null
        ? undefined
        : json["access_restriction"],
    destinationOnly:
      json["destination_only"] == null ? undefined : json["destination_only"],
    geoAttributes:
      json["geo_attributes"] == null
        ? undefined
        : GeoAttributesFromJSON(json["geo_attributes"]),
    startRestriction:
      json["start_restriction"] == null
        ? undefined
        : RestrictionsFromJSON(json["start_restriction"]),
    cycleLane: json["cycle_lane"] == null ? undefined : json["cycle_lane"],
    endRestriction:
      json["end_restriction"] == null
        ? undefined
        : RestrictionsFromJSON(json["end_restriction"]),
    seasonal: json["seasonal"] == null ? undefined : json["seasonal"],
    countryCrossing:
      json["country_crossing"] == null ? undefined : json["country_crossing"],
    partOfComplexRestriction:
      json["part_of_complex_restriction"] == null
        ? undefined
        : json["part_of_complex_restriction"],
    hasSign: json["has_sign"] == null ? undefined : json["has_sign"],
    access:
      json["access"] == null ? undefined : RestrictionsFromJSON(json["access"]),
    bridge: json["bridge"] == null ? undefined : json["bridge"],
    classification:
      json["classification"] == null
        ? undefined
        : HighwayClassificationFromJSON(json["classification"]),
    toll: json["toll"] == null ? undefined : json["toll"],
    tunnel: json["tunnel"] == null ? undefined : json["tunnel"],
  };
}

export function LocateDetailedEdgeToJSON(
  value?: LocateDetailedEdge | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    sidewalk_left: value["sidewalkLeft"],
    sidewalk_right: value["sidewalkRight"],
    lane_count: value["laneCount"],
    stop_sign: value["stopSign"],
    sac_scale: value["sacScale"],
    yield_sign: value["yieldSign"],
    not_thru: value["notThru"],
    forward: value["forward"],
    end_node: NodeIdToJSON(value["endNode"]),
    truck_route: value["truckRoute"],
    speeds: SpeedsToJSON(value["speeds"]),
    bike_network: value["bikeNetwork"],
    round_about: value["roundAbout"],
    traffic_signal: value["trafficSignal"],
    access_restriction: value["accessRestriction"],
    destination_only: value["destinationOnly"],
    geo_attributes: GeoAttributesToJSON(value["geoAttributes"]),
    start_restriction: RestrictionsToJSON(value["startRestriction"]),
    cycle_lane: value["cycleLane"],
    end_restriction: RestrictionsToJSON(value["endRestriction"]),
    seasonal: value["seasonal"],
    country_crossing: value["countryCrossing"],
    part_of_complex_restriction: value["partOfComplexRestriction"],
    has_sign: value["hasSign"],
    access: RestrictionsToJSON(value["access"]),
    bridge: value["bridge"],
    classification: HighwayClassificationToJSON(value["classification"]),
    toll: value["toll"],
    tunnel: value["tunnel"],
  };
}
