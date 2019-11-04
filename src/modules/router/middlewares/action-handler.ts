import { Router, Middleware } from 'router5';
import promiseSequential from 'promise-sequential';
import { getActivatedRoutes } from '../utils';
import {
  IAdvancedRoute,
  // IActionParams,
  IAction,
  IActionResult,
} from '../_types';

interface IPromisesStack {
  result: { (): Promise<any> }[];
  parallelStack: { (): Promise<any> }[];
}

export const actionHandler = (router: Router): Middleware => async (
  toState: IAdvancedRoute,
  fromState: IAdvancedRoute,
): Promise<IActionResult> => {
  const { routes, store } = router.getDependencies();

  const actionParams: any = {
    router,
    toState,
    fromState,
    store,
  };

  let parentError = null;

  const getHandler = (route: IAdvancedRoute) => {
    return () => {
      return new Promise((resolve, reject) => {
        if (
          route.actionResult &&
          route.actionResult.useCache === true &&
          !parentError &&
          !route.actionResult.error
        ) {
          // Use cache
          resolve(route);
        } else if (parentError) {
          // Parent has error
          resolve(Object.assign(route, { actionResult: parentError }));
        } else if (
          typeof route.loadAction === 'function' ||
          typeof route.action === 'function'
        ) {
          // Get action promise
          let actionPromise: Promise<IAction>;
          if (typeof route.loadAction === 'function') {
            actionPromise = new Promise((resolveActionLoad): void => {
              route
                .loadAction()
                .then((loaded: { default: IAction }): void => {
                  resolveActionLoad(loaded.default);
                })
                .catch(reject);
            });
          } else {
            actionPromise = Promise.resolve(route.action);
          }
          // Run action promise
          actionPromise.then((action: IAction): void => {
            action(actionParams)
              .then(
                (result: IActionResult): IAdvancedRoute => {
                  if (result.error) {
                    parentError = result.error;
                    return Object.assign(route, {
                      actionResult: result.error,
                    });
                  }
                  return Object.assign(route, { actionResult: result });
                },
              )
              .then(resolve)
              .catch(reject);
          });
        } else {
          // No action fallback
          resolve(Object.assign(route, { actionResult: null }));
        }
      });
    };
  };

  const activatedRoutes = getActivatedRoutes(toState, fromState, routes);

  const { result } = activatedRoutes.reduce(
    (
      acc: IPromisesStack,
      route: IAdvancedRoute,
      index: number,
      arr: IAdvancedRoute[],
    ): IPromisesStack => {
      const newAcc = {
        result: [...acc.result],
        parallelStack: [...acc.parallelStack],
      };

      if (route.canParallel) {
        newAcc.parallelStack.push(getHandler(route));

        if (index === arr.length - 1) {
          const copiedParallelPromises = [...newAcc.parallelStack];
          newAcc.result.push(() =>
            Promise.all(
              copiedParallelPromises.map(createPromise => createPromise()),
            ),
          );
          newAcc.parallelStack = [];
        }
      } else {
        if (newAcc.parallelStack.length > 0) {
          const copiedParallelPromises = [...newAcc.parallelStack];
          newAcc.result.push(() =>
            Promise.all(
              copiedParallelPromises.map(createPromise => createPromise()),
            ),
          );
          newAcc.parallelStack = [];
        }

        newAcc.result.push(getHandler(route));
      }

      return newAcc;
    },
    {
      result: [],
      parallelStack: [],
    },
  );

  return promiseSequential(result);
};
