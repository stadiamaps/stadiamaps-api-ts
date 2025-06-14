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
import type { IsochroneFeature } from "./IsochroneFeature";
import {
  IsochroneFeatureFromJSON,
  IsochroneFeatureFromJSONTyped,
  IsochroneFeatureToJSON,
  IsochroneFeatureToJSONTyped,
} from "./IsochroneFeature";

/**
 *
 * @export
 * @interface IsochroneResponse
 */
export interface IsochroneResponse {
  /**
   *
   * @type {string}
   * @memberof IsochroneResponse
   */
  id?: string;
  /**
   *
   * @type {Array<IsochroneFeature>}
   * @memberof IsochroneResponse
   */
  features: Array<IsochroneFeature>;
  /**
   *
   * @type {string}
   * @memberof IsochroneResponse
   */
  type: IsochroneResponseTypeEnum;
}

/**
 * @export
 */
export const IsochroneResponseTypeEnum = {
  FeatureCollection: "FeatureCollection",
} as const;
export type IsochroneResponseTypeEnum =
  (typeof IsochroneResponseTypeEnum)[keyof typeof IsochroneResponseTypeEnum];

/**
 * Check if a given object implements the IsochroneResponse interface.
 */
export function instanceOfIsochroneResponse(
  value: object,
): value is IsochroneResponse {
  if (!("features" in value) || value["features"] === undefined) return false;
  if (!("type" in value) || value["type"] === undefined) return false;
  return true;
}

export function IsochroneResponseFromJSON(json: any): IsochroneResponse {
  return IsochroneResponseFromJSONTyped(json, false);
}

export function IsochroneResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IsochroneResponse {
  if (json == null) {
    return json;
  }
  return {
    id: json["id"] == null ? undefined : json["id"],
    features: (json["features"] as Array<any>).map(IsochroneFeatureFromJSON),
    type: json["type"],
  };
}

export function IsochroneResponseToJSON(json: any): IsochroneResponse {
  return IsochroneResponseToJSONTyped(json, false);
}

export function IsochroneResponseToJSONTyped(
  value?: IsochroneResponse | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    id: value["id"],
    features: (value["features"] as Array<any>).map(IsochroneFeatureToJSON),
    type: value["type"],
  };
}
