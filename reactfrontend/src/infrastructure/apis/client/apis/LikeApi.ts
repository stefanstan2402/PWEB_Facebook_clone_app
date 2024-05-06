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
  Int32RequestResponse,
  LikeAddDTO,
  LikeDTOListRequestResponse,
  LikeDTORequestResponse,
  RequestResponse,
} from '../models';
import {
    Int32RequestResponseFromJSON,
    Int32RequestResponseToJSON,
    LikeAddDTOFromJSON,
    LikeAddDTOToJSON,
    LikeDTOListRequestResponseFromJSON,
    LikeDTOListRequestResponseToJSON,
    LikeDTORequestResponseFromJSON,
    LikeDTORequestResponseToJSON,
    RequestResponseFromJSON,
    RequestResponseToJSON,
} from '../models';

export interface ApiLikeAddPostRequest {
    likeAddDTO?: LikeAddDTO;
}

export interface ApiLikeDeleteIdIdUserIdPostDeleteRequest {
    id: string;
    idUser: string;
    idPost: string;
}

export interface ApiLikeGetByIdIdGetRequest {
    id: string;
}

export interface ApiLikeGetLikesForPostLikesIdPostIdUserGetRequest {
    idPost: string;
    idUser: string;
}

export interface ApiLikeGetPostLikesCountLikesIdPostGetRequest {
    idPost: string;
}

/**
 * 
 */
export class LikeApi extends runtime.BaseAPI {

    /**
     */
    async apiLikeAddPostRaw(requestParameters: ApiLikeAddPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RequestResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/Like/Add`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: LikeAddDTOToJSON(requestParameters.likeAddDTO),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiLikeAddPost(requestParameters: ApiLikeAddPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RequestResponse> {
        const response = await this.apiLikeAddPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiLikeDeleteIdIdUserIdPostDeleteRaw(requestParameters: ApiLikeDeleteIdIdUserIdPostDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RequestResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiLikeDeleteIdIdUserIdPostDelete.');
        }

        if (requestParameters.idUser === null || requestParameters.idUser === undefined) {
            throw new runtime.RequiredError('idUser','Required parameter requestParameters.idUser was null or undefined when calling apiLikeDeleteIdIdUserIdPostDelete.');
        }

        if (requestParameters.idPost === null || requestParameters.idPost === undefined) {
            throw new runtime.RequiredError('idPost','Required parameter requestParameters.idPost was null or undefined when calling apiLikeDeleteIdIdUserIdPostDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/Like/Delete/{id}/{idUser}/{idPost}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"idUser"}}`, encodeURIComponent(String(requestParameters.idUser))).replace(`{${"idPost"}}`, encodeURIComponent(String(requestParameters.idPost))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiLikeDeleteIdIdUserIdPostDelete(requestParameters: ApiLikeDeleteIdIdUserIdPostDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RequestResponse> {
        const response = await this.apiLikeDeleteIdIdUserIdPostDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiLikeGetByIdIdGetRaw(requestParameters: ApiLikeGetByIdIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LikeDTORequestResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiLikeGetByIdIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/Like/GetById/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LikeDTORequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiLikeGetByIdIdGet(requestParameters: ApiLikeGetByIdIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LikeDTORequestResponse> {
        const response = await this.apiLikeGetByIdIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiLikeGetLikesForPostLikesIdPostIdUserGetRaw(requestParameters: ApiLikeGetLikesForPostLikesIdPostIdUserGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LikeDTOListRequestResponse>> {
        if (requestParameters.idPost === null || requestParameters.idPost === undefined) {
            throw new runtime.RequiredError('idPost','Required parameter requestParameters.idPost was null or undefined when calling apiLikeGetLikesForPostLikesIdPostIdUserGet.');
        }

        if (requestParameters.idUser === null || requestParameters.idUser === undefined) {
            throw new runtime.RequiredError('idUser','Required parameter requestParameters.idUser was null or undefined when calling apiLikeGetLikesForPostLikesIdPostIdUserGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/Like/GetLikesForPost/likes/{idPost}/{idUser}`.replace(`{${"idPost"}}`, encodeURIComponent(String(requestParameters.idPost))).replace(`{${"idUser"}}`, encodeURIComponent(String(requestParameters.idUser))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LikeDTOListRequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiLikeGetLikesForPostLikesIdPostIdUserGet(requestParameters: ApiLikeGetLikesForPostLikesIdPostIdUserGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LikeDTOListRequestResponse> {
        const response = await this.apiLikeGetLikesForPostLikesIdPostIdUserGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiLikeGetPostLikesCountLikesIdPostGetRaw(requestParameters: ApiLikeGetPostLikesCountLikesIdPostGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Int32RequestResponse>> {
        if (requestParameters.idPost === null || requestParameters.idPost === undefined) {
            throw new runtime.RequiredError('idPost','Required parameter requestParameters.idPost was null or undefined when calling apiLikeGetPostLikesCountLikesIdPostGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/Like/GetPostLikes/count-likes/{idPost}`.replace(`{${"idPost"}}`, encodeURIComponent(String(requestParameters.idPost))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => Int32RequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiLikeGetPostLikesCountLikesIdPostGet(requestParameters: ApiLikeGetPostLikesCountLikesIdPostGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Int32RequestResponse> {
        const response = await this.apiLikeGetPostLikesCountLikesIdPostGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}