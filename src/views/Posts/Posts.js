// @flow

import React from 'react';
import { Segment, Button, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Query } from '../../service';
import { PaginatedTable } from '../../components/DataTable';

export const actionButtons = field => (
  <Button
    circular
    color="teal"
    title="Post Details"
    compact
    icon="info"
    as={Link}
    to={`/Posts/${field}`}
  />
);

export const Posts = () => (
  <Query params={{ method: 'get', url: 'posts' }}>
    {
      ({ data = [] }, { loading }) => (
        <Query params={{ method: 'get', url: 'users' }}>
          {
            ({ data: users = [] }, { loading: usersLoading }) => {
              const columns = [
                { label: 'Title', field: 'title' },
                { label: 'Author', field: 'user.name' },
                { labe: '', field: 'id', template: actionButtons },
              ];
              const posts = data.map(({ userId, ...post }) => ({
                ...post,
                user: users.find(user => user.id === userId),
              }));
              return (
                <Segment loading={loading || usersLoading}>
                  <Header as="h2">Posts</Header>
                  <PaginatedTable
                    columns={columns}
                    rows={posts}
                  />
                </Segment>
              );
            }
          }
        </Query>
      )
    }
  </Query>
);

export default Posts;
