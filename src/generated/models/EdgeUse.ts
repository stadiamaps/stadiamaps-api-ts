/* tslint:disable */
/* eslint-disable */
/**
 * Stadia Maps Geospatial APIs
 * The Stadia Maps Geospatial APIs provide you with the data you need to build awesome applications.
 *
 * The version of the OpenAPI document: 5.0.6
 * Contact: support@stadiamaps.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * The use for the edge.
 * @export
 */
export const EdgeUse = {
    Road: 'road',
    Ramp: 'ramp',
    TurnChannel: 'turn_channel',
    Track: 'track',
    Driveway: 'driveway',
    Alley: 'alley',
    ParkingAisle: 'parking_aisle',
    EmergencyAccess: 'emergency_access',
    DriveThrough: 'drive_through',
    Culdesac: 'culdesac',
    LivingStreet: 'living_street',
    ServiceRoad: 'service_road',
    Cycleway: 'cycleway',
    MountainBike: 'mountain_bike',
    Sidewalk: 'sidewalk',
    Footway: 'footway',
    Steps: 'steps',
    Path: 'path',
    Pedestrian: 'pedestrian',
    PedestrianCrossing: 'pedestrian_crossing',
    Bridleway: 'bridleway',
    RestArea: 'rest_area',
    ServiceArea: 'service_area',
    Other: 'other',
    Ferry: 'ferry',
    RailFerry: 'rail-ferry',
    Rail: 'rail',
    Bus: 'bus',
    EgressConnection: 'egress_connection',
    PlatformConnection: 'platform_connection',
    TransitConnection: 'transit_connection'
} as const;
export type EdgeUse = typeof EdgeUse[keyof typeof EdgeUse];


export function EdgeUseFromJSON(json: any): EdgeUse {
    return EdgeUseFromJSONTyped(json, false);
}

export function EdgeUseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EdgeUse {
    return json as EdgeUse;
}

export function EdgeUseToJSON(value?: EdgeUse | null): any {
    return value as any;
}

