/* tslint:disable */
/* eslint-disable */
/**
 * Stadia Maps Geospatial APIs
 * The Stadia Maps Geospatial APIs provide you with the data you need to build awesome applications.
 *
 * The version of the OpenAPI document: 8.0.0
 * Contact: support@stadiamaps.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from "../runtime";
/**
 *
 * @export
 * @interface OsrmViaWaypoint
 */
export interface OsrmViaWaypoint {
  /**
   * The distance from the start of the leg, in meters.
   * @type {number}
   * @memberof OsrmViaWaypoint
   */
  distanceFromStart: number;
  /**
   * The index of the waypoint's location in the route geometry.
   * @type {number}
   * @memberof OsrmViaWaypoint
   */
  geometryIndex: number;
  /**
   * The index of the associated waypoint.
   * @type {number}
   * @memberof OsrmViaWaypoint
   */
  waypointIndex: number;
}

/**
 * Check if a given object implements the OsrmViaWaypoint interface.
 */
export function instanceOfOsrmViaWaypoint(
  value: object,
): value is OsrmViaWaypoint {
  if (
    !("distanceFromStart" in value) ||
    value["distanceFromStart"] === undefined
  )
    return false;
  if (!("geometryIndex" in value) || value["geometryIndex"] === undefined)
    return false;
  if (!("waypointIndex" in value) || value["waypointIndex"] === undefined)
    return false;
  return true;
}

export function OsrmViaWaypointFromJSON(json: any): OsrmViaWaypoint {
  return OsrmViaWaypointFromJSONTyped(json, false);
}

export function OsrmViaWaypointFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): OsrmViaWaypoint {
  if (json == null) {
    return json;
  }
  return {
    distanceFromStart: json["distance_from_start"],
    geometryIndex: json["geometry_index"],
    waypointIndex: json["waypoint_index"],
  };
}

export function OsrmViaWaypointToJSON(json: any): OsrmViaWaypoint {
  return OsrmViaWaypointToJSONTyped(json, false);
}

export function OsrmViaWaypointToJSONTyped(
  value?: OsrmViaWaypoint | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    distance_from_start: value["distanceFromStart"],
    geometry_index: value["geometryIndex"],
    waypoint_index: value["waypointIndex"],
  };
}
