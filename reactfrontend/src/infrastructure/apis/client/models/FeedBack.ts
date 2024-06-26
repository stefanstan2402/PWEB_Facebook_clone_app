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
import type { User } from './User';
import {
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './User';

/**
 * 
 * @export
 * @interface FeedBack
 */
export interface FeedBack {
    /**
     * 
     * @type {string}
     * @memberof FeedBack
     */
    id?: string;
    /**
     * 
     * @type {Date}
     * @memberof FeedBack
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof FeedBack
     */
    updatedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof FeedBack
     */
    content?: string | null;
    /**
     * 
     * @type {number}
     * @memberof FeedBack
     */
    rating?: number;
    /**
     * 
     * @type {string}
     * @memberof FeedBack
     */
    typeOfAppreciation?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof FeedBack
     */
    isUserExperienceEnjoyable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FeedBack
     */
    userId?: string;
    /**
     * 
     * @type {User}
     * @memberof FeedBack
     */
    user?: User;
}

/**
 * Check if a given object implements the FeedBack interface.
 */
export function instanceOfFeedBack(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FeedBackFromJSON(json: any): FeedBack {
    return FeedBackFromJSONTyped(json, false);
}

export function FeedBackFromJSONTyped(json: any, ignoreDiscriminator: boolean): FeedBack {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'updatedAt': !exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
        'content': !exists(json, 'content') ? undefined : json['content'],
        'rating': !exists(json, 'rating') ? undefined : json['rating'],
        'typeOfAppreciation': !exists(json, 'typeOfAppreciation') ? undefined : json['typeOfAppreciation'],
        'isUserExperienceEnjoyable': !exists(json, 'isUserExperienceEnjoyable') ? undefined : json['isUserExperienceEnjoyable'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'user': !exists(json, 'user') ? undefined : UserFromJSON(json['user']),
    };
}

export function FeedBackToJSON(value?: FeedBack | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
        'content': value.content,
        'rating': value.rating,
        'typeOfAppreciation': value.typeOfAppreciation,
        'isUserExperienceEnjoyable': value.isUserExperienceEnjoyable,
        'userId': value.userId,
        'user': UserToJSON(value.user),
    };
}

