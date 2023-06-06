# Stadia Maps TypeScript APIs

This SDK helps you access the full range of geospatial APIs from Stadia Maps using JavaScript, TypeScript, etc.

## Getting started

First, add `@stadiamaps/api` as a dependency of your project using your favorite package manager
like `npm` or `yarn`. Something like this:

```shell
npm install --save @stadiamaps/api
```

The library exposes 3 different API classes for grouping functionality: `GeocodingApi`,
`GeospatialApi`, and `RoutingApi`. These correspond to the sections in our online
[API Reference](https://docs.stadiamaps.com/api-reference/).

All clients have the same interface and only expose different methods. Here is an
example of getting started with the geocoding API:

```typescript
// Imports: you need the API(s) that you intend to use at a minimum.
import { GeocodingApi, Configuration } from '@stadiamaps/api';

// If you writing a front-end web browser application, you can usually use our domain-based auth
// (see https://docs.stadiamaps.com/authentication/). This lets you skip the configuration app-side
// entirely. If you are writing for a backend application or can't use domain-based auth,
// then you'll need to add your API key as shown below.
const config = new Configuration({ apiKey: "YOUR-API-KEY" });
const api = new GeocodingApi(config);

// Make an API call! The responses use the standard promise API.
// You can use either the callback interface...
api.reverse({ pointLat: 59.44436, pointLon: 24.75071 }).then(function (result) {
    console.log(result);
}, function (err) {
    console.log(err);
});

// ... or the await keyword in an async context
const res = await api.search({ text: "Põhja pst 27a" });
```

## Documentation

Official documentation lives at [docs.stadiamaps.com](https://docs.stadiamaps.com/), where you can read
both long-form prose explanations of the finer details of each endpoint and a
compact [API reference](https://docs.stadiamaps.com/api-reference/).

## Developing

Refer to [DEVELOPING.md](https://github.com/stadiamaps/stadiamaps-api-ts/blob/main/DEVELOPING.md) for details on
local development.
