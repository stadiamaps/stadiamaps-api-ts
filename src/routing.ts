import {
  instanceOfOsrmRouteResponse,
  instanceOfRouteResponse,
  OsrmRouteResponse,
  Route200Response,
  RouteResponse,
} from "./generated";

export function isOsrmRouteResponse(
  response: Route200Response,
): response is OsrmRouteResponse {
  return instanceOfOsrmRouteResponse(response);
}

// Define a type guard to check if the response is RouteResponse
export function isRouteResponse(
  response: Route200Response,
): response is RouteResponse {
  return instanceOfRouteResponse(response);
}
