import { call, put } from 'redux-saga/effects';
import { setOrdersAction, setOrdersError } from '../actions';
import { ordersRequest } from '@/services/api/requests';

export function* ordersWorkerSaga(page: number) {
  console.info('ordersWorkerSaga goes');
  // debugger; // сюда доходим

  // fetch orders data
  const {
    error,
    data: { orders = [] },
  } = yield call(ordersRequest, page);

  console.info('request data', error, orders);

  // debugger; // сюда уже не доходим
  if (error) {
    console.info('put an error', error);
    yield put(setOrdersError(error));
  } else {
    yield put(setOrdersAction(orders));
  }
}
