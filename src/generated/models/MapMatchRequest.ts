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
import type { CostingOptions } from "./CostingOptions";
import {
  CostingOptionsFromJSON,
  CostingOptionsFromJSONTyped,
  CostingOptionsToJSON,
} from "./CostingOptions";
import type { MapMatchCostingModel } from "./MapMatchCostingModel";
import {
  MapMatchCostingModelFromJSON,
  MapMatchCostingModelFromJSONTyped,
  MapMatchCostingModelToJSON,
} from "./MapMatchCostingModel";
import type { MapMatchTraceOptions } from "./MapMatchTraceOptions";
import {
  MapMatchTraceOptionsFromJSON,
  MapMatchTraceOptionsFromJSONTyped,
  MapMatchTraceOptionsToJSON,
} from "./MapMatchTraceOptions";
import type { ValhallaLanguages } from "./ValhallaLanguages";
import {
  ValhallaLanguagesFromJSON,
  ValhallaLanguagesFromJSONTyped,
  ValhallaLanguagesToJSON,
} from "./ValhallaLanguages";
import type { DistanceUnit } from "./DistanceUnit";
import {
  DistanceUnitFromJSON,
  DistanceUnitFromJSONTyped,
  DistanceUnitToJSON,
} from "./DistanceUnit";
import type { MapMatchWaypoint } from "./MapMatchWaypoint";
import {
  MapMatchWaypointFromJSON,
  MapMatchWaypointFromJSONTyped,
  MapMatchWaypointToJSON,
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
   * REQUIRED if `shape` is not present. An encoded polyline (https://developers.google.com/maps/documentation/utilities/polylinealgorithm). Note that the polyline must be encoded with 6 digits of precision rather than the usual 5.
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
   * @type {ValhallaLanguages}
   * @memberof MapMatchRequest
   */
  language?: ValhallaLanguages;
  /**
   * The level of directional narrative to include. Locations and times will always be returned, but narrative generation verbosity can be controlled with this parameter.
   * @type {string}
   * @memberof MapMatchRequest
   */
  directionsType?: MapMatchRequestDirectionsTypeEnum;
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
        : ValhallaLanguagesFromJSON(json["language"]),
    directionsType:
      json["directions_type"] == null ? undefined : json["directions_type"],
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
  };
}

export function MapMatchRequestToJSON(value?: MapMatchRequest | null): any {
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
    language: ValhallaLanguagesToJSON(value["language"]),
    directions_type: value["directionsType"],
    begin_time: value["beginTime"],
    durations: value["durations"],
    use_timestamps: value["useTimestamps"],
    trace_options: MapMatchTraceOptionsToJSON(value["traceOptions"]),
    linear_references: value["linearReferences"],
  };
}
