/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ServiceClientOptions } from "@azure/ms-rest-js";
import * as msRest from "@azure/ms-rest-js";

/**
 * An interface representing Like.
 */
export interface Like {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  postId?: string;
  post?: Post;
  userId?: string;
  user?: User;
}

/**
 * An interface representing Post.
 */
export interface Post {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  content?: string;
  userId?: string;
  user?: User;
  comments?: Comment[];
  likes?: Like[];
}

/**
 * An interface representing Event.
 */
export interface Event {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  content?: string;
  title?: string;
  location?: string;
  date?: string;
  userId?: string;
  user?: User;
}

/**
 * An interface representing UserFile.
 */
export interface UserFile {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  path?: string;
  name?: string;
  description?: string;
  userId?: string;
  user?: User;
}

/**
 * An interface representing FeedBack.
 */
export interface FeedBack {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  content?: string;
  rating?: number;
  typeOfAppreciation?: string;
  isUserExperienceEnjoyable?: boolean;
  userId?: string;
  user?: User;
}

/**
 * An interface representing User.
 */
export interface User {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  name?: string;
  email?: string;
  password?: string;
  phoneNumber?: string;
  /**
   * Possible values include: 'Admin', 'User'
   */
  role?: Role;
  posts?: Post[];
  likes?: Like[];
  comments?: Comment[];
  events?: Event[];
  userFiles?: UserFile[];
  feedbacks?: FeedBack[];
}

/**
 * An interface representing Comment.
 */
export interface Comment {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  content?: string;
  userId?: string;
  user?: User;
  postId?: string;
  post?: Post;
}

/**
 * An interface representing CommentAddDTO.
 */
export interface CommentAddDTO {
  postId?: string;
  userId?: string;
  content?: string;
}

/**
 * An interface representing LikeDTO.
 */
export interface LikeDTO {
  id?: string;
  user?: UserDTO;
  post?: PostDTO;
}

/**
 * An interface representing PostDTO.
 */
export interface PostDTO {
  id?: string;
  content?: string;
  user?: UserDTO;
  comments?: CommentDTO[];
  likes?: LikeDTO[];
}

/**
 * An interface representing EventDTO.
 */
export interface EventDTO {
  id?: string;
  content?: string;
  title?: string;
  location?: string;
  date?: string;
  user?: UserDTO;
}

/**
 * An interface representing FeedbackDTO.
 */
export interface FeedbackDTO {
  id?: string;
  content?: string;
  rating?: number;
  typeOfAppreciation?: string;
  isUserExperienceEnjoyable?: boolean;
  user?: UserDTO;
}

/**
 * An interface representing UserDTO.
 */
export interface UserDTO {
  id?: string;
  name?: string;
  email?: string;
  phoneNumber?: string;
  /**
   * Possible values include: 'Admin', 'User'
   */
  role?: Role1;
  posts?: PostDTO[];
  likes?: LikeDTO[];
  comments?: CommentDTO[];
  events?: EventDTO[];
  feedbacks?: FeedbackDTO[];
}

/**
 * An interface representing CommentDTO.
 */
export interface CommentDTO {
  id?: string;
  content?: string;
  user?: UserDTO;
  post?: PostDTO;
}

/**
 * An interface representing ErrorMessage.
 */
export interface ErrorMessage {
  message?: string;
  /**
   * Possible values include: 'Unknown', 'TechnicalError', 'EntityNotFound',
   * 'PhysicalFileNotFound', 'UserAlreadyExists', 'WrongPassword', 'CannotAdd', 'CannotUpdate',
   * 'CannotDelete', 'MailSendFailed', 'CannotSee'
   */
  code?: Code;
  /**
   * Possible values include: 'Continue', 'SwitchingProtocols', 'Processing', 'EarlyHints', 'OK',
   * 'Created', 'Accepted', 'NonAuthoritativeInformation', 'NoContent', 'ResetContent',
   * 'PartialContent', 'MultiStatus', 'AlreadyReported', 'IMUsed', 'MultipleChoices',
   * 'MovedPermanently', 'Found', 'SeeOther', 'NotModified', 'UseProxy', 'Unused',
   * 'TemporaryRedirect', 'PermanentRedirect', 'BadRequest', 'Unauthorized', 'PaymentRequired',
   * 'Forbidden', 'NotFound', 'MethodNotAllowed', 'NotAcceptable', 'ProxyAuthenticationRequired',
   * 'RequestTimeout', 'Conflict', 'Gone', 'LengthRequired', 'PreconditionFailed',
   * 'RequestEntityTooLarge', 'RequestUriTooLong', 'UnsupportedMediaType',
   * 'RequestedRangeNotSatisfiable', 'ExpectationFailed', 'MisdirectedRequest',
   * 'UnprocessableEntity', 'Locked', 'FailedDependency', 'UpgradeRequired',
   * 'PreconditionRequired', 'TooManyRequests', 'RequestHeaderFieldsTooLarge',
   * 'UnavailableForLegalReasons', 'InternalServerError', 'NotImplemented', 'BadGateway',
   * 'ServiceUnavailable', 'GatewayTimeout', 'HttpVersionNotSupported', 'VariantAlsoNegotiates',
   * 'InsufficientStorage', 'LoopDetected', 'NotExtended', 'NetworkAuthenticationRequired'
   */
  status?: Status;
}

/**
 * An interface representing CommentDTOListRequestResponse.
 */
export interface CommentDTOListRequestResponse {
  /**
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly response?: CommentDTO[];
  errorMessage?: ErrorMessage;
}

/**
 * An interface representing CommentDTORequestResponse.
 */
export interface CommentDTORequestResponse {
  response?: CommentDTO;
  errorMessage?: ErrorMessage;
}

/**
 * An interface representing CommentUpdateDTO.
 */
export interface CommentUpdateDTO {
  id?: string;
  userId?: string;
  postId?: string;
  content?: string;
}

/**
 * An interface representing EventAddDTO.
 */
export interface EventAddDTO {
  userId?: string;
  content?: string;
  title?: string;
  location?: string;
  date?: string;
}

/**
 * An interface representing EventDTOPagedResponse.
 */
export interface EventDTOPagedResponse {
  page?: number;
  pageSize?: number;
  totalCount?: number;
  data?: EventDTO[];
}

/**
 * An interface representing EventDTOPagedResponseRequestResponse.
 */
export interface EventDTOPagedResponseRequestResponse {
  response?: EventDTOPagedResponse;
  errorMessage?: ErrorMessage;
}

/**
 * An interface representing EventDTORequestResponse.
 */
export interface EventDTORequestResponse {
  response?: EventDTO;
  errorMessage?: ErrorMessage;
}

/**
 * An interface representing EventUpdateDTO.
 */
export interface EventUpdateDTO {
  id?: string;
  userId?: string;
  content?: string;
  title?: string;
  location?: string;
  date?: string;
}

/**
 * An interface representing FeedbackAddDTO.
 */
export interface FeedbackAddDTO {
  userId?: string;
  content?: string;
  rating?: number;
  typeOfAppreciation?: string;
  isUserExperienceEnjoyable?: boolean;
}

/**
 * An interface representing FeedbackDTOPagedResponse.
 */
export interface FeedbackDTOPagedResponse {
  page?: number;
  pageSize?: number;
  totalCount?: number;
  data?: FeedbackDTO[];
}

/**
 * An interface representing FeedbackDTOPagedResponseRequestResponse.
 */
export interface FeedbackDTOPagedResponseRequestResponse {
  response?: FeedbackDTOPagedResponse;
  errorMessage?: ErrorMessage;
}

/**
 * An interface representing FeedbackDTORequestResponse.
 */
export interface FeedbackDTORequestResponse {
  response?: FeedbackDTO;
  errorMessage?: ErrorMessage;
}

/**
 * An interface representing FeedbackUpdateDTO.
 */
export interface FeedbackUpdateDTO {
  id?: string;
  userId?: string;
  content?: string;
  rating?: number;
  email?: string;
  name?: string;
  phoneNumber?: string;
  typeOfAppreciation?: string;
  isUserExperienceEnjoyable?: boolean;
}

/**
 * An interface representing Int32RequestResponse.
 */
export interface Int32RequestResponse {
  /**
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly response?: number;
  errorMessage?: ErrorMessage;
}

/**
 * An interface representing LikeAddDTO.
 */
export interface LikeAddDTO {
  postId?: string;
  userId?: string;
}

/**
 * An interface representing LikeDTOListRequestResponse.
 */
export interface LikeDTOListRequestResponse {
  /**
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly response?: LikeDTO[];
  errorMessage?: ErrorMessage;
}

/**
 * An interface representing LikeDTORequestResponse.
 */
export interface LikeDTORequestResponse {
  response?: LikeDTO;
  errorMessage?: ErrorMessage;
}

/**
 * An interface representing LoginDTO.
 */
export interface LoginDTO {
  email?: string;
  password?: string;
}

/**
 * An interface representing LoginResponseDTO.
 */
export interface LoginResponseDTO {
  token?: string;
  user?: UserDTO;
}

/**
 * An interface representing LoginResponseDTORequestResponse.
 */
export interface LoginResponseDTORequestResponse {
  response?: LoginResponseDTO;
  errorMessage?: ErrorMessage;
}

/**
 * An interface representing PostAddDTO.
 */
export interface PostAddDTO {
  userId?: string;
  content?: string;
}

/**
 * An interface representing PostDTOPagedResponse.
 */
export interface PostDTOPagedResponse {
  page?: number;
  pageSize?: number;
  totalCount?: number;
  data?: PostDTO[];
}

/**
 * An interface representing PostDTOPagedResponseRequestResponse.
 */
export interface PostDTOPagedResponseRequestResponse {
  response?: PostDTOPagedResponse;
  errorMessage?: ErrorMessage;
}

/**
 * An interface representing PostDTORequestResponse.
 */
export interface PostDTORequestResponse {
  response?: PostDTO;
  errorMessage?: ErrorMessage;
}

/**
 * An interface representing PostUpdateDTO.
 */
export interface PostUpdateDTO {
  id?: string;
  content?: string;
  userId?: string;
}

/**
 * An interface representing RequestResponse.
 */
export interface RequestResponse {
  /**
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly response?: string;
  errorMessage?: ErrorMessage;
}

/**
 * An interface representing UserAddDTO.
 */
export interface UserAddDTO {
  name?: string;
  email?: string;
  password?: string;
  phoneNumber?: string;
  /**
   * Possible values include: 'Admin', 'User'
   */
  role?: Role2;
}

/**
 * An interface representing UserDTOPagedResponse.
 */
export interface UserDTOPagedResponse {
  page?: number;
  pageSize?: number;
  totalCount?: number;
  data?: UserDTO[];
}

/**
 * An interface representing UserDTOPagedResponseRequestResponse.
 */
export interface UserDTOPagedResponseRequestResponse {
  response?: UserDTOPagedResponse;
  errorMessage?: ErrorMessage;
}

/**
 * An interface representing UserDTORequestResponse.
 */
export interface UserDTORequestResponse {
  response?: UserDTO;
  errorMessage?: ErrorMessage;
}

/**
 * An interface representing UserFileDTO.
 */
export interface UserFileDTO {
  id?: string;
  name?: string;
  description?: string;
  user?: UserDTO;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * An interface representing UserFileDTOPagedResponse.
 */
export interface UserFileDTOPagedResponse {
  page?: number;
  pageSize?: number;
  totalCount?: number;
  data?: UserFileDTO[];
}

/**
 * An interface representing UserFileDTOPagedResponseRequestResponse.
 */
export interface UserFileDTOPagedResponseRequestResponse {
  response?: UserFileDTOPagedResponse;
  errorMessage?: ErrorMessage;
}

/**
 * An interface representing UserRequestResponse.
 */
export interface UserRequestResponse {
  response?: User;
  errorMessage?: ErrorMessage;
}

/**
 * An interface representing UserUpdateDTO.
 */
export interface UserUpdateDTO {
  id?: string;
  name?: string;
  password?: string;
  phoneNumber?: string;
}

/**
 * An interface representing BusinessAPIOptions.
 */
export interface BusinessAPIOptions extends ServiceClientOptions {
  baseUri?: string;
}

/**
 * Optional Parameters.
 */
export interface BusinessAPILoginOptionalParams extends msRest.RequestOptionsBase {
  body?: LoginDTO;
}

/**
 * Optional Parameters.
 */
export interface BusinessAPIAddOptionalParams extends msRest.RequestOptionsBase {
  body?: CommentAddDTO;
}

/**
 * Optional Parameters.
 */
export interface BusinessAPIUpdateOptionalParams extends msRest.RequestOptionsBase {
  body?: CommentUpdateDTO;
}

/**
 * Optional Parameters.
 */
export interface BusinessAPIGetPageOptionalParams extends msRest.RequestOptionsBase {
  search?: string;
  page?: number;
  pageSize?: number;
}

/**
 * Optional Parameters.
 */
export interface BusinessAPIAdd1OptionalParams extends msRest.RequestOptionsBase {
  body?: EventAddDTO;
}

/**
 * Optional Parameters.
 */
export interface BusinessAPIUpdate1OptionalParams extends msRest.RequestOptionsBase {
  body?: EventUpdateDTO;
}

/**
 * Optional Parameters.
 */
export interface BusinessAPIGetPage1OptionalParams extends msRest.RequestOptionsBase {
  search?: string;
  page?: number;
  pageSize?: number;
}

/**
 * Optional Parameters.
 */
export interface BusinessAPIAdd2OptionalParams extends msRest.RequestOptionsBase {
  body?: FeedbackAddDTO;
}

/**
 * Optional Parameters.
 */
export interface BusinessAPIUpdate2OptionalParams extends msRest.RequestOptionsBase {
  body?: FeedbackUpdateDTO;
}

/**
 * Optional Parameters.
 */
export interface BusinessAPIAdd3OptionalParams extends msRest.RequestOptionsBase {
  body?: LikeAddDTO;
}

/**
 * Optional Parameters.
 */
export interface BusinessAPIGetPage2OptionalParams extends msRest.RequestOptionsBase {
  search?: string;
  page?: number;
  pageSize?: number;
}

/**
 * Optional Parameters.
 */
export interface BusinessAPIAdd4OptionalParams extends msRest.RequestOptionsBase {
  body?: PostAddDTO;
}

/**
 * Optional Parameters.
 */
export interface BusinessAPIUpdate3OptionalParams extends msRest.RequestOptionsBase {
  body?: PostUpdateDTO;
}

/**
 * Optional Parameters.
 */
export interface BusinessAPIGetPage3OptionalParams extends msRest.RequestOptionsBase {
  search?: string;
  page?: number;
  pageSize?: number;
}

/**
 * Optional Parameters.
 */
export interface BusinessAPIAdd5OptionalParams extends msRest.RequestOptionsBase {
  body?: UserAddDTO;
}

/**
 * Optional Parameters.
 */
export interface BusinessAPIUpdate4OptionalParams extends msRest.RequestOptionsBase {
  body?: UserUpdateDTO;
}

/**
 * Optional Parameters.
 */
export interface BusinessAPIGetPage4OptionalParams extends msRest.RequestOptionsBase {
  search?: string;
  page?: number;
  pageSize?: number;
}

/**
 * Optional Parameters.
 */
export interface BusinessAPIAdd6OptionalParams extends msRest.RequestOptionsBase {
  file?: msRest.HttpRequestBody;
  description?: string;
}

/**
 * Defines values for Role.
 * Possible values include: 'Admin', 'User'
 * @readonly
 * @enum {string}
 */
export type Role = 'Admin' | 'User';

/**
 * Defines values for Role1.
 * Possible values include: 'Admin', 'User'
 * @readonly
 * @enum {string}
 */
export type Role1 = 'Admin' | 'User';

/**
 * Defines values for Code.
 * Possible values include: 'Unknown', 'TechnicalError', 'EntityNotFound', 'PhysicalFileNotFound',
 * 'UserAlreadyExists', 'WrongPassword', 'CannotAdd', 'CannotUpdate', 'CannotDelete',
 * 'MailSendFailed', 'CannotSee'
 * @readonly
 * @enum {string}
 */
export type Code = 'Unknown' | 'TechnicalError' | 'EntityNotFound' | 'PhysicalFileNotFound' | 'UserAlreadyExists' | 'WrongPassword' | 'CannotAdd' | 'CannotUpdate' | 'CannotDelete' | 'MailSendFailed' | 'CannotSee';

/**
 * Defines values for Status.
 * Possible values include: 'Continue', 'SwitchingProtocols', 'Processing', 'EarlyHints', 'OK',
 * 'Created', 'Accepted', 'NonAuthoritativeInformation', 'NoContent', 'ResetContent',
 * 'PartialContent', 'MultiStatus', 'AlreadyReported', 'IMUsed', 'MultipleChoices',
 * 'MovedPermanently', 'Found', 'SeeOther', 'NotModified', 'UseProxy', 'Unused',
 * 'TemporaryRedirect', 'PermanentRedirect', 'BadRequest', 'Unauthorized', 'PaymentRequired',
 * 'Forbidden', 'NotFound', 'MethodNotAllowed', 'NotAcceptable', 'ProxyAuthenticationRequired',
 * 'RequestTimeout', 'Conflict', 'Gone', 'LengthRequired', 'PreconditionFailed',
 * 'RequestEntityTooLarge', 'RequestUriTooLong', 'UnsupportedMediaType',
 * 'RequestedRangeNotSatisfiable', 'ExpectationFailed', 'MisdirectedRequest',
 * 'UnprocessableEntity', 'Locked', 'FailedDependency', 'UpgradeRequired', 'PreconditionRequired',
 * 'TooManyRequests', 'RequestHeaderFieldsTooLarge', 'UnavailableForLegalReasons',
 * 'InternalServerError', 'NotImplemented', 'BadGateway', 'ServiceUnavailable', 'GatewayTimeout',
 * 'HttpVersionNotSupported', 'VariantAlsoNegotiates', 'InsufficientStorage', 'LoopDetected',
 * 'NotExtended', 'NetworkAuthenticationRequired'
 * @readonly
 * @enum {string}
 */
export type Status = 'Continue' | 'SwitchingProtocols' | 'Processing' | 'EarlyHints' | 'OK' | 'Created' | 'Accepted' | 'NonAuthoritativeInformation' | 'NoContent' | 'ResetContent' | 'PartialContent' | 'MultiStatus' | 'AlreadyReported' | 'IMUsed' | 'MultipleChoices' | 'MovedPermanently' | 'Found' | 'SeeOther' | 'NotModified' | 'UseProxy' | 'Unused' | 'TemporaryRedirect' | 'PermanentRedirect' | 'BadRequest' | 'Unauthorized' | 'PaymentRequired' | 'Forbidden' | 'NotFound' | 'MethodNotAllowed' | 'NotAcceptable' | 'ProxyAuthenticationRequired' | 'RequestTimeout' | 'Conflict' | 'Gone' | 'LengthRequired' | 'PreconditionFailed' | 'RequestEntityTooLarge' | 'RequestUriTooLong' | 'UnsupportedMediaType' | 'RequestedRangeNotSatisfiable' | 'ExpectationFailed' | 'MisdirectedRequest' | 'UnprocessableEntity' | 'Locked' | 'FailedDependency' | 'UpgradeRequired' | 'PreconditionRequired' | 'TooManyRequests' | 'RequestHeaderFieldsTooLarge' | 'UnavailableForLegalReasons' | 'InternalServerError' | 'NotImplemented' | 'BadGateway' | 'ServiceUnavailable' | 'GatewayTimeout' | 'HttpVersionNotSupported' | 'VariantAlsoNegotiates' | 'InsufficientStorage' | 'LoopDetected' | 'NotExtended' | 'NetworkAuthenticationRequired';

/**
 * Defines values for Role2.
 * Possible values include: 'Admin', 'User'
 * @readonly
 * @enum {string}
 */
export type Role2 = 'Admin' | 'User';

/**
 * Contains response data for the login operation.
 */
export type LoginResponse = LoginResponseDTORequestResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: LoginResponseDTORequestResponse;
    };
};

/**
 * Contains response data for the getById operation.
 */
export type GetByIdResponse = CommentDTORequestResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: CommentDTORequestResponse;
    };
};

/**
 * Contains response data for the getPostComments operation.
 */
export type GetPostCommentsResponse = Int32RequestResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Int32RequestResponse;
    };
};

/**
 * Contains response data for the getCommentsForPost operation.
 */
export type GetCommentsForPostResponse = CommentDTOListRequestResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: CommentDTOListRequestResponse;
    };
};

/**
 * Contains response data for the add operation.
 */
export type AddResponse = RequestResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RequestResponse;
    };
};

/**
 * Contains response data for the update operation.
 */
export type UpdateResponse = RequestResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RequestResponse;
    };
};

/**
 * Contains response data for the deleteMethod operation.
 */
export type DeleteMethodResponse = RequestResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RequestResponse;
    };
};

/**
 * Contains response data for the getById1 operation.
 */
export type GetById1Response = EventDTORequestResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: EventDTORequestResponse;
    };
};

/**
 * Contains response data for the getPage operation.
 */
export type GetPageResponse = EventDTOPagedResponseRequestResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: EventDTOPagedResponseRequestResponse;
    };
};

/**
 * Contains response data for the add1 operation.
 */
export type Add1Response = RequestResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RequestResponse;
    };
};

/**
 * Contains response data for the update1 operation.
 */
export type Update1Response = RequestResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RequestResponse;
    };
};

/**
 * Contains response data for the delete1 operation.
 */
export type Delete1Response = RequestResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RequestResponse;
    };
};

/**
 * Contains response data for the getById2 operation.
 */
export type GetById2Response = FeedbackDTORequestResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: FeedbackDTORequestResponse;
    };
};

/**
 * Contains response data for the getPage1 operation.
 */
export type GetPage1Response = FeedbackDTOPagedResponseRequestResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: FeedbackDTOPagedResponseRequestResponse;
    };
};

/**
 * Contains response data for the add2 operation.
 */
export type Add2Response = RequestResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RequestResponse;
    };
};

/**
 * Contains response data for the update2 operation.
 */
export type Update2Response = RequestResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RequestResponse;
    };
};

/**
 * Contains response data for the delete2 operation.
 */
export type Delete2Response = RequestResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RequestResponse;
    };
};

/**
 * Contains response data for the getById3 operation.
 */
export type GetById3Response = LikeDTORequestResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: LikeDTORequestResponse;
    };
};

/**
 * Contains response data for the getPostLikes operation.
 */
export type GetPostLikesResponse = Int32RequestResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Int32RequestResponse;
    };
};

/**
 * Contains response data for the getLikesForPost operation.
 */
export type GetLikesForPostResponse = LikeDTOListRequestResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: LikeDTOListRequestResponse;
    };
};

/**
 * Contains response data for the add3 operation.
 */
export type Add3Response = RequestResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RequestResponse;
    };
};

/**
 * Contains response data for the delete3 operation.
 */
export type Delete3Response = RequestResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RequestResponse;
    };
};

/**
 * Contains response data for the getById4 operation.
 */
export type GetById4Response = PostDTORequestResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PostDTORequestResponse;
    };
};

/**
 * Contains response data for the getPage2 operation.
 */
export type GetPage2Response = PostDTOPagedResponseRequestResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PostDTOPagedResponseRequestResponse;
    };
};

/**
 * Contains response data for the add4 operation.
 */
export type Add4Response = RequestResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RequestResponse;
    };
};

/**
 * Contains response data for the update3 operation.
 */
export type Update3Response = RequestResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RequestResponse;
    };
};

/**
 * Contains response data for the delete4 operation.
 */
export type Delete4Response = RequestResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RequestResponse;
    };
};

/**
 * Contains response data for the getById5 operation.
 */
export type GetById5Response = UserDTORequestResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: UserDTORequestResponse;
    };
};

/**
 * Contains response data for the getByEmail operation.
 */
export type GetByEmailResponse = UserRequestResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: UserRequestResponse;
    };
};

/**
 * Contains response data for the getPage3 operation.
 */
export type GetPage3Response = UserDTOPagedResponseRequestResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: UserDTOPagedResponseRequestResponse;
    };
};

/**
 * Contains response data for the add5 operation.
 */
export type Add5Response = RequestResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RequestResponse;
    };
};

/**
 * Contains response data for the update4 operation.
 */
export type Update4Response = RequestResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RequestResponse;
    };
};

/**
 * Contains response data for the delete5 operation.
 */
export type Delete5Response = RequestResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RequestResponse;
    };
};

/**
 * Contains response data for the getPage4 operation.
 */
export type GetPage4Response = UserFileDTOPagedResponseRequestResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: UserFileDTOPagedResponseRequestResponse;
    };
};

/**
 * Contains response data for the add6 operation.
 */
export type Add6Response = RequestResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RequestResponse;
    };
};

/**
 * Contains response data for the download operation.
 */
export type DownloadResponse = {
  /**
   * The parsed response body.
   */
  body: string;

  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: string;
    };
};