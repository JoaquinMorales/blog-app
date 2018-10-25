// @flow

import React from 'react';
import { hot } from 'react-hot-loader';
import { Container } from 'semantic-ui-react';
import { TopMenu } from '../layout/TopMenu';
import { Main } from '../layout/Main';
import './App.css';

const App = () => (
  <div className="main-container">
    <TopMenu />
    <Container>
      <Main />
    </Container>
    <div className="footer" />
  </div>
);

export default hot(module)(App);
