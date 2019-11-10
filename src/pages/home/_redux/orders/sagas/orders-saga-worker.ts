import { call, put } from 'redux-saga/effects';
import { setOrdersAction } from '../actions';
import { ordersRequest } from '@/services/api/requests';

export function* ordersWorkerSaga({
  visibleStartIndex,
  numberOfViewItems,
  listData,
}: any) {
  console.info('ordersWorkerSaga goes');

  const updatedItems = { ...listData };

  const resultOfRequest: any = yield call(ordersRequest, visibleStartIndex);

  console.info('resultOfRequest', resultOfRequest);

  const totalNumberOfItems = parseInt(resultOfRequest.data.totalElements);

  const newNumberOfViewItems =
    parseInt(numberOfViewItems) + resultOfRequest.data.orders.length;

  resultOfRequest.data.orders.forEach((item, index) => {
    updatedItems[index + visibleStartIndex] = item;
  });

  yield put(
    setOrdersAction({
      data: updatedItems,
      total: totalNumberOfItems,
      numberOfViewItems: newNumberOfViewItems,
    }),
  );
}
