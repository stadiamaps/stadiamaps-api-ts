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
import type { RouteResponseAlternatesInner } from "./RouteResponseAlternatesInner";
import {
  RouteResponseAlternatesInnerFromJSON,
  RouteResponseAlternatesInnerFromJSONTyped,
  RouteResponseAlternatesInnerToJSON,
  RouteResponseAlternatesInnerToJSONTyped,
} from "./RouteResponseAlternatesInner";
import type { RouteTrip } from "./RouteTrip";
import {
  RouteTripFromJSON,
  RouteTripFromJSONTyped,
  RouteTripToJSON,
  RouteTripToJSONTyped,
} from "./RouteTrip";

/**
 *
 * @export
 * @interface MapMatchRouteResponse
 */
export interface MapMatchRouteResponse {
  /**
   * An identifier to disambiguate requests (echoed by the server).
   * @type {string}
   * @memberof MapMatchRouteResponse
   */
  id?: string;
  /**
   *
   * @type {RouteTrip}
   * @memberof MapMatchRouteResponse
   */
  trip: RouteTrip;
  /**
   *
   * @type {Array<RouteResponseAlternatesInner>}
   * @memberof MapMatchRouteResponse
   */
  alternates?: Array<RouteResponseAlternatesInner>;
  /**
   *
   * @type {Array<string>}
   * @memberof MapMatchRouteResponse
   */
  linearReferences?: Array<string>;
}

/**
 * Check if a given object implements the MapMatchRouteResponse interface.
 */
export function instanceOfMapMatchRouteResponse(
  value: object,
): value is MapMatchRouteResponse {
  if (!("trip" in value) || value["trip"] === undefined) return false;
  return true;
}

export function MapMatchRouteResponseFromJSON(
  json: any,
): MapMatchRouteResponse {
  return MapMatchRouteResponseFromJSONTyped(json, false);
}

export function MapMatchRouteResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): MapMatchRouteResponse {
  if (json == null) {
    return json;
  }
  return {
    id: json["id"] == null ? undefined : json["id"],
    trip: RouteTripFromJSON(json["trip"]),
    alternates:
      json["alternates"] == null
        ? undefined
        : (json["alternates"] as Array<any>).map(
            RouteResponseAlternatesInnerFromJSON,
          ),
    linearReferences:
      json["linear_references"] == null ? undefined : json["linear_references"],
  };
}

export function MapMatchRouteResponseToJSON(json: any): MapMatchRouteResponse {
  return MapMatchRouteResponseToJSONTyped(json, false);
}

export function MapMatchRouteResponseToJSONTyped(
  value?: MapMatchRouteResponse | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    id: value["id"],
    trip: RouteTripToJSON(value["trip"]),
    alternates:
      value["alternates"] == null
        ? undefined
        : (value["alternates"] as Array<any>).map(
            RouteResponseAlternatesInnerToJSON,
          ),
    linear_references: value["linearReferences"],
  };
}
