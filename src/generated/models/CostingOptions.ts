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

import { mapValues } from '../runtime';
import type { MotorScooterCostingOptions } from './MotorScooterCostingOptions';
import {
    MotorScooterCostingOptionsFromJSON,
    MotorScooterCostingOptionsFromJSONTyped,
    MotorScooterCostingOptionsToJSON,
} from './MotorScooterCostingOptions';
import type { PedestrianCostingOptions } from './PedestrianCostingOptions';
import {
    PedestrianCostingOptionsFromJSON,
    PedestrianCostingOptionsFromJSONTyped,
    PedestrianCostingOptionsToJSON,
} from './PedestrianCostingOptions';
import type { TruckCostingOptions } from './TruckCostingOptions';
import {
    TruckCostingOptionsFromJSON,
    TruckCostingOptionsFromJSONTyped,
    TruckCostingOptionsToJSON,
} from './TruckCostingOptions';
import type { BicycleCostingOptions } from './BicycleCostingOptions';
import {
    BicycleCostingOptionsFromJSON,
    BicycleCostingOptionsFromJSONTyped,
    BicycleCostingOptionsToJSON,
} from './BicycleCostingOptions';
import type { LowSpeedVehicleCostingOptions } from './LowSpeedVehicleCostingOptions';
import {
    LowSpeedVehicleCostingOptionsFromJSON,
    LowSpeedVehicleCostingOptionsFromJSONTyped,
    LowSpeedVehicleCostingOptionsToJSON,
} from './LowSpeedVehicleCostingOptions';
import type { MotorcycleCostingOptions } from './MotorcycleCostingOptions';
import {
    MotorcycleCostingOptionsFromJSON,
    MotorcycleCostingOptionsFromJSONTyped,
    MotorcycleCostingOptionsToJSON,
} from './MotorcycleCostingOptions';
import type { AutoCostingOptions } from './AutoCostingOptions';
import {
    AutoCostingOptionsFromJSON,
    AutoCostingOptionsFromJSONTyped,
    AutoCostingOptionsToJSON,
} from './AutoCostingOptions';

/**
 * 
 * @export
 * @interface CostingOptions
 */
export interface CostingOptions {
    /**
     * 
     * @type {AutoCostingOptions}
     * @memberof CostingOptions
     */
    auto?: AutoCostingOptions;
    /**
     * 
     * @type {AutoCostingOptions}
     * @memberof CostingOptions
     */
    bus?: AutoCostingOptions;
    /**
     * 
     * @type {AutoCostingOptions}
     * @memberof CostingOptions
     */
    taxi?: AutoCostingOptions;
    /**
     * 
     * @type {TruckCostingOptions}
     * @memberof CostingOptions
     */
    truck?: TruckCostingOptions;
    /**
     * 
     * @type {BicycleCostingOptions}
     * @memberof CostingOptions
     */
    bicycle?: BicycleCostingOptions;
    /**
     * 
     * @type {MotorScooterCostingOptions}
     * @memberof CostingOptions
     */
    motorScooter?: MotorScooterCostingOptions;
    /**
     * 
     * @type {MotorcycleCostingOptions}
     * @memberof CostingOptions
     */
    motorcycle?: MotorcycleCostingOptions;
    /**
     * 
     * @type {PedestrianCostingOptions}
     * @memberof CostingOptions
     */
    pedestrian?: PedestrianCostingOptions;
    /**
     * 
     * @type {LowSpeedVehicleCostingOptions}
     * @memberof CostingOptions
     */
    lowSpeedVehicle?: LowSpeedVehicleCostingOptions;
}

/**
 * Check if a given object implements the CostingOptions interface.
 */
export function instanceOfCostingOptions(value: object): value is CostingOptions {
    return true;
}

export function CostingOptionsFromJSON(json: any): CostingOptions {
    return CostingOptionsFromJSONTyped(json, false);
}

export function CostingOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CostingOptions {
    if (json == null) {
        return json;
    }
    return {
        
        'auto': json['auto'] == null ? undefined : AutoCostingOptionsFromJSON(json['auto']),
        'bus': json['bus'] == null ? undefined : AutoCostingOptionsFromJSON(json['bus']),
        'taxi': json['taxi'] == null ? undefined : AutoCostingOptionsFromJSON(json['taxi']),
        'truck': json['truck'] == null ? undefined : TruckCostingOptionsFromJSON(json['truck']),
        'bicycle': json['bicycle'] == null ? undefined : BicycleCostingOptionsFromJSON(json['bicycle']),
        'motorScooter': json['motor_scooter'] == null ? undefined : MotorScooterCostingOptionsFromJSON(json['motor_scooter']),
        'motorcycle': json['motorcycle'] == null ? undefined : MotorcycleCostingOptionsFromJSON(json['motorcycle']),
        'pedestrian': json['pedestrian'] == null ? undefined : PedestrianCostingOptionsFromJSON(json['pedestrian']),
        'lowSpeedVehicle': json['low_speed_vehicle'] == null ? undefined : LowSpeedVehicleCostingOptionsFromJSON(json['low_speed_vehicle']),
    };
}

export function CostingOptionsToJSON(value?: CostingOptions | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'auto': AutoCostingOptionsToJSON(value['auto']),
        'bus': AutoCostingOptionsToJSON(value['bus']),
        'taxi': AutoCostingOptionsToJSON(value['taxi']),
        'truck': TruckCostingOptionsToJSON(value['truck']),
        'bicycle': BicycleCostingOptionsToJSON(value['bicycle']),
        'motor_scooter': MotorScooterCostingOptionsToJSON(value['motorScooter']),
        'motorcycle': MotorcycleCostingOptionsToJSON(value['motorcycle']),
        'pedestrian': PedestrianCostingOptionsToJSON(value['pedestrian']),
        'low_speed_vehicle': LowSpeedVehicleCostingOptionsToJSON(value['lowSpeedVehicle']),
    };
}

