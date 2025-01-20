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
import type { OsrmGuidanceModifier } from "./OsrmGuidanceModifier";
import {
  OsrmGuidanceModifierFromJSON,
  OsrmGuidanceModifierFromJSONTyped,
  OsrmGuidanceModifierToJSON,
  OsrmGuidanceModifierToJSONTyped,
} from "./OsrmGuidanceModifier";

/**
 *
 * @export
 * @interface OsrmStepManeuver
 */
export interface OsrmStepManeuver {
  /**
   * A (longitude, latitude) coordinate pair.
   * @type {Array<number>}
   * @memberof OsrmStepManeuver
   */
  location: Array<number>;
  /**
   * A human-readable instruction for the maneuver.
   * @type {string}
   * @memberof OsrmStepManeuver
   */
  instruction?: string;
  /**
   * The clockwise angle from true north to the direction of travel immediately before the maneuver.
   * @type {number}
   * @memberof OsrmStepManeuver
   */
  bearingBefore: number;
  /**
   * The clockwise angle from true north to the direction of travel immediately after the maneuver.
   * @type {number}
   * @memberof OsrmStepManeuver
   */
  bearingAfter: number;
  /**
   *
   * @type {string}
   * @memberof OsrmStepManeuver
   */
  type: OsrmStepManeuverTypeEnum;
  /**
   *
   * @type {OsrmGuidanceModifier}
   * @memberof OsrmStepManeuver
   */
  modifier?: OsrmGuidanceModifier | null;
  /**
   * The exit number to take (for roundabouts, rotaries, and number of intersections).
   * @type {number}
   * @memberof OsrmStepManeuver
   */
  exit?: number;
}

/**
 * @export
 */
export const OsrmStepManeuverTypeEnum = {
  Turn: "turn",
  NewName: "new name",
  Depart: "depart",
  Arrive: "arrive",
  Merge: "merge",
  Ramp: "ramp",
  OnRamp: "on ramp",
  OffRamp: "off ramp",
  Fork: "fork",
  EndOfRoad: "end of road",
  UseLane: "use lane",
  Continue: "continue",
  Roundabout: "roundabout",
  Rotary: "rotary",
  RoundaboutTurn: "roundabout turn",
  Notification: "notification",
} as const;
export type OsrmStepManeuverTypeEnum =
  (typeof OsrmStepManeuverTypeEnum)[keyof typeof OsrmStepManeuverTypeEnum];

/**
 * Check if a given object implements the OsrmStepManeuver interface.
 */
export function instanceOfOsrmStepManeuver(
  value: object,
): value is OsrmStepManeuver {
  if (!("location" in value) || value["location"] === undefined) return false;
  if (!("bearingBefore" in value) || value["bearingBefore"] === undefined)
    return false;
  if (!("bearingAfter" in value) || value["bearingAfter"] === undefined)
    return false;
  if (!("type" in value) || value["type"] === undefined) return false;
  return true;
}

export function OsrmStepManeuverFromJSON(json: any): OsrmStepManeuver {
  return OsrmStepManeuverFromJSONTyped(json, false);
}

export function OsrmStepManeuverFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): OsrmStepManeuver {
  if (json == null) {
    return json;
  }
  return {
    location: json["location"],
    instruction: json["instruction"] == null ? undefined : json["instruction"],
    bearingBefore: json["bearing_before"],
    bearingAfter: json["bearing_after"],
    type: json["type"],
    modifier:
      json["modifier"] == null
        ? undefined
        : OsrmGuidanceModifierFromJSON(json["modifier"]),
    exit: json["exit"] == null ? undefined : json["exit"],
  };
}

export function OsrmStepManeuverToJSON(json: any): OsrmStepManeuver {
  return OsrmStepManeuverToJSONTyped(json, false);
}

export function OsrmStepManeuverToJSONTyped(
  value?: OsrmStepManeuver | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    location: value["location"],
    instruction: value["instruction"],
    bearing_before: value["bearingBefore"],
    bearing_after: value["bearingAfter"],
    type: value["type"],
    modifier: OsrmGuidanceModifierToJSON(value["modifier"]),
    exit: value["exit"],
  };
}
