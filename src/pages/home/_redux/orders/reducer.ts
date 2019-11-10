import { handleActions } from 'redux-actions';
import { SET_ORDERS, SET_ERROR, LOADING_START, LOADING_END } from './actions';
import { OrdersStoreType } from './types';

export const initialState: OrdersStoreType = {
  data: {},
  numberOfViewItems: 2,
  total: 2,
  isLoading: false,
  error: null,
};

const reducer = handleActions(
  {
    [SET_ORDERS]: (state: OrdersStoreType, { payload }: any) => ({
      ...state,
      data: payload.data,
      numberOfViewItems: payload.numberOfViewItems,
      total: payload.total,
      error: null,
    }),
    [SET_ERROR]: (state: OrdersStoreType, { payload }: any) => ({
      ...state,
      initialState,
      error: payload,
    }),
    [LOADING_START]: (state: OrdersStoreType) => ({
      ...state,
      initialState,
      isLoading: true,
    }),
    [LOADING_END]: (state: OrdersStoreType) => ({
      ...state,
      initialState,
      isLoading: false,
    }),
  },
  initialState,
);

export default reducer;
