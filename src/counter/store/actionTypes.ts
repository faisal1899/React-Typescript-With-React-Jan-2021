import { DecrementAction, IncrementAction } from './actions';

export enum CounterActionTypes {
  increment,
  decrement,
}

export type CounterAction = IncrementAction | DecrementAction;