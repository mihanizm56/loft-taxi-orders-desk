import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router5';
import { configureRouter } from './modules/router';
import { createAppStore } from '@/modules/_redux-store';
import { RouteNode } from './modules/router/components';
import './index.module.scss';

const ROOT_ELEMENT = document.getElementById('root');

const store = createAppStore();
const router = configureRouter();

router.setDependencies({
  store,
});

router.start(() => {
  ReactDOM.render(
    <Provider store={store}>
      <RouterProvider key={1} router={router}>
        <RouteNode nodeName="">{({ content }) => content}</RouteNode>
      </RouterProvider>
    </Provider>,
    ROOT_ELEMENT,
  );
});
