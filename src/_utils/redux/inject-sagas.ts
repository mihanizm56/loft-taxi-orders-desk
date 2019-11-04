export const injectAsyncSaga = (store, sagaName, saga) => {
  const injectedSagas = store.asyncSagas;
  const runSaga = store.sagaMiddleware.run;

  const isInjected = Boolean(store.asyncSagas[sagaName]);

  if (isInjected) return;

  const task = runSaga(saga);

  injectedSagas[sagaName] = task;
};
