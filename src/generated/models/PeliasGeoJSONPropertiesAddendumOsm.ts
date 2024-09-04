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
 * @interface PeliasGeoJSONPropertiesAddendumOsm
 */
export interface PeliasGeoJSONPropertiesAddendumOsm {
  [key: string]: any | any;
  /**
   *
   * @type {string}
   * @memberof PeliasGeoJSONPropertiesAddendumOsm
   */
  website?: string;
  /**
   *
   * @type {string}
   * @memberof PeliasGeoJSONPropertiesAddendumOsm
   */
  wikipedia?: string;
  /**
   *
   * @type {string}
   * @memberof PeliasGeoJSONPropertiesAddendumOsm
   */
  wikidata?: string;
  /**
   *
   * @type {string}
   * @memberof PeliasGeoJSONPropertiesAddendumOsm
   */
  phone?: string;
}

/**
 * Check if a given object implements the PeliasGeoJSONPropertiesAddendumOsm interface.
 */
export function instanceOfPeliasGeoJSONPropertiesAddendumOsm(
  value: object,
): value is PeliasGeoJSONPropertiesAddendumOsm {
  return true;
}

export function PeliasGeoJSONPropertiesAddendumOsmFromJSON(
  json: any,
): PeliasGeoJSONPropertiesAddendumOsm {
  return PeliasGeoJSONPropertiesAddendumOsmFromJSONTyped(json, false);
}

export function PeliasGeoJSONPropertiesAddendumOsmFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): PeliasGeoJSONPropertiesAddendumOsm {
  if (json == null) {
    return json;
  }
  return {
    ...json,
    website: json["website"] == null ? undefined : json["website"],
    wikipedia: json["wikipedia"] == null ? undefined : json["wikipedia"],
    wikidata: json["wikidata"] == null ? undefined : json["wikidata"],
    phone: json["phone"] == null ? undefined : json["phone"],
  };
}

export function PeliasGeoJSONPropertiesAddendumOsmToJSON(
  value?: PeliasGeoJSONPropertiesAddendumOsm | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    ...value,
    website: value["website"],
    wikipedia: value["wikipedia"],
    wikidata: value["wikidata"],
    phone: value["phone"],
  };
}
