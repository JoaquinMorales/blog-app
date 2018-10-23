import React from 'react';
import { shallow } from 'enzyme';
import TopMenu from './TopMenu';


describe('TopMenu component', () => {
  it('should render TopMenu', () => {
    const topMenu = shallow(<TopMenu />);
    expect(topMenu.find('MenuItem')).toHaveLength(3);
  });

  it('should change state when item is clicked', () => {
    const topMenu = shallow(<TopMenu />);
    const changeTab = topMenu.instance().handleItemClick();
    changeTab(jest.fn(), { name: 'test' });
    expect(topMenu.state('activeItem')).toEqual('test');
  });
});
