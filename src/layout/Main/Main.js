import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Posts } from '../../views/Posts';
import { SearchPosts } from '../../views/SearchPosts';
import { PostsDetails } from '../../views/PostsDetails';
import { Users } from '../../views/Users';
import { UserDetails } from '../../views/UserDetails';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={SearchPosts} />
      <Route exact path="/posts" component={Posts} />
      <Route exact path="/posts/:id" component={PostsDetails} />
      <Route exact path="/users" component={Users} />
      <Route exact path="/users/:id" component={UserDetails} />
    </Switch>
  </main>
);

export default Main;
