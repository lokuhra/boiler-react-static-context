import React from 'react';
import { Router, Link } from 'react-static';
import { hot } from 'react-hot-loader';
//
import Routes from 'react-static-routes';

import './index.css';
import Provider from '../GlobalContext/ContextProvider';

const App = () => (
  <Router>
    <Provider>
      <nav>
        <Link exact to="/">
          Home
        </Link>
        <Link to="/about">About</Link>
      </nav>
      <div className="content">
        <Routes />
      </div>
    </Provider>
  </Router>
);

export default hot(module)(App);
