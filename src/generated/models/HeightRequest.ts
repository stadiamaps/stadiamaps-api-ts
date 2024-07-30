/* tslint:disable */
/* eslint-disable */
/**
 * Stadia Maps Geospatial APIs
 * The Stadia Maps Geospatial APIs provide you with the data you need to build awesome applications.
 *
 * The version of the OpenAPI document: 6.6.0
 * Contact: support@stadiamaps.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from "../runtime";
import type { Coordinate } from "./Coordinate";
import {
  CoordinateFromJSON,
  CoordinateFromJSONTyped,
  CoordinateToJSON,
} from "./Coordinate";

/**
 *
 * @export
 * @interface HeightRequest
 */
export interface HeightRequest {
  /**
   * An identifier to disambiguate requests (echoed by the server).
   * @type {string}
   * @memberof HeightRequest
   */
  id?: string;
  /**
   * REQUIRED if `encoded_polyline` is not present.
   * @type {Array<Coordinate>}
   * @memberof HeightRequest
   */
  shape?: Array<Coordinate>;
  /**
   * REQUIRED if `shape` is not present. An encoded polyline (https://developers.google.com/maps/documentation/utilities/polylinealgorithm).
   * @type {string}
   * @memberof HeightRequest
   */
  encodedPolyline?: string;
  /**
   * Specifies whether the polyline is encoded with 6 digit precision (polyline6) or 5 digit precision (polyline5).
   * @type {string}
   * @memberof HeightRequest
   */
  shapeFormat?: HeightRequestShapeFormatEnum;
  /**
   * Controls whether or not the returned array is one-dimensional (height only) or two-dimensional (with a range and height). The range dimension can be used to generate a graph or steepness gradient along a route.
   * @type {boolean}
   * @memberof HeightRequest
   */
  range?: boolean;
  /**
   * The decimal precision (number of digits after the point) of the output. When 0, integer values are returned. Valid values are 0, 1, and 2.
   * @type {number}
   * @memberof HeightRequest
   */
  heightPrecision?: number;
  /**
   * The distance at which the input polyline should be sampled to provide uniform distances between points. If not set, the input shape will be used as-is.
   * @type {number}
   * @memberof HeightRequest
   */
  resampleDistance?: number;
}

/**
 * @export
 */
export const HeightRequestShapeFormatEnum = {
  Polyline6: "polyline6",
  Polyline5: "polyline5",
} as const;
export type HeightRequestShapeFormatEnum =
  (typeof HeightRequestShapeFormatEnum)[keyof typeof HeightRequestShapeFormatEnum];

/**
 * Check if a given object implements the HeightRequest interface.
 */
export function instanceOfHeightRequest(value: object): value is HeightRequest {
  return true;
}

export function HeightRequestFromJSON(json: any): HeightRequest {
  return HeightRequestFromJSONTyped(json, false);
}

export function HeightRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): HeightRequest {
  if (json == null) {
    return json;
  }
  return {
    id: json["id"] == null ? undefined : json["id"],
    shape:
      json["shape"] == null
        ? undefined
        : (json["shape"] as Array<any>).map(CoordinateFromJSON),
    encodedPolyline:
      json["encoded_polyline"] == null ? undefined : json["encoded_polyline"],
    shapeFormat:
      json["shape_format"] == null ? undefined : json["shape_format"],
    range: json["range"] == null ? undefined : json["range"],
    heightPrecision:
      json["height_precision"] == null ? undefined : json["height_precision"],
    resampleDistance:
      json["resample_distance"] == null ? undefined : json["resample_distance"],
  };
}

export function HeightRequestToJSON(value?: HeightRequest | null): any {
  if (value == null) {
    return value;
  }
  return {
    id: value["id"],
    shape:
      value["shape"] == null
        ? undefined
        : (value["shape"] as Array<any>).map(CoordinateToJSON),
    encoded_polyline: value["encodedPolyline"],
    shape_format: value["shapeFormat"],
    range: value["range"],
    height_precision: value["heightPrecision"],
    resample_distance: value["resampleDistance"],
  };
}
