import { CounterActionTypes as ActionTypes } from './actionTypes';

export interface IncrementAction {
  type: ActionTypes.increment
}

export const increment = (): IncrementAction => {
  return {
    type: ActionTypes.increment
  }
}

export interface DecrementAction {
  type: ActionTypes.decrement
}

export const decrement = (): DecrementAction => {
  return {
    type: ActionTypes.decrement
  }
}