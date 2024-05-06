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
import type { ErrorMessage } from './ErrorMessage';
import {
    ErrorMessageFromJSON,
    ErrorMessageFromJSONTyped,
    ErrorMessageToJSON,
} from './ErrorMessage';

/**
 * 
 * @export
 * @interface CommentDTOListRequestResponse
 */
export interface CommentDTOListRequestResponse {
    /**
     * 
     * @type {Array<CommentDTO>}
     * @memberof CommentDTOListRequestResponse
     */
    readonly response?: Array<CommentDTO> | null;
    /**
     * 
     * @type {ErrorMessage}
     * @memberof CommentDTOListRequestResponse
     */
    errorMessage?: ErrorMessage;
}

/**
 * Check if a given object implements the CommentDTOListRequestResponse interface.
 */
export function instanceOfCommentDTOListRequestResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CommentDTOListRequestResponseFromJSON(json: any): CommentDTOListRequestResponse {
    return CommentDTOListRequestResponseFromJSONTyped(json, false);
}

export function CommentDTOListRequestResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommentDTOListRequestResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'response': !exists(json, 'response') ? undefined : (json['response'] === null ? null : (json['response'] as Array<any>).map(CommentDTOFromJSON)),
        'errorMessage': !exists(json, 'errorMessage') ? undefined : ErrorMessageFromJSON(json['errorMessage']),
    };
}

export function CommentDTOListRequestResponseToJSON(value?: CommentDTOListRequestResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'errorMessage': ErrorMessageToJSON(value.errorMessage),
    };
}

