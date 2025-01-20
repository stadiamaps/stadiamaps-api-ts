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

/**
 * The directions in which the edge is traversable.
 * @export
 */
export const Traversability = {
  Forward: "forward",
  Backward: "backward",
  Both: "both",
} as const;
export type Traversability =
  (typeof Traversability)[keyof typeof Traversability];

export function instanceOfTraversability(value: any): boolean {
  for (const key in Traversability) {
    if (Object.prototype.hasOwnProperty.call(Traversability, key)) {
      if (Traversability[key as keyof typeof Traversability] === value) {
        return true;
      }
    }
  }
  return false;
}

export function TraversabilityFromJSON(json: any): Traversability {
  return TraversabilityFromJSONTyped(json, false);
}

export function TraversabilityFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): Traversability {
  return json as Traversability;
}

export function TraversabilityToJSON(value?: Traversability | null): any {
  return value as any;
}

export function TraversabilityToJSONTyped(
  value: any,
  ignoreDiscriminator: boolean,
): Traversability {
  return value as Traversability;
}
