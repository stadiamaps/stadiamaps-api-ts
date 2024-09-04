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
import type { CostingOptions } from "./CostingOptions";
import {
  CostingOptionsFromJSON,
  CostingOptionsFromJSONTyped,
  CostingOptionsToJSON,
} from "./CostingOptions";
import type { Coordinate } from "./Coordinate";
import {
  CoordinateFromJSON,
  CoordinateFromJSONTyped,
  CoordinateToJSON,
} from "./Coordinate";
import type { MatrixCostingModel } from "./MatrixCostingModel";
import {
  MatrixCostingModelFromJSON,
  MatrixCostingModelFromJSONTyped,
  MatrixCostingModelToJSON,
} from "./MatrixCostingModel";
import type { AnnotationFilters } from "./AnnotationFilters";
import {
  AnnotationFiltersFromJSON,
  AnnotationFiltersFromJSONTyped,
  AnnotationFiltersToJSON,
} from "./AnnotationFilters";
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

/**
 *
 * @export
 * @interface OptimizedRouteRequest
 */
export interface OptimizedRouteRequest {
  /**
   *
   * @type {DistanceUnit}
   * @memberof OptimizedRouteRequest
   */
  units?: DistanceUnit;
  /**
   *
   * @type {ValhallaLanguages}
   * @memberof OptimizedRouteRequest
   */
  language?: ValhallaLanguages;
  /**
   * The level of directional narrative to include. Locations and times will always be returned, but narrative generation verbosity can be controlled with this parameter.
   * @type {string}
   * @memberof OptimizedRouteRequest
   */
  directionsType?: OptimizedRouteRequestDirectionsTypeEnum;
  /**
   * The output response format. The default JSON format is extremely compact and ideal for web or data-constrained use cases where you want to fetch additional attributes on demand in small chunks. The OSRM format is much richer and is configurable with significantly more info for turn-by-turn navigation use cases.
   * @type {string}
   * @memberof OptimizedRouteRequest
   */
  format?: OptimizedRouteRequestFormatEnum;
  /**
   * Optionally includes helpful banners with timing information for turn-by-turn navigation. This is only available in the OSRM format.
   * @type {boolean}
   * @memberof OptimizedRouteRequest
   */
  bannerInstructions?: boolean;
  /**
   * Optionally includes voice instructions with timing information for turn-by-turn navigation. This is only available in the OSRM format.
   * @type {boolean}
   * @memberof OptimizedRouteRequest
   */
  voiceInstructions?: boolean;
  /**
   *
   * @type {AnnotationFilters}
   * @memberof OptimizedRouteRequest
   */
  filters?: AnnotationFilters;
  /**
   * An identifier to disambiguate requests (echoed by the server).
   * @type {string}
   * @memberof OptimizedRouteRequest
   */
  id?: string;
  /**
   * The list of locations. The first and last are assumed to be the start and end points, and all intermediate points are locations that you want to visit along the way.
   * @type {Array<Coordinate>}
   * @memberof OptimizedRouteRequest
   */
  locations: Array<Coordinate>;
  /**
   *
   * @type {MatrixCostingModel}
   * @memberof OptimizedRouteRequest
   */
  costing: MatrixCostingModel;
  /**
   *
   * @type {CostingOptions}
   * @memberof OptimizedRouteRequest
   */
  costingOptions?: CostingOptions;
}

/**
 * @export
 */
export const OptimizedRouteRequestDirectionsTypeEnum = {
  None: "none",
  Maneuvers: "maneuvers",
  Instructions: "instructions",
} as const;
export type OptimizedRouteRequestDirectionsTypeEnum =
  (typeof OptimizedRouteRequestDirectionsTypeEnum)[keyof typeof OptimizedRouteRequestDirectionsTypeEnum];

/**
 * @export
 */
export const OptimizedRouteRequestFormatEnum = {
  Json: "json",
  Osrm: "osrm",
} as const;
export type OptimizedRouteRequestFormatEnum =
  (typeof OptimizedRouteRequestFormatEnum)[keyof typeof OptimizedRouteRequestFormatEnum];

/**
 * Check if a given object implements the OptimizedRouteRequest interface.
 */
export function instanceOfOptimizedRouteRequest(
  value: object,
): value is OptimizedRouteRequest {
  if (!("locations" in value) || value["locations"] === undefined) return false;
  if (!("costing" in value) || value["costing"] === undefined) return false;
  return true;
}

export function OptimizedRouteRequestFromJSON(
  json: any,
): OptimizedRouteRequest {
  return OptimizedRouteRequestFromJSONTyped(json, false);
}

export function OptimizedRouteRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): OptimizedRouteRequest {
  if (json == null) {
    return json;
  }
  return {
    units:
      json["units"] == null ? undefined : DistanceUnitFromJSON(json["units"]),
    language:
      json["language"] == null
        ? undefined
        : ValhallaLanguagesFromJSON(json["language"]),
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
    id: json["id"] == null ? undefined : json["id"],
    locations: (json["locations"] as Array<any>).map(CoordinateFromJSON),
    costing: MatrixCostingModelFromJSON(json["costing"]),
    costingOptions:
      json["costing_options"] == null
        ? undefined
        : CostingOptionsFromJSON(json["costing_options"]),
  };
}

export function OptimizedRouteRequestToJSON(
  value?: OptimizedRouteRequest | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    units: DistanceUnitToJSON(value["units"]),
    language: ValhallaLanguagesToJSON(value["language"]),
    directions_type: value["directionsType"],
    format: value["format"],
    banner_instructions: value["bannerInstructions"],
    voice_instructions: value["voiceInstructions"],
    filters: AnnotationFiltersToJSON(value["filters"]),
    id: value["id"],
    locations: (value["locations"] as Array<any>).map(CoordinateToJSON),
    costing: MatrixCostingModelToJSON(value["costing"]),
    costing_options: CostingOptionsToJSON(value["costingOptions"]),
  };
}
