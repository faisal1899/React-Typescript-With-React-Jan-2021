import React from 'react';
import { Link } from 'react-router-dom';

import './Header.less';

export const Header = (): JSX.Element => {
  return(
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}