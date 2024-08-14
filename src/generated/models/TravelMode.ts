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

/**
 *
 * @export
 */
export const TravelMode = {
  Drive: "drive",
  Pedestrian: "pedestrian",
  Bicycle: "bicycle",
  Transit: "transit",
} as const;
export type TravelMode = (typeof TravelMode)[keyof typeof TravelMode];

export function instanceOfTravelMode(value: any): boolean {
  for (const key in TravelMode) {
    if (Object.prototype.hasOwnProperty.call(TravelMode, key)) {
      if ((TravelMode as Record<string, TravelMode>)[key] === value) {
        return true;
      }
    }
  }
  return false;
}

export function TravelModeFromJSON(json: any): TravelMode {
  return TravelModeFromJSONTyped(json, false);
}

export function TravelModeFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): TravelMode {
  return json as TravelMode;
}

export function TravelModeToJSON(value?: TravelMode | null): any {
  return value as any;
}
