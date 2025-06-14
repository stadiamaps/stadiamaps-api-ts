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
 * @interface Access
 */
export interface Access {
  /**
   *
   * @type {boolean}
   * @memberof Access
   */
  golfCart?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof Access
   */
  wheelchair?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof Access
   */
  taxi?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof Access
   */
  hOV?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof Access
   */
  truck?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof Access
   */
  emergency?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof Access
   */
  pedestrian?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof Access
   */
  car?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof Access
   */
  bus?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof Access
   */
  bicycle?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof Access
   */
  motorcycle?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof Access
   */
  moped?: boolean;
}

/**
 * Check if a given object implements the Access interface.
 */
export function instanceOfAccess(value: object): value is Access {
  return true;
}

export function AccessFromJSON(json: any): Access {
  return AccessFromJSONTyped(json, false);
}

export function AccessFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): Access {
  if (json == null) {
    return json;
  }
  return {
    golfCart: json["golf_cart"] == null ? undefined : json["golf_cart"],
    wheelchair: json["wheelchair"] == null ? undefined : json["wheelchair"],
    taxi: json["taxi"] == null ? undefined : json["taxi"],
    hOV: json["HOV"] == null ? undefined : json["HOV"],
    truck: json["truck"] == null ? undefined : json["truck"],
    emergency: json["emergency"] == null ? undefined : json["emergency"],
    pedestrian: json["pedestrian"] == null ? undefined : json["pedestrian"],
    car: json["car"] == null ? undefined : json["car"],
    bus: json["bus"] == null ? undefined : json["bus"],
    bicycle: json["bicycle"] == null ? undefined : json["bicycle"],
    motorcycle: json["motorcycle"] == null ? undefined : json["motorcycle"],
    moped: json["moped"] == null ? undefined : json["moped"],
  };
}

export function AccessToJSON(json: any): Access {
  return AccessToJSONTyped(json, false);
}

export function AccessToJSONTyped(
  value?: Access | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    golf_cart: value["golfCart"],
    wheelchair: value["wheelchair"],
    taxi: value["taxi"],
    HOV: value["hOV"],
    truck: value["truck"],
    emergency: value["emergency"],
    pedestrian: value["pedestrian"],
    car: value["car"],
    bus: value["bus"],
    bicycle: value["bicycle"],
    motorcycle: value["motorcycle"],
    moped: value["moped"],
  };
}
