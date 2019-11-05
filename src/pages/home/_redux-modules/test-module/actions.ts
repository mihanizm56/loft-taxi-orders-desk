import { createAction, Action } from 'redux-actions';
import { Order } from './types';

export const SET_ORDERS = 'SET_ORDERS';
export const setOrdersAction: (
  orders: Array<Order>,
) => Action<Array<Order>> = createAction(SET_ORDERS);

export const SET_ERROR = 'SET_ERROR';
export const setOrdersError: (error: string) => Action<string> = createAction(
  SET_ERROR,
);

export const FETCH_ORDERS = 'FETCH_ORDERS';
export const fetchOrdersAction: ({
  page: number,
}) => Action<number> = createAction(FETCH_ORDERS);
