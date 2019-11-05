import { handleActions } from 'redux-actions';
import { SET_ORDERS, SET_ERROR } from './actions';
import { OrdersState, Order } from './types';

const initialState = {
  orders: [],
  error: '',
};

const reducer = handleActions(
  {
    [SET_ORDERS]: (
      state: OrdersState,
      { payload }: { payload: Array<Order> },
    ) => ({
      ...state,
      orders: payload,
      error: null,
    }),
    [SET_ERROR]: (state: OrdersState, { payload }: { payload: any }) => ({
      ...state,
      orders: [],
      error: payload,
    }),
  },
  initialState,
);

export default reducer;
