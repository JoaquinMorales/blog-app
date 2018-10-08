// @flow

import React from 'react';
import { hot } from 'react-hot-loader';
import { Posts } from '../views/Posts';
import { TopMenu } from '../components/TopMenu';

const App = () => (
  <div>
    <TopMenu />
    <Posts />
  </div>
);

export default hot(module)(App);
