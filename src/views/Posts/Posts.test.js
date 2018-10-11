import React from 'react';
import { shallow } from 'enzyme';
import { Posts } from './Posts';

describe('Posts view', () => {
  const context = {};
  beforeAll(() => {
    const view = shallow(<Posts />);
    context.query = view.find('Query').prop('children');
  });
  it('should render an empty ul when no post were sent', () => {
    const { query } = context;
    const postsView = shallow(<div>{query({})}</div>);
    expect(postsView.find('li')).toHaveLength(0);
  });

  it('should render five elements when five posts are passed', () => {
    const posts = [{ title: 'title 1', id: 1 }, { title: 'title 2', id: 2 }, { title: 'title 3', id: 3 }];
    const { query } = context;
    const postsView = shallow(<div>{query({ data: posts })}</div>);
    expect(postsView.find('li')).toHaveLength(3);
  });
});
