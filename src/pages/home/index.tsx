import * as React from 'react';
import { RouteNode } from '@/modules/router/components';
import { injectAsyncReducer } from '@/_utils/redux/inject-reducers';
import { injectAsyncSaga } from '@/_utils/redux/inject-sagas';
import { IRouterDependecies } from '@/modules/router/_types';
import { Page } from './_components/page';
import ordersReducer, {
  formWatcherSaga,
  fetchOrdersAction,
} from './_redux-modules/test-module';

const pageNode = 'home';

const action = async ({ store }: IRouterDependecies) => {
  const workers = [];

  injectAsyncReducer(store, 'orders', ordersReducer);
  injectAsyncSaga(store, 'form-watcher', formWatcherSaga);

  workers.push(store.dispatch(fetchOrdersAction({ page: 1 })));
  // workers.push(store.dispatch(fetchSomeData2()));
  // workers.push(store.dispatch(fetchSomeData3()));
  // debugger;
  await Promise.all(workers);

  return {
    title: 'Home',
    content: (
      <RouteNode nodeName={pageNode}>
        {({ route }) => route.name === pageNode && <Page route={route} />}
      </RouteNode>
    ),
  };
};

export default action;
