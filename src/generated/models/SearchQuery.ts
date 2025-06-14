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
import type { GeocodingSource } from "./GeocodingSource";
import {
  GeocodingSourceFromJSON,
  GeocodingSourceFromJSONTyped,
  GeocodingSourceToJSON,
  GeocodingSourceToJSONTyped,
} from "./GeocodingSource";
import type { GeocodingLayer } from "./GeocodingLayer";
import {
  GeocodingLayerFromJSON,
  GeocodingLayerFromJSONTyped,
  GeocodingLayerToJSON,
  GeocodingLayerToJSONTyped,
} from "./GeocodingLayer";

/**
 *
 * @export
 * @interface SearchQuery
 */
export interface SearchQuery {
  /**
   * The place name (address, venue name, etc.) to search for.
   * @type {string}
   * @memberof SearchQuery
   */
  text?: string;
  /**
   * The latitude of the point to focus the search on. This will bias results toward the focus point. Requires `focus.point.lon`.
   * @type {number}
   * @memberof SearchQuery
   */
  focusPointLat?: number;
  /**
   * The longitude of the point to focus the search on. This will bias results toward the focus point. Requires `focus.point.lat`.
   * @type {number}
   * @memberof SearchQuery
   */
  focusPointLon?: number;
  /**
   * Defines the min latitude component of a bounding box to limit the search to. Requires all other `boundary.rect` parameters to be specified.
   * @type {number}
   * @memberof SearchQuery
   */
  boundaryRectMinLat?: number;
  /**
   * Defines the max latitude component of a bounding box to limit the search to. Requires all other `boundary.rect` parameters to be specified.
   * @type {number}
   * @memberof SearchQuery
   */
  boundaryRectMaxLat?: number;
  /**
   * Defines the min longitude component of a bounding box to limit the search to. Requires all other `boundary.rect` parameters to be specified.
   * @type {number}
   * @memberof SearchQuery
   */
  boundaryRectMinLon?: number;
  /**
   * Defines the max longitude component of a bounding box to limit the search to. Requires all other `boundary.rect` parameters to be specified.
   * @type {number}
   * @memberof SearchQuery
   */
  boundaryRectMaxLon?: number;
  /**
   * The latitude of the center of a circle to limit the search to. Requires `boundary.circle.lon`.
   * @type {number}
   * @memberof SearchQuery
   */
  boundaryCircleLat?: number;
  /**
   * The longitude of the center of a circle to limit the search to. Requires `boundary.circle.lat`.
   * @type {number}
   * @memberof SearchQuery
   */
  boundaryCircleLon?: number;
  /**
   * The radius of the circle (in kilometers) to limit the search to. Defaults to 50km if unspecified.
   * @type {number}
   * @memberof SearchQuery
   */
  boundaryCircleRadius?: number;
  /**
   * A list of country codes in ISO 3116-1 alpha-2 or alpha-3 format.
   * @type {Array<string>}
   * @memberof SearchQuery
   */
  boundaryCountry?: Array<string>;
  /**
   * The GID of an area to limit the search to.
   * @type {string}
   * @memberof SearchQuery
   */
  boundaryGid?: string;
  /**
   * A list of layers to limit the search to.
   * @type {Array<GeocodingLayer>}
   * @memberof SearchQuery
   */
  layers?: Array<GeocodingLayer>;
  /**
   * A list of sources to limit the search to.
   * @type {Array<GeocodingSource>}
   * @memberof SearchQuery
   */
  sources?: Array<GeocodingSource>;
  /**
   * The maximum number of results to return.
   * @type {number}
   * @memberof SearchQuery
   */
  size?: number;
  /**
   * A BCP47 language tag which specifies a preference for localization of results. By default, results are in the default locale of the source data, but specifying a language will attempt to localize the results. Note that while a `langtag` (in RFC 5646 terms) can contain script, region, etc., only the `language` portion, an ISO 639 code, will be considered. So `en-US` and `en-GB` will both be treated as English.
   * @type {string}
   * @memberof SearchQuery
   */
  lang?: string;
}

/**
 * Check if a given object implements the SearchQuery interface.
 */
export function instanceOfSearchQuery(value: object): value is SearchQuery {
  return "text" in value;
}

export function SearchQueryFromJSON(json: any): SearchQuery {
  return SearchQueryFromJSONTyped(json, false);
}

export function SearchQueryFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): SearchQuery {
  if (json == null) {
    return json;
  }
  return {
    text: json["text"] == null ? undefined : json["text"],
    focusPointLat:
      json["focus.point.lat"] == null ? undefined : json["focus.point.lat"],
    focusPointLon:
      json["focus.point.lon"] == null ? undefined : json["focus.point.lon"],
    boundaryRectMinLat:
      json["boundary.rect.min_lat"] == null
        ? undefined
        : json["boundary.rect.min_lat"],
    boundaryRectMaxLat:
      json["boundary.rect.max_lat"] == null
        ? undefined
        : json["boundary.rect.max_lat"],
    boundaryRectMinLon:
      json["boundary.rect.min_lon"] == null
        ? undefined
        : json["boundary.rect.min_lon"],
    boundaryRectMaxLon:
      json["boundary.rect.max_lon"] == null
        ? undefined
        : json["boundary.rect.max_lon"],
    boundaryCircleLat:
      json["boundary.circle.lat"] == null
        ? undefined
        : json["boundary.circle.lat"],
    boundaryCircleLon:
      json["boundary.circle.lon"] == null
        ? undefined
        : json["boundary.circle.lon"],
    boundaryCircleRadius:
      json["boundary.circle.radius"] == null
        ? undefined
        : json["boundary.circle.radius"],
    boundaryCountry:
      json["boundary.country"] == null ? undefined : json["boundary.country"],
    boundaryGid:
      json["boundary.gid"] == null ? undefined : json["boundary.gid"],
    layers:
      json["layers"] == null
        ? undefined
        : (json["layers"] as Array<any>).map(GeocodingLayerFromJSON),
    sources:
      json["sources"] == null
        ? undefined
        : (json["sources"] as Array<any>).map(GeocodingSourceFromJSON),
    size: json["size"] == null ? undefined : json["size"],
    lang: json["lang"] == null ? undefined : json["lang"],
  };
}

export function SearchQueryToJSON(json: any): SearchQuery {
  return SearchQueryToJSONTyped(json, false);
}

export function SearchQueryToJSONTyped(
  value?: SearchQuery | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    text: value["text"],
    "focus.point.lat": value["focusPointLat"],
    "focus.point.lon": value["focusPointLon"],
    "boundary.rect.min_lat": value["boundaryRectMinLat"],
    "boundary.rect.max_lat": value["boundaryRectMaxLat"],
    "boundary.rect.min_lon": value["boundaryRectMinLon"],
    "boundary.rect.max_lon": value["boundaryRectMaxLon"],
    "boundary.circle.lat": value["boundaryCircleLat"],
    "boundary.circle.lon": value["boundaryCircleLon"],
    "boundary.circle.radius": value["boundaryCircleRadius"],
    "boundary.country": value["boundaryCountry"],
    "boundary.gid": value["boundaryGid"],
    layers:
      value["layers"] == null
        ? undefined
        : (value["layers"] as Array<any>).map(GeocodingLayerToJSON),
    sources:
      value["sources"] == null
        ? undefined
        : (value["sources"] as Array<any>).map(GeocodingSourceToJSON),
    size: value["size"],
    lang: value["lang"],
  };
}
