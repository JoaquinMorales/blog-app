import React from 'react';
import { Segment, Button } from 'semantic-ui-react';
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
    to={`/users/${field}`}
  />
);

const Users = () => (
  <Query params={{ method: 'get', url: 'users' }}>
    {
      ({ data = [] }, { loading }) => {
        const columns = [
          { label: 'Name', field: 'name' },
          { label: 'Email', field: 'email' },
          { label: 'Company', field: 'company.name' },
          { labe: '', field: 'id', template: actionButtons },
        ];
        return (
          <Segment loading={loading}>
            <PaginatedTable
              columns={columns}
              rows={data}
            />
          </Segment>
        );
      }
    }
  </Query>
);

export default Users;
