import { createAction, Action, BaseAction } from 'redux-actions';
import { SET_ERROR, REMOVE_ERROR, SUBMIT_FORM } from './constants';

// mutate state
export const setErrorAction: (error?: string) => Action<string> = createAction(
  SET_ERROR,
);
export const resetErrorAction: () => BaseAction = createAction(REMOVE_ERROR);

// subscribe form submit action
export const submitFormAction: () => BaseAction = createAction(SUBMIT_FORM);
