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
import type { Contour } from "./Contour";
import {
  ContourFromJSON,
  ContourFromJSONTyped,
  ContourToJSON,
} from "./Contour";
import type { Coordinate } from "./Coordinate";
import {
  CoordinateFromJSON,
  CoordinateFromJSONTyped,
  CoordinateToJSON,
} from "./Coordinate";
import type { IsochroneCostingModel } from "./IsochroneCostingModel";
import {
  IsochroneCostingModelFromJSON,
  IsochroneCostingModelFromJSONTyped,
  IsochroneCostingModelToJSON,
} from "./IsochroneCostingModel";

/**
 *
 * @export
 * @interface IsochroneRequest
 */
export interface IsochroneRequest {
  /**
   * An identifier to disambiguate requests (echoed by the server).
   * @type {string}
   * @memberof IsochroneRequest
   */
  id?: string;
  /**
   *
   * @type {Array<Coordinate>}
   * @memberof IsochroneRequest
   */
  locations: Array<Coordinate>;
  /**
   *
   * @type {IsochroneCostingModel}
   * @memberof IsochroneRequest
   */
  costing: IsochroneCostingModel;
  /**
   *
   * @type {CostingOptions}
   * @memberof IsochroneRequest
   */
  costingOptions?: CostingOptions;
  /**
   *
   * @type {Array<Contour>}
   * @memberof IsochroneRequest
   */
  contours: Array<Contour>;
  /**
   * If true, the generated GeoJSON will use polygons. The default is to use LineStrings. Polygon output makes it easier to render overlapping areas in some visualization tools (such as MapLibre renderers).
   * @type {boolean}
   * @memberof IsochroneRequest
   */
  polygons?: boolean;
  /**
   * A value in the range [0, 1] which will be used to smooth out or remove smaller contours. A value of 1 will only return the largest contour for a given time value. A value of 0.5 drops any contours that are less than half the area of the largest contour in the set of contours for that same time value.
   * @type {number}
   * @memberof IsochroneRequest
   */
  denoise?: number;
  /**
   * The value in meters to be used as a tolerance for Douglas-Peucker generalization.
   * @type {number}
   * @memberof IsochroneRequest
   */
  generalize?: number;
  /**
   * If true, then the output GeoJSON will include the input locations as two MultiPoint features: one for the exact input coordinates, and a second for the route network node location that the point was snapped to.
   * @type {boolean}
   * @memberof IsochroneRequest
   */
  showLocations?: boolean;
}

/**
 * Check if a given object implements the IsochroneRequest interface.
 */
export function instanceOfIsochroneRequest(
  value: object,
): value is IsochroneRequest {
  if (!("locations" in value) || value["locations"] === undefined) return false;
  if (!("costing" in value) || value["costing"] === undefined) return false;
  if (!("contours" in value) || value["contours"] === undefined) return false;
  return true;
}

export function IsochroneRequestFromJSON(json: any): IsochroneRequest {
  return IsochroneRequestFromJSONTyped(json, false);
}

export function IsochroneRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IsochroneRequest {
  if (json == null) {
    return json;
  }
  return {
    id: json["id"] == null ? undefined : json["id"],
    locations: (json["locations"] as Array<any>).map(CoordinateFromJSON),
    costing: IsochroneCostingModelFromJSON(json["costing"]),
    costingOptions:
      json["costing_options"] == null
        ? undefined
        : CostingOptionsFromJSON(json["costing_options"]),
    contours: (json["contours"] as Array<any>).map(ContourFromJSON),
    polygons: json["polygons"] == null ? undefined : json["polygons"],
    denoise: json["denoise"] == null ? undefined : json["denoise"],
    generalize: json["generalize"] == null ? undefined : json["generalize"],
    showLocations:
      json["show_locations"] == null ? undefined : json["show_locations"],
  };
}

export function IsochroneRequestToJSON(value?: IsochroneRequest | null): any {
  if (value == null) {
    return value;
  }
  return {
    id: value["id"],
    locations: (value["locations"] as Array<any>).map(CoordinateToJSON),
    costing: IsochroneCostingModelToJSON(value["costing"]),
    costing_options: CostingOptionsToJSON(value["costingOptions"]),
    contours: (value["contours"] as Array<any>).map(ContourToJSON),
    polygons: value["polygons"],
    denoise: value["denoise"],
    generalize: value["generalize"],
    show_locations: value["showLocations"],
  };
}
