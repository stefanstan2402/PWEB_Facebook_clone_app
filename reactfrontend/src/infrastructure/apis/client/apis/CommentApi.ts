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


import * as runtime from '../runtime';
import type {
  CommentAddDTO,
  CommentDTOListRequestResponse,
  CommentDTORequestResponse,
  CommentUpdateDTO,
  Int32RequestResponse,
  RequestResponse,
} from '../models';
import {
    CommentAddDTOFromJSON,
    CommentAddDTOToJSON,
    CommentDTOListRequestResponseFromJSON,
    CommentDTOListRequestResponseToJSON,
    CommentDTORequestResponseFromJSON,
    CommentDTORequestResponseToJSON,
    CommentUpdateDTOFromJSON,
    CommentUpdateDTOToJSON,
    Int32RequestResponseFromJSON,
    Int32RequestResponseToJSON,
    RequestResponseFromJSON,
    RequestResponseToJSON,
} from '../models';

export interface ApiCommentAddPostRequest {
    commentAddDTO?: CommentAddDTO;
}

export interface ApiCommentDeleteIdIdUserIdPostDeleteRequest {
    id: string;
    idUser: string;
    idPost: string;
}

export interface ApiCommentGetByIdIdGetRequest {
    id: string;
}

export interface ApiCommentGetCommentsForPostCommentsIdPostGetRequest {
    idPost: string;
}

export interface ApiCommentGetPostCommentsCountCommentsIdPostGetRequest {
    idPost: string;
}

export interface ApiCommentUpdatePutRequest {
    commentUpdateDTO?: CommentUpdateDTO;
}

/**
 * 
 */
export class CommentApi extends runtime.BaseAPI {

    /**
     */
    async apiCommentAddPostRaw(requestParameters: ApiCommentAddPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RequestResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/Comment/Add`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CommentAddDTOToJSON(requestParameters.commentAddDTO),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiCommentAddPost(requestParameters: ApiCommentAddPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RequestResponse> {
        const response = await this.apiCommentAddPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiCommentDeleteIdIdUserIdPostDeleteRaw(requestParameters: ApiCommentDeleteIdIdUserIdPostDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RequestResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiCommentDeleteIdIdUserIdPostDelete.');
        }

        if (requestParameters.idUser === null || requestParameters.idUser === undefined) {
            throw new runtime.RequiredError('idUser','Required parameter requestParameters.idUser was null or undefined when calling apiCommentDeleteIdIdUserIdPostDelete.');
        }

        if (requestParameters.idPost === null || requestParameters.idPost === undefined) {
            throw new runtime.RequiredError('idPost','Required parameter requestParameters.idPost was null or undefined when calling apiCommentDeleteIdIdUserIdPostDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/Comment/Delete/{id}/{idUser}/{idPost}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"idUser"}}`, encodeURIComponent(String(requestParameters.idUser))).replace(`{${"idPost"}}`, encodeURIComponent(String(requestParameters.idPost))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiCommentDeleteIdIdUserIdPostDelete(requestParameters: ApiCommentDeleteIdIdUserIdPostDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RequestResponse> {
        const response = await this.apiCommentDeleteIdIdUserIdPostDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiCommentGetByIdIdGetRaw(requestParameters: ApiCommentGetByIdIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CommentDTORequestResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiCommentGetByIdIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/Comment/GetById/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CommentDTORequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiCommentGetByIdIdGet(requestParameters: ApiCommentGetByIdIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CommentDTORequestResponse> {
        const response = await this.apiCommentGetByIdIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiCommentGetCommentsForPostCommentsIdPostGetRaw(requestParameters: ApiCommentGetCommentsForPostCommentsIdPostGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CommentDTOListRequestResponse>> {
        if (requestParameters.idPost === null || requestParameters.idPost === undefined) {
            throw new runtime.RequiredError('idPost','Required parameter requestParameters.idPost was null or undefined when calling apiCommentGetCommentsForPostCommentsIdPostGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/Comment/GetCommentsForPost/Comments/{idPost}`.replace(`{${"idPost"}}`, encodeURIComponent(String(requestParameters.idPost))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CommentDTOListRequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiCommentGetCommentsForPostCommentsIdPostGet(requestParameters: ApiCommentGetCommentsForPostCommentsIdPostGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CommentDTOListRequestResponse> {
        const response = await this.apiCommentGetCommentsForPostCommentsIdPostGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiCommentGetPostCommentsCountCommentsIdPostGetRaw(requestParameters: ApiCommentGetPostCommentsCountCommentsIdPostGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Int32RequestResponse>> {
        if (requestParameters.idPost === null || requestParameters.idPost === undefined) {
            throw new runtime.RequiredError('idPost','Required parameter requestParameters.idPost was null or undefined when calling apiCommentGetPostCommentsCountCommentsIdPostGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/Comment/GetPostComments/count-Comments/{idPost}`.replace(`{${"idPost"}}`, encodeURIComponent(String(requestParameters.idPost))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => Int32RequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiCommentGetPostCommentsCountCommentsIdPostGet(requestParameters: ApiCommentGetPostCommentsCountCommentsIdPostGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Int32RequestResponse> {
        const response = await this.apiCommentGetPostCommentsCountCommentsIdPostGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiCommentUpdatePutRaw(requestParameters: ApiCommentUpdatePutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RequestResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/Comment/Update`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CommentUpdateDTOToJSON(requestParameters.commentUpdateDTO),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiCommentUpdatePut(requestParameters: ApiCommentUpdatePutRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RequestResponse> {
        const response = await this.apiCommentUpdatePutRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
