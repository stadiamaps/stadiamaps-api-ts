import {
  AutocompleteRequest,
  GeocodingApi as GeneratedApi,
  InitOverrideFunction,
  PeliasResponse,
} from "./generated";

export class GeocodingApi extends GeneratedApi {
  cache = new Map();

  /**
   * Autocomplete enables interactive search-as-you-type user experiences, suggesting places as you type, along with information that will help your users find the correct place quickly.
   *
   * To ensure a snappy user experience, recent successful searches are cached automatically.
   * We also recommend throttling (ex: via lodash) for most interactive applications.
   */
  async autocomplete(
    requestParameters: AutocompleteRequest,
    initOverrides?: RequestInit | InitOverrideFunction,
  ): Promise<PeliasResponse> {
    let overridesKey =
      initOverrides === null
        ? "null"
        : typeof initOverrides === "function"
          ? initOverrides.toString()
          : JSON.stringify(initOverrides);
    const key = JSON.stringify(requestParameters) + overridesKey;
    if (this.cache.has(key)) {
      return this.cache.get(key);
    }

    let result = await super.autocomplete(requestParameters, initOverrides);

    // Delete the oldest entry (the first one that was inserted) if we are over our desired limit
    if (this.cache.size >= 20) {
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }

    this.cache.set(key, result);
    return result;
  }
}
