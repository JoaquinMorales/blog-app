// @flow

import React from 'react';
import { hot } from 'react-hot-loader';
import { Container } from 'semantic-ui-react';
import { TopMenu } from '../layout/TopMenu';
import { Main } from '../layout/Main';

const App = () => (
  <div>
    <TopMenu />
    <Container>
      <Main />
    </Container>
  </div>
);

export default hot(module)(App);
