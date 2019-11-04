import { requestRacer } from './utils/request-racer';
import {
  getRequestParams,
  putRequestParams,
  patchRequestParams,
  postRequestParams,
} from './types';

export const getRequest = ({
  endpoint,
  authorize,
}: getRequestParams): Promise<any> => {
  const paramsObject = {
    method: 'GET',
    headers: {
      Accept: 'application/json', // you can set whatever header do you want
      'Content-Type': 'application/json', // you can set whatever header do you want
      'Cache-Control': 'no-cache', // you can set whatever header do you want
      Authorization: authorize && `Bearer ${authorize.token}`, // if there is the Bearer strategy
    },
  };

  const request = fetch(endpoint, paramsObject).then(requestData =>
    requestData.json(),
  );

  return requestRacer({ request });
};

export const putRequest = ({
  endpoint,
  data,
  authorize,
}: putRequestParams): Promise<any> => {
  const paramsObject = {
    method: 'PUT',
    headers: {
      Accept: 'application/json', // you can set whatever header do you want
      'Content-Type': 'application/json', // you can set whatever header do you want
      'Cache-Control': 'no-cache', // you can set whatever header do you want
      Authorization: authorize && `Bearer ${authorize.token}`, // if there is the Bearer strategy
    },
    body: JSON.stringify(data),
  };

  const request = fetch(endpoint, paramsObject).then(requestData =>
    requestData.json(),
  );

  return requestRacer({ request });
};

export const postRequest = ({
  endpoint,
  data,
  authorize,
}: postRequestParams): Promise<any> => {
  const paramsObject = {
    method: 'POST',
    headers: {
      Accept: 'application/json', // you can set whatever header do you want
      'Content-Type': 'application/json', // you can set whatever header do you want
      'Cache-Control': 'no-cache', // you can set whatever header do you want
      Authorization: authorize && `Bearer ${authorize.token}`, // if there is the Bearer strategy
    },
    body: JSON.stringify(data),
  };

  const request = fetch(endpoint, paramsObject).then(requestData =>
    requestData.json(),
  );

  return requestRacer({ request });
};

export const patchRequest = ({
  endpoint,
  data,
  authorize,
}: patchRequestParams): Promise<any> => {
  const paramsObject = {
    method: 'PATCH',
    headers: {
      Accept: 'application/json', // you can set whatever header do you want
      'Content-Type': 'application/json', // you can set whatever header do you want
      'Cache-Control': 'no-cache', // you can set whatever header do you want
      Authorization: authorize && `Bearer ${authorize.token}`, // if there is the Bearer strategy
    },
    body: JSON.stringify(data),
  };

  const request = fetch(endpoint, paramsObject).then(requestData =>
    requestData.json(),
  ); //

  return requestRacer({ request });
};

export const deleteRequest = ({
  endpoint,
  data,
  authorize,
}: patchRequestParams): Promise<any> => {
  const paramsObject = {
    method: 'PATCH',
    headers: {
      Accept: 'application/json', // you can set whatever header do you want
      'Content-Type': 'application/json', // you can set whatever header do you want
      'Cache-Control': 'no-cache', // you can set whatever header do you want
      Authorization: authorize && `Bearer ${authorize.token}`, // if there is the Bearer strategy
    },
    body: JSON.stringify(data),
  };

  const request = fetch(endpoint, paramsObject).then(requestData =>
    requestData.json(),
  ); //

  return requestRacer({ request });
};
