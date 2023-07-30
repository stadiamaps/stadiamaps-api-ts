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

import { exists, mapValues } from '../runtime';
import type { ManeuverSignElement } from './ManeuverSignElement';
import {
    ManeuverSignElementFromJSON,
    ManeuverSignElementFromJSONTyped,
    ManeuverSignElementToJSON,
} from './ManeuverSignElement';

/**
 * 
 * @export
 * @interface ManeuverSign
 */
export interface ManeuverSign {
    /**
     * A list of exit number elements. This is typically just a single value.
     * @type {Array<ManeuverSignElement>}
     * @memberof ManeuverSign
     */
    exitNumberElements?: Array<ManeuverSignElement>;
    /**
     * A list of exit branch elements. The text is a subsequent road name or route number after the sign.
     * @type {Array<ManeuverSignElement>}
     * @memberof ManeuverSign
     */
    exitBranchElements?: Array<ManeuverSignElement>;
    /**
     * A list of exit name elements. The text is the interchange identifier (used more frequently outside the US).
     * @type {Array<ManeuverSignElement>}
     * @memberof ManeuverSign
     */
    exitTowardElements?: Array<ManeuverSignElement>;
    /**
     * A list of exit name elements. The text is the location where the road ahead goes (typically a city, but occasionally a road name or route number).
     * @type {Array<ManeuverSignElement>}
     * @memberof ManeuverSign
     */
    exitNameElements?: Array<ManeuverSignElement>;
}

/**
 * Check if a given object implements the ManeuverSign interface.
 */
export function instanceOfManeuverSign(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ManeuverSignFromJSON(json: any): ManeuverSign {
    return ManeuverSignFromJSONTyped(json, false);
}

export function ManeuverSignFromJSONTyped(json: any, ignoreDiscriminator: boolean): ManeuverSign {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'exitNumberElements': !exists(json, 'exit_number_elements') ? undefined : ((json['exit_number_elements'] as Array<any>).map(ManeuverSignElementFromJSON)),
        'exitBranchElements': !exists(json, 'exit_branch_elements') ? undefined : ((json['exit_branch_elements'] as Array<any>).map(ManeuverSignElementFromJSON)),
        'exitTowardElements': !exists(json, 'exit_toward_elements') ? undefined : ((json['exit_toward_elements'] as Array<any>).map(ManeuverSignElementFromJSON)),
        'exitNameElements': !exists(json, 'exit_name_elements') ? undefined : ((json['exit_name_elements'] as Array<any>).map(ManeuverSignElementFromJSON)),
    };
}

export function ManeuverSignToJSON(value?: ManeuverSign | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'exit_number_elements': value.exitNumberElements === undefined ? undefined : ((value.exitNumberElements as Array<any>).map(ManeuverSignElementToJSON)),
        'exit_branch_elements': value.exitBranchElements === undefined ? undefined : ((value.exitBranchElements as Array<any>).map(ManeuverSignElementToJSON)),
        'exit_toward_elements': value.exitTowardElements === undefined ? undefined : ((value.exitTowardElements as Array<any>).map(ManeuverSignElementToJSON)),
        'exit_name_elements': value.exitNameElements === undefined ? undefined : ((value.exitNameElements as Array<any>).map(ManeuverSignElementToJSON)),
    };
}

