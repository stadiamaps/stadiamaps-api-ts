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
import type { SearchStructuredQuery } from "./SearchStructuredQuery";
import {
  SearchStructuredQueryFromJSON,
  SearchStructuredQueryFromJSONTyped,
  SearchStructuredQueryToJSON,
} from "./SearchStructuredQuery";

/**
 *
 * @export
 * @interface SearchStructuredBulkQuery
 */
export interface SearchStructuredBulkQuery {
  /**
   *
   * @type {string}
   * @memberof SearchStructuredBulkQuery
   */
  endpoint?: SearchStructuredBulkQueryEndpointEnum;
  /**
   *
   * @type {SearchStructuredQuery}
   * @memberof SearchStructuredBulkQuery
   */
  query?: SearchStructuredQuery;
}

/**
 * @export
 */
export const SearchStructuredBulkQueryEndpointEnum = {
  V1SearchStructured: "/v1/search/structured",
} as const;
export type SearchStructuredBulkQueryEndpointEnum =
  (typeof SearchStructuredBulkQueryEndpointEnum)[keyof typeof SearchStructuredBulkQueryEndpointEnum];

/**
 * Check if a given object implements the SearchStructuredBulkQuery interface.
 */
export function instanceOfSearchStructuredBulkQuery(
  value: object,
): value is SearchStructuredBulkQuery {
  return true;
}

export function SearchStructuredBulkQueryFromJSON(
  json: any,
): SearchStructuredBulkQuery {
  return SearchStructuredBulkQueryFromJSONTyped(json, false);
}

export function SearchStructuredBulkQueryFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): SearchStructuredBulkQuery {
  if (json == null) {
    return json;
  }
  return {
    endpoint: json["endpoint"] == null ? undefined : json["endpoint"],
    query:
      json["query"] == null
        ? undefined
        : SearchStructuredQueryFromJSON(json["query"]),
  };
}

export function SearchStructuredBulkQueryToJSON(
  value?: SearchStructuredBulkQuery | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    endpoint: value["endpoint"],
    query: SearchStructuredQueryToJSON(value["query"]),
  };
}
