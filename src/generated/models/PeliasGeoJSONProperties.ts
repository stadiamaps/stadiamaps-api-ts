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
import type { PeliasGeoJSONPropertiesAddendum } from "./PeliasGeoJSONPropertiesAddendum";
import {
  PeliasGeoJSONPropertiesAddendumFromJSON,
  PeliasGeoJSONPropertiesAddendumFromJSONTyped,
  PeliasGeoJSONPropertiesAddendumToJSON,
} from "./PeliasGeoJSONPropertiesAddendum";
import type { PeliasLayer } from "./PeliasLayer";
import {
  PeliasLayerFromJSON,
  PeliasLayerFromJSONTyped,
  PeliasLayerToJSON,
} from "./PeliasLayer";

/**
 *
 * @export
 * @interface PeliasGeoJSONProperties
 */
export interface PeliasGeoJSONProperties {
  [key: string]: any | any;
  /**
   * A scoped GID for this result. This can be passed to the place endpoint. Note that these are not always stable. For Geonames and Who's on First, these are usually stable, but for other sources like OSM, no stability is guaranteed.
   * @type {string}
   * @memberof PeliasGeoJSONProperties
   */
  gid?: string;
  /**
   * An ID referencing the original data source (specified via source) for the result. These IDs are specific to the source that they originated from. For example, in the case of OSM, these typically look like way/123 or point/123.
   * @type {string}
   * @memberof PeliasGeoJSONProperties
   */
  sourceId?: string;
  /**
   * A full, human-readable label. However, you may not necessarily want to use this; be sure to read the docs for name, locality, and region before making a decision. This field is mostly localized. The order of components is generally locally correct (ex: for an address in South Korea, the house number appears after the street name). However, components will use a request language equivalent if one exists (ex: Seoul instead of 서울 if lang=en).
   * @type {string}
   * @memberof PeliasGeoJSONProperties
   */
  label?: string;
  /**
   *
   * @type {PeliasLayer}
   * @memberof PeliasGeoJSONProperties
   */
  layer?: PeliasLayer;
  /**
   * The name of the place, the street address including house number, or label of similar relevance. If your app is localized to a specific region, you may get better display results by combining name, locality OR region (or neither?), and postal code together in the local format. Experiment with what works best for your use case.
   * @type {string}
   * @memberof PeliasGeoJSONProperties
   */
  name?: string;
  /**
   * The accuracy of the geographic coordinates in the result. This value is a property of the result itself and won't change based on the query.
   * A point result means that the record can reasonably be represented by a single geographic point. Addresses, venues, or interpolated addresses usually have point accuracy.
   * Larger areas, such as a city or country, cannot be represented by a single point, so a centroid is given instead.
   * @type {string}
   * @memberof PeliasGeoJSONProperties
   */
  accuracy?: PeliasGeoJSONPropertiesAccuracyEnum;
  /**
   *
   * @type {PeliasGeoJSONPropertiesAddendum}
   * @memberof PeliasGeoJSONProperties
   */
  addendum?: PeliasGeoJSONPropertiesAddendum;
  /**
   *
   * @type {string}
   * @memberof PeliasGeoJSONProperties
   */
  continent?: string;
  /**
   *
   * @type {string}
   * @memberof PeliasGeoJSONProperties
   */
  continentGid?: string;
  /**
   *
   * @type {string}
   * @memberof PeliasGeoJSONProperties
   */
  country?: string;
  /**
   *
   * @type {string}
   * @memberof PeliasGeoJSONProperties
   */
  countryGid?: string;
  /**
   *
   * @type {string}
   * @memberof PeliasGeoJSONProperties
   */
  neighbourhood?: string;
  /**
   *
   * @type {string}
   * @memberof PeliasGeoJSONProperties
   */
  neighbourhoodGid?: string;
  /**
   *
   * @type {string}
   * @memberof PeliasGeoJSONProperties
   */
  borough?: string;
  /**
   *
   * @type {string}
   * @memberof PeliasGeoJSONProperties
   */
  boroughGid?: string;
  /**
   *
   * @type {string}
   * @memberof PeliasGeoJSONProperties
   */
  postalcode?: string;
  /**
   *
   * @type {string}
   * @memberof PeliasGeoJSONProperties
   */
  street?: string;
  /**
   *
   * @type {string}
   * @memberof PeliasGeoJSONProperties
   */
  housenumber?: string;
  /**
   * The city, village, town, etc. that the place / address is part of. Note that values may not always match postal or local conventions perfectly.
   * @type {string}
   * @memberof PeliasGeoJSONProperties
   */
  locality?: string;
  /**
   *
   * @type {string}
   * @memberof PeliasGeoJSONProperties
   */
  localityGid?: string;
  /**
   * Administrative divisions between localities and regions. Useful for disambiguating nearby results with similar names.
   * @type {string}
   * @memberof PeliasGeoJSONProperties
   */
  county?: string;
  /**
   * Typically the first administrative division within a country. For example, a US state or a Canadian province.
   * @type {string}
   * @memberof PeliasGeoJSONProperties
   */
  region?: string;
  /**
   * The abbreviation for the region.
   * @type {string}
   * @memberof PeliasGeoJSONProperties
   */
  regionA?: string;
}

/**
 * @export
 */
export const PeliasGeoJSONPropertiesAccuracyEnum = {
  Point: "point",
  Centroid: "centroid",
} as const;
export type PeliasGeoJSONPropertiesAccuracyEnum =
  (typeof PeliasGeoJSONPropertiesAccuracyEnum)[keyof typeof PeliasGeoJSONPropertiesAccuracyEnum];

/**
 * Check if a given object implements the PeliasGeoJSONProperties interface.
 */
export function instanceOfPeliasGeoJSONProperties(
  value: object,
): value is PeliasGeoJSONProperties {
  return true;
}

export function PeliasGeoJSONPropertiesFromJSON(
  json: any,
): PeliasGeoJSONProperties {
  return PeliasGeoJSONPropertiesFromJSONTyped(json, false);
}

export function PeliasGeoJSONPropertiesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): PeliasGeoJSONProperties {
  if (json == null) {
    return json;
  }
  return {
    ...json,
    gid: json["gid"] == null ? undefined : json["gid"],
    sourceId: json["source_id"] == null ? undefined : json["source_id"],
    label: json["label"] == null ? undefined : json["label"],
    layer:
      json["layer"] == null ? undefined : PeliasLayerFromJSON(json["layer"]),
    name: json["name"] == null ? undefined : json["name"],
    accuracy: json["accuracy"] == null ? undefined : json["accuracy"],
    addendum:
      json["addendum"] == null
        ? undefined
        : PeliasGeoJSONPropertiesAddendumFromJSON(json["addendum"]),
    continent: json["continent"] == null ? undefined : json["continent"],
    continentGid:
      json["continent_gid"] == null ? undefined : json["continent_gid"],
    country: json["country"] == null ? undefined : json["country"],
    countryGid: json["country_gid"] == null ? undefined : json["country_gid"],
    neighbourhood:
      json["neighbourhood"] == null ? undefined : json["neighbourhood"],
    neighbourhoodGid:
      json["neighbourhood_gid"] == null ? undefined : json["neighbourhood_gid"],
    borough: json["borough"] == null ? undefined : json["borough"],
    boroughGid: json["borough_gid"] == null ? undefined : json["borough_gid"],
    postalcode: json["postalcode"] == null ? undefined : json["postalcode"],
    street: json["street"] == null ? undefined : json["street"],
    housenumber: json["housenumber"] == null ? undefined : json["housenumber"],
    locality: json["locality"] == null ? undefined : json["locality"],
    localityGid:
      json["locality_gid"] == null ? undefined : json["locality_gid"],
    county: json["county"] == null ? undefined : json["county"],
    region: json["region"] == null ? undefined : json["region"],
    regionA: json["region_a"] == null ? undefined : json["region_a"],
  };
}

export function PeliasGeoJSONPropertiesToJSON(
  value?: PeliasGeoJSONProperties | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    ...value,
    gid: value["gid"],
    source_id: value["sourceId"],
    label: value["label"],
    layer: PeliasLayerToJSON(value["layer"]),
    name: value["name"],
    accuracy: value["accuracy"],
    addendum: PeliasGeoJSONPropertiesAddendumToJSON(value["addendum"]),
    continent: value["continent"],
    continent_gid: value["continentGid"],
    country: value["country"],
    country_gid: value["countryGid"],
    neighbourhood: value["neighbourhood"],
    neighbourhood_gid: value["neighbourhoodGid"],
    borough: value["borough"],
    borough_gid: value["boroughGid"],
    postalcode: value["postalcode"],
    street: value["street"],
    housenumber: value["housenumber"],
    locality: value["locality"],
    locality_gid: value["localityGid"],
    county: value["county"],
    region: value["region"],
    region_a: value["regionA"],
  };
}
