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
/**
 *
 * @export
 * @interface OsrmAdmin
 */
export interface OsrmAdmin {
  /**
   * The ISO 3166-1 two-character code for the admin region.
   * @type {string}
   * @memberof OsrmAdmin
   */
  iso31661?: string;
  /**
   * The ISO 3166-1 three-character code for the admin region.
   * @type {string}
   * @memberof OsrmAdmin
   */
  iso31661Alpha3?: string;
}

/**
 * Check if a given object implements the OsrmAdmin interface.
 */
export function instanceOfOsrmAdmin(value: object): value is OsrmAdmin {
  return true;
}

export function OsrmAdminFromJSON(json: any): OsrmAdmin {
  return OsrmAdminFromJSONTyped(json, false);
}

export function OsrmAdminFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): OsrmAdmin {
  if (json == null) {
    return json;
  }
  return {
    iso31661: json["iso_3166_1"] == null ? undefined : json["iso_3166_1"],
    iso31661Alpha3:
      json["iso_3166_1_alpha3"] == null ? undefined : json["iso_3166_1_alpha3"],
  };
}

export function OsrmAdminToJSON(json: any): OsrmAdmin {
  return OsrmAdminToJSONTyped(json, false);
}

export function OsrmAdminToJSONTyped(
  value?: OsrmAdmin | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    iso_3166_1: value["iso31661"],
    iso_3166_1_alpha3: value["iso31661Alpha3"],
  };
}
