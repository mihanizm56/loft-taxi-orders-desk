// place to define dev and prod request urls

import { ENDPOINT_ORDERS_DEV, ENDPOINT_ORDERS_PROD } from './constants';

export const getOrdersEndPoint = (): string =>
  process.env.NODE_ENV !== 'production'
    ? ENDPOINT_ORDERS_DEV
    : ENDPOINT_ORDERS_PROD;
