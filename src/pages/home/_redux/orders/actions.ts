import { createAction, Action } from 'redux-actions';
import { OrdersStoreType } from './types';

export const SET_ORDERS = 'SET_ORDERS';
export const setOrdersAction: (
  OrdersStoreType,
) => Action<OrdersStoreType> = createAction(SET_ORDERS);

export const SET_ERROR = 'SET_ERROR';
export const setOrdersError: (error: string) => Action<string> = createAction(
  SET_ERROR,
);

export const FETCH_ORDERS = 'FETCH_ORDERS';
export const fetchOrdersAction: ({
  visibleStartIndex,
  numberOfViewItems,
  listData,
}: any) => Action<{
  visibleStartIndex: number;
  numberOfViewItems: number;
  listData: any;
}> = createAction(FETCH_ORDERS);
