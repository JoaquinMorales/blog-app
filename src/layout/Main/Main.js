import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Posts } from '../../views/Posts';
import { PostsDetails } from '../../views/PostsDetails';
import { Users } from '../../views/Users';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={PostsDetails} />
      <Route path="/posts" component={Posts} />
      <Route path="/users" component={Users} />
    </Switch>
  </main>
);

export default Main;
