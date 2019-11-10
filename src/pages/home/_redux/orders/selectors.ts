import { createSelector } from 'reselect';
import { OrdersStoreType } from './types';

const ordersStorageSelector = (store: { orders: OrdersStoreType }) =>
  store.orders;

export const getListData = createSelector(
  ordersStorageSelector,
  ordersStorage => (ordersStorage ? ordersStorage.data : null),
);

export const getNumberOfViewItems = createSelector(
  ordersStorageSelector,
  ordersStorage => (ordersStorage ? ordersStorage.numberOfViewItems : null),
);

export const getTotalNumberOfItems = createSelector(
  ordersStorageSelector,
  ordersStorage => (ordersStorage ? ordersStorage.total : null),
);

export const getLoadingStatus = createSelector(
  ordersStorageSelector,
  ordersStorage => (ordersStorage ? ordersStorage.isLoading : null),
);
