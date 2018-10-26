import React from 'react';
import { Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Post } from '../../components/Post';
import { Comments } from '../../components/Comments';


const PostsDetails = ({ location: { pathname } }) => {
  const [, , postId] = pathname.split('/');
  return (
    <Segment>
      <Post id={parseInt(postId, 10)} />
      <Comments postId={parseInt(postId, 10)} />
    </Segment>
  );
};

PostsDetails.propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string }).isRequired,
};

export default PostsDetails;
