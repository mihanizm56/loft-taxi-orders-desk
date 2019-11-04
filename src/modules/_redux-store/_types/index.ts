import { Store, Reducer } from 'redux';

export interface IAsyncReducers {
  [reducerName: string]: Reducer;
}

export interface IAsyncSagas {
  [reducerName: string]: Reducer;
}

export interface IAdvancedStore extends Store {
  asyncReducers?: IAsyncReducers;
  asyncSagas?: IAsyncSagas;
  sagaMiddleware?: any;
}
