# Stadia Maps JavaScript SDK

[![NPM Downloads](<https://img.shields.io/npm/dm/%40stadiamaps%2Fapi?style=for-the-badge&color=rgb(64%2C81%2C181)>)](https://www.npmjs.com/package/@stadiamaps/api)

This SDK helps you access the full range of geospatial APIs from Stadia Maps using JavaScript, TypeScript, etc.
We've written everything in TypeScript, derived from our official API spec, so you'll get all the goodies
like autocomplete, type definitions, and documentation in your favorite editor.

### Create a Stadia Maps account

You can try everything out locally in a web browser without any special setup!
To deploy to an internet server though, you'll need a Stadia Maps account.
Learn more about how we authenticate requests in our
[documentation](https://docs.stadiamaps.com/authentication/?utm_source=github&utm_campaign=sdk_readme&utm_content=typescript_readme),
and sign up for a free account (no credit card required)
using our [client dashboard](https://client.stadiamaps.com/signup/?utm_source=github&utm_campaign=sdk_readme&utm_content=typescript_readme).

## Getting started with npm

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
import { GeocodingApi, Configuration } from "@stadiamaps/api";

// Most users can use our domain-based or localhost authentication methods (see https://docs.stadiamaps.com/authentication/).
//
// If you are writing for a backend application or can't use domain-based auth,
// then you'll need to add your API key like so:
//
// const config = new Configuration({ apiKey: "YOUR-API-KEY" });
// const api = new GeocodingApi(config);
const api = new GeocodingApi();

// Make an API call! The responses use the standard promise API.
// You can use either the callback interface...
api.reverseV2({ pointLat: 59.44436, pointLon: 24.75071, lang: "en" }).then(
  function (result) {
    console.log(result);
  },
  function (err) {
    console.log(err);
  },
);

// ... or the await keyword in an async context
const res = await api.search({ text: "Põhja pst 27" });
```

## Getting started with unpkg

If you like to keep your frontend simple and don't want to use JS build tooling, we have you covered! You can easily use
the SDK by linking to the module on unpkg. The library is exported via the global `stadiaMapsApi`, but otherwise
functions exactly like if you used `npm` package tooling.

Here's a quick usage example of a webpage that makes a geocoding query and displays the result.

```html
<!doctype html>
<html>
  <head>
    <script
      type="text/javascript"
      src="https://www.unpkg.com/@stadiamaps/api@7"
    ></script>
    <script type="text/javascript">
      // In nearly all cases, you should be able to construct any of the APIs as-is (see https://docs.stadiamaps.com/authentication/).
      // If you really need an API key, you can add it like so:
      // const config = new stadiaMapsApi.Configuration({ apiKey: "YOUR-API-KEY" });
      // const api = new stadiaMapsApi.GeocodingApi(config);
      const api = new stadiaMapsApi.GeocodingApi();
      window.onload = async function () {
        // You can use either the async interface or the other Promise API functions like .then; the choice is yours.
        const res = await api.autocompleteV2({ text: "Põhja pst 27" });
        document.getElementById("pre").innerHTML = JSON.stringify(res, null, 2);
      };
    </script>
  </head>

  <body>
    <div>
      <pre id="pre">Loading...</pre>
    </div>
  </body>
</html>
```

## Documentation

Everything is documented with docstrings,
so IDEs with documentation display and autocomplete (ex: WebStorm)
should give a seamless experience.
You can find additional documentation, best practices, and sample code at
[docs.stadiamaps.com](https://docs.stadiamaps.com/?utm_source=github&utm_campaign=sdk_readme&utm_content=typescript_readme).
You can also check out the full [API reference](https://docs.stadiamaps.com/api-reference/?utm_source=github&utm_campaign=sdk_readme&utm_content=typescript_readme)
in your browser.

## Developing

Refer to [DEVELOPING.md](https://github.com/stadiamaps/stadiamaps-api-ts/blob/main/DEVELOPING.md) for details on
local development.
