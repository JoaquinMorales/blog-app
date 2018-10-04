// @flow

import React from 'react';
import { hot } from 'react-hot-loader';
import { Posts } from '../views/Posts';

const App = () => (
  <div>
    <h1>Welcome</h1>
    <Posts />
  </div>
);

export default hot(module)(App);
