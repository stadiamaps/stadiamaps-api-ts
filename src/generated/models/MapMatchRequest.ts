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
import type { MapMatchTraceOptions } from "./MapMatchTraceOptions";
import {
  MapMatchTraceOptionsFromJSON,
  MapMatchTraceOptionsFromJSONTyped,
  MapMatchTraceOptionsToJSON,
  MapMatchTraceOptionsToJSONTyped,
} from "./MapMatchTraceOptions";
import type { AnnotationFilters } from "./AnnotationFilters";
import {
  AnnotationFiltersFromJSON,
  AnnotationFiltersFromJSONTyped,
  AnnotationFiltersToJSON,
  AnnotationFiltersToJSONTyped,
} from "./AnnotationFilters";
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
 * @interface MapMatchRequest
 */
export interface MapMatchRequest {
  /**
   * An identifier to disambiguate requests (echoed by the server).
   * @type {string}
   * @memberof MapMatchRequest
   */
  id?: string;
  /**
   * REQUIRED if `encoded_polyline` is not present. Note that `break` type locations are only supported when `shape_match` is set to `map_match`.
   * @type {Array<MapMatchWaypoint>}
   * @memberof MapMatchRequest
   */
  shape?: Array<MapMatchWaypoint>;
  /**
   * REQUIRED if `shape` is not present. An encoded polyline (https://developers.google.com/maps/documentation/utilities/polylinealgorithm). Note that the polyline must be encoded with 6 digits of precision rather than the default 5!
   * @type {string}
   * @memberof MapMatchRequest
   */
  encodedPolyline?: string;
  /**
   *
   * @type {MapMatchCostingModel}
   * @memberof MapMatchRequest
   */
  costing: MapMatchCostingModel;
  /**
   *
   * @type {CostingOptions}
   * @memberof MapMatchRequest
   */
  costingOptions?: CostingOptions;
  /**
   * Three snapping modes provide some control over how the map matching occurs. `edge_walk` is fast, but requires extremely precise data that matches the route graph almost perfectly. `map_snap` can handle significantly noisier data, but is very expensive. `walk_or_snap`, the default, tries to use edge walking first and falls back to map matching if edge walking fails.
   * In general, you should not need to change this parameter unless you want to trace a multi-leg route with multiple `break` locations in the `shape`.
   * @type {string}
   * @memberof MapMatchRequest
   */
  shapeMatch?: MapMatchRequestShapeMatchEnum;
  /**
   *
   * @type {DistanceUnit}
   * @memberof MapMatchRequest
   */
  units?: DistanceUnit;
  /**
   *
   * @type {RoutingLanguages}
   * @memberof MapMatchRequest
   */
  language?: RoutingLanguages;
  /**
   * The level of directional narrative to include. Locations and times will always be returned, but narrative generation verbosity can be controlled with this parameter.
   * @type {string}
   * @memberof MapMatchRequest
   */
  directionsType?: MapMatchRequestDirectionsTypeEnum;
  /**
   * The output response format. The default JSON format is extremely compact and ideal for web or data-constrained use cases where you want to fetch additional attributes on demand in small chunks. The OSRM format is much richer and is configurable with significantly more info for turn-by-turn navigation use cases.
   * @type {string}
   * @memberof MapMatchRequest
   */
  format?: MapMatchRequestFormatEnum;
  /**
   * Optionally includes helpful banners with timing information for turn-by-turn navigation. This is only available in the OSRM format.
   * @type {boolean}
   * @memberof MapMatchRequest
   */
  bannerInstructions?: boolean;
  /**
   * Optionally includes voice instructions with timing information for turn-by-turn navigation. This is only available in the OSRM format.
   * @type {boolean}
   * @memberof MapMatchRequest
   */
  voiceInstructions?: boolean;
  /**
   *
   * @type {AnnotationFilters}
   * @memberof MapMatchRequest
   */
  filters?: AnnotationFilters;
  /**
   * The timestamp at the start of the trace. Combined with `durations`, this provides a way to include timing information for an `encoded_polyline` trace.
   * @type {number}
   * @memberof MapMatchRequest
   */
  beginTime?: number;
  /**
   * A list of durations (in seconds) between each successive pair of points in a polyline.
   * @type {number}
   * @memberof MapMatchRequest
   */
  durations?: number;
  /**
   * If true, the input timestamps or durations should be used when computing elapsed time for each edge along the matched path rather than the routing algorithm estimates.
   * @type {boolean}
   * @memberof MapMatchRequest
   */
  useTimestamps?: boolean;
  /**
   *
   * @type {MapMatchTraceOptions}
   * @memberof MapMatchRequest
   */
  traceOptions?: MapMatchTraceOptions;
  /**
   * If true, the response will include a `linear_references` value that contains an array of base64-encoded [OpenLR location references](https://www.openlr-association.com/fileadmin/user_upload/openlr-whitepaper_v1.5.pdf), one for each graph edge of the road network matched by the trace.
   * @type {boolean}
   * @memberof MapMatchRequest
   */
  linearReferences?: boolean;
  /**
   * If greater than zero, attempts to include elevation along the route at regular intervals. The "native" internal resolution is 30m, so we recommend you use this when possible. This number is interpreted as either meters or feet depending on the unit parameter.
   * Elevation for route sections containing a bridge or tunnel is interpolated linearly. This doesn't always match the true elevation of the bridge/tunnel, but it prevents sharp artifacts from the surrounding terrain. This functionality is unique to the routing endpoints and is not available via the elevation API.
   * NOTE: This has no effect on the OSRM response format.
   * @type {number}
   * @memberof MapMatchRequest
   */
  elevationInterval?: number;
}

/**
 * @export
 */
export const MapMatchRequestShapeMatchEnum = {
  EdgeWalk: "edge_walk",
  MapSnap: "map_snap",
  WalkOrSnap: "walk_or_snap",
} as const;
export type MapMatchRequestShapeMatchEnum =
  (typeof MapMatchRequestShapeMatchEnum)[keyof typeof MapMatchRequestShapeMatchEnum];

/**
 * @export
 */
export const MapMatchRequestDirectionsTypeEnum = {
  None: "none",
  Maneuvers: "maneuvers",
  Instructions: "instructions",
} as const;
export type MapMatchRequestDirectionsTypeEnum =
  (typeof MapMatchRequestDirectionsTypeEnum)[keyof typeof MapMatchRequestDirectionsTypeEnum];

/**
 * @export
 */
export const MapMatchRequestFormatEnum = {
  Json: "json",
  Osrm: "osrm",
} as const;
export type MapMatchRequestFormatEnum =
  (typeof MapMatchRequestFormatEnum)[keyof typeof MapMatchRequestFormatEnum];

/**
 * Check if a given object implements the MapMatchRequest interface.
 */
export function instanceOfMapMatchRequest(
  value: object,
): value is MapMatchRequest {
  if (!("costing" in value) || value["costing"] === undefined) return false;
  return true;
}

export function MapMatchRequestFromJSON(json: any): MapMatchRequest {
  return MapMatchRequestFromJSONTyped(json, false);
}

export function MapMatchRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): MapMatchRequest {
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
    format: json["format"] == null ? undefined : json["format"],
    bannerInstructions:
      json["banner_instructions"] == null
        ? undefined
        : json["banner_instructions"],
    voiceInstructions:
      json["voice_instructions"] == null
        ? undefined
        : json["voice_instructions"],
    filters:
      json["filters"] == null
        ? undefined
        : AnnotationFiltersFromJSON(json["filters"]),
    beginTime: json["begin_time"] == null ? undefined : json["begin_time"],
    durations: json["durations"] == null ? undefined : json["durations"],
    useTimestamps:
      json["use_timestamps"] == null ? undefined : json["use_timestamps"],
    traceOptions:
      json["trace_options"] == null
        ? undefined
        : MapMatchTraceOptionsFromJSON(json["trace_options"]),
    linearReferences:
      json["linear_references"] == null ? undefined : json["linear_references"],
    elevationInterval:
      json["elevation_interval"] == null
        ? undefined
        : json["elevation_interval"],
  };
}

export function MapMatchRequestToJSON(json: any): MapMatchRequest {
  return MapMatchRequestToJSONTyped(json, false);
}

export function MapMatchRequestToJSONTyped(
  value?: MapMatchRequest | null,
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
    format: value["format"],
    banner_instructions: value["bannerInstructions"],
    voice_instructions: value["voiceInstructions"],
    filters: AnnotationFiltersToJSON(value["filters"]),
    begin_time: value["beginTime"],
    durations: value["durations"],
    use_timestamps: value["useTimestamps"],
    trace_options: MapMatchTraceOptionsToJSON(value["traceOptions"]),
    linear_references: value["linearReferences"],
    elevation_interval: value["elevationInterval"],
  };
}
