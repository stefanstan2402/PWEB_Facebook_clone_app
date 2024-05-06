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
import type { PostDTO } from './PostDTO';
import {
    PostDTOFromJSON,
    PostDTOFromJSONTyped,
    PostDTOToJSON,
} from './PostDTO';
import type { UserDTO } from './UserDTO';
import {
    UserDTOFromJSON,
    UserDTOFromJSONTyped,
    UserDTOToJSON,
} from './UserDTO';

/**
 * 
 * @export
 * @interface CommentDTO
 */
export interface CommentDTO {
    /**
     * 
     * @type {string}
     * @memberof CommentDTO
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof CommentDTO
     */
    content?: string | null;
    /**
     * 
     * @type {UserDTO}
     * @memberof CommentDTO
     */
    user?: UserDTO;
    /**
     * 
     * @type {PostDTO}
     * @memberof CommentDTO
     */
    post?: PostDTO;
}

/**
 * Check if a given object implements the CommentDTO interface.
 */
export function instanceOfCommentDTO(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CommentDTOFromJSON(json: any): CommentDTO {
    return CommentDTOFromJSONTyped(json, false);
}

export function CommentDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommentDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'content': !exists(json, 'content') ? undefined : json['content'],
        'user': !exists(json, 'user') ? undefined : UserDTOFromJSON(json['user']),
        'post': !exists(json, 'post') ? undefined : PostDTOFromJSON(json['post']),
    };
}

export function CommentDTOToJSON(value?: CommentDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'content': value.content,
        'user': UserDTOToJSON(value.user),
        'post': PostDTOToJSON(value.post),
    };
}

