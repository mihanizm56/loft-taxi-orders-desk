import { Router, State, Plugin } from 'router5';
import { IRouterDependecies } from '../_types';

export const setMeta = (
  router: Router,
  { getRouteActionResult }: IRouterDependecies,
): Plugin => ({
  onTransitionSuccess: (toState: State): void => {
    const routeActionResult = getRouteActionResult(toState.name);
    document.title = routeActionResult.title;
  },
});
