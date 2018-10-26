import React from 'react';
import { shallow } from 'enzyme';
import Users, { actionButtons } from './Users';

describe('Users view', () => {
  it('should render a paginated Table', () => {
    const usersQuery = shallow(<Users />).find('Query').prop('children');
    const view = shallow(<div>{usersQuery({}, { loading: false })}</div>);
    expect(view.find('PaginatedTable')).toHaveLength(1);
    view.unmount();
  });

  it('should have a template as button to allow pass to table', () => {
    const actions = shallow(<div>{actionButtons(1)}</div>);
    expect(actions.find('Button')).toHaveLength(1);
  });
});
