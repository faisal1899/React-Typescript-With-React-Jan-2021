import { combineReducers } from 'redux';

import { counterReducer, CounterState } from '@counter/store/reducer';

export interface AppState {
  counter: CounterState
}

export const reducers = combineReducers({
  counter: counterReducer,
});