import React from 'react';
import { shallow } from 'enzyme';
import Post from './Post';

describe('Post component', () => {
  it('should render the post title content and author as link', () => {
    const postQueryFn = shallow(<Post id={1} />).find('Query').prop('children');
    const userQueryFn = shallow(<div>{postQueryFn({}, { loading: false })}</div>).find('Query').prop('children');
    const postCmpt = shallow(<div>{userQueryFn({}, { loading: false })}</div>);
    expect(postCmpt.find('Header').length).toEqual(2);
    expect(postCmpt.find('Segment[basic=true]').length).toEqual(1);
    expect(postCmpt.find('Link').length).toEqual(1);
  });
});
