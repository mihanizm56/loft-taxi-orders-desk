import { handleActions } from 'redux-actions';
import { SET_ERROR, REMOVE_ERROR } from './constants';
import { TestFormStateType } from './types';

const initialState = {
  errorTextValue: '',
};

const reducer = handleActions(
  {
    [SET_ERROR]: (
      state: TestFormStateType,
      { payload }: { payload: string },
    ) => ({
      ...state,
      errorTextValue: payload,
    }),
    [REMOVE_ERROR]: (state: TestFormStateType) => ({
      ...state,
      errorTextValue: '',
    }),
  },
  initialState,
);

export default reducer;
