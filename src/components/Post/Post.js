import React from 'react';
import { Segment, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Query } from '../../service';

const Post = ({ id }) => (
  <Query params={{ method: 'get', url: `posts/${id}` }}>
    {(response, { loading }) => {
      const { data: { title, body, userId } = {} } = response;
      return (
        <Query params={{ method: 'get', url: `users/${userId}` }}>
          {({ data: { name } = {} }, { loading: userLoading }) => (
            <Segment padded="very" loading={loading || userLoading}>
              <Header as="h3">{title}</Header>
              <Segment basic>{body}</Segment>
              <Header as="h4" floated="right">
                Author:
                <Link to={`users/${userId}`}>{name}</Link>
              </Header>
            </Segment>
          )
          }
        </Query>
      );
    }}
  </Query>
);

Post.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Post;
