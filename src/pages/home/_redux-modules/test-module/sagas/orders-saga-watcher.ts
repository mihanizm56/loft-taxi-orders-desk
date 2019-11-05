import { take, fork } from 'redux-saga/effects';
import { fetchOrdersAction } from '../actions';
import { ordersWorkerSaga } from './orders-saga-worker';

export function* formWatcherSaga() {
  while (true) {
    const {
      payload: { page },
    }: { payload: { page: number } } = yield take(fetchOrdersAction.toString());

    yield fork(ordersWorkerSaga, page);
  }
}
