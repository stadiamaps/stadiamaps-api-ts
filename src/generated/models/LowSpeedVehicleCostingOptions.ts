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
 * @interface LowSpeedVehicleCostingOptions
 */
export interface LowSpeedVehicleCostingOptions {
  /**
   * A penalty (in seconds) applied when transitioning between roads (determined by name).
   * @type {number}
   * @memberof LowSpeedVehicleCostingOptions
   */
  maneuverPenalty?: number;
  /**
   * The estimated cost (in seconds) when a gate is encountered.
   * @type {number}
   * @memberof LowSpeedVehicleCostingOptions
   */
  gateCost?: number;
  /**
   * A penalty (in seconds) applied to the route cost when a gate is encountered. This penalty can be used to reduce the likelihood of suggesting a route with gates unless absolutely necessary.
   * @type {number}
   * @memberof LowSpeedVehicleCostingOptions
   */
  gatePenalty?: number;
  /**
   * The estimated cost (in seconds) when encountering an international border.
   * @type {number}
   * @memberof LowSpeedVehicleCostingOptions
   */
  countryCrossingCost?: number;
  /**
   * A penalty applied to transitions to international border crossings. This penalty can be used to reduce the likelihood of suggesting a route with border crossings unless absolutely necessary.
   * @type {number}
   * @memberof LowSpeedVehicleCostingOptions
   */
  countryCrossingPenalty?: number;
  /**
   * A penalty applied to transitions to service roads. This penalty can be used to reduce the likelihood of suggesting a route with service roads unless absolutely necessary. The default penalty is 15 for cars, busses, motor scooters, and motorcycles; and zero for others.
   * @type {number}
   * @memberof LowSpeedVehicleCostingOptions
   */
  servicePenalty?: number;
  /**
   * A factor that multiplies the cost when service roads are encountered. The default is 1.2 for cars and busses, and 1 for trucks, motor scooters, and motorcycles.
   * @type {number}
   * @memberof LowSpeedVehicleCostingOptions
   */
  serviceFactor?: number;
  /**
   * A measure of willingness to take living streets. Values near 0 attempt to avoid them, and values near 1 will favour them. Note that as some routes may be impossible without living streets, 0 does not guarantee avoidance of them. The default value is 0 for trucks; 0.1 for other motor vehicles; 0.5 for bicycles; and 0.6 for pedestrians.
   * @type {number}
   * @memberof LowSpeedVehicleCostingOptions
   */
  useLivingStreets?: number;
  /**
   * A measure of willingness to take ferries. Values near 0 attempt to avoid ferries, and values near 1 will favour them. Note that as some routes may be impossible without ferries, 0 does not guarantee avoidance of them.
   * @type {number}
   * @memberof LowSpeedVehicleCostingOptions
   */
  useFerry?: number;
  /**
   * If set to true, ignores any restrictions (eg: turn and conditional restrictions). Useful for matching GPS traces to the road network regardless of restrictions.
   * @type {boolean}
   * @memberof LowSpeedVehicleCostingOptions
   */
  ignoreRestrictions?: boolean;
  /**
   * If set to true, ignores most restrictions (eg: turn and conditional restrictions), but still respects restrictions that impact vehicle safety such as weight and size.
   * @type {boolean}
   * @memberof LowSpeedVehicleCostingOptions
   */
  ignoreNonVehicularRestrictions?: boolean;
  /**
   * If set to true, ignores directional restrictions on roads. Useful for matching GPS traces to the road network regardless of restrictions.
   * @type {boolean}
   * @memberof LowSpeedVehicleCostingOptions
   */
  ignoreOneways?: boolean;
  /**
   * The type of vehicle:
   * * low_speed_vehicle (BETA): a low-speed vehicle which falls under a different regulatory and licensing regime than automobiles (ex: LSV in the US and Canada, Quadricycles in the EU, etc.) * golf_cart: a street legal golf cart that is under a similar regulator regime as the generic LSV laws, but may need to follow special paths when available or abide by restrictions specific to golf carts.
   * @type {string}
   * @memberof LowSpeedVehicleCostingOptions
   */
  vehicleType?: LowSpeedVehicleCostingOptionsVehicleTypeEnum;
  /**
   * The top speed (in kph) that the vehicle is capable of travelling.
   * This impacts travel time calculations as well as which roads are preferred. A very low speed vehicle will tend to prefer lower speed roads even in the presence of other legal routes.
   * @type {number}
   * @memberof LowSpeedVehicleCostingOptions
   */
  topSpeed?: number;
  /**
   * The maximum speed limit for highways on which it is legal for the vehicle to travel. Defaults to 57 (kph; around 35 mph). Acceptable values range from 20 to 80. Highways with *tagged* speed limits higher than this value will not be routed over (some caveats apply; this feature is still BETA).
   * @type {number}
   * @memberof LowSpeedVehicleCostingOptions
   */
  maxAllowedSpeedLimit?: number;
}

/**
 * @export
 */
export const LowSpeedVehicleCostingOptionsVehicleTypeEnum = {
  LowSpeedVehicle: "low_speed_vehicle",
  GolfCart: "golf_cart",
} as const;
export type LowSpeedVehicleCostingOptionsVehicleTypeEnum =
  (typeof LowSpeedVehicleCostingOptionsVehicleTypeEnum)[keyof typeof LowSpeedVehicleCostingOptionsVehicleTypeEnum];

/**
 * Check if a given object implements the LowSpeedVehicleCostingOptions interface.
 */
export function instanceOfLowSpeedVehicleCostingOptions(
  value: object,
): value is LowSpeedVehicleCostingOptions {
  return true;
}

export function LowSpeedVehicleCostingOptionsFromJSON(
  json: any,
): LowSpeedVehicleCostingOptions {
  return LowSpeedVehicleCostingOptionsFromJSONTyped(json, false);
}

export function LowSpeedVehicleCostingOptionsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): LowSpeedVehicleCostingOptions {
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
    vehicleType:
      json["vehicle_type"] == null ? undefined : json["vehicle_type"],
    topSpeed: json["top_speed"] == null ? undefined : json["top_speed"],
    maxAllowedSpeedLimit:
      json["max_allowed_speed_limit"] == null
        ? undefined
        : json["max_allowed_speed_limit"],
  };
}

export function LowSpeedVehicleCostingOptionsToJSON(
  value?: LowSpeedVehicleCostingOptions | null,
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
    vehicle_type: value["vehicleType"],
    top_speed: value["topSpeed"],
    max_allowed_speed_limit: value["maxAllowedSpeedLimit"],
  };
}
