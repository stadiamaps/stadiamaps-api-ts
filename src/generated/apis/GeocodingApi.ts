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

import * as runtime from "../runtime";
import type {
  BulkRequest,
  BulkSearchResponse,
  PeliasLayer,
  PeliasResponse,
  PeliasSource,
} from "../models/index";
import {
  BulkRequestFromJSON,
  BulkRequestToJSON,
  BulkSearchResponseFromJSON,
  BulkSearchResponseToJSON,
  PeliasLayerFromJSON,
  PeliasLayerToJSON,
  PeliasResponseFromJSON,
  PeliasResponseToJSON,
  PeliasSourceFromJSON,
  PeliasSourceToJSON,
} from "../models/index";

export interface AutocompleteRequest {
  text: string;
  focusPointLat?: number;
  focusPointLon?: number;
  boundaryRectMinLat?: number;
  boundaryRectMaxLat?: number;
  boundaryRectMinLon?: number;
  boundaryRectMaxLon?: number;
  boundaryCircleLat?: number;
  boundaryCircleLon?: number;
  boundaryCircleRadius?: number;
  boundaryCountry?: Array<string>;
  boundaryGid?: string;
  layers?: Array<PeliasLayer>;
  sources?: Array<PeliasSource>;
  size?: number;
  lang?: string;
}

export interface PlaceRequest {
  ids: Array<string>;
  lang?: string;
}

export interface ReverseRequest {
  pointLat: number;
  pointLon: number;
  boundaryCircleRadius?: number;
  layers?: Array<PeliasLayer>;
  sources?: Array<PeliasSource>;
  boundaryCountry?: Array<string>;
  boundaryGid?: string;
  size?: number;
  lang?: string;
}

export interface SearchRequest {
  text: string;
  focusPointLat?: number;
  focusPointLon?: number;
  boundaryRectMinLat?: number;
  boundaryRectMaxLat?: number;
  boundaryRectMinLon?: number;
  boundaryRectMaxLon?: number;
  boundaryCircleLat?: number;
  boundaryCircleLon?: number;
  boundaryCircleRadius?: number;
  boundaryCountry?: Array<string>;
  boundaryGid?: string;
  layers?: Array<PeliasLayer>;
  sources?: Array<PeliasSource>;
  size?: number;
  lang?: string;
}

export interface SearchBulkRequest {
  bulkRequest?: Array<BulkRequest>;
}

export interface SearchStructuredRequest {
  address?: string;
  neighbourhood?: string;
  borough?: string;
  locality?: string;
  county?: string;
  region?: string;
  postalcode?: string;
  country?: string;
  focusPointLat?: number;
  focusPointLon?: number;
  boundaryRectMinLat?: number;
  boundaryRectMaxLat?: number;
  boundaryRectMinLon?: number;
  boundaryRectMaxLon?: number;
  boundaryCircleLat?: number;
  boundaryCircleLon?: number;
  boundaryCircleRadius?: number;
  boundaryCountry?: Array<string>;
  boundaryGid?: string;
  layers?: Array<PeliasLayer>;
  sources?: Array<PeliasSource>;
  size?: number;
  lang?: string;
}

/**
 *
 */
export class GeocodingApi extends runtime.BaseAPI {
  /**
   * Autocomplete enables interactive search-as-you-type user experiences, suggesting places as you type, along with information that will help your users find the correct place quickly.
   * Search and geocode quickly based on partial input.
   */
  async autocompleteRaw(
    requestParameters: AutocompleteRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<PeliasResponse>> {
    if (requestParameters["text"] == null) {
      throw new runtime.RequiredError(
        "text",
        'Required parameter "text" was null or undefined when calling autocomplete().',
      );
    }

    const queryParameters: any = {};

    if (requestParameters["text"] != null) {
      queryParameters["text"] = requestParameters["text"];
    }

    if (requestParameters["focusPointLat"] != null) {
      queryParameters["focus.point.lat"] = requestParameters["focusPointLat"];
    }

    if (requestParameters["focusPointLon"] != null) {
      queryParameters["focus.point.lon"] = requestParameters["focusPointLon"];
    }

    if (requestParameters["boundaryRectMinLat"] != null) {
      queryParameters["boundary.rect.min_lat"] =
        requestParameters["boundaryRectMinLat"];
    }

    if (requestParameters["boundaryRectMaxLat"] != null) {
      queryParameters["boundary.rect.max_lat"] =
        requestParameters["boundaryRectMaxLat"];
    }

    if (requestParameters["boundaryRectMinLon"] != null) {
      queryParameters["boundary.rect.min_lon"] =
        requestParameters["boundaryRectMinLon"];
    }

    if (requestParameters["boundaryRectMaxLon"] != null) {
      queryParameters["boundary.rect.max_lon"] =
        requestParameters["boundaryRectMaxLon"];
    }

    if (requestParameters["boundaryCircleLat"] != null) {
      queryParameters["boundary.circle.lat"] =
        requestParameters["boundaryCircleLat"];
    }

    if (requestParameters["boundaryCircleLon"] != null) {
      queryParameters["boundary.circle.lon"] =
        requestParameters["boundaryCircleLon"];
    }

    if (requestParameters["boundaryCircleRadius"] != null) {
      queryParameters["boundary.circle.radius"] =
        requestParameters["boundaryCircleRadius"];
    }

    if (requestParameters["boundaryCountry"] != null) {
      queryParameters["boundary.country"] = requestParameters[
        "boundaryCountry"
      ]!.join(runtime.COLLECTION_FORMATS["csv"]);
    }

    if (requestParameters["boundaryGid"] != null) {
      queryParameters["boundary.gid"] = requestParameters["boundaryGid"];
    }

    if (requestParameters["layers"] != null) {
      queryParameters["layers"] = requestParameters["layers"]!.join(
        runtime.COLLECTION_FORMATS["csv"],
      );
    }

    if (requestParameters["sources"] != null) {
      queryParameters["sources"] = requestParameters["sources"]!.join(
        runtime.COLLECTION_FORMATS["csv"],
      );
    }

    if (requestParameters["size"] != null) {
      queryParameters["size"] = requestParameters["size"];
    }

    if (requestParameters["lang"] != null) {
      queryParameters["lang"] = requestParameters["lang"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      queryParameters["api_key"] = await this.configuration.apiKey("api_key"); // ApiKeyAuth authentication
    }

    const response = await this.request(
      {
        path: `/geocoding/v1/autocomplete`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      PeliasResponseFromJSON(jsonValue),
    );
  }

  /**
   * Autocomplete enables interactive search-as-you-type user experiences, suggesting places as you type, along with information that will help your users find the correct place quickly.
   * Search and geocode quickly based on partial input.
   */
  async autocomplete(
    requestParameters: AutocompleteRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<PeliasResponse> {
    const response = await this.autocompleteRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Many search result components include an associated GID field (for example, an address may have a `localadmin_gid`). The place endpoint lets you look up these places directly by ID. Note that these IDs are not stable for all sources. See the [online documentation](https://docs.stadiamaps.com/geocoding-search-autocomplete/place-lookup/) for details.
   * Retrieve details of a place using its GID.
   */
  async placeRaw(
    requestParameters: PlaceRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<PeliasResponse>> {
    if (requestParameters["ids"] == null) {
      throw new runtime.RequiredError(
        "ids",
        'Required parameter "ids" was null or undefined when calling place().',
      );
    }

    const queryParameters: any = {};

    if (requestParameters["ids"] != null) {
      queryParameters["ids"] = requestParameters["ids"]!.join(
        runtime.COLLECTION_FORMATS["csv"],
      );
    }

    if (requestParameters["lang"] != null) {
      queryParameters["lang"] = requestParameters["lang"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      queryParameters["api_key"] = await this.configuration.apiKey("api_key"); // ApiKeyAuth authentication
    }

    const response = await this.request(
      {
        path: `/geocoding/v1/place`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      PeliasResponseFromJSON(jsonValue),
    );
  }

  /**
   * Many search result components include an associated GID field (for example, an address may have a `localadmin_gid`). The place endpoint lets you look up these places directly by ID. Note that these IDs are not stable for all sources. See the [online documentation](https://docs.stadiamaps.com/geocoding-search-autocomplete/place-lookup/) for details.
   * Retrieve details of a place using its GID.
   */
  async place(
    requestParameters: PlaceRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<PeliasResponse> {
    const response = await this.placeRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Reverse geocoding and search finds places and addresses near any geographic coordinates.
   * Find places and addresses near geographic coordinates (reverse geocoding).
   */
  async reverseRaw(
    requestParameters: ReverseRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<PeliasResponse>> {
    if (requestParameters["pointLat"] == null) {
      throw new runtime.RequiredError(
        "pointLat",
        'Required parameter "pointLat" was null or undefined when calling reverse().',
      );
    }

    if (requestParameters["pointLon"] == null) {
      throw new runtime.RequiredError(
        "pointLon",
        'Required parameter "pointLon" was null or undefined when calling reverse().',
      );
    }

    const queryParameters: any = {};

    if (requestParameters["pointLat"] != null) {
      queryParameters["point.lat"] = requestParameters["pointLat"];
    }

    if (requestParameters["pointLon"] != null) {
      queryParameters["point.lon"] = requestParameters["pointLon"];
    }

    if (requestParameters["boundaryCircleRadius"] != null) {
      queryParameters["boundary.circle.radius"] =
        requestParameters["boundaryCircleRadius"];
    }

    if (requestParameters["layers"] != null) {
      queryParameters["layers"] = requestParameters["layers"]!.join(
        runtime.COLLECTION_FORMATS["csv"],
      );
    }

    if (requestParameters["sources"] != null) {
      queryParameters["sources"] = requestParameters["sources"]!.join(
        runtime.COLLECTION_FORMATS["csv"],
      );
    }

    if (requestParameters["boundaryCountry"] != null) {
      queryParameters["boundary.country"] = requestParameters[
        "boundaryCountry"
      ]!.join(runtime.COLLECTION_FORMATS["csv"]);
    }

    if (requestParameters["boundaryGid"] != null) {
      queryParameters["boundary.gid"] = requestParameters["boundaryGid"];
    }

    if (requestParameters["size"] != null) {
      queryParameters["size"] = requestParameters["size"];
    }

    if (requestParameters["lang"] != null) {
      queryParameters["lang"] = requestParameters["lang"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      queryParameters["api_key"] = await this.configuration.apiKey("api_key"); // ApiKeyAuth authentication
    }

    const response = await this.request(
      {
        path: `/geocoding/v1/reverse`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      PeliasResponseFromJSON(jsonValue),
    );
  }

  /**
   * Reverse geocoding and search finds places and addresses near any geographic coordinates.
   * Find places and addresses near geographic coordinates (reverse geocoding).
   */
  async reverse(
    requestParameters: ReverseRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<PeliasResponse> {
    const response = await this.reverseRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * The search endpoint lets you search for addresses, points of interest, and administrative areas. This is most commonly used for forward geocoding applications where you need to find the geographic coordinates of an address.
   * Search for location and other info using a place name or address (forward geocoding).
   */
  async searchRaw(
    requestParameters: SearchRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<PeliasResponse>> {
    if (requestParameters["text"] == null) {
      throw new runtime.RequiredError(
        "text",
        'Required parameter "text" was null or undefined when calling search().',
      );
    }

    const queryParameters: any = {};

    if (requestParameters["text"] != null) {
      queryParameters["text"] = requestParameters["text"];
    }

    if (requestParameters["focusPointLat"] != null) {
      queryParameters["focus.point.lat"] = requestParameters["focusPointLat"];
    }

    if (requestParameters["focusPointLon"] != null) {
      queryParameters["focus.point.lon"] = requestParameters["focusPointLon"];
    }

    if (requestParameters["boundaryRectMinLat"] != null) {
      queryParameters["boundary.rect.min_lat"] =
        requestParameters["boundaryRectMinLat"];
    }

    if (requestParameters["boundaryRectMaxLat"] != null) {
      queryParameters["boundary.rect.max_lat"] =
        requestParameters["boundaryRectMaxLat"];
    }

    if (requestParameters["boundaryRectMinLon"] != null) {
      queryParameters["boundary.rect.min_lon"] =
        requestParameters["boundaryRectMinLon"];
    }

    if (requestParameters["boundaryRectMaxLon"] != null) {
      queryParameters["boundary.rect.max_lon"] =
        requestParameters["boundaryRectMaxLon"];
    }

    if (requestParameters["boundaryCircleLat"] != null) {
      queryParameters["boundary.circle.lat"] =
        requestParameters["boundaryCircleLat"];
    }

    if (requestParameters["boundaryCircleLon"] != null) {
      queryParameters["boundary.circle.lon"] =
        requestParameters["boundaryCircleLon"];
    }

    if (requestParameters["boundaryCircleRadius"] != null) {
      queryParameters["boundary.circle.radius"] =
        requestParameters["boundaryCircleRadius"];
    }

    if (requestParameters["boundaryCountry"] != null) {
      queryParameters["boundary.country"] = requestParameters[
        "boundaryCountry"
      ]!.join(runtime.COLLECTION_FORMATS["csv"]);
    }

    if (requestParameters["boundaryGid"] != null) {
      queryParameters["boundary.gid"] = requestParameters["boundaryGid"];
    }

    if (requestParameters["layers"] != null) {
      queryParameters["layers"] = requestParameters["layers"]!.join(
        runtime.COLLECTION_FORMATS["csv"],
      );
    }

    if (requestParameters["sources"] != null) {
      queryParameters["sources"] = requestParameters["sources"]!.join(
        runtime.COLLECTION_FORMATS["csv"],
      );
    }

    if (requestParameters["size"] != null) {
      queryParameters["size"] = requestParameters["size"];
    }

    if (requestParameters["lang"] != null) {
      queryParameters["lang"] = requestParameters["lang"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      queryParameters["api_key"] = await this.configuration.apiKey("api_key"); // ApiKeyAuth authentication
    }

    const response = await this.request(
      {
        path: `/geocoding/v1/search`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      PeliasResponseFromJSON(jsonValue),
    );
  }

  /**
   * The search endpoint lets you search for addresses, points of interest, and administrative areas. This is most commonly used for forward geocoding applications where you need to find the geographic coordinates of an address.
   * Search for location and other info using a place name or address (forward geocoding).
   */
  async search(
    requestParameters: SearchRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<PeliasResponse> {
    const response = await this.searchRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * The batch endpoint lets you specify many search or structured search requests at once. Once received, all requests will be processed internally on our infrastructure, improving throughput when you need to do a lot of queries.
   * Quickly run a batch of geocoding queries against the search or structured search endpoints.
   */
  async searchBulkRaw(
    requestParameters: SearchBulkRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Array<BulkSearchResponse>>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    if (this.configuration && this.configuration.apiKey) {
      queryParameters["api_key"] = await this.configuration.apiKey("api_key"); // ApiKeyAuth authentication
    }

    const response = await this.request(
      {
        path: `/geocoding/v1/search/bulk`,
        method: "POST",
        headers: headerParameters,
        query: queryParameters,
        body: requestParameters["bulkRequest"]!.map(BulkRequestToJSON),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(BulkSearchResponseFromJSON),
    );
  }

  /**
   * The batch endpoint lets you specify many search or structured search requests at once. Once received, all requests will be processed internally on our infrastructure, improving throughput when you need to do a lot of queries.
   * Quickly run a batch of geocoding queries against the search or structured search endpoints.
   */
  async searchBulk(
    requestParameters: SearchBulkRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Array<BulkSearchResponse>> {
    const response = await this.searchBulkRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * The structured search endpoint lets you search for addresses, points of interest, and administrative areas. Rather than a single string which the API must infer meaning from, the structured search endpoint allows you to specify the known components upfront, which is useful in many forward geocoding workflows.
   * Find locations matching components (structured forward geocoding).
   */
  async searchStructuredRaw(
    requestParameters: SearchStructuredRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<PeliasResponse>> {
    const queryParameters: any = {};

    if (requestParameters["address"] != null) {
      queryParameters["address"] = requestParameters["address"];
    }

    if (requestParameters["neighbourhood"] != null) {
      queryParameters["neighbourhood"] = requestParameters["neighbourhood"];
    }

    if (requestParameters["borough"] != null) {
      queryParameters["borough"] = requestParameters["borough"];
    }

    if (requestParameters["locality"] != null) {
      queryParameters["locality"] = requestParameters["locality"];
    }

    if (requestParameters["county"] != null) {
      queryParameters["county"] = requestParameters["county"];
    }

    if (requestParameters["region"] != null) {
      queryParameters["region"] = requestParameters["region"];
    }

    if (requestParameters["postalcode"] != null) {
      queryParameters["postalcode"] = requestParameters["postalcode"];
    }

    if (requestParameters["country"] != null) {
      queryParameters["country"] = requestParameters["country"];
    }

    if (requestParameters["focusPointLat"] != null) {
      queryParameters["focus.point.lat"] = requestParameters["focusPointLat"];
    }

    if (requestParameters["focusPointLon"] != null) {
      queryParameters["focus.point.lon"] = requestParameters["focusPointLon"];
    }

    if (requestParameters["boundaryRectMinLat"] != null) {
      queryParameters["boundary.rect.min_lat"] =
        requestParameters["boundaryRectMinLat"];
    }

    if (requestParameters["boundaryRectMaxLat"] != null) {
      queryParameters["boundary.rect.max_lat"] =
        requestParameters["boundaryRectMaxLat"];
    }

    if (requestParameters["boundaryRectMinLon"] != null) {
      queryParameters["boundary.rect.min_lon"] =
        requestParameters["boundaryRectMinLon"];
    }

    if (requestParameters["boundaryRectMaxLon"] != null) {
      queryParameters["boundary.rect.max_lon"] =
        requestParameters["boundaryRectMaxLon"];
    }

    if (requestParameters["boundaryCircleLat"] != null) {
      queryParameters["boundary.circle.lat"] =
        requestParameters["boundaryCircleLat"];
    }

    if (requestParameters["boundaryCircleLon"] != null) {
      queryParameters["boundary.circle.lon"] =
        requestParameters["boundaryCircleLon"];
    }

    if (requestParameters["boundaryCircleRadius"] != null) {
      queryParameters["boundary.circle.radius"] =
        requestParameters["boundaryCircleRadius"];
    }

    if (requestParameters["boundaryCountry"] != null) {
      queryParameters["boundary.country"] = requestParameters[
        "boundaryCountry"
      ]!.join(runtime.COLLECTION_FORMATS["csv"]);
    }

    if (requestParameters["boundaryGid"] != null) {
      queryParameters["boundary.gid"] = requestParameters["boundaryGid"];
    }

    if (requestParameters["layers"] != null) {
      queryParameters["layers"] = requestParameters["layers"]!.join(
        runtime.COLLECTION_FORMATS["csv"],
      );
    }

    if (requestParameters["sources"] != null) {
      queryParameters["sources"] = requestParameters["sources"]!.join(
        runtime.COLLECTION_FORMATS["csv"],
      );
    }

    if (requestParameters["size"] != null) {
      queryParameters["size"] = requestParameters["size"];
    }

    if (requestParameters["lang"] != null) {
      queryParameters["lang"] = requestParameters["lang"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      queryParameters["api_key"] = await this.configuration.apiKey("api_key"); // ApiKeyAuth authentication
    }

    const response = await this.request(
      {
        path: `/geocoding/v1/search/structured`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      PeliasResponseFromJSON(jsonValue),
    );
  }

  /**
   * The structured search endpoint lets you search for addresses, points of interest, and administrative areas. Rather than a single string which the API must infer meaning from, the structured search endpoint allows you to specify the known components upfront, which is useful in many forward geocoding workflows.
   * Find locations matching components (structured forward geocoding).
   */
  async searchStructured(
    requestParameters: SearchStructuredRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<PeliasResponse> {
    const response = await this.searchStructuredRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }
}
