import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Posts } from '../../views/Posts';
import { PostsDetails } from '../../views/PostsDetails';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={PostsDetails} />
      <Route path="/posts" component={Posts} />
    </Switch>
  </main>
);

export default Main;
