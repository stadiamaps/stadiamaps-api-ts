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

import * as runtime from "../runtime";
import type {
  HeightRequest,
  HeightResponse,
  TzResponse,
} from "../models/index";
import {
  HeightRequestFromJSON,
  HeightRequestToJSON,
  HeightResponseFromJSON,
  HeightResponseToJSON,
  TzResponseFromJSON,
  TzResponseToJSON,
} from "../models/index";

export interface ElevationRequest {
  heightRequest?: HeightRequest;
}

export interface TzLookupRequest {
  lat: number;
  lng: number;
  timestamp?: number;
}

/**
 *
 */
export class GeospatialApi extends runtime.BaseAPI {
  /**
   * The Stadia elevation API allows you to get the elevation of any point on earth. You can pass either a simple set of points or a Google encoded polyline string. This pairs well with our routing APIs, so you can generate an elevation profile for your next bike or run.
   * Get the elevation profile along a polyline or at a point.
   */
  async elevationRaw(
    requestParameters: ElevationRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<HeightResponse>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    if (this.configuration && this.configuration.apiKey) {
      queryParameters["api_key"] = await this.configuration.apiKey("api_key"); // ApiKeyAuth authentication
    }

    const response = await this.request(
      {
        path: `/elevation/v1`,
        method: "POST",
        headers: headerParameters,
        query: queryParameters,
        body: HeightRequestToJSON(requestParameters["heightRequest"]),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      HeightResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Stadia elevation API allows you to get the elevation of any point on earth. You can pass either a simple set of points or a Google encoded polyline string. This pairs well with our routing APIs, so you can generate an elevation profile for your next bike or run.
   * Get the elevation profile along a polyline or at a point.
   */
  async elevation(
    requestParameters: ElevationRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<HeightResponse> {
    const response = await this.elevationRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * The Stadia TZ API provides time zone information, as well as information about any special offset (such as DST) in effect based on the latest IANA TZDB. Note that this API may not be accurate for timestamps in the past and does not claim to report precise nautical times in the open ocean beyond territorial waters.
   * Get the current time zone information for any point on earth.
   */
  async tzLookupRaw(
    requestParameters: TzLookupRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<TzResponse>> {
    if (requestParameters["lat"] == null) {
      throw new runtime.RequiredError(
        "lat",
        'Required parameter "lat" was null or undefined when calling tzLookup().',
      );
    }

    if (requestParameters["lng"] == null) {
      throw new runtime.RequiredError(
        "lng",
        'Required parameter "lng" was null or undefined when calling tzLookup().',
      );
    }

    const queryParameters: any = {};

    if (requestParameters["lat"] != null) {
      queryParameters["lat"] = requestParameters["lat"];
    }

    if (requestParameters["lng"] != null) {
      queryParameters["lng"] = requestParameters["lng"];
    }

    if (requestParameters["timestamp"] != null) {
      queryParameters["timestamp"] = requestParameters["timestamp"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      queryParameters["api_key"] = await this.configuration.apiKey("api_key"); // ApiKeyAuth authentication
    }

    const response = await this.request(
      {
        path: `/tz/lookup/v1`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      TzResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Stadia TZ API provides time zone information, as well as information about any special offset (such as DST) in effect based on the latest IANA TZDB. Note that this API may not be accurate for timestamps in the past and does not claim to report precise nautical times in the open ocean beyond territorial waters.
   * Get the current time zone information for any point on earth.
   */
  async tzLookup(
    requestParameters: TzLookupRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<TzResponse> {
    const response = await this.tzLookupRaw(requestParameters, initOverrides);
    return await response.value();
  }
}
