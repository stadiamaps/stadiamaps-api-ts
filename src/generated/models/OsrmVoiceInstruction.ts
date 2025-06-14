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

import { mapValues } from "../runtime";
/**
 *
 * @export
 * @interface OsrmVoiceInstruction
 */
export interface OsrmVoiceInstruction {
  /**
   * How far (in meters) from the upcoming maneuver the instruction should be announced.
   * @type {number}
   * @memberof OsrmVoiceInstruction
   */
  distanceAlongGeometry: number;
  /**
   * The plain-text announcement.
   * @type {string}
   * @memberof OsrmVoiceInstruction
   */
  announcement: string;
  /**
   * The announcement in Speech Synthesis Markup Language (SSML). Supported TTS engines include Amazon Polly and Apple's AVSpeechSynthesizer.
   * @type {string}
   * @memberof OsrmVoiceInstruction
   */
  ssmlAnnouncement?: string;
}

/**
 * Check if a given object implements the OsrmVoiceInstruction interface.
 */
export function instanceOfOsrmVoiceInstruction(
  value: object,
): value is OsrmVoiceInstruction {
  if (
    !("distanceAlongGeometry" in value) ||
    value["distanceAlongGeometry"] === undefined
  )
    return false;
  if (!("announcement" in value) || value["announcement"] === undefined)
    return false;
  return true;
}

export function OsrmVoiceInstructionFromJSON(json: any): OsrmVoiceInstruction {
  return OsrmVoiceInstructionFromJSONTyped(json, false);
}

export function OsrmVoiceInstructionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): OsrmVoiceInstruction {
  if (json == null) {
    return json;
  }
  return {
    distanceAlongGeometry: json["distanceAlongGeometry"],
    announcement: json["announcement"],
    ssmlAnnouncement:
      json["ssmlAnnouncement"] == null ? undefined : json["ssmlAnnouncement"],
  };
}

export function OsrmVoiceInstructionToJSON(json: any): OsrmVoiceInstruction {
  return OsrmVoiceInstructionToJSONTyped(json, false);
}

export function OsrmVoiceInstructionToJSONTyped(
  value?: OsrmVoiceInstruction | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    distanceAlongGeometry: value["distanceAlongGeometry"],
    announcement: value["announcement"],
    ssmlAnnouncement: value["ssmlAnnouncement"],
  };
}
