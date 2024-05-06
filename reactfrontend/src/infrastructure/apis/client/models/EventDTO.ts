/* tslint:disable */
/* eslint-disable */
/**
 * MobyLab Web App
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { UserDTO } from './UserDTO';
import {
    UserDTOFromJSON,
    UserDTOFromJSONTyped,
    UserDTOToJSON,
} from './UserDTO';

/**
 * 
 * @export
 * @interface EventDTO
 */
export interface EventDTO {
    /**
     * 
     * @type {string}
     * @memberof EventDTO
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof EventDTO
     */
    content?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EventDTO
     */
    title?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EventDTO
     */
    location?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EventDTO
     */
    date?: string | null;
    /**
     * 
     * @type {UserDTO}
     * @memberof EventDTO
     */
    user?: UserDTO;
}

/**
 * Check if a given object implements the EventDTO interface.
 */
export function instanceOfEventDTO(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EventDTOFromJSON(json: any): EventDTO {
    return EventDTOFromJSONTyped(json, false);
}

export function EventDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'content': !exists(json, 'content') ? undefined : json['content'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'location': !exists(json, 'location') ? undefined : json['location'],
        'date': !exists(json, 'date') ? undefined : json['date'],
        'user': !exists(json, 'user') ? undefined : UserDTOFromJSON(json['user']),
    };
}

export function EventDTOToJSON(value?: EventDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'content': value.content,
        'title': value.title,
        'location': value.location,
        'date': value.date,
        'user': UserDTOToJSON(value.user),
    };
}
