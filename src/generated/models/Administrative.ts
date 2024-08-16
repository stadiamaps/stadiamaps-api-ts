/* tslint:disable */
/* eslint-disable */
/**
 * Stadia Maps Geospatial APIs
 * The Stadia Maps Geospatial APIs provide you with the data you need to build awesome applications.
 *
 * The version of the OpenAPI document: 6.6.3
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
 * @interface Administrative
 */
export interface Administrative {
  /**
   * The ISO 3166-1 alpha-2 country code of the administrative region.
   * @type {string}
   * @memberof Administrative
   */
  iso31661?: string;
  /**
   * The full country name.
   * @type {string}
   * @memberof Administrative
   */
  country?: string;
  /**
   * The ISO 3166-2 code identifying the principal subdivision (ex: provinces or states) within a country.
   * @type {string}
   * @memberof Administrative
   */
  iso31662?: string;
  /**
   * The full state or province name.
   * @type {string}
   * @memberof Administrative
   */
  state?: string;
}

/**
 * Check if a given object implements the Administrative interface.
 */
export function instanceOfAdministrative(
  value: object,
): value is Administrative {
  return true;
}

export function AdministrativeFromJSON(json: any): Administrative {
  return AdministrativeFromJSONTyped(json, false);
}

export function AdministrativeFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): Administrative {
  if (json == null) {
    return json;
  }
  return {
    iso31661: json["iso_3166-1"] == null ? undefined : json["iso_3166-1"],
    country: json["country"] == null ? undefined : json["country"],
    iso31662: json["iso_3166-2"] == null ? undefined : json["iso_3166-2"],
    state: json["state"] == null ? undefined : json["state"],
  };
}

export function AdministrativeToJSON(value?: Administrative | null): any {
  if (value == null) {
    return value;
  }
  return {
    "iso_3166-1": value["iso31661"],
    country: value["country"],
    "iso_3166-2": value["iso31662"],
    state: value["state"],
  };
}
