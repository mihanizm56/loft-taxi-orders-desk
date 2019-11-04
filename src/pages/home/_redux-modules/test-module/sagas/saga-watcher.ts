import { take, fork } from 'redux-saga/effects';
import { submitFormAction } from '../actions';
import { formWorkerSaga } from './saga-worker';
import { SubmitFormActionParams } from '../types';

export function* formWatcherSaga() {
  while (true) {
    const { payload }: { payload: SubmitFormActionParams } = yield take(
      submitFormAction.toString(),
    );

    yield console.info('FORM WATCHER SAGA ACTS');

    yield fork(formWorkerSaga, payload);
  }
}
