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
 * @interface CommentUpdateDTO
 */
export interface CommentUpdateDTO {
    /**
     * 
     * @type {string}
     * @memberof CommentUpdateDTO
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof CommentUpdateDTO
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof CommentUpdateDTO
     */
    postId?: string;
    /**
     * 
     * @type {string}
     * @memberof CommentUpdateDTO
     */
    content?: string | null;
}

/**
 * Check if a given object implements the CommentUpdateDTO interface.
 */
export function instanceOfCommentUpdateDTO(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CommentUpdateDTOFromJSON(json: any): CommentUpdateDTO {
    return CommentUpdateDTOFromJSONTyped(json, false);
}

export function CommentUpdateDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommentUpdateDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'postId': !exists(json, 'postId') ? undefined : json['postId'],
        'content': !exists(json, 'content') ? undefined : json['content'],
    };
}

export function CommentUpdateDTOToJSON(value?: CommentUpdateDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'userId': value.userId,
        'postId': value.postId,
        'content': value.content,
    };
}

