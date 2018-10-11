// @flow

import React from 'react';
import { hot } from 'react-hot-loader';
import { TopMenu } from '../layout/TopMenu';
import { Main } from '../layout/Main';

const App = () => (
  <div>
    <TopMenu />
    <Main />
  </div>
);

export default hot(module)(App);
