import React from 'react';
import { shallow } from 'enzyme';
import SearchPosts from './SearchPosts';

describe('Search posts view', () => {
  it('should render the view with search imput', () => {
    const postsQueryFn = shallow(<SearchPosts />).find('Query').prop('children');
    const postsCmpt = shallow(<div>{postsQueryFn({ data: [{ id: 1, title: 'test' }] })}</div>);
    expect(postsCmpt.find('Search').length).toEqual(1);
    postsCmpt.unmount();
  });

  it('should render post details when some post is selected', () => {
    const wrapperCmpt = shallow(<SearchPosts />);
    wrapperCmpt.setState({ selectedPost: 10 });
    const postsQueryFn = wrapperCmpt.find('Query').prop('children');
    const postsCmpt = shallow(<div>{postsQueryFn({})}</div>);
    expect(postsCmpt.find('Post').length).toEqual(1);
    wrapperCmpt.unmount();
    postsCmpt.unmount();
  });

  it('should change the selected variable in state when updateSelected is called', () => {
    const wrapperCmpt = shallow(<SearchPosts />);
    wrapperCmpt.instance().updateSelected(1);
    expect(wrapperCmpt.state()).toHaveProperty('selectedPost', 1);
    wrapperCmpt.unmount();
  });
});
