// @flow

import React from 'react';
import { hot } from 'react-hot-loader';

const App = () => {
  const description = 'yarn, webpack, babel, hot loader, jest, lint and Flow';
  return (
    <div>
      <h1>Welcome</h1>
      <p>{description}</p>
    </div>
  );
};

export default hot(module)(App);
