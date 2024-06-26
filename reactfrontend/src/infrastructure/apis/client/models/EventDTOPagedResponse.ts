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
import type { EventDTO } from './EventDTO';
import {
    EventDTOFromJSON,
    EventDTOFromJSONTyped,
    EventDTOToJSON,
} from './EventDTO';

/**
 * 
 * @export
 * @interface EventDTOPagedResponse
 */
export interface EventDTOPagedResponse {
    /**
     * 
     * @type {number}
     * @memberof EventDTOPagedResponse
     */
    page?: number;
    /**
     * 
     * @type {number}
     * @memberof EventDTOPagedResponse
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof EventDTOPagedResponse
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<EventDTO>}
     * @memberof EventDTOPagedResponse
     */
    data?: Array<EventDTO> | null;
}

/**
 * Check if a given object implements the EventDTOPagedResponse interface.
 */
export function instanceOfEventDTOPagedResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EventDTOPagedResponseFromJSON(json: any): EventDTOPagedResponse {
    return EventDTOPagedResponseFromJSONTyped(json, false);
}

export function EventDTOPagedResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventDTOPagedResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'page': !exists(json, 'page') ? undefined : json['page'],
        'pageSize': !exists(json, 'pageSize') ? undefined : json['pageSize'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
        'data': !exists(json, 'data') ? undefined : (json['data'] === null ? null : (json['data'] as Array<any>).map(EventDTOFromJSON)),
    };
}

export function EventDTOPagedResponseToJSON(value?: EventDTOPagedResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'page': value.page,
        'pageSize': value.pageSize,
        'totalCount': value.totalCount,
        'data': value.data === undefined ? undefined : (value.data === null ? null : (value.data as Array<any>).map(EventDTOToJSON)),
    };
}

