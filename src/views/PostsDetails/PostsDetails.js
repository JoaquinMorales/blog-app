import React from 'react';
import { Segment } from 'semantic-ui-react';
import { Search } from '../../components/Search';


export const PostsDetails = () => (
  <Segment>
    <Segment textAlign="center" basic><Search /></Segment>
  </Segment>
);

export default PostsDetails;
