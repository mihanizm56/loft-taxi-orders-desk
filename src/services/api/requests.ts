// place to define requests

import { getRequest } from './rest';
import { getOrdersEndPoint } from './endpoints';

// возвращается промис
export const ordersRequest = (page: number): Promise<any> =>
  getRequest({
    endpoint: `${getOrdersEndPoint()}/paginate?page=${page}`,
  });
