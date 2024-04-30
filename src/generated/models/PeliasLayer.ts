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
 * Our database is organized into several layers (in the GIS sense of the term) as follows:
 * 
 * - `venue`: Points of interest, businesses, and things with walls
 * - `address`: Places with a street address
 * - `street`: Streets, roads, highways
 * - `county`: Places that issue passports, nations, nation-states
 * - `macroregion`: A related group of regions (mostly in Europe)
 * - `region`: The first administrative division within a country (usually states and provinces)
 * - `macrocounty`: A related group of counties (mostly in Europe)
 * - `county`: Official governmental areas; usually bigger than a locality, but almost always smaller than a region
 * - `locality`: Towns, hamlets, cities, etc.
 * - `localadmin`: Local administrative boundaries
 * - `borough`: Local administrative boundaries within cities (not widely used, but present in places such as NYC and Mexico City)
 * - `neighbourhood`: Social communities and neighborhoods (note the British spelling in the API!)
 * - `postalcode`: Postal codes used by mail services (note: not used for reverse geocoding)
 * - `coarse`: An alias for simultaneously using all administrative layers (everything except `venue` and `address`)
 * - `marinearea`: Places with fishes and boats.
 * - `ocean`: A really big marine area.
 * 
 * @export
 */
export const PeliasLayer = {
    Venue: 'venue',
    Address: 'address',
    Street: 'street',
    Country: 'country',
    Macroregion: 'macroregion',
    Region: 'region',
    Macrocounty: 'macrocounty',
    County: 'county',
    Locality: 'locality',
    Localadmin: 'localadmin',
    Borough: 'borough',
    Neighbourhood: 'neighbourhood',
    Postalcode: 'postalcode',
    Coarse: 'coarse',
    Dependency: 'dependency',
    Macrohood: 'macrohood',
    Marinearea: 'marinearea',
    Disputed: 'disputed',
    Empire: 'empire',
    Continent: 'continent',
    Ocean: 'ocean'
} as const;
export type PeliasLayer = typeof PeliasLayer[keyof typeof PeliasLayer];


export function instanceOfPeliasLayer(value: any): boolean {
    return Object.values(PeliasLayer).includes(value);
}

export function PeliasLayerFromJSON(json: any): PeliasLayer {
    return PeliasLayerFromJSONTyped(json, false);
}

export function PeliasLayerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PeliasLayer {
    return json as PeliasLayer;
}

export function PeliasLayerToJSON(value?: PeliasLayer | null): any {
    return value as any;
}

