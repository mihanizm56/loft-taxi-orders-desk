import * as React from 'react';
import { RouteNode } from '@/modules/router/components';
import { injectAsyncReducer } from '@/_utils/redux/inject-reducers';
import { injectAsyncSaga } from '@/_utils/redux/inject-sagas';
import { IRouterDependecies } from '@/modules/router/_types';
import { Page } from './_components/page/page';
import testReducer, { formWatcherSaga } from './_redux-modules/test-module';

const pageNode = 'home';

const action = async ({ store }: IRouterDependecies) => {
  const workers = [];

  injectAsyncReducer(store, 'home', testReducer);
  injectAsyncSaga(store, 'form-watcher', formWatcherSaga);

  // workers.push(store.dispatch(fetchSomeData1()));
  // workers.push(store.dispatch(fetchSomeData2()));
  // workers.push(store.dispatch(fetchSomeData3()));

  await Promise.all(workers);

  return {
    title: 'Home',
    content: (
      <RouteNode nodeName={pageNode}>
        {({ route, content }) => {
          if (route.name === pageNode) {
            return <Page route={route} />;
          }

          return content;
        }}
      </RouteNode>
    ),
  };
};

export default action;
