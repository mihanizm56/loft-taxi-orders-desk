import { createSelector } from 'reselect';
import { FullStoreType } from './types';

const testFormStorageSelector = (store: FullStoreType) => store.testFormStorage;

export const errorTextSelector = createSelector(
  [testFormStorageSelector],
  testFormStorage => (testFormStorage ? testFormStorage.errorTextValue : null),
);

export const getTestFormError = createSelector(
  [errorTextSelector],
  error => error,
);
