// place to define requests

// EXAMPLES !!!!
import {
  postRequest,
  //  putRequest,
  // patchRequest,
  //  getRequest
} from './rest';
import { getAuthEndpoint } from './endpoints';

// EXAMPLES !!!!
export const fetchLoginRequest = ({ username, password }) =>
  postRequest({
    endpoint: getAuthEndpoint(),
    data: { username, password },
  });

// any just for the example
export const mockRequest = (values: any): Promise<any> => {
  console.info(values);

  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ error: 'test error' });
    }, 2000);
  });
};
