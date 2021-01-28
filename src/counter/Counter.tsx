import React, { Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppState } from '@src/store/reducers';
import { decrement, increment } from '@counter/store/actions';
import { CounterAction } from '@counter/store/actionTypes';

export default (): JSX.Element => {
  // export const Counter = (): JSX.Element => {
  const dispatch: Dispatch<CounterAction> = useDispatch();

  const counter = useSelector((state: AppState): AppState['counter']['counter'] => {
    return state.counter.counter;
  });

  return(
    <div>
      <h1>Counter: {counter}</h1>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
}