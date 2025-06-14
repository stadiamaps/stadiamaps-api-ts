/* tslint:disable */
/* eslint-disable */
/**
 * Stadia Maps Geospatial APIs
 * The Stadia Maps Geospatial APIs provide you with the data you need to build awesome applications.
 *
 * The version of the OpenAPI document: 10.0.1
 * Contact: support@stadiamaps.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Canonical geocoding layer IDs for querying.
 * @export
 */
export const LayerId = {
  Poi: "poi",
  Address: "address",
  Street: "street",
  Country: "country",
  Macroregion: "macroregion",
  Region: "region",
  Macrocounty: "macrocounty",
  County: "county",
  Locality: "locality",
  Localadmin: "localadmin",
  Borough: "borough",
  Neighbourhood: "neighbourhood",
  Postalcode: "postalcode",
  Dependency: "dependency",
  Macrohood: "macrohood",
  Marinearea: "marinearea",
  Disputed: "disputed",
  Empire: "empire",
  Continent: "continent",
  Ocean: "ocean",
  Coarse: "coarse",
} as const;
export type LayerId = (typeof LayerId)[keyof typeof LayerId];

export function instanceOfLayerId(value: any): boolean {
  for (const key in LayerId) {
    if (Object.prototype.hasOwnProperty.call(LayerId, key)) {
      if (LayerId[key as keyof typeof LayerId] === value) {
        return true;
      }
    }
  }
  return false;
}

export function LayerIdFromJSON(json: any): LayerId {
  return LayerIdFromJSONTyped(json, false);
}

export function LayerIdFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): LayerId {
  return json as LayerId;
}

export function LayerIdToJSON(value?: LayerId | null): any {
  return value as any;
}

export function LayerIdToJSONTyped(
  value: any,
  ignoreDiscriminator: boolean,
): LayerId {
  return value as LayerId;
}
