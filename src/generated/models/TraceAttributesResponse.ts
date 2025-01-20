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
import type { TraceEdge } from "./TraceEdge";
import {
  TraceEdgeFromJSON,
  TraceEdgeFromJSONTyped,
  TraceEdgeToJSON,
  TraceEdgeToJSONTyped,
} from "./TraceEdge";
import type { RoutingLongUnits } from "./RoutingLongUnits";
import {
  RoutingLongUnitsFromJSON,
  RoutingLongUnitsFromJSONTyped,
  RoutingLongUnitsToJSON,
  RoutingLongUnitsToJSONTyped,
} from "./RoutingLongUnits";
import type { MatchedPoint } from "./MatchedPoint";
import {
  MatchedPointFromJSON,
  MatchedPointFromJSONTyped,
  MatchedPointToJSON,
  MatchedPointToJSONTyped,
} from "./MatchedPoint";
import type { AdminRegion } from "./AdminRegion";
import {
  AdminRegionFromJSON,
  AdminRegionFromJSONTyped,
  AdminRegionToJSON,
  AdminRegionToJSONTyped,
} from "./AdminRegion";
import type { TraceAttributesBaseResponse } from "./TraceAttributesBaseResponse";
import {
  TraceAttributesBaseResponseFromJSON,
  TraceAttributesBaseResponseFromJSONTyped,
  TraceAttributesBaseResponseToJSON,
  TraceAttributesBaseResponseToJSONTyped,
} from "./TraceAttributesBaseResponse";

/**
 *
 * @export
 * @interface TraceAttributesResponse
 */
export interface TraceAttributesResponse {
  /**
   * The list of edges matched along the path.
   * @type {Array<TraceEdge>}
   * @memberof TraceAttributesResponse
   */
  edges?: Array<TraceEdge> | null;
  /**
   * The set of administrative regions matched along the path. Rather than repeating this information for every end node, the admins in this list are referenced by index.
   * @type {Array<AdminRegion>}
   * @memberof TraceAttributesResponse
   */
  admins?: Array<AdminRegion>;
  /**
   * List of match results when using the map_snap shape match algorithm. There is a one-to-one correspondence with the input set of latitude, longitude coordinates and this list of match results.
   * @type {Array<MatchedPoint>}
   * @memberof TraceAttributesResponse
   */
  matchedPoints?: Array<MatchedPoint>;
  /**
   *
   * @type {number}
   * @memberof TraceAttributesResponse
   */
  osmChangeset?: number;
  /**
   * The encoded polyline (https://developers.google.com/maps/documentation/utilities/polylinealgorithm) of the matched path.
   * @type {string}
   * @memberof TraceAttributesResponse
   */
  shape?: string;
  /**
   *
   * @type {number}
   * @memberof TraceAttributesResponse
   */
  confidenceScore?: number;
  /**
   * An identifier to disambiguate requests (echoed by the server).
   * @type {string}
   * @memberof TraceAttributesResponse
   */
  id?: string;
  /**
   *
   * @type {RoutingLongUnits}
   * @memberof TraceAttributesResponse
   */
  units?: RoutingLongUnits;
  /**
   * Alternate paths, if any, that were not classified as the best match.
   * @type {Array<TraceAttributesBaseResponse>}
   * @memberof TraceAttributesResponse
   */
  alternatePaths?: Array<TraceAttributesBaseResponse>;
}

/**
 * Check if a given object implements the TraceAttributesResponse interface.
 */
export function instanceOfTraceAttributesResponse(
  value: object,
): value is TraceAttributesResponse {
  return true;
}

export function TraceAttributesResponseFromJSON(
  json: any,
): TraceAttributesResponse {
  return TraceAttributesResponseFromJSONTyped(json, false);
}

export function TraceAttributesResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): TraceAttributesResponse {
  if (json == null) {
    return json;
  }
  return {
    edges:
      json["edges"] == null
        ? undefined
        : (json["edges"] as Array<any>).map(TraceEdgeFromJSON),
    admins:
      json["admins"] == null
        ? undefined
        : (json["admins"] as Array<any>).map(AdminRegionFromJSON),
    matchedPoints:
      json["matched_points"] == null
        ? undefined
        : (json["matched_points"] as Array<any>).map(MatchedPointFromJSON),
    osmChangeset:
      json["osm_changeset"] == null ? undefined : json["osm_changeset"],
    shape: json["shape"] == null ? undefined : json["shape"],
    confidenceScore:
      json["confidence_score"] == null ? undefined : json["confidence_score"],
    id: json["id"] == null ? undefined : json["id"],
    units:
      json["units"] == null
        ? undefined
        : RoutingLongUnitsFromJSON(json["units"]),
    alternatePaths:
      json["alternate_paths"] == null
        ? undefined
        : (json["alternate_paths"] as Array<any>).map(
            TraceAttributesBaseResponseFromJSON,
          ),
  };
}

export function TraceAttributesResponseToJSON(
  json: any,
): TraceAttributesResponse {
  return TraceAttributesResponseToJSONTyped(json, false);
}

export function TraceAttributesResponseToJSONTyped(
  value?: TraceAttributesResponse | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    edges:
      value["edges"] == null
        ? undefined
        : (value["edges"] as Array<any>).map(TraceEdgeToJSON),
    admins:
      value["admins"] == null
        ? undefined
        : (value["admins"] as Array<any>).map(AdminRegionToJSON),
    matched_points:
      value["matchedPoints"] == null
        ? undefined
        : (value["matchedPoints"] as Array<any>).map(MatchedPointToJSON),
    osm_changeset: value["osmChangeset"],
    shape: value["shape"],
    confidence_score: value["confidenceScore"],
    id: value["id"],
    units: RoutingLongUnitsToJSON(value["units"]),
    alternate_paths:
      value["alternatePaths"] == null
        ? undefined
        : (value["alternatePaths"] as Array<any>).map(
            TraceAttributesBaseResponseToJSON,
          ),
  };
}
