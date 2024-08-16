# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


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
