import React from 'react';
import { shallow } from 'enzyme';
import Comments from './Comments';

describe('comments component', () => {
  it('should render the comments section', () => {
    const commentsFn = shallow(<Comments postId={1} />).find('Query').prop('children');
    const commentsCmpt = shallow(<div>{commentsFn({}, { loading: false })}</div>);
    expect(commentsCmpt.find('Header')).toHaveLength(1);
    commentsCmpt.unmount();
  });

  it('should render comments when service response with comments', () => {
    const commentsFn = shallow(<Comments postId={1} />).find('Query').prop('children');
    const commentsCmpt = shallow(
      <div>
        {commentsFn({
          data: [{
            id: 1, name: 'test', email: 'test', body: 'test',
          }],
        }, { loading: false })}
      </div>,
    );
    expect(commentsCmpt.find('Comment')).toHaveLength(1);
  });
});
