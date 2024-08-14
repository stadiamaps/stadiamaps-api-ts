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
/**
 *
 * @export
 * @interface Warning
 */
export interface Warning {
  /**
   *
   * @type {string}
   * @memberof Warning
   */
  text?: string;
  /**
   *
   * @type {number}
   * @memberof Warning
   */
  code?: number;
}

/**
 * Check if a given object implements the Warning interface.
 */
export function instanceOfWarning(value: object): value is Warning {
  return true;
}

export function WarningFromJSON(json: any): Warning {
  return WarningFromJSONTyped(json, false);
}

export function WarningFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): Warning {
  if (json == null) {
    return json;
  }
  return {
    text: json["text"] == null ? undefined : json["text"],
    code: json["code"] == null ? undefined : json["code"],
  };
}

export function WarningToJSON(value?: Warning | null): any {
  if (value == null) {
    return value;
  }
  return {
    text: value["text"],
    code: value["code"],
  };
}
