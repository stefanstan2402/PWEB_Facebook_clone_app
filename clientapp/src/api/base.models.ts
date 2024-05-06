import * as msRest from '@azure/ms-rest-js';

export type ApiResponse<T> = T & {
  _response: msRest.HttpResponse;
};
