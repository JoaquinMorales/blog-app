import React from 'react';
import { Query } from '../../service';
import { PaginatedTable } from '../../components/DataTable';

const Users = () => (
  <Query params={{ method: 'get', url: 'users' }}>
    {
      ({ data = [] }, { loading }) => {
        const columns = [
          { label: 'Name', field: 'name' },
          { label: 'Email', field: 'email' },
          { label: 'Company', field: 'company.name' },
        ];
        return (
          <PaginatedTable
            columns={columns}
            rows={data}
            loading={loading}
          />
        );
      }
    }
  </Query>
);

export default Users;
