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
import type { RoutingWaypointAllOfSearchFilter } from './RoutingWaypointAllOfSearchFilter';
import {
    RoutingWaypointAllOfSearchFilterFromJSON,
    RoutingWaypointAllOfSearchFilterFromJSONTyped,
    RoutingWaypointAllOfSearchFilterToJSON,
} from './RoutingWaypointAllOfSearchFilter';

/**
 * 
 * @export
 * @interface RoutingWaypointAllOf
 */
export interface RoutingWaypointAllOf {
    /**
     * The preferred direction of travel when starting the route, in integer clockwise degrees from north. North is 0, south is 180, east is 90, and west is 270.
     * @type {number}
     * @memberof RoutingWaypointAllOf
     */
    heading?: number;
    /**
     * The tolerance (in degrees) determining whether a street is considered the same direction.
     * @type {number}
     * @memberof RoutingWaypointAllOf
     */
    headingTolerance?: number;
    /**
     * The minimum number of nodes that must be reachable for a given edge to consider that edge as belonging to a connected region. If a candidate edge has fewer connections, it will be considered a disconnected island.
     * @type {number}
     * @memberof RoutingWaypointAllOf
     */
    minimumReachability?: number;
    /**
     * The distance (in meters) to look for candidate edges around the location for purposes of snapping locations to the route graph. If there are no candidates within this distance, the closest candidate within a reasonable search distance will be used. This is subject to clamping by internal limits.
     * @type {number}
     * @memberof RoutingWaypointAllOf
     */
    radius?: number;
    /**
     * If true, candidates will be ranked according to their distance from the target location as well as other factors. If false, candidates will only be ranked using their distance from the target.
     * @type {boolean}
     * @memberof RoutingWaypointAllOf
     */
    rankCandidates?: boolean;
    /**
     * If the location is not offset from the road centerline or is closest to an intersection, this option has no effect. Otherwise, the preferred side of street is used to determine whether or not the location should be visited from the same, opposite or either side of the road with respect to the side of the road the given locale drives on.
     * @type {string}
     * @memberof RoutingWaypointAllOf
     */
    preferredSide?: RoutingWaypointAllOfPreferredSideEnum;
    /**
     * During edge correlation this is the tolerance (in meters) used to determine whether or not to snap to the intersection rather than along the street, if the snap location is within this distance from the intersection, the intersection is used instead.
     * @type {number}
     * @memberof RoutingWaypointAllOf
     */
    nodeSnapTolerance?: number;
    /**
     * A tolerance in meters from the edge centerline used for determining the side of the street that the location is on. If the distance to the centerline is less than this tolerance, no side will be inferred. Otherwise, the left or right side will be selected depending on the direction of travel.
     * @type {number}
     * @memberof RoutingWaypointAllOf
     */
    streetSideTolerance?: number;
    /**
     * A tolerance in meters from the edge centerline used for determining the side of the street that the location is on. If the distance to the centerline is greater than this tolerance, no side will be inferred. Otherwise, the left or right side will be selected depending on the direction of travel.
     * @type {number}
     * @memberof RoutingWaypointAllOf
     */
    streetSideMaxDistance?: number;
    /**
     * 
     * @type {RoutingWaypointAllOfSearchFilter}
     * @memberof RoutingWaypointAllOf
     */
    searchFilter?: RoutingWaypointAllOfSearchFilter;
}


/**
 * @export
 */
export const RoutingWaypointAllOfPreferredSideEnum = {
    Same: 'same',
    Opposite: 'opposite',
    Either: 'either'
} as const;
export type RoutingWaypointAllOfPreferredSideEnum = typeof RoutingWaypointAllOfPreferredSideEnum[keyof typeof RoutingWaypointAllOfPreferredSideEnum];


/**
 * Check if a given object implements the RoutingWaypointAllOf interface.
 */
export function instanceOfRoutingWaypointAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoutingWaypointAllOfFromJSON(json: any): RoutingWaypointAllOf {
    return RoutingWaypointAllOfFromJSONTyped(json, false);
}

export function RoutingWaypointAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoutingWaypointAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'heading': !exists(json, 'heading') ? undefined : json['heading'],
        'headingTolerance': !exists(json, 'heading_tolerance') ? undefined : json['heading_tolerance'],
        'minimumReachability': !exists(json, 'minimum_reachability') ? undefined : json['minimum_reachability'],
        'radius': !exists(json, 'radius') ? undefined : json['radius'],
        'rankCandidates': !exists(json, 'rank_candidates') ? undefined : json['rank_candidates'],
        'preferredSide': !exists(json, 'preferred_side') ? undefined : json['preferred_side'],
        'nodeSnapTolerance': !exists(json, 'node_snap_tolerance') ? undefined : json['node_snap_tolerance'],
        'streetSideTolerance': !exists(json, 'street_side_tolerance') ? undefined : json['street_side_tolerance'],
        'streetSideMaxDistance': !exists(json, 'street_side_max_distance') ? undefined : json['street_side_max_distance'],
        'searchFilter': !exists(json, 'search_filter') ? undefined : RoutingWaypointAllOfSearchFilterFromJSON(json['search_filter']),
    };
}

export function RoutingWaypointAllOfToJSON(value?: RoutingWaypointAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'heading': value.heading,
        'heading_tolerance': value.headingTolerance,
        'minimum_reachability': value.minimumReachability,
        'radius': value.radius,
        'rank_candidates': value.rankCandidates,
        'preferred_side': value.preferredSide,
        'node_snap_tolerance': value.nodeSnapTolerance,
        'street_side_tolerance': value.streetSideTolerance,
        'street_side_max_distance': value.streetSideMaxDistance,
        'search_filter': RoutingWaypointAllOfSearchFilterToJSON(value.searchFilter),
    };
}

