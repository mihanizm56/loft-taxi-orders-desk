export type TestFormStateType = {
  errorTextValue: string;
};

export type FullStoreType = {
  testFormStorage: TestFormStateType;
};

export type SubmitFormActionParams = {
  failedActionType?: string;
  resetError?: string;
  success?: string;
  loading?: string;
  formValues: any; // any just for example
  url: string;
  method: string;
};
