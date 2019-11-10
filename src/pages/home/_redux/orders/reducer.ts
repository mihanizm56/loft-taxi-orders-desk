import { handleActions } from 'redux-actions';
import { SET_ORDERS, SET_ERROR } from './actions';
import { OrdersStoreType } from './types';

export const initialState: OrdersStoreType = {
  data: {},
  numberOfViewItems: 2,
  total: 2,
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
  },
  initialState,
);

export default reducer;
