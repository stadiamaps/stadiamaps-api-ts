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
export const NodeType = {
  StreetIntersection: "street_intersection",
  Gate: "gate",
  Bollard: "bollard",
  TollBooth: "toll_booth",
  MultiUseTransitStop: "multi_use_transit_stop",
  BikeShare: "bike_share",
  Parking: "parking",
  MotorWayJunction: "motor_way_junction",
  BorderControl: "border_control",
} as const;
export type NodeType = (typeof NodeType)[keyof typeof NodeType];

export function instanceOfNodeType(value: any): boolean {
  for (const key in NodeType) {
    if (Object.prototype.hasOwnProperty.call(NodeType, key)) {
      if ((NodeType as Record<string, NodeType>)[key] === value) {
        return true;
      }
    }
  }
  return false;
}

export function NodeTypeFromJSON(json: any): NodeType {
  return NodeTypeFromJSONTyped(json, false);
}

export function NodeTypeFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): NodeType {
  return json as NodeType;
}

export function NodeTypeToJSON(value?: NodeType | null): any {
  return value as any;
}
