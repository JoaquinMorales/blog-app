import React from 'react';
import { shallow } from 'enzyme';
import { Posts, actionButtons } from './Posts';

describe('Posts view', () => {
  it('should render a paginated Table', () => {
    const postsQuery = shallow(<Posts />).find('Query').prop('children');
    const usersQuery = shallow(<div>{postsQuery({}, { loading: false })}</div>).find('Query').prop('children');
    const view = shallow(<div>{usersQuery({}, { loading: false })}</div>);
    expect(view.find('Pagination')).toHaveLength(1);
    view.unmount();
  });

  it('should render a paginated Table with data', () => {
    const posts = [{ title: 'title 1', id: 1, userId: 1 }];
    const users = [{ id: 1, name: 'test' }];
    const postsQuery = shallow(<Posts />).find('Query').prop('children');
    const usersQuery = shallow(<div>{postsQuery({ data: posts }, { loading: false })}</div>).find('Query').prop('children');
    const view = shallow(<div>{usersQuery({ data: users }, { loading: false })}</div>);
    expect(view
      .find('Pagination')
      .props().rows).toEqual([
      { title: 'title 1', id: 1, user: { id: 1, name: 'test' } },
    ]);
    view.unmount();
  });

  it('should have a template as button to allow pass to table', () => {
    const actions = shallow(<div>{actionButtons(1)}</div>);
    expect(actions.find('Button')).toHaveLength(1);
  });
});
