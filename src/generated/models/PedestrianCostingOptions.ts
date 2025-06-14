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
import type { PedestrianType } from "./PedestrianType";
import {
  PedestrianTypeFromJSON,
  PedestrianTypeFromJSONTyped,
  PedestrianTypeToJSON,
  PedestrianTypeToJSONTyped,
} from "./PedestrianType";

/**
 *
 * @export
 * @interface PedestrianCostingOptions
 */
export interface PedestrianCostingOptions {
  /**
   * Walking speed in kph.
   * @type {number}
   * @memberof PedestrianCostingOptions
   */
  walkingSpeed?: number;
  /**
   * A factor that multiplies the cost when walkways are encountered.
   * @type {number}
   * @memberof PedestrianCostingOptions
   */
  walkwayFactor?: number;
  /**
   * A factor that multiplies the cost when sidewalks are encountered.
   * @type {number}
   * @memberof PedestrianCostingOptions
   */
  sidewalkFactor?: number;
  /**
   * A factor that multiplies the cost when alleys are encountered.
   * @type {number}
   * @memberof PedestrianCostingOptions
   */
  alleyFactor?: number;
  /**
   * A factor that multiplies the cost when driveways are encountered.
   * @type {number}
   * @memberof PedestrianCostingOptions
   */
  drivewayFactor?: number;
  /**
   * A penalty (in seconds) added to each transition onto a path with steps or stairs.
   * @type {number}
   * @memberof PedestrianCostingOptions
   */
  stepPenalty?: number;
  /**
   * A measure of willingness to take ferries. Values near 0 attempt to avoid ferries, and values near 1 will favour them. Note that as some routes may be impossible without ferries, 0 does not guarantee avoidance of them.
   * @type {number}
   * @memberof PedestrianCostingOptions
   */
  useFerry?: number;
  /**
   * A measure of willingness to take living streets. Values near 0 attempt to avoid them, and values near 1 will favour them. Note that as some routes may be impossible without living streets, 0 does not guarantee avoidance of them. The default value is 0 for trucks; 0.1 for other motor vehicles; 0.5 for bicycles; and 0.6 for pedestrians.
   * @type {number}
   * @memberof PedestrianCostingOptions
   */
  useLivingStreets?: number;
  /**
   * A measure of willingness to take track roads. Values near 0 attempt to avoid them, and values near 1 will favour them. Note that as some routes may be impossible without track roads, 0 does not guarantee avoidance of them. The default value is 0 for automobiles, busses, and trucks; and 0.5 for all other costing modes.
   * @type {number}
   * @memberof PedestrianCostingOptions
   */
  useTracks?: number;
  /**
   * A measure of willingness to take tackle hills. Values near 0 attempt to avoid hills and steeper grades even if it means a longer route, and values near 1 indicates that the user does not fear them. Note that as some routes may be impossible without hills, 0 does not guarantee avoidance of them.
   * @type {number}
   * @memberof PedestrianCostingOptions
   */
  useHills?: number;
  /**
   * A measure of preference for streets that are lit. 0 indicates indifference toward lit streets, and 1 indicates that unlit streets should be avoided. Note that even with values near 1, there is no guarantee that the returned route will include lit segments.
   * @type {number}
   * @memberof PedestrianCostingOptions
   */
  useLit?: number;
  /**
   * A penalty applied to transitions to service roads. This penalty can be used to reduce the likelihood of suggesting a route with service roads unless absolutely necessary. The default penalty is 15 for cars, busses, motor scooters, and motorcycles; and zero for others.
   * @type {number}
   * @memberof PedestrianCostingOptions
   */
  servicePenalty?: number;
  /**
   * A factor that multiplies the cost when service roads are encountered. The default is 1.2 for cars and busses, and 1 for trucks, motor scooters, and motorcycles.
   * @type {number}
   * @memberof PedestrianCostingOptions
   */
  serviceFactor?: number;
  /**
   * The maximum difficulty of hiking trails allowed. This corresponds to the OSM `sac_scale`.
   * @type {number}
   * @memberof PedestrianCostingOptions
   */
  maxHikingDifficulty?: number;
  /**
   * The estimated cost (in seconds) to rent a bicycle from a sharing station in `bikeshare` mode.
   * @type {number}
   * @memberof PedestrianCostingOptions
   */
  bssRentCost?: number;
  /**
   * A penalty (in seconds) to rent a bicycle in `bikeshare` mode.
   * @type {number}
   * @memberof PedestrianCostingOptions
   */
  bssRentPenalty?: number;
  /**
   *
   * @type {PedestrianType}
   * @memberof PedestrianCostingOptions
   */
  type?: PedestrianType;
}

/**
 * Check if a given object implements the PedestrianCostingOptions interface.
 */
export function instanceOfPedestrianCostingOptions(
  value: object,
): value is PedestrianCostingOptions {
  return true;
}

export function PedestrianCostingOptionsFromJSON(
  json: any,
): PedestrianCostingOptions {
  return PedestrianCostingOptionsFromJSONTyped(json, false);
}

export function PedestrianCostingOptionsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): PedestrianCostingOptions {
  if (json == null) {
    return json;
  }
  return {
    walkingSpeed:
      json["walking_speed"] == null ? undefined : json["walking_speed"],
    walkwayFactor:
      json["walkway_factor"] == null ? undefined : json["walkway_factor"],
    sidewalkFactor:
      json["sidewalk_factor"] == null ? undefined : json["sidewalk_factor"],
    alleyFactor:
      json["alley_factor"] == null ? undefined : json["alley_factor"],
    drivewayFactor:
      json["driveway_factor"] == null ? undefined : json["driveway_factor"],
    stepPenalty:
      json["step_penalty"] == null ? undefined : json["step_penalty"],
    useFerry: json["use_ferry"] == null ? undefined : json["use_ferry"],
    useLivingStreets:
      json["use_living_streets"] == null
        ? undefined
        : json["use_living_streets"],
    useTracks: json["use_tracks"] == null ? undefined : json["use_tracks"],
    useHills: json["use_hills"] == null ? undefined : json["use_hills"],
    useLit: json["use_lit"] == null ? undefined : json["use_lit"],
    servicePenalty:
      json["service_penalty"] == null ? undefined : json["service_penalty"],
    serviceFactor:
      json["service_factor"] == null ? undefined : json["service_factor"],
    maxHikingDifficulty:
      json["max_hiking_difficulty"] == null
        ? undefined
        : json["max_hiking_difficulty"],
    bssRentCost:
      json["bss_rent_cost"] == null ? undefined : json["bss_rent_cost"],
    bssRentPenalty:
      json["bss_rent_penalty"] == null ? undefined : json["bss_rent_penalty"],
    type:
      json["type"] == null ? undefined : PedestrianTypeFromJSON(json["type"]),
  };
}

export function PedestrianCostingOptionsToJSON(
  json: any,
): PedestrianCostingOptions {
  return PedestrianCostingOptionsToJSONTyped(json, false);
}

export function PedestrianCostingOptionsToJSONTyped(
  value?: PedestrianCostingOptions | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    walking_speed: value["walkingSpeed"],
    walkway_factor: value["walkwayFactor"],
    sidewalk_factor: value["sidewalkFactor"],
    alley_factor: value["alleyFactor"],
    driveway_factor: value["drivewayFactor"],
    step_penalty: value["stepPenalty"],
    use_ferry: value["useFerry"],
    use_living_streets: value["useLivingStreets"],
    use_tracks: value["useTracks"],
    use_hills: value["useHills"],
    use_lit: value["useLit"],
    service_penalty: value["servicePenalty"],
    service_factor: value["serviceFactor"],
    max_hiking_difficulty: value["maxHikingDifficulty"],
    bss_rent_cost: value["bssRentCost"],
    bss_rent_penalty: value["bssRentPenalty"],
    type: PedestrianTypeToJSON(value["type"]),
  };
}
