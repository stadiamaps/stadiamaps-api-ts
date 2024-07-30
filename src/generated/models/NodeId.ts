/* tslint:disable */
/* eslint-disable */
/**
 * Stadia Maps Geospatial APIs
 * The Stadia Maps Geospatial APIs provide you with the data you need to build awesome applications.
 *
 * The version of the OpenAPI document: 6.6.0
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
 * @interface NodeId
 */
export interface NodeId {
  /**
   *
   * @type {number}
   * @memberof NodeId
   */
  id?: number;
  /**
   *
   * @type {number}
   * @memberof NodeId
   */
  value?: number;
  /**
   *
   * @type {number}
   * @memberof NodeId
   */
  tileId?: number;
  /**
   *
   * @type {number}
   * @memberof NodeId
   */
  level?: number;
}

/**
 * Check if a given object implements the NodeId interface.
 */
export function instanceOfNodeId(value: object): value is NodeId {
  return true;
}

export function NodeIdFromJSON(json: any): NodeId {
  return NodeIdFromJSONTyped(json, false);
}

export function NodeIdFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): NodeId {
  if (json == null) {
    return json;
  }
  return {
    id: json["id"] == null ? undefined : json["id"],
    value: json["value"] == null ? undefined : json["value"],
    tileId: json["tile_id"] == null ? undefined : json["tile_id"],
    level: json["level"] == null ? undefined : json["level"],
  };
}

export function NodeIdToJSON(value?: NodeId | null): any {
  if (value == null) {
    return value;
  }
  return {
    id: value["id"],
    value: value["value"],
    tile_id: value["tileId"],
    level: value["level"],
  };
}
