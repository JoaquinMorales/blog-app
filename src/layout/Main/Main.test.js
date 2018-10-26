import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';

describe('Main content', () => {
  it('should render a switch with routes', () => {
    const main = shallow(<Main />);
    expect(main.find('Switch')).toHaveLength(1);
    expect(main.find('Route')).toHaveLength(5);
  });
});
