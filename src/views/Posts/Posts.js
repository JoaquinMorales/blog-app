// @flow

import React from 'react';

type post = { id: number, title: string};
type Props = {
  posts: Array<post>
};

export const Posts = (props: Props) => {
  const { posts = [] } = props;
  return (
    <ul>
      { posts.map(itemPost => (<li key={itemPost.id}>{itemPost.title}</li>)) }
    </ul>
  );
};

export default Posts;
