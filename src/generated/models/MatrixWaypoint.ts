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
/**
 *
 * @export
 * @interface MatrixWaypoint
 */
export interface MatrixWaypoint {
  /**
   * The latitude of a point in the shape.
   * @type {number}
   * @memberof MatrixWaypoint
   */
  lat: number;
  /**
   * The longitude of a point in the shape.
   * @type {number}
   * @memberof MatrixWaypoint
   */
  lon: number;
  /**
   * The cutoff (in meters) at which we will assume the input is too far away from civilisation to be worth correlating to the nearest graph elements. The default is 35 km.
   * @type {number}
   * @memberof MatrixWaypoint
   */
  searchCutoff?: number;
}

/**
 * Check if a given object implements the MatrixWaypoint interface.
 */
export function instanceOfMatrixWaypoint(
  value: object,
): value is MatrixWaypoint {
  if (!("lat" in value) || value["lat"] === undefined) return false;
  if (!("lon" in value) || value["lon"] === undefined) return false;
  return true;
}

export function MatrixWaypointFromJSON(json: any): MatrixWaypoint {
  return MatrixWaypointFromJSONTyped(json, false);
}

export function MatrixWaypointFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): MatrixWaypoint {
  if (json == null) {
    return json;
  }
  return {
    lat: json["lat"],
    lon: json["lon"],
    searchCutoff:
      json["search_cutoff"] == null ? undefined : json["search_cutoff"],
  };
}

export function MatrixWaypointToJSON(value?: MatrixWaypoint | null): any {
  if (value == null) {
    return value;
  }
  return {
    lat: value["lat"],
    lon: value["lon"],
    search_cutoff: value["searchCutoff"],
  };
}
