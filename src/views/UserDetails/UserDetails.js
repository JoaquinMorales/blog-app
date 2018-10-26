import React from 'react';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import {
  Segment, Header, Form, Input,
} from 'semantic-ui-react';
import { Query } from '../../service';
import { Table } from '../../components/DataTable';
import { actionButtons } from '../Posts/Posts';

const fields = [
  [{ label: 'Username', field: 'username' }, { label: 'Email', field: 'email' }],
  [{ label: 'Phone', field: 'phone' }, { label: 'Address', field: 'address.street' }],
  [{ label: 'Company', field: 'company.name' }, { label: 'Website', field: 'website' }],
];

const columns = [
  { label: 'Title', field: 'title' },
  { labe: '', field: 'id', template: actionButtons },
];

const UserDetails = ({ location: { pathname } }) => {
  const [, , userId] = pathname.split('/');
  return (
    <Query key="userInfo" params={{ method: 'get', url: `users/${userId}` }}>
      {({
        data = {
          username: '', email: '', phone: '', address: { street: '' }, company: { name: '' }, website: '',
        },
      }, { loading }) => (
        <Segment padded="very">
          <Header as="h2">{data.name}</Header>
          <Segment loading={loading}>
            <Form>
              {fields.map((row, index) => (
                <Form.Group key={index} widths="2">
                  {row.map(({ label, field }) => (
                    <Form.Field
                      key={field}
                      value={get(data, field)}
                      control={Input}
                      label={label}
                      readOnly
                    />
                  ))}
                </Form.Group>
              ))}
            </Form>
          </Segment>
          <Query key="posts" params={{ method: 'get', url: `users/${userId}/posts` }}>
            {
              ({ data: posts = [] }, { loading: postsLoading }) => (
                <Segment loading={postsLoading}>
                  <Header as="h3">Posts</Header>
                  <Table columns={columns} rows={posts} />
                </Segment>
              )
            }
          </Query>
        </Segment>
      )}
    </Query>
  );
};

UserDetails.propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string }).isRequired,
};

export default UserDetails;
