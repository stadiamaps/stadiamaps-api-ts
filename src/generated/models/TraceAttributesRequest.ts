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
import type { CostingOptions } from "./CostingOptions";
import {
  CostingOptionsFromJSON,
  CostingOptionsFromJSONTyped,
  CostingOptionsToJSON,
  CostingOptionsToJSONTyped,
} from "./CostingOptions";
import type { MapMatchCostingModel } from "./MapMatchCostingModel";
import {
  MapMatchCostingModelFromJSON,
  MapMatchCostingModelFromJSONTyped,
  MapMatchCostingModelToJSON,
  MapMatchCostingModelToJSONTyped,
} from "./MapMatchCostingModel";
import type { TraceAttributeFilterOptions } from "./TraceAttributeFilterOptions";
import {
  TraceAttributeFilterOptionsFromJSON,
  TraceAttributeFilterOptionsFromJSONTyped,
  TraceAttributeFilterOptionsToJSON,
  TraceAttributeFilterOptionsToJSONTyped,
} from "./TraceAttributeFilterOptions";
import type { DistanceUnit } from "./DistanceUnit";
import {
  DistanceUnitFromJSON,
  DistanceUnitFromJSONTyped,
  DistanceUnitToJSON,
  DistanceUnitToJSONTyped,
} from "./DistanceUnit";
import type { RoutingLanguages } from "./RoutingLanguages";
import {
  RoutingLanguagesFromJSON,
  RoutingLanguagesFromJSONTyped,
  RoutingLanguagesToJSON,
  RoutingLanguagesToJSONTyped,
} from "./RoutingLanguages";
import type { MapMatchWaypoint } from "./MapMatchWaypoint";
import {
  MapMatchWaypointFromJSON,
  MapMatchWaypointFromJSONTyped,
  MapMatchWaypointToJSON,
  MapMatchWaypointToJSONTyped,
} from "./MapMatchWaypoint";

/**
 *
 * @export
 * @interface TraceAttributesRequest
 */
export interface TraceAttributesRequest {
  /**
   * An identifier to disambiguate requests (echoed by the server).
   * @type {string}
   * @memberof TraceAttributesRequest
   */
  id?: string;
  /**
   * REQUIRED if `encoded_polyline` is not present. Note that `break` type locations are only supported when `shape_match` is set to `map_match`.
   * @type {Array<MapMatchWaypoint>}
   * @memberof TraceAttributesRequest
   */
  shape?: Array<MapMatchWaypoint>;
  /**
   * REQUIRED if `shape` is not present. An encoded polyline (https://developers.google.com/maps/documentation/utilities/polylinealgorithm). Note that the polyline must be encoded with 6 digits of precision rather than the usual 5.
   * @type {string}
   * @memberof TraceAttributesRequest
   */
  encodedPolyline?: string;
  /**
   *
   * @type {MapMatchCostingModel}
   * @memberof TraceAttributesRequest
   */
  costing: MapMatchCostingModel;
  /**
   *
   * @type {CostingOptions}
   * @memberof TraceAttributesRequest
   */
  costingOptions?: CostingOptions;
  /**
   * Three snapping modes provide some control over how the map matching occurs. `edge_walk` is fast, but requires extremely precise data that matches the route graph almost perfectly. `map_snap` can handle significantly noisier data, but is very expensive. `walk_or_snap`, the default, tries to use edge walking first and falls back to map matching if edge walking fails.
   * In general, you should not need to change this parameter unless you want to trace a multi-leg route with multiple `break` locations in the `shape`.
   * @type {string}
   * @memberof TraceAttributesRequest
   */
  shapeMatch?: TraceAttributesRequestShapeMatchEnum;
  /**
   *
   * @type {DistanceUnit}
   * @memberof TraceAttributesRequest
   */
  units?: DistanceUnit;
  /**
   *
   * @type {RoutingLanguages}
   * @memberof TraceAttributesRequest
   */
  language?: RoutingLanguages;
  /**
   * The level of directional narrative to include. Locations and times will always be returned, but narrative generation verbosity can be controlled with this parameter.
   * @type {string}
   * @memberof TraceAttributesRequest
   */
  directionsType?: TraceAttributesRequestDirectionsTypeEnum;
  /**
   * If present, provides either a whitelist or a blacklist of keys to include/exclude in the response. This key is optional, and if omitted from the request, all available info will be returned.
   * @type {TraceAttributeFilterOptions}
   * @memberof TraceAttributesRequest
   */
  filters?: TraceAttributeFilterOptions;
  /**
   * If greater than zero, attempts to include elevation along the route at regular intervals. The "native" internal resolution is 30m, so we recommend you use this when possible. This number is interpreted as either meters or feet depending on the unit parameter.
   * Elevation for route sections containing a bridge or tunnel is interpolated linearly. This doesn't always match the true elevation of the bridge/tunnel, but it prevents sharp artifacts from the surrounding terrain. This functionality is unique to the routing endpoints and is not available via the elevation API.
   * NOTE: This has no effect on the OSRM response format.
   * @type {number}
   * @memberof TraceAttributesRequest
   */
  elevationInterval?: number;
}

/**
 * @export
 */
export const TraceAttributesRequestShapeMatchEnum = {
  EdgeWalk: "edge_walk",
  MapSnap: "map_snap",
  WalkOrSnap: "walk_or_snap",
} as const;
export type TraceAttributesRequestShapeMatchEnum =
  (typeof TraceAttributesRequestShapeMatchEnum)[keyof typeof TraceAttributesRequestShapeMatchEnum];

/**
 * @export
 */
export const TraceAttributesRequestDirectionsTypeEnum = {
  None: "none",
  Maneuvers: "maneuvers",
  Instructions: "instructions",
} as const;
export type TraceAttributesRequestDirectionsTypeEnum =
  (typeof TraceAttributesRequestDirectionsTypeEnum)[keyof typeof TraceAttributesRequestDirectionsTypeEnum];

/**
 * Check if a given object implements the TraceAttributesRequest interface.
 */
export function instanceOfTraceAttributesRequest(
  value: object,
): value is TraceAttributesRequest {
  if (!("costing" in value) || value["costing"] === undefined) return false;
  return true;
}

export function TraceAttributesRequestFromJSON(
  json: any,
): TraceAttributesRequest {
  return TraceAttributesRequestFromJSONTyped(json, false);
}

export function TraceAttributesRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): TraceAttributesRequest {
  if (json == null) {
    return json;
  }
  return {
    id: json["id"] == null ? undefined : json["id"],
    shape:
      json["shape"] == null
        ? undefined
        : (json["shape"] as Array<any>).map(MapMatchWaypointFromJSON),
    encodedPolyline:
      json["encoded_polyline"] == null ? undefined : json["encoded_polyline"],
    costing: MapMatchCostingModelFromJSON(json["costing"]),
    costingOptions:
      json["costing_options"] == null
        ? undefined
        : CostingOptionsFromJSON(json["costing_options"]),
    shapeMatch: json["shape_match"] == null ? undefined : json["shape_match"],
    units:
      json["units"] == null ? undefined : DistanceUnitFromJSON(json["units"]),
    language:
      json["language"] == null
        ? undefined
        : RoutingLanguagesFromJSON(json["language"]),
    directionsType:
      json["directions_type"] == null ? undefined : json["directions_type"],
    filters:
      json["filters"] == null
        ? undefined
        : TraceAttributeFilterOptionsFromJSON(json["filters"]),
    elevationInterval:
      json["elevation_interval"] == null
        ? undefined
        : json["elevation_interval"],
  };
}

export function TraceAttributesRequestToJSON(
  json: any,
): TraceAttributesRequest {
  return TraceAttributesRequestToJSONTyped(json, false);
}

export function TraceAttributesRequestToJSONTyped(
  value?: TraceAttributesRequest | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    id: value["id"],
    shape:
      value["shape"] == null
        ? undefined
        : (value["shape"] as Array<any>).map(MapMatchWaypointToJSON),
    encoded_polyline: value["encodedPolyline"],
    costing: MapMatchCostingModelToJSON(value["costing"]),
    costing_options: CostingOptionsToJSON(value["costingOptions"]),
    shape_match: value["shapeMatch"],
    units: DistanceUnitToJSON(value["units"]),
    language: RoutingLanguagesToJSON(value["language"]),
    directions_type: value["directionsType"],
    filters: TraceAttributeFilterOptionsToJSON(value["filters"]),
    elevation_interval: value["elevationInterval"],
  };
}
