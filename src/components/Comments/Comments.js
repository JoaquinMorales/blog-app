import React from 'react';
import {
  Comment,
  Segment,
  Header,
  Label,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Query } from '../../service';
import './Comments.css';

const Comments = ({ postId }) => (
  <Query params={{ url: `posts/${postId}/comments`, method: 'get' }}>
    {
      ({ data = [] }, { loading }) => (
        <Segment loading={loading}>
          <Header as="h3" dividing>Comments</Header>
          <Comment.Group>
            {
              data.map(({
                id, name, email, body,
              }) => (
                <Comment key={id}>
                  <Label circular color="grey" size="big">{email[0]}</Label>
                  <Comment.Content>
                    <Comment.Author>{email}</Comment.Author>
                    <Comment.Text>
                      <p>{name}</p>
                      <p>{body}</p>
                    </Comment.Text>
                  </Comment.Content>
                </Comment>
              ))
            }
          </Comment.Group>
        </Segment>
      )
    }
  </Query>
);


Comments.propTypes = {
  postId: PropTypes.number.isRequired,
};

export default Comments;
