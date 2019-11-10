import { call, put } from 'redux-saga/effects';
import { setOrdersAction, setLoadingStart, setLoadingStop } from '../actions';
import { ordersRequest } from '@/services/api/requests';
import { requestPageFormatter } from '@/_utils/page-formatter';

export function* ordersWorkerSaga({
  visibleStartIndex,
  numberOfViewItems,
  listData,
}: any) {
  console.info('ordersWorkerSaga goes, visibleStartIndex', numberOfViewItems);

  yield put(setLoadingStart());

  const updatedItems = { ...listData };
  const requestPage = requestPageFormatter(visibleStartIndex);

  const resultOfRequest: any = yield call(ordersRequest, requestPage);

  console.info('resultOfRequest, page', requestPage, resultOfRequest);

  const totalNumberOfItems = parseInt(resultOfRequest.data.totalElements);

  const newNumberOfViewItems =
    numberOfViewItems === 2
      ? parseInt(numberOfViewItems) + resultOfRequest.data.orders.length
      : parseInt(numberOfViewItems) + resultOfRequest.data.orders.length - 2;

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

  yield put(setLoadingStop());
}
