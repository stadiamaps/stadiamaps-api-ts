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
/**
 *
 * @export
 * @interface GeoJSONPoint
 */
export interface GeoJSONPoint {
  /**
   *
   * @type {string}
   * @memberof GeoJSONPoint
   */
  type: GeoJSONPointTypeEnum;
  /**
   *
   * @type {Array<number>}
   * @memberof GeoJSONPoint
   */
  coordinates: Array<number>;
}

/**
 * @export
 */
export const GeoJSONPointTypeEnum = {
  Point: "Point",
  MultiPoint: "MultiPoint",
  LineString: "LineString",
  MultiLineString: "MultiLineString",
  Polygon: "Polygon",
  MultiPolygon: "MultiPolygon",
} as const;
export type GeoJSONPointTypeEnum =
  (typeof GeoJSONPointTypeEnum)[keyof typeof GeoJSONPointTypeEnum];

/**
 * Check if a given object implements the GeoJSONPoint interface.
 */
export function instanceOfGeoJSONPoint(value: object): value is GeoJSONPoint {
  if (!("type" in value) || value["type"] === undefined) return false;
  if (!("coordinates" in value) || value["coordinates"] === undefined)
    return false;
  return true;
}

export function GeoJSONPointFromJSON(json: any): GeoJSONPoint {
  return GeoJSONPointFromJSONTyped(json, false);
}

export function GeoJSONPointFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GeoJSONPoint {
  if (json == null) {
    return json;
  }
  return {
    type: json["type"],
    coordinates: json["coordinates"],
  };
}

export function GeoJSONPointToJSON(value?: GeoJSONPoint | null): any {
  if (value == null) {
    return value;
  }
  return {
    type: value["type"],
    coordinates: value["coordinates"],
  };
}
