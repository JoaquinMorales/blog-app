import React from 'react';
import { shallow } from 'enzyme';
import PostsDetails from './PostsDetails';

describe('PostDetails view', () => {
  it('should render the view with Post and Comments with id from location', () => {
    const location = { pathname: '/posts/1' };
    const postsCmpt = shallow(<PostsDetails location={location} />);
    expect(postsCmpt.find('Post').length).toEqual(1);
    expect(postsCmpt.find('Comments').length).toEqual(1);
    postsCmpt.unmount();
  });
});
