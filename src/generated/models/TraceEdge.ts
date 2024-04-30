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

import { mapValues } from '../runtime';
import type { EdgeSign } from './EdgeSign';
import {
    EdgeSignFromJSON,
    EdgeSignFromJSONTyped,
    EdgeSignToJSON,
} from './EdgeSign';
import type { EdgeUse } from './EdgeUse';
import {
    EdgeUseFromJSON,
    EdgeUseFromJSONTyped,
    EdgeUseToJSON,
} from './EdgeUse';
import type { EndNode } from './EndNode';
import {
    EndNodeFromJSON,
    EndNodeFromJSONTyped,
    EndNodeToJSON,
} from './EndNode';
import type { RoadClass } from './RoadClass';
import {
    RoadClassFromJSON,
    RoadClassFromJSONTyped,
    RoadClassToJSON,
} from './RoadClass';
import type { TravelMode } from './TravelMode';
import {
    TravelModeFromJSON,
    TravelModeFromJSONTyped,
    TravelModeToJSON,
} from './TravelMode';
import type { Traversability } from './Traversability';
import {
    TraversabilityFromJSON,
    TraversabilityFromJSONTyped,
    TraversabilityToJSON,
} from './Traversability';

/**
 * 
 * @export
 * @interface TraceEdge
 */
export interface TraceEdge {
    /**
     * The name(s) of the road at this edge, if any.
     * @type {Array<string>}
     * @memberof TraceEdge
     */
    names?: Array<string>;
    /**
     * The length of this edge in `units`.
     * @type {number}
     * @memberof TraceEdge
     */
    length?: number;
    /**
     * The speed of this edge in `units`/hr, in terms of average/free-flow speed for routing purposes. This is affected by any number of factors such as the road service, vehicle type, etc. and not just the posted speed limits.
     * @type {number}
     * @memberof TraceEdge
     */
    speed?: number;
    /**
     * 
     * @type {RoadClass}
     * @memberof TraceEdge
     */
    roadClass?: RoadClass;
    /**
     * The direction at the beginning of an edge. The units are degrees clockwise from north.
     * @type {number}
     * @memberof TraceEdge
     */
    beginHeading?: number;
    /**
     * The direction at the end of an edge. The units are degrees clockwise from north.
     * @type {number}
     * @memberof TraceEdge
     */
    endHeading?: number;
    /**
     * Index into the list of shape points for the start of the edge.
     * @type {number}
     * @memberof TraceEdge
     */
    beginShapeIndex?: number;
    /**
     * Index into the list of shape points for the end of the edge.
     * @type {number}
     * @memberof TraceEdge
     */
    endShapeIndex?: number;
    /**
     * 
     * @type {Traversability}
     * @memberof TraceEdge
     */
    traversability?: Traversability;
    /**
     * 
     * @type {EdgeUse}
     * @memberof TraceEdge
     */
    use?: EdgeUse;
    /**
     * True if the edge has a toll.
     * @type {boolean}
     * @memberof TraceEdge
     */
    toll?: boolean;
    /**
     * True if the edge has rough payment.
     * @type {boolean}
     * @memberof TraceEdge
     */
    unpaved?: boolean;
    /**
     * True if the edge is a tunnel.
     * @type {boolean}
     * @memberof TraceEdge
     */
    tunnel?: boolean;
    /**
     * True if the edge is a bridge.
     * @type {boolean}
     * @memberof TraceEdge
     */
    bridge?: boolean;
    /**
     * True if the edge is a roundabout.
     * @type {boolean}
     * @memberof TraceEdge
     */
    roundabout?: boolean;
    /**
     * True if the edge is an internal intersection.
     * @type {boolean}
     * @memberof TraceEdge
     */
    internalIntersection?: boolean;
    /**
     * True if the edge is in an area where you must drive on the right side of the road.
     * @type {boolean}
     * @memberof TraceEdge
     */
    driveOnRight?: boolean;
    /**
     * The type of surface for the edge.
     * @type {string}
     * @memberof TraceEdge
     */
    surface?: TraceEdgeSurfaceEnum;
    /**
     * 
     * @type {EdgeSign}
     * @memberof TraceEdge
     */
    sign?: EdgeSign;
    /**
     * 
     * @type {TravelMode}
     * @memberof TraceEdge
     */
    travelMode?: TravelMode;
    /**
     * 
     * @type {string}
     * @memberof TraceEdge
     */
    vehicleType?: TraceEdgeVehicleTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof TraceEdge
     */
    pedestrianType?: TraceEdgePedestrianTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof TraceEdge
     */
    bicycleType?: TraceEdgeBicycleTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof TraceEdge
     */
    transitType?: TraceEdgeTransitTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof TraceEdge
     */
    id?: number;
    /**
     * The way identifier of the edge in OSM.
     * @type {number}
     * @memberof TraceEdge
     */
    wayId?: number;
    /**
     * The weighted grade factor. Valhalla manufactures a weighted grade from elevation data. It is a measure used for hill avoidance in routing - sort of a relative energy use along an edge. But since an edge in Valhalla can possibly go up and down over several hills it might not equate to what you would normally think of as grade.
     * @type {number}
     * @memberof TraceEdge
     */
    weightedGrade?: number;
    /**
     * The maximum upward slope. A value of 32768 indicates no elevation data is available for this edge.
     * @type {number}
     * @memberof TraceEdge
     */
    maxUpwardGrade?: number;
    /**
     * The maximum downward slope. A value of 32768 indicates no elevation data is available for this edge.
     * @type {number}
     * @memberof TraceEdge
     */
    maxDownwardGrade?: number;
    /**
     * The mean elevation along the edge. Units are meters by default. If the `units` are specified as miles, then the mean elevation is returned in feet. A value of 32768 indicates no elevation data is available for this edge.
     * @type {number}
     * @memberof TraceEdge
     */
    meanElevation?: number;
    /**
     * The number of lanes for this edge.
     * @type {number}
     * @memberof TraceEdge
     */
    laneCount?: number;
    /**
     * The type of cycle lane (if any) along this edge.
     * @type {string}
     * @memberof TraceEdge
     */
    cycleLane?: TraceEdgeCycleLaneEnum;
    /**
     * The type of bicycle network, if any. This is an integer comprised of constants bitwise or'd together. For example, a route that's part of both a local and mountain network would have a value of 12.
     * 1 - National 2 - Regional 4 - Local 8 - Mountain
     * @type {number}
     * @memberof TraceEdge
     */
    bicycleNetwork?: number;
    /**
     * The difficulty of the hiking trail according to the SAC scale.
     * 0 - No Sac Scale 1 - Hiking 2 - Mountain hiking 3 - Demanding mountain hiking 4 - Alpine hiking 5 - Demanding alpine hiking 6 - Difficult alpine hiking
     * @type {number}
     * @memberof TraceEdge
     */
    sacScale?: number;
    /**
     * 
     * @type {string}
     * @memberof TraceEdge
     */
    sidewalk?: TraceEdgeSidewalkEnum;
    /**
     * 
     * @type {number}
     * @memberof TraceEdge
     */
    density?: number;
    /**
     * The speed limit along the edge measured in `units`/hr. This may be either an integer or the string "unlimited" if speed limit data is available. If absent, there is no speed limit data available.
     * @type {any}
     * @memberof TraceEdge
     */
    speedLimit?: any;
    /**
     * The truck speed of this edge in `units`/hr, in terms of average/free-flow speed for routing purposes. This is affected by any number of factors such as the road service, vehicle type, etc. and not just the posted speed limits.
     * @type {number}
     * @memberof TraceEdge
     */
    truckSpeed?: number;
    /**
     * True if the edge is part of a truck route/network.
     * @type {boolean}
     * @memberof TraceEdge
     */
    truckRoute?: boolean;
    /**
     * 
     * @type {EndNode}
     * @memberof TraceEdge
     */
    endNode?: EndNode;
}


/**
 * @export
 */
export const TraceEdgeSurfaceEnum = {
    PavedSmooth: 'paved_smooth',
    Paved: 'paved',
    PavedRough: 'paved_rough',
    Compacted: 'compacted',
    Dirt: 'dirt',
    Gravel: 'gravel',
    Path: 'path',
    Impassable: 'impassable'
} as const;
export type TraceEdgeSurfaceEnum = typeof TraceEdgeSurfaceEnum[keyof typeof TraceEdgeSurfaceEnum];

/**
 * @export
 */
export const TraceEdgeVehicleTypeEnum = {
    Car: 'car',
    Motorcycle: 'motorcycle',
    Bus: 'bus',
    TractorTrailer: 'tractor_trailer',
    GolfCart: 'golf_cart',
    LowSpeedVehicle: 'low_speed_vehicle'
} as const;
export type TraceEdgeVehicleTypeEnum = typeof TraceEdgeVehicleTypeEnum[keyof typeof TraceEdgeVehicleTypeEnum];

/**
 * @export
 */
export const TraceEdgePedestrianTypeEnum = {
    Foot: 'foot',
    Wheelchair: 'wheelchair',
    Segway: 'segway'
} as const;
export type TraceEdgePedestrianTypeEnum = typeof TraceEdgePedestrianTypeEnum[keyof typeof TraceEdgePedestrianTypeEnum];

/**
 * @export
 */
export const TraceEdgeBicycleTypeEnum = {
    Road: 'road',
    Cross: 'cross',
    Hybrid: 'hybrid',
    Mountain: 'mountain'
} as const;
export type TraceEdgeBicycleTypeEnum = typeof TraceEdgeBicycleTypeEnum[keyof typeof TraceEdgeBicycleTypeEnum];

/**
 * @export
 */
export const TraceEdgeTransitTypeEnum = {
    Tram: 'tram',
    Metro: 'metro',
    Rail: 'rail',
    Bus: 'bus',
    Ferry: 'ferry',
    CableCar: 'cable_car',
    Gondola: 'gondola',
    Funicular: 'funicular'
} as const;
export type TraceEdgeTransitTypeEnum = typeof TraceEdgeTransitTypeEnum[keyof typeof TraceEdgeTransitTypeEnum];

/**
 * @export
 */
export const TraceEdgeCycleLaneEnum = {
    None: 'none',
    Shared: 'shared',
    Dedicated: 'dedicated',
    Separated: 'separated'
} as const;
export type TraceEdgeCycleLaneEnum = typeof TraceEdgeCycleLaneEnum[keyof typeof TraceEdgeCycleLaneEnum];

/**
 * @export
 */
export const TraceEdgeSidewalkEnum = {
    Left: 'left',
    Right: 'right',
    Both: 'both',
    None: 'none'
} as const;
export type TraceEdgeSidewalkEnum = typeof TraceEdgeSidewalkEnum[keyof typeof TraceEdgeSidewalkEnum];


/**
 * Check if a given object implements the TraceEdge interface.
 */
export function instanceOfTraceEdge(value: object): boolean {
    return true;
}

export function TraceEdgeFromJSON(json: any): TraceEdge {
    return TraceEdgeFromJSONTyped(json, false);
}

export function TraceEdgeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TraceEdge {
    if (json == null) {
        return json;
    }
    return {
        
        'names': json['names'] == null ? undefined : json['names'],
        'length': json['length'] == null ? undefined : json['length'],
        'speed': json['speed'] == null ? undefined : json['speed'],
        'roadClass': json['road_class'] == null ? undefined : RoadClassFromJSON(json['road_class']),
        'beginHeading': json['begin_heading'] == null ? undefined : json['begin_heading'],
        'endHeading': json['end_heading'] == null ? undefined : json['end_heading'],
        'beginShapeIndex': json['begin_shape_index'] == null ? undefined : json['begin_shape_index'],
        'endShapeIndex': json['end_shape_index'] == null ? undefined : json['end_shape_index'],
        'traversability': json['traversability'] == null ? undefined : TraversabilityFromJSON(json['traversability']),
        'use': json['use'] == null ? undefined : EdgeUseFromJSON(json['use']),
        'toll': json['toll'] == null ? undefined : json['toll'],
        'unpaved': json['unpaved'] == null ? undefined : json['unpaved'],
        'tunnel': json['tunnel'] == null ? undefined : json['tunnel'],
        'bridge': json['bridge'] == null ? undefined : json['bridge'],
        'roundabout': json['roundabout'] == null ? undefined : json['roundabout'],
        'internalIntersection': json['internal_intersection'] == null ? undefined : json['internal_intersection'],
        'driveOnRight': json['drive_on_right'] == null ? undefined : json['drive_on_right'],
        'surface': json['surface'] == null ? undefined : json['surface'],
        'sign': json['sign'] == null ? undefined : EdgeSignFromJSON(json['sign']),
        'travelMode': json['travel_mode'] == null ? undefined : TravelModeFromJSON(json['travel_mode']),
        'vehicleType': json['vehicle_type'] == null ? undefined : json['vehicle_type'],
        'pedestrianType': json['pedestrian_type'] == null ? undefined : json['pedestrian_type'],
        'bicycleType': json['bicycle_type'] == null ? undefined : json['bicycle_type'],
        'transitType': json['transit_type'] == null ? undefined : json['transit_type'],
        'id': json['id'] == null ? undefined : json['id'],
        'wayId': json['way_id'] == null ? undefined : json['way_id'],
        'weightedGrade': json['weighted_grade'] == null ? undefined : json['weighted_grade'],
        'maxUpwardGrade': json['max_upward_grade'] == null ? undefined : json['max_upward_grade'],
        'maxDownwardGrade': json['max_downward_grade'] == null ? undefined : json['max_downward_grade'],
        'meanElevation': json['mean_elevation'] == null ? undefined : json['mean_elevation'],
        'laneCount': json['lane_count'] == null ? undefined : json['lane_count'],
        'cycleLane': json['cycle_lane'] == null ? undefined : json['cycle_lane'],
        'bicycleNetwork': json['bicycle_network'] == null ? undefined : json['bicycle_network'],
        'sacScale': json['sac_scale'] == null ? undefined : json['sac_scale'],
        'sidewalk': json['sidewalk'] == null ? undefined : json['sidewalk'],
        'density': json['density'] == null ? undefined : json['density'],
        'speedLimit': json['speed_limit'] == null ? undefined : json['speed_limit'],
        'truckSpeed': json['truck_speed'] == null ? undefined : json['truck_speed'],
        'truckRoute': json['truck_route'] == null ? undefined : json['truck_route'],
        'endNode': json['end_node'] == null ? undefined : EndNodeFromJSON(json['end_node']),
    };
}

export function TraceEdgeToJSON(value?: TraceEdge | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'names': value['names'],
        'length': value['length'],
        'speed': value['speed'],
        'road_class': RoadClassToJSON(value['roadClass']),
        'begin_heading': value['beginHeading'],
        'end_heading': value['endHeading'],
        'begin_shape_index': value['beginShapeIndex'],
        'end_shape_index': value['endShapeIndex'],
        'traversability': TraversabilityToJSON(value['traversability']),
        'use': EdgeUseToJSON(value['use']),
        'toll': value['toll'],
        'unpaved': value['unpaved'],
        'tunnel': value['tunnel'],
        'bridge': value['bridge'],
        'roundabout': value['roundabout'],
        'internal_intersection': value['internalIntersection'],
        'drive_on_right': value['driveOnRight'],
        'surface': value['surface'],
        'sign': EdgeSignToJSON(value['sign']),
        'travel_mode': TravelModeToJSON(value['travelMode']),
        'vehicle_type': value['vehicleType'],
        'pedestrian_type': value['pedestrianType'],
        'bicycle_type': value['bicycleType'],
        'transit_type': value['transitType'],
        'id': value['id'],
        'way_id': value['wayId'],
        'weighted_grade': value['weightedGrade'],
        'max_upward_grade': value['maxUpwardGrade'],
        'max_downward_grade': value['maxDownwardGrade'],
        'mean_elevation': value['meanElevation'],
        'lane_count': value['laneCount'],
        'cycle_lane': value['cycleLane'],
        'bicycle_network': value['bicycleNetwork'],
        'sac_scale': value['sacScale'],
        'sidewalk': value['sidewalk'],
        'density': value['density'],
        'speed_limit': value['speedLimit'],
        'truck_speed': value['truckSpeed'],
        'truck_route': value['truckRoute'],
        'end_node': EndNodeToJSON(value['endNode']),
    };
}

