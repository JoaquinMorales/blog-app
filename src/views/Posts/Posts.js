// @flow

import React from 'react';
import { Query } from '../../service';

export const Posts = () => (
  <Query params={{ method: 'get', url: 'posts' }}>
    {
      (response) => {
        const { data: posts = [] } = response;
        return (
          <ul>
            { posts.map(itemPost => (<li key={itemPost.id}>{itemPost.title}</li>)) }
          </ul>
        );
      }
    }
  </Query>
);

export default Posts;
