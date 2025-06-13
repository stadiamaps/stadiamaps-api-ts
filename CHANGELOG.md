# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Version 8.0.1 - 2025-06-12

### Fixed

- Add two missing OSRM maneuver types which were mistakenly omitted.

## Version 8.0.0 - 2025-06-12

### Added

- Support for the v2 `search` (forward geocoding) endpoint! The new API includes better structure, more details, and better address formatting.

```diff
- const res = await api.search({
+ const res = await api.searchV2({
    text: 'Telliskivi 60a/3, Tallinn, Estonia'
  });
```

For an overview of the structural changes we've made in the V2 API,
refer to the [migration guide](https://docs.stadiamaps.com/geocoding-search-autocomplete/v2-api-migration-guide/).

### Fixed

- **Potentially breaking change:** The `maneuvers` property on route responses was previously marked as required.
  However, it is possible to explicitly request routes with this field removed.
  These would fail validation and the whole request would end with an exception
  in the API client.
  This has been fixed in this version, so the property is optional.

## Version 7.3.0 - 2025-06-03

### Added

- New fields to the time zone API responses including localized timestamps in several standard formats.

### Fixed

- Fix a bug which caused structured search bulk requests to incorrectly spell the `postalcode` field.

## Version 7.2.0 - 2025-04-21

# Added

- Add documentation for the geocoding metadata `query` field.

## Fixed

- Removed boundary circle properties that were mistakenly added.
  They did not behave as expected, so this is a bug fix despite being a code-breaking change if you used it.
- Added missing water layers to context.

## Version 7.1.0 - 2025-04-19

### Added

- Support for the v2 reverse geocoding endpoint! The new API includes better structure, more details, and better address formatting.

```diff
- const res = await api.reverse({
+ const res = await api.reverseV2({
    pointLat: 48.848268,
    pointLon: 2.294471
  });
```

For an overview of the structural changes we've made in the V2 API,
refer to the [migration guide](https://docs.stadiamaps.com/geocoding-search-autocomplete/v2-api-migration-guide/).

### Fixed

- Added the `wheelchair` property to the OSM addendum model (it was in the API response, but not explicitly modeled).
- Fix the types of the Natural Earth and Karmashapes identifiers

## Version 7.0.0 - 2025-04-07

### Added

- Support for the v2 autocomplete and place details APIs!
- **BREAKING:** We have renamed the Place Details method to clarify its purpose.

If you want to keep using the v1 endpoint, you can amend your code like so:

```diff
- const res = await api.place({ ids: ["whosonfirst:locality:123"] });
+ const res = await api.placeDetails({ ids: ["whosonfirst:locality:123"] });
```

To upgrade to the v2 Place Details endpoint, which features improved address formatting,
use the new V2 method:

```diff
- const res = await api.place({ ids: ["whosonfirst:locality:123"] });
+ const res = await api.placeDetailsV2({ ids: ["whosonfirst:locality:123"] });
```

TypeScript users will receive errors at build time to keep breakage obvious.

For an overview of the structural changes we've made in the V2 API,
refer to the [migration guide](https://docs.stadiamaps.com/geocoding-search-autocomplete/v2-api-migration-guide/).

### Fixed

- The v1 geocoding model now includes the confidence score. This was always available in the API response, but wasn't in the OpenAPI spec.

## Version 6.0.0 - 2025-01-20

### Added

- BREAKING: Renamed models containing Valhalla and Pelias in their names to be generic. These now have rout(e|ing) or geocod(e|ing) prefixes.
- Explicitly documented more properties to the geocoding feature model.
- Adds support for the `foursquare` data source.
- Documents the elevation_interval parameter on certain routing requests.

## Version 5.0.0 - 2024-09-04

### Removed

- BREAKING: Removed `isRouteResponse` and `isOsrmRouteResponse` helper functions as these were duplicated.

You can migrate to the equivalent `instanceOfRouteResponse` and `instanceOfOsrmRouteResponse` methods.

## Version 4.0.0 - 2024-09-04

### Added

- Support for the OSRM format and navigation aids
- BREAKING: To support the new format, the response type of directions APIs has changed

TypeScript users will need to use a type guard
in order to check the type of the response for directions APIs,
as the response type is now a union.
The response format will depend on the value of the format parameter in your request.

Here is an example of how to do the check in your code.
The guard helper function is included in this SDK and exported publicly.

```typescript
const res = await api.route({ routeRequest: routeRequest });

if (instanceOfRouteResponse(res)) {
  // TODO: Process the response
} else {
  fail("Expected a Valhalla JSON format route response");
}
```

Alternately, you can guard for OSRM format responses like this:

```typescript
const res = await api.route({ routeRequest: osrmFormatRouteRequest });

if (instanceOfOsrmRouteResponse(res)) {
  // TODO: Process the response
} else {
  fail("Expected an OSRM format route response");
}
```

## Version 3.2.2 - 2024-08-16

### Fixed

- Improve modeling of bulk geocoding

## Version 3.2.1 - 2024-08-15

### Fixed

- Isochrone request models now support all costing models

## Version 3.2.0 - 2024-07-31

### Added

- Add support for bulk geocoding

## Version 3.1.0 - 2024-05-11

### Added

- Add support for elevation in route responses

## Version 3.0.0 - 2024-04-30

### Added

- Add support for low-speed vehicle routing
- The matrix endpoint now accepts its own model rather than coordinate. This includes a search cutoff and paves the way for future expansion.

### Changed

- Improved the documentation of the matrix endpoint failure modes

### Fixed

- The time and distance field on matrix source to target models are now marked as nullable

## Version 2.1.0 - 2024-03-21

### Added

- `ignore_` options for ignoring various restrictions (useful for certain map matching applications)

### Changed

- Mark package as pure to enable [`webpack` tree shaking](https://webpack.js.org/guides/tree-shaking/)

## Version 2.0.0 - 2024-03-19

### Changed

- BREAKING: Directions Options are moved from a nested object to the root of all turn-by-turn directions APIs. Simply remove the nesting.
- FIXED: Reflect upstream changes to the time/distance matrix API returning a single dimensional list of sources and targets; the extra layer of nesting is removed and may break existing code (this was a bug fix).
- Improved documentation strings.

### Added

- Alley factor for auto costing
- Resample distance parameter to height (elevation) requests
- Support for requesting alternate routes

## Version 1.0.10 - 2023-12-08

### Fixed

- Support TypeScript 4.7+ exports

## Version 1.0.9 - 2023-07-30

### Fixed

- Add missing cases to the travel type enum

## Version 1.0.8 - 2023-07-26

### Changed

- Improve the documentation of ranged elevation responses

## Version 1.0.7 - 2023-07-21

### Fixed

- Add missing `type` to isochrone responses

## Version 1.0.6 - 2023-07-15

### Fixed

- Corrected typo in the `locality_gid` field name
- Add missing `bbox` property to GeoJSON features

## Version 1.0.2 - 1.0.4 - 2023-06-06 - 2023-07-07

### Changed

- `npm` metadata updates
- Minor README improvements

## Version 1.0.0 - 2023-06-06

Initial release!
