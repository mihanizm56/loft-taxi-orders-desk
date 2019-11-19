import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { createReducer } from '@/_utils/redux/create-reducer';
import { rootReducer } from './root-reducer';
import { IAdvancedStore } from './_types';

// TODO fix redux devtools
export const createAppStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store: IAdvancedStore = createStore(
    createReducer({ prevState: rootReducer }),
    applyMiddleware(sagaMiddleware),
    // composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );

  // Add a dictionary to keep track of the registered async reducers sagas
  // and give a possibility to run saga from field sagaMiddleware
  store.asyncReducers = {};
  store.asyncSagas = {};
  store.sagaMiddleware = sagaMiddleware;

  return store;
};
