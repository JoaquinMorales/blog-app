import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Posts } from '../../views/Posts';
import { SearchPosts } from '../../views/SearchPosts';
import { PostsDetails } from '../../views/PostsDetails';
import { Users } from '../../views/Users';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={SearchPosts} />
      <Route exact path="/posts" component={Posts} />
      <Route exact path="/posts/:id" component={PostsDetails} />
      <Route path="/users" component={Users} />
    </Switch>
  </main>
);

export default Main;
