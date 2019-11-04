import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createReducer } from '@/_utils/redux/create-reducer';
import { rootReducer } from './root-reducer';
import { IAdvancedStore } from './_types';

export const createAppStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store: IAdvancedStore = createStore(
    createReducer({ prevState: rootReducer }),
    compose(
      applyMiddleware(sagaMiddleware),
      (window as any).__REDUX_DEVTOOLS_EXTENSION__ && // eslint-disable-line
        (window as any).__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line
    ),
  );

  // Add a dictionary to keep track of the registered async reducers sagas
  // and give a possibility to run saga from field sagaMiddleware
  store.asyncReducers = {};
  store.asyncSagas = {};
  store.sagaMiddleware = sagaMiddleware;

  return store;
};
