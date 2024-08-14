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
import type { PeliasResponse } from "./PeliasResponse";
import {
  PeliasResponseFromJSON,
  PeliasResponseFromJSONTyped,
  PeliasResponseToJSON,
} from "./PeliasResponse";

/**
 *
 * @export
 * @interface BulkSearchResponse
 */
export interface BulkSearchResponse {
  /**
   *
   * @type {number}
   * @memberof BulkSearchResponse
   */
  status: number;
  /**
   *
   * @type {PeliasResponse}
   * @memberof BulkSearchResponse
   */
  response?: PeliasResponse;
  /**
   * An error message describing what went wrong (if the status is not 200).
   * @type {string}
   * @memberof BulkSearchResponse
   */
  msg?: string;
}

/**
 * Check if a given object implements the BulkSearchResponse interface.
 */
export function instanceOfBulkSearchResponse(
  value: object,
): value is BulkSearchResponse {
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function BulkSearchResponseFromJSON(json: any): BulkSearchResponse {
  return BulkSearchResponseFromJSONTyped(json, false);
}

export function BulkSearchResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): BulkSearchResponse {
  if (json == null) {
    return json;
  }
  return {
    status: json["status"],
    response:
      json["response"] == null
        ? undefined
        : PeliasResponseFromJSON(json["response"]),
    msg: json["msg"] == null ? undefined : json["msg"],
  };
}

export function BulkSearchResponseToJSON(
  value?: BulkSearchResponse | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    status: value["status"],
    response: PeliasResponseToJSON(value["response"]),
    msg: value["msg"],
  };
}
