import React from 'react';
import { shallow } from 'enzyme';
import { Search } from './Search';

describe('Search component', () => {
  const context = {};

  beforeEach(() => {
    context.selected = jest.fn();
    context.searchCmpt = shallow(<Search items={[]} onSelect={context.selected} />);
  });

  afterEach(() => {
    context.searchCmpt.unmount();
  });

  it('should render an input search', () => {
    const { searchCmpt } = context;
    expect(searchCmpt.find('Input')).toHaveLength(1);
  });

  it('should show ddl when focus and has search criteria', () => {
    const { searchCmpt } = context;
    searchCmpt.setState({ search: 'test' });
    searchCmpt.find('Input').simulate('focus', {});
    expect(searchCmpt.state()).toHaveProperty('showDdl', true);
  });

  it('should not show ddl when focus and there is no search criteria', () => {
    const { searchCmpt } = context;
    searchCmpt.find('Input').simulate('focus', {});
    expect(searchCmpt.state()).toHaveProperty('showDdl', false);
  });

  it('should filter and show ddl when input change value', () => {
    const { searchCmpt } = context;
    const items = [{ key: 1, value: 'test 1' }, { key: 2, value: 'test 2' }];
    searchCmpt.setProps({ items });
    searchCmpt.find('Input').simulate('change', { target: { value: '2' } });
    expect(searchCmpt.state()).toHaveProperty('showDdl', true);
    expect(searchCmpt.state()).toHaveProperty('filtered', [{ key: 2, value: 'test 2' }]);
  });

  it('should call onChange callback when some item is selected', () => {
    const { searchCmpt, selected } = context;
    const items = [{ key: 1, value: 'test 1' }];
    searchCmpt.setState({ showDdl: true, filtered: items });
    searchCmpt.find('MenuItem').simulate('click', {});
    expect(selected).toHaveBeenCalledWith(1);
    expect(searchCmpt.state()).toHaveProperty('showDdl', false);
  });
});
