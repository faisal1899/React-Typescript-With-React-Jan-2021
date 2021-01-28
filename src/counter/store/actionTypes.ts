import { DecrementAction, IncrementAction } from './actions';

export enum CounterActionTypes {
  increment = 'Increment',
  decrement = 'Decrement',
}

export type CounterAction = IncrementAction | DecrementAction;