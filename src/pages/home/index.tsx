import * as React from 'react';
import { RouteNode } from '@/services/router/components';
import { injectAsyncReducer } from '@/_utils/redux/inject-reducers';
import { injectAsyncSaga } from '@/_utils/redux/inject-sagas';
import { IRouterDependecies } from '@/services/router/_types';
import { Page } from './_components/page';
import ordersReducer, { ordersWatcherSaga } from './_redux/orders';

const pageNode = 'home';

const action = async ({ store }: IRouterDependecies) => {
  injectAsyncReducer(store, 'orders', ordersReducer);
  injectAsyncSaga(store, 'ordersWatcherSaga', ordersWatcherSaga);

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
