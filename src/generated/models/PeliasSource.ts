/* tslint:disable */
/* eslint-disable */
/**
 * Stadia Maps Geospatial APIs
 * The Stadia Maps Geospatial APIs provide you with the data you need to build awesome applications.
 *
 * The version of the OpenAPI document: 6.3.0
 * Contact: support@stadiamaps.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Our database contains info from multiple sources. These identifiers can be used to either limit search results or to determine the relevance of a result.
 * @export
 */
export const PeliasSource = {
    Openstreetmap: 'openstreetmap',
    Openaddresses: 'openaddresses',
    Whosonfirst: 'whosonfirst',
    Geonames: 'geonames'
} as const;
export type PeliasSource = typeof PeliasSource[keyof typeof PeliasSource];


export function instanceOfPeliasSource(value: any): boolean {
    return Object.values(PeliasSource).includes(value);
}

export function PeliasSourceFromJSON(json: any): PeliasSource {
    return PeliasSourceFromJSONTyped(json, false);
}

export function PeliasSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): PeliasSource {
    return json as PeliasSource;
}

export function PeliasSourceToJSON(value?: PeliasSource | null): any {
    return value as any;
}

