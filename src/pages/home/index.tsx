import * as React from 'react';
import { RouteNode } from '@/services/router/components';
import { injectAsyncReducer } from '@/_utils/redux/inject-reducers';
import { injectAsyncSaga } from '@/_utils/redux/inject-sagas';
import { IRouterDependecies } from '@/services/router/_types';
import { Page } from './_components/page';
import ordersReducer, {
  formWatcherSaga,
  fetchOrdersAction,
} from './_redux/orders';

const pageNode = 'home';

const action = async ({ store }: IRouterDependecies) => {
  // const workers = [];

  injectAsyncReducer(store, 'orders', ordersReducer);
  injectAsyncSaga(store, 'form-watcher', formWatcherSaga);

  store.dispatch(fetchOrdersAction({ page: 1 }));

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
