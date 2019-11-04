import { combineReducers } from 'redux';

export const createReducer = ({
  prevState,
  asyncReducers,
}: {
  prevState: any;
  asyncReducers?: any;
}) => {
  return combineReducers({
    ...prevState,
    ...asyncReducers,
  });
};
