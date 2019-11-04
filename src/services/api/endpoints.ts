// place to define dev and prod request urls

// EXAMPLE!!!!
import { ENDPOINT_AUTH_DEV, ENDPOINT_AUTH_PROD } from './constants';

// EXAMPLE!!!!
export const getAuthEndpoint = (): string =>
  process.env.NODE_ENV !== 'production'
    ? ENDPOINT_AUTH_DEV
    : ENDPOINT_AUTH_PROD;
