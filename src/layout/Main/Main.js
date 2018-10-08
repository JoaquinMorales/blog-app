import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Posts } from '../../views/Posts';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Posts} />
      <Route path="/posts" component={Posts} />
    </Switch>
  </main>
);

export default Main;
