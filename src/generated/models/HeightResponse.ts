/* tslint:disable */
/* eslint-disable */
/**
 * Stadia Maps Geospatial APIs
 * The Stadia Maps Geospatial APIs provide you with the data you need to build awesome applications.
 *
 * The version of the OpenAPI document: 6.6.2
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
 * @interface HeightResponse
 */
export interface HeightResponse {
  /**
   * An identifier to disambiguate requests (echoed by the server).
   * @type {string}
   * @memberof HeightResponse
   */
  id?: string;
  /**
   *
   * @type {Array<Coordinate>}
   * @memberof HeightResponse
   */
  shape?: Array<Coordinate>;
  /**
   * The input polyline.
   * @type {string}
   * @memberof HeightResponse
   */
  encodedPolyline?: string;
  /**
   * The list of heights for each point, in meters. Present only if `range` is `false`. Null values indicate missing data.
   * @type {Array<number>}
   * @memberof HeightResponse
   */
  height?: Array<number>;
  /**
   * The list of ranges and heights for each point in the shape, where each entry is an array of length 2. Present only if `range` is `true`. In each pair, the first element represents the range or distance along the input locations. It is the cumulative distance along the previous coordinates in the shape up to the current coordinate. This value for the first coordinate in the shape will always be 0. The second element in the pair represents the height or elevation at the associated coordinate. The height is null if no height data exists for a given location. Both values are expressed in meters.
   * @type {Array<Array<number>>}
   * @memberof HeightResponse
   */
  rangeHeight?: Array<Array<number>>;
}

/**
 * Check if a given object implements the HeightResponse interface.
 */
export function instanceOfHeightResponse(
  value: object,
): value is HeightResponse {
  return true;
}

export function HeightResponseFromJSON(json: any): HeightResponse {
  return HeightResponseFromJSONTyped(json, false);
}

export function HeightResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): HeightResponse {
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
    height: json["height"] == null ? undefined : json["height"],
    rangeHeight:
      json["range_height"] == null ? undefined : json["range_height"],
  };
}

export function HeightResponseToJSON(value?: HeightResponse | null): any {
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
    height: value["height"],
    range_height: value["rangeHeight"],
  };
}
