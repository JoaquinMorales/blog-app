import React from 'react';
import { shallow } from 'enzyme';
import { Button } from 'semantic-ui-react';
import Table from './Table';

describe('Table component', () => {
  it('should render a table with the numbers of rows and columns specified', () => {
    const props = {
      columns: [{ label: 'title', field: 'title' }, { label: 'description', field: 'desc' }],
      rows: [{ id: 1, title: 'title 1', desc: 'description 1' }, { id: 2, title: 'title 2', desc: 'description 2' }],
    };
    const table = shallow(<Table {...props} />);
    expect(table.find('TableHeaderCell')).toHaveLength(2);
    expect(table.find('TableCell')).toHaveLength(4);
  });

  it('should render a table with a custom template when passed', () => {
    const renderButton = field => <Button>{field}</Button>;
    const props = {
      columns: [{ label: 'title', field: 'title' }, { label: 'description', field: 'id', template: renderButton }],
      rows: [{ id: 1, title: 'title 1' }, { id: 2, title: 'title 2' }],
    };
    const table = shallow(<Table {...props} />);
    expect(table.find('Button')).toHaveLength(2);
  });
});
