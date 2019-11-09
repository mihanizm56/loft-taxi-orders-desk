import { Reducer } from 'redux';
import { createReducer } from './create-reducer';
import { IAdvancedStore } from '@/services/_redux-store/_types';

export const injectAsyncReducer = (
  store: IAdvancedStore,
  name: string,
  asyncReducer: Reducer,
) => {
  if (!store.asyncReducers[name]) {
    store.asyncReducers[name] = asyncReducer; // eslint-disable-line no-param-reassign
    store.replaceReducer(
      createReducer({
        prevState: store.getState(),
        asyncReducers: store.asyncReducers,
      }),
    );
  }
};
