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
/**
 *
 * @export
 * @interface AdminRegion
 */
export interface AdminRegion {
  /**
   * The [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code.
   * @type {string}
   * @memberof AdminRegion
   */
  countryCode?: string;
  /**
   * The country name
   * @type {string}
   * @memberof AdminRegion
   */
  countryText?: string;
  /**
   * The abbreviation code for the state (varies by country).
   * @type {string}
   * @memberof AdminRegion
   */
  stateCode?: string;
  /**
   * The state name.
   * @type {string}
   * @memberof AdminRegion
   */
  stateText?: string;
}

/**
 * Check if a given object implements the AdminRegion interface.
 */
export function instanceOfAdminRegion(value: object): value is AdminRegion {
  return true;
}

export function AdminRegionFromJSON(json: any): AdminRegion {
  return AdminRegionFromJSONTyped(json, false);
}

export function AdminRegionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): AdminRegion {
  if (json == null) {
    return json;
  }
  return {
    countryCode:
      json["country_code"] == null ? undefined : json["country_code"],
    countryText:
      json["country_text"] == null ? undefined : json["country_text"],
    stateCode: json["state_code"] == null ? undefined : json["state_code"],
    stateText: json["state_text"] == null ? undefined : json["state_text"],
  };
}

export function AdminRegionToJSON(json: any): AdminRegion {
  return AdminRegionToJSONTyped(json, false);
}

export function AdminRegionToJSONTyped(
  value?: AdminRegion | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    country_code: value["countryCode"],
    country_text: value["countryText"],
    state_code: value["stateCode"],
    state_text: value["stateText"],
  };
}
