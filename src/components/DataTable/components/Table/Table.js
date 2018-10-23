import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import { get } from 'lodash';

const DataTable = ({ columns, rows }) => (
  <Table>
    <Table.Header>
      <Table.Row>
        {columns.map(column => (
          <Table.HeaderCell key={column.field}>{column.label}</Table.HeaderCell>
        ))}
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {rows.map(row => (
        <Table.Row key={row.id}>
          {columns.map(({ field, template }) => (
            <Table.Cell key={`${field}${row.id}`}>
              {
                template ? template(get(row, field)) : get(row, field)
              }
            </Table.Cell>
          ))}
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
);

DataTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
  })).isRequired,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DataTable;
