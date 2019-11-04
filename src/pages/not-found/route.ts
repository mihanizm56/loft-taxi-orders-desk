import { constants } from 'router5';

export default {
  name: constants.UNKNOWN_ROUTE,
  path: '/not-found',
  loadAction: () => import('./index'),
};
