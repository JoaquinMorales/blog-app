import React from 'react';
import { shallow } from 'enzyme';
import PaginatedTable from './PaginatedTable';

describe('Paginated table component', () => {
  const context = {};
  beforeAll(() => {
    context.props = {
      columns: [{ label: 'title', field: 'title' }, { label: 'description', field: 'desc' }],
      rows: [
        { id: 1, title: 'title 1', desc: 'desc 1' },
        { id: 2, title: 'title 2', desc: 'desc 2' },
        { id: 3, title: 'title 3', desc: 'desc 3' },
      ],
    };
  });

  it('should render a table with pagination section', () => {
    const { props } = context;
    const paginatedTable = shallow(<PaginatedTable {...props} />);
    expect(paginatedTable.find('DataTable')).toHaveLength(1);
    expect(paginatedTable.find('Menu').props()).toHaveProperty('pagination', true);
    expect(paginatedTable.find('MenuItem')).toHaveLength(1);
    paginatedTable.unmount();
  });

  it('should have 2 pages when rows are 3 and pagesize is 2', () => {
    const { props } = context;
    const paginatedTable = shallow(<PaginatedTable {...props} pageSize={2} />);
    expect(paginatedTable.find('MenuItem')).toHaveLength(2);
    paginatedTable.unmount();
  });

  it('should update the current page and the items to show when page is changed', () => {
    const { props } = context;
    const paginatedTable = shallow(<PaginatedTable {...props} pageSize={2} />);
    paginatedTable.find('MenuItem').at(1).simulate('click');
    expect(paginatedTable.state()).toHaveProperty('currentPage', 2);
    expect(paginatedTable.state('currentRows')).toHaveLength(1);
    paginatedTable.unmount();
  });

  it('should reset pagination state when rows prop have been changed', () => {
    const { props: { columns, rows } } = context;
    const paginatedTable = shallow(<PaginatedTable columns={columns} rows={[]} pageSize={2} />);
    paginatedTable.setProps({ rows });
    expect(paginatedTable.state()).toHaveProperty('currentPage', 1);
    paginatedTable.unmount();
  });
});
