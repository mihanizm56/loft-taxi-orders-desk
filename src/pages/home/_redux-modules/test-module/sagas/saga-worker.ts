import { call, put } from 'redux-saga/effects';
import { mockRequest } from '@/services/api/requests';
import { SubmitFormActionParams } from '../types';

export function* formWorkerSaga(payload: SubmitFormActionParams) {
  const { failedActionType, formValues, url, method } = payload;

  console.info('Submit was done with formValues', formValues);
  const { error } = yield call(mockRequest, { url, method, data: formValues });

  if (error) {
    yield put({ type: failedActionType, payload: error });
    console.info('put an error', error);
  } else {
    // make some success action
  }
}
