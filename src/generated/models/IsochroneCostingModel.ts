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
 * 
 * @export
 */
export const IsochroneCostingModel = {
    Auto: 'auto',
    Bicycle: 'bicycle',
    Pedestrian: 'pedestrian'
} as const;
export type IsochroneCostingModel = typeof IsochroneCostingModel[keyof typeof IsochroneCostingModel];


export function instanceOfIsochroneCostingModel(value: any): boolean {
    return Object.values(IsochroneCostingModel).includes(value);
}

export function IsochroneCostingModelFromJSON(json: any): IsochroneCostingModel {
    return IsochroneCostingModelFromJSONTyped(json, false);
}

export function IsochroneCostingModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): IsochroneCostingModel {
    return json as IsochroneCostingModel;
}

export function IsochroneCostingModelToJSON(value?: IsochroneCostingModel | null): any {
    return value as any;
}

