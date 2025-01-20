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
 * @interface BaseCostingOptions
 */
export interface BaseCostingOptions {
  /**
   * A penalty (in seconds) applied when transitioning between roads (determined by name).
   * @type {number}
   * @memberof BaseCostingOptions
   */
  maneuverPenalty?: number;
  /**
   * The estimated cost (in seconds) when a gate is encountered.
   * @type {number}
   * @memberof BaseCostingOptions
   */
  gateCost?: number;
  /**
   * A penalty (in seconds) applied to the route cost when a gate is encountered. This penalty can be used to reduce the likelihood of suggesting a route with gates unless absolutely necessary.
   * @type {number}
   * @memberof BaseCostingOptions
   */
  gatePenalty?: number;
  /**
   * The estimated cost (in seconds) when encountering an international border.
   * @type {number}
   * @memberof BaseCostingOptions
   */
  countryCrossingCost?: number;
  /**
   * A penalty applied to transitions to international border crossings. This penalty can be used to reduce the likelihood of suggesting a route with border crossings unless absolutely necessary.
   * @type {number}
   * @memberof BaseCostingOptions
   */
  countryCrossingPenalty?: number;
  /**
   * A penalty applied to transitions to service roads. This penalty can be used to reduce the likelihood of suggesting a route with service roads unless absolutely necessary. The default penalty is 15 for cars, busses, motor scooters, and motorcycles; and zero for others.
   * @type {number}
   * @memberof BaseCostingOptions
   */
  servicePenalty?: number;
  /**
   * A factor that multiplies the cost when service roads are encountered. The default is 1.2 for cars and busses, and 1 for trucks, motor scooters, and motorcycles.
   * @type {number}
   * @memberof BaseCostingOptions
   */
  serviceFactor?: number;
  /**
   * A measure of willingness to take living streets. Values near 0 attempt to avoid them, and values near 1 will favour them. Note that as some routes may be impossible without living streets, 0 does not guarantee avoidance of them. The default value is 0 for trucks; 0.1 for other motor vehicles; 0.5 for bicycles; and 0.6 for pedestrians.
   * @type {number}
   * @memberof BaseCostingOptions
   */
  useLivingStreets?: number;
  /**
   * A measure of willingness to take ferries. Values near 0 attempt to avoid ferries, and values near 1 will favour them. Note that as some routes may be impossible without ferries, 0 does not guarantee avoidance of them.
   * @type {number}
   * @memberof BaseCostingOptions
   */
  useFerry?: number;
  /**
   * If set to true, ignores any restrictions (eg: turn and conditional restrictions). Useful for matching GPS traces to the road network regardless of restrictions.
   * @type {boolean}
   * @memberof BaseCostingOptions
   */
  ignoreRestrictions?: boolean;
  /**
   * If set to true, ignores most restrictions (eg: turn and conditional restrictions), but still respects restrictions that impact vehicle safety such as weight and size.
   * @type {boolean}
   * @memberof BaseCostingOptions
   */
  ignoreNonVehicularRestrictions?: boolean;
  /**
   * If set to true, ignores directional restrictions on roads. Useful for matching GPS traces to the road network regardless of restrictions.
   * @type {boolean}
   * @memberof BaseCostingOptions
   */
  ignoreOneways?: boolean;
}

/**
 * Check if a given object implements the BaseCostingOptions interface.
 */
export function instanceOfBaseCostingOptions(
  value: object,
): value is BaseCostingOptions {
  return true;
}

export function BaseCostingOptionsFromJSON(json: any): BaseCostingOptions {
  return BaseCostingOptionsFromJSONTyped(json, false);
}

export function BaseCostingOptionsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): BaseCostingOptions {
  if (json == null) {
    return json;
  }
  return {
    maneuverPenalty:
      json["maneuver_penalty"] == null ? undefined : json["maneuver_penalty"],
    gateCost: json["gate_cost"] == null ? undefined : json["gate_cost"],
    gatePenalty:
      json["gate_penalty"] == null ? undefined : json["gate_penalty"],
    countryCrossingCost:
      json["country_crossing_cost"] == null
        ? undefined
        : json["country_crossing_cost"],
    countryCrossingPenalty:
      json["country_crossing_penalty"] == null
        ? undefined
        : json["country_crossing_penalty"],
    servicePenalty:
      json["service_penalty"] == null ? undefined : json["service_penalty"],
    serviceFactor:
      json["service_factor"] == null ? undefined : json["service_factor"],
    useLivingStreets:
      json["use_living_streets"] == null
        ? undefined
        : json["use_living_streets"],
    useFerry: json["use_ferry"] == null ? undefined : json["use_ferry"],
    ignoreRestrictions:
      json["ignore_restrictions"] == null
        ? undefined
        : json["ignore_restrictions"],
    ignoreNonVehicularRestrictions:
      json["ignore_non_vehicular_restrictions"] == null
        ? undefined
        : json["ignore_non_vehicular_restrictions"],
    ignoreOneways:
      json["ignore_oneways"] == null ? undefined : json["ignore_oneways"],
  };
}

export function BaseCostingOptionsToJSON(json: any): BaseCostingOptions {
  return BaseCostingOptionsToJSONTyped(json, false);
}

export function BaseCostingOptionsToJSONTyped(
  value?: BaseCostingOptions | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    maneuver_penalty: value["maneuverPenalty"],
    gate_cost: value["gateCost"],
    gate_penalty: value["gatePenalty"],
    country_crossing_cost: value["countryCrossingCost"],
    country_crossing_penalty: value["countryCrossingPenalty"],
    service_penalty: value["servicePenalty"],
    service_factor: value["serviceFactor"],
    use_living_streets: value["useLivingStreets"],
    use_ferry: value["useFerry"],
    ignore_restrictions: value["ignoreRestrictions"],
    ignore_non_vehicular_restrictions: value["ignoreNonVehicularRestrictions"],
    ignore_oneways: value["ignoreOneways"],
  };
}
