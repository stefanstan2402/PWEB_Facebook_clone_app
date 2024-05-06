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
import type { CommentDTO } from './CommentDTO';
import {
    CommentDTOFromJSON,
    CommentDTOFromJSONTyped,
    CommentDTOToJSON,
} from './CommentDTO';
import type { EventDTO } from './EventDTO';
import {
    EventDTOFromJSON,
    EventDTOFromJSONTyped,
    EventDTOToJSON,
} from './EventDTO';
import type { FeedbackDTO } from './FeedbackDTO';
import {
    FeedbackDTOFromJSON,
    FeedbackDTOFromJSONTyped,
    FeedbackDTOToJSON,
} from './FeedbackDTO';
import type { LikeDTO } from './LikeDTO';
import {
    LikeDTOFromJSON,
    LikeDTOFromJSONTyped,
    LikeDTOToJSON,
} from './LikeDTO';
import type { PostDTO } from './PostDTO';
import {
    PostDTOFromJSON,
    PostDTOFromJSONTyped,
    PostDTOToJSON,
} from './PostDTO';
import type { UserRoleEnum } from './UserRoleEnum';
import {
    UserRoleEnumFromJSON,
    UserRoleEnumFromJSONTyped,
    UserRoleEnumToJSON,
} from './UserRoleEnum';

/**
 * 
 * @export
 * @interface UserDTO
 */
export interface UserDTO {
    /**
     * 
     * @type {string}
     * @memberof UserDTO
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof UserDTO
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserDTO
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserDTO
     */
    phoneNumber?: string | null;
    /**
     * 
     * @type {UserRoleEnum}
     * @memberof UserDTO
     */
    role?: UserRoleEnum;
    /**
     * 
     * @type {Array<PostDTO>}
     * @memberof UserDTO
     */
    posts?: Array<PostDTO> | null;
    /**
     * 
     * @type {Array<LikeDTO>}
     * @memberof UserDTO
     */
    likes?: Array<LikeDTO> | null;
    /**
     * 
     * @type {Array<CommentDTO>}
     * @memberof UserDTO
     */
    comments?: Array<CommentDTO> | null;
    /**
     * 
     * @type {Array<EventDTO>}
     * @memberof UserDTO
     */
    events?: Array<EventDTO> | null;
    /**
     * 
     * @type {Array<FeedbackDTO>}
     * @memberof UserDTO
     */
    feedbacks?: Array<FeedbackDTO> | null;
}

/**
 * Check if a given object implements the UserDTO interface.
 */
export function instanceOfUserDTO(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UserDTOFromJSON(json: any): UserDTO {
    return UserDTOFromJSONTyped(json, false);
}

export function UserDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'phoneNumber': !exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
        'role': !exists(json, 'role') ? undefined : UserRoleEnumFromJSON(json['role']),
        'posts': !exists(json, 'posts') ? undefined : (json['posts'] === null ? null : (json['posts'] as Array<any>).map(PostDTOFromJSON)),
        'likes': !exists(json, 'likes') ? undefined : (json['likes'] === null ? null : (json['likes'] as Array<any>).map(LikeDTOFromJSON)),
        'comments': !exists(json, 'comments') ? undefined : (json['comments'] === null ? null : (json['comments'] as Array<any>).map(CommentDTOFromJSON)),
        'events': !exists(json, 'events') ? undefined : (json['events'] === null ? null : (json['events'] as Array<any>).map(EventDTOFromJSON)),
        'feedbacks': !exists(json, 'feedbacks') ? undefined : (json['feedbacks'] === null ? null : (json['feedbacks'] as Array<any>).map(FeedbackDTOFromJSON)),
    };
}

export function UserDTOToJSON(value?: UserDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'email': value.email,
        'phoneNumber': value.phoneNumber,
        'role': UserRoleEnumToJSON(value.role),
        'posts': value.posts === undefined ? undefined : (value.posts === null ? null : (value.posts as Array<any>).map(PostDTOToJSON)),
        'likes': value.likes === undefined ? undefined : (value.likes === null ? null : (value.likes as Array<any>).map(LikeDTOToJSON)),
        'comments': value.comments === undefined ? undefined : (value.comments === null ? null : (value.comments as Array<any>).map(CommentDTOToJSON)),
        'events': value.events === undefined ? undefined : (value.events === null ? null : (value.events as Array<any>).map(EventDTOToJSON)),
        'feedbacks': value.feedbacks === undefined ? undefined : (value.feedbacks === null ? null : (value.feedbacks as Array<any>).map(FeedbackDTOToJSON)),
    };
}
