/* tslint:disable */
/* eslint-disable */
/**
 * Stadia Maps Geospatial APIs
 * The Stadia Maps Geospatial APIs provide you with the data you need to build awesome applications.
 *
 * The version of the OpenAPI document: 7.0.0
 * Contact: support@stadiamaps.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from "../runtime";
import type { RoadClass } from "./RoadClass";
import {
  RoadClassFromJSON,
  RoadClassFromJSONTyped,
  RoadClassToJSON,
} from "./RoadClass";

/**
 *
 * @export
 * @interface RoutingWaypointAllOfSearchFilter
 */
export interface RoutingWaypointAllOfSearchFilter {
  /**
   * Excludes roads marked as tunnels
   * @type {boolean}
   * @memberof RoutingWaypointAllOfSearchFilter
   */
  excludeTunnel?: boolean;
  /**
   * Excludes roads marked as bridges
   * @type {boolean}
   * @memberof RoutingWaypointAllOfSearchFilter
   */
  excludeBridge?: boolean;
  /**
   * Excludes roads marked as ramps
   * @type {boolean}
   * @memberof RoutingWaypointAllOfSearchFilter
   */
  excludeRamp?: boolean;
  /**
   * Excludes roads marked as closed
   * @type {boolean}
   * @memberof RoutingWaypointAllOfSearchFilter
   */
  excludeClosures?: boolean;
  /**
   * The lowest road class allowed
   * @type {RoadClass}
   * @memberof RoutingWaypointAllOfSearchFilter
   */
  minRoadClass?: RoadClass;
  /**
   * The highest road class allowed
   * @type {RoadClass}
   * @memberof RoutingWaypointAllOfSearchFilter
   */
  maxRoadClass?: RoadClass;
}

/**
 * Check if a given object implements the RoutingWaypointAllOfSearchFilter interface.
 */
export function instanceOfRoutingWaypointAllOfSearchFilter(
  value: object,
): value is RoutingWaypointAllOfSearchFilter {
  return true;
}

export function RoutingWaypointAllOfSearchFilterFromJSON(
  json: any,
): RoutingWaypointAllOfSearchFilter {
  return RoutingWaypointAllOfSearchFilterFromJSONTyped(json, false);
}

export function RoutingWaypointAllOfSearchFilterFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): RoutingWaypointAllOfSearchFilter {
  if (json == null) {
    return json;
  }
  return {
    excludeTunnel:
      json["exclude_tunnel"] == null ? undefined : json["exclude_tunnel"],
    excludeBridge:
      json["exclude_bridge"] == null ? undefined : json["exclude_bridge"],
    excludeRamp:
      json["exclude_ramp"] == null ? undefined : json["exclude_ramp"],
    excludeClosures:
      json["exclude_closures"] == null ? undefined : json["exclude_closures"],
    minRoadClass:
      json["min_road_class"] == null
        ? undefined
        : RoadClassFromJSON(json["min_road_class"]),
    maxRoadClass:
      json["max_road_class"] == null
        ? undefined
        : RoadClassFromJSON(json["max_road_class"]),
  };
}

export function RoutingWaypointAllOfSearchFilterToJSON(
  value?: RoutingWaypointAllOfSearchFilter | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    exclude_tunnel: value["excludeTunnel"],
    exclude_bridge: value["excludeBridge"],
    exclude_ramp: value["excludeRamp"],
    exclude_closures: value["excludeClosures"],
    min_road_class: RoadClassToJSON(value["minRoadClass"]),
    max_road_class: RoadClassToJSON(value["maxRoadClass"]),
  };
}
