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
import type { RouteSummary } from "./RouteSummary";
import {
  RouteSummaryFromJSON,
  RouteSummaryFromJSONTyped,
  RouteSummaryToJSON,
} from "./RouteSummary";
import type { RouteManeuver } from "./RouteManeuver";
import {
  RouteManeuverFromJSON,
  RouteManeuverFromJSONTyped,
  RouteManeuverToJSON,
} from "./RouteManeuver";

/**
 *
 * @export
 * @interface RouteLeg
 */
export interface RouteLeg {
  /**
   *
   * @type {Array<RouteManeuver>}
   * @memberof RouteLeg
   */
  maneuvers: Array<RouteManeuver>;
  /**
   * An encoded polyline (https://developers.google.com/maps/documentation/utilities/polylinealgorithm) with 6 digits of decimal precision.
   * @type {string}
   * @memberof RouteLeg
   */
  shape: string;
  /**
   *
   * @type {RouteSummary}
   * @memberof RouteLeg
   */
  summary: RouteSummary;
  /**
   * The sampling distance between elevation values along the route. This echoes the request parameter having the same name (converted to `units` if necessary).
   * @type {number}
   * @memberof RouteLeg
   */
  elevationInterval?: number;
  /**
   * An array of elevation values sampled every `elevation_interval`. Units are either metric or imperial depending on the value of `units`.
   * @type {Array<number>}
   * @memberof RouteLeg
   */
  elevation?: Array<number>;
}

/**
 * Check if a given object implements the RouteLeg interface.
 */
export function instanceOfRouteLeg(value: object): value is RouteLeg {
  if (!("maneuvers" in value) || value["maneuvers"] === undefined) return false;
  if (!("shape" in value) || value["shape"] === undefined) return false;
  if (!("summary" in value) || value["summary"] === undefined) return false;
  return true;
}

export function RouteLegFromJSON(json: any): RouteLeg {
  return RouteLegFromJSONTyped(json, false);
}

export function RouteLegFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): RouteLeg {
  if (json == null) {
    return json;
  }
  return {
    maneuvers: (json["maneuvers"] as Array<any>).map(RouteManeuverFromJSON),
    shape: json["shape"],
    summary: RouteSummaryFromJSON(json["summary"]),
    elevationInterval:
      json["elevation_interval"] == null
        ? undefined
        : json["elevation_interval"],
    elevation: json["elevation"] == null ? undefined : json["elevation"],
  };
}

export function RouteLegToJSON(value?: RouteLeg | null): any {
  if (value == null) {
    return value;
  }
  return {
    maneuvers: (value["maneuvers"] as Array<any>).map(RouteManeuverToJSON),
    shape: value["shape"],
    summary: RouteSummaryToJSON(value["summary"]),
    elevation_interval: value["elevationInterval"],
    elevation: value["elevation"],
  };
}
