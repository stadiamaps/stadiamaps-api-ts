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
 * @interface TruckCostingOptions
 */
export interface TruckCostingOptions {
  /**
   * A penalty (in seconds) applied when transitioning between roads (determined by name).
   * @type {number}
   * @memberof TruckCostingOptions
   */
  maneuverPenalty?: number;
  /**
   * The estimated cost (in seconds) when a gate is encountered.
   * @type {number}
   * @memberof TruckCostingOptions
   */
  gateCost?: number;
  /**
   * A penalty (in seconds) applied to the route cost when a gate is encountered. This penalty can be used to reduce the likelihood of suggesting a route with gates unless absolutely necessary.
   * @type {number}
   * @memberof TruckCostingOptions
   */
  gatePenalty?: number;
  /**
   * The estimated cost (in seconds) when encountering an international border.
   * @type {number}
   * @memberof TruckCostingOptions
   */
  countryCrossingCost?: number;
  /**
   * A penalty applied to transitions to international border crossings. This penalty can be used to reduce the likelihood of suggesting a route with border crossings unless absolutely necessary.
   * @type {number}
   * @memberof TruckCostingOptions
   */
  countryCrossingPenalty?: number;
  /**
   * A penalty applied to transitions to service roads. This penalty can be used to reduce the likelihood of suggesting a route with service roads unless absolutely necessary. The default penalty is 15 for cars, busses, motor scooters, and motorcycles; and zero for others.
   * @type {number}
   * @memberof TruckCostingOptions
   */
  servicePenalty?: number;
  /**
   * A factor that multiplies the cost when service roads are encountered. The default is 1.2 for cars and busses, and 1 for trucks, motor scooters, and motorcycles.
   * @type {number}
   * @memberof TruckCostingOptions
   */
  serviceFactor?: number;
  /**
   * A measure of willingness to take living streets. Values near 0 attempt to avoid them, and values near 1 will favour them. Note that as some routes may be impossible without living streets, 0 does not guarantee avoidance of them. The default value is 0 for trucks; 0.1 for other motor vehicles; 0.5 for bicycles; and 0.6 for pedestrians.
   * @type {number}
   * @memberof TruckCostingOptions
   */
  useLivingStreets?: number;
  /**
   * A measure of willingness to take ferries. Values near 0 attempt to avoid ferries, and values near 1 will favour them. Note that as some routes may be impossible without ferries, 0 does not guarantee avoidance of them.
   * @type {number}
   * @memberof TruckCostingOptions
   */
  useFerry?: number;
  /**
   * If set to true, ignores any restrictions (eg: turn and conditional restrictions). Useful for matching GPS traces to the road network regardless of restrictions.
   * @type {boolean}
   * @memberof TruckCostingOptions
   */
  ignoreRestrictions?: boolean;
  /**
   * If set to true, ignores most restrictions (eg: turn and conditional restrictions), but still respects restrictions that impact vehicle safety such as weight and size.
   * @type {boolean}
   * @memberof TruckCostingOptions
   */
  ignoreNonVehicularRestrictions?: boolean;
  /**
   * If set to true, ignores directional restrictions on roads. Useful for matching GPS traces to the road network regardless of restrictions.
   * @type {boolean}
   * @memberof TruckCostingOptions
   */
  ignoreOneways?: boolean;
  /**
   * The height of the truck (in meters).
   * @type {number}
   * @memberof TruckCostingOptions
   */
  height?: number;
  /**
   * The width of the truck (in meters).
   * @type {number}
   * @memberof TruckCostingOptions
   */
  width?: number;
  /**
   * The estimated cost (in seconds) when a toll booth is encountered.
   * @type {number}
   * @memberof TruckCostingOptions
   */
  tollBoothCost?: number;
  /**
   * A penalty (in seconds) applied to the route cost when a toll booth is encountered. This penalty can be used to reduce the likelihood of suggesting a route with toll booths unless absolutely necessary.
   * @type {number}
   * @memberof TruckCostingOptions
   */
  tollBoothPenalty?: number;
  /**
   * The estimated cost (in seconds) when a ferry is encountered.
   * @type {number}
   * @memberof TruckCostingOptions
   */
  ferryCost?: number;
  /**
   * A measure of willingness to take highways. Values near 0 attempt to avoid highways, and values near 1 will favour them. Note that as some routes may be impossible without highways, 0 does not guarantee avoidance of them.
   * @type {number}
   * @memberof TruckCostingOptions
   */
  useHighways?: number;
  /**
   * A measure of willingness to take toll roads. Values near 0 attempt to avoid tolls, and values near 1 will favour them. Note that as some routes may be impossible without tolls, 0 does not guarantee avoidance of them.
   * @type {number}
   * @memberof TruckCostingOptions
   */
  useTolls?: number;
  /**
   * A measure of willingness to take track roads. Values near 0 attempt to avoid them, and values near 1 will favour them. Note that as some routes may be impossible without track roads, 0 does not guarantee avoidance of them. The default value is 0 for automobiles, busses, and trucks; and 0.5 for all other costing modes.
   * @type {number}
   * @memberof TruckCostingOptions
   */
  useTracks?: number;
  /**
   * The top speed (in kph) that the vehicle is capable of travelling.
   * @type {number}
   * @memberof TruckCostingOptions
   */
  topSpeed?: number;
  /**
   * If true changes the cost metric to be quasi-shortest (pure distance-based) costing. This will disable ALL other costing factors.
   * @type {boolean}
   * @memberof TruckCostingOptions
   */
  shortest?: boolean;
  /**
   * If true, ignores all known closures. This option cannot be set if `location.search_filter.exclude_closures` is also specified.
   * @type {boolean}
   * @memberof TruckCostingOptions
   */
  ignoreClosures?: boolean;
  /**
   * If true, indicates the desire to include HOV roads with a 2-occupant requirement in the route when advantageous.
   * @type {boolean}
   * @memberof TruckCostingOptions
   */
  includeHov2?: boolean;
  /**
   * If true, indicates the desire to include HOV roads with a 3-occupant requirement in the route when advantageous.
   * @type {boolean}
   * @memberof TruckCostingOptions
   */
  includeHov3?: boolean;
  /**
   * If true, indicates the desire to include toll roads which require the driver to pay a toll if the occupant requirement isn't met
   * @type {boolean}
   * @memberof TruckCostingOptions
   */
  includeHot?: boolean;
  /**
   * A factor that multiplies the cost when alleys are encountered.
   * @type {number}
   * @memberof TruckCostingOptions
   */
  alleyFactor?: number;
  /**
   * The length of the truck (in meters).
   * @type {number}
   * @memberof TruckCostingOptions
   */
  length?: number;
  /**
   * The weight of the truck (in tonnes).
   * @type {number}
   * @memberof TruckCostingOptions
   */
  weight?: number;
  /**
   * The axle load of the truck (in tonnes).
   * @type {number}
   * @memberof TruckCostingOptions
   */
  axleLoad?: number;
  /**
   * Whether or not the truck is carrying hazardous materials.
   * @type {boolean}
   * @memberof TruckCostingOptions
   */
  hazmat?: boolean;
}

/**
 * Check if a given object implements the TruckCostingOptions interface.
 */
export function instanceOfTruckCostingOptions(
  value: object,
): value is TruckCostingOptions {
  return true;
}

export function TruckCostingOptionsFromJSON(json: any): TruckCostingOptions {
  return TruckCostingOptionsFromJSONTyped(json, false);
}

export function TruckCostingOptionsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): TruckCostingOptions {
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
    height: json["height"] == null ? undefined : json["height"],
    width: json["width"] == null ? undefined : json["width"],
    tollBoothCost:
      json["toll_booth_cost"] == null ? undefined : json["toll_booth_cost"],
    tollBoothPenalty:
      json["toll_booth_penalty"] == null
        ? undefined
        : json["toll_booth_penalty"],
    ferryCost: json["ferry_cost"] == null ? undefined : json["ferry_cost"],
    useHighways:
      json["use_highways"] == null ? undefined : json["use_highways"],
    useTolls: json["use_tolls"] == null ? undefined : json["use_tolls"],
    useTracks: json["use_tracks"] == null ? undefined : json["use_tracks"],
    topSpeed: json["top_speed"] == null ? undefined : json["top_speed"],
    shortest: json["shortest"] == null ? undefined : json["shortest"],
    ignoreClosures:
      json["ignore_closures"] == null ? undefined : json["ignore_closures"],
    includeHov2:
      json["include_hov2"] == null ? undefined : json["include_hov2"],
    includeHov3:
      json["include_hov3"] == null ? undefined : json["include_hov3"],
    includeHot: json["include_hot"] == null ? undefined : json["include_hot"],
    alleyFactor:
      json["alley_factor"] == null ? undefined : json["alley_factor"],
    length: json["length"] == null ? undefined : json["length"],
    weight: json["weight"] == null ? undefined : json["weight"],
    axleLoad: json["axle_load"] == null ? undefined : json["axle_load"],
    hazmat: json["hazmat"] == null ? undefined : json["hazmat"],
  };
}

export function TruckCostingOptionsToJSON(
  value?: TruckCostingOptions | null,
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
    height: value["height"],
    width: value["width"],
    toll_booth_cost: value["tollBoothCost"],
    toll_booth_penalty: value["tollBoothPenalty"],
    ferry_cost: value["ferryCost"],
    use_highways: value["useHighways"],
    use_tolls: value["useTolls"],
    use_tracks: value["useTracks"],
    top_speed: value["topSpeed"],
    shortest: value["shortest"],
    ignore_closures: value["ignoreClosures"],
    include_hov2: value["includeHov2"],
    include_hov3: value["includeHov3"],
    include_hot: value["includeHot"],
    alley_factor: value["alleyFactor"],
    length: value["length"],
    weight: value["weight"],
    axle_load: value["axleLoad"],
    hazmat: value["hazmat"],
  };
}
