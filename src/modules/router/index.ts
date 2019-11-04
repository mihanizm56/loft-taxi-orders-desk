import createRouter, { Router } from 'router5';
import loggerPlugin from 'router5-plugin-logger';
import browserPlugin from 'router5-plugin-browser';
import routes from '@/pages/routes';
import { setMeta } from './plugins/set-meta';
import { getSegmentActionResult } from './dependencies/get-segment-action-result';
import { getRouteActionResult } from './dependencies/get-route-action-result';
import { actionHandler } from './middlewares/action-handler';
import { restoreScrollPosition } from './plugins/restore-scroll-position';

export const configureRouter = (): Router => {
  const router = createRouter(routes, {
    defaultParams: {},
    allowNotFound: true,
    caseSensitive: true,
    queryParamsMode: 'loose',
  });

  // Dependencies
  router.setDependencies({
    routes,
    getSegmentActionResult: getSegmentActionResult(router),
    getRouteActionResult: getRouteActionResult(router),
  });

  // Middlewares
  router.useMiddleware(actionHandler);

  // Plugins
  router.usePlugin(browserPlugin());
  if (process.env.NODE_ENV === 'development') {
    router.usePlugin(loggerPlugin);
  }
  router.usePlugin(setMeta);
  router.usePlugin(restoreScrollPosition);

  return router;
};
