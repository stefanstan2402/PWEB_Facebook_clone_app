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
/**
 * 
 * @export
 * @interface LikeAddDTO
 */
export interface LikeAddDTO {
    /**
     * 
     * @type {string}
     * @memberof LikeAddDTO
     */
    postId?: string;
    /**
     * 
     * @type {string}
     * @memberof LikeAddDTO
     */
    userId?: string;
}

/**
 * Check if a given object implements the LikeAddDTO interface.
 */
export function instanceOfLikeAddDTO(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LikeAddDTOFromJSON(json: any): LikeAddDTO {
    return LikeAddDTOFromJSONTyped(json, false);
}

export function LikeAddDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): LikeAddDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'postId': !exists(json, 'postId') ? undefined : json['postId'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
    };
}

export function LikeAddDTOToJSON(value?: LikeAddDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'postId': value.postId,
        'userId': value.userId,
    };
}

