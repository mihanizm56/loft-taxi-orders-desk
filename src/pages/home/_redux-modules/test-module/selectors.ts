import { createSelector } from 'reselect';
import { OrdersState, Order } from './types';

const ordersStorageSelector = (store: OrdersState) => store.orders;

export const getOrders = createSelector(
  [ordersStorageSelector],
  (orders: Array<Order>) => orders,
);
