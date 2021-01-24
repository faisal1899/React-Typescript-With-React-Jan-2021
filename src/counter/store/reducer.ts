import { CounterAction, CounterActionTypes } from './actionTypes';

export interface CounterState {
  counter: number;
} 

const initialState: CounterState = {
  counter: 0
};

export const counterReducer  = (state: CounterState = initialState, action: CounterAction) => {
  switch (action.type) {
    case CounterActionTypes.increment:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case CounterActionTypes.decrement:
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      return state;
  }
}