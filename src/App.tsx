import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { Home } from '@home/Home';
import { Header } from '@layout/Header';
const Counter = React.lazy(
  () => import(
      /* webpackChunkName: "counter" */
      /* webpackPrefetch: true */
      '@counter/Counter'
    )
);

export const App = (): JSX.Element => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/counter">
            <Suspense fallback={<div>loading...</div>}>
              <Counter />
            </Suspense>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
