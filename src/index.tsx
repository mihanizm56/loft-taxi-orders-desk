import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router5';
import { configureRouter } from './services/router';
import { createAppStore } from '@/services/_redux';
import { RouteNode } from './services/router/components';
import './_styles/index.css';
import './_styles/variables.css';
import './_assets/fonts/index.css';

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
