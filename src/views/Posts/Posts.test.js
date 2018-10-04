import React from 'react';
import { shallow } from 'enzyme';
import { Posts } from './Posts';

describe('Posts view', () => {
  it('should render an empty ul when no post were sent', () => {
    const appView = shallow(<Posts />);
    expect(appView.find('li')).toHaveLength(0);
  });
  it('should render five elements when five posts are passed', () => {
    const posts = [{ title: 'title 1', id: 1 }, { title: 'title 2', id: 2 }, { title: 'title 3', id: 3 }];
    const appView = shallow(<Posts posts={posts} />);
    expect(appView.find('li')).toHaveLength(3);
  });
});
