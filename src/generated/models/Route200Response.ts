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

import type { OsrmRouteResponse } from "./OsrmRouteResponse";
import {
  instanceOfOsrmRouteResponse,
  OsrmRouteResponseFromJSON,
  OsrmRouteResponseFromJSONTyped,
  OsrmRouteResponseToJSON,
} from "./OsrmRouteResponse";
import type { RouteResponse } from "./RouteResponse";
import {
  instanceOfRouteResponse,
  RouteResponseFromJSON,
  RouteResponseFromJSONTyped,
  RouteResponseToJSON,
} from "./RouteResponse";

/**
 * @type Route200Response
 *
 * @export
 */
export type Route200Response = OsrmRouteResponse | RouteResponse;

export function Route200ResponseFromJSON(json: any): Route200Response {
  return Route200ResponseFromJSONTyped(json, false);
}

export function Route200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): Route200Response {
  if (json == null) {
    return json;
  }
  if (instanceOfOsrmRouteResponse(json)) {
    return OsrmRouteResponseFromJSONTyped(json, true);
  }
  if (instanceOfRouteResponse(json)) {
    return RouteResponseFromJSONTyped(json, true);
  }

  return {} as any;
}

export function Route200ResponseToJSON(value?: Route200Response | null): any {
  if (value == null) {
    return value;
  }

  if (instanceOfOsrmRouteResponse(value)) {
    return OsrmRouteResponseToJSON(value as OsrmRouteResponse);
  }
  if (instanceOfRouteResponse(value)) {
    return RouteResponseToJSON(value as RouteResponse);
  }

  return {};
}