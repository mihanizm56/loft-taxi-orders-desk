import { take, fork } from 'redux-saga/effects';
import { fetchOrdersAction } from '../actions';
import { ordersWorkerSaga } from './orders-saga-worker';

export function* ordersWatcherSaga() {
  while (true) {
    const {
      payload: { visibleStartIndex, numberOfViewItems, listData },
    }: {
      payload: {
        visibleStartIndex: any;
        numberOfViewItems: any;
        listData: any;
      };
    } = yield take(fetchOrdersAction.toString());

    console.log(visibleStartIndex, numberOfViewItems, listData);

    // debugger;
    yield fork(ordersWorkerSaga, {
      visibleStartIndex,
      numberOfViewItems,
      listData,
    });
  }
}
