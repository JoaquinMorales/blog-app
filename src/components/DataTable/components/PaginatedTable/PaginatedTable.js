import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu, Grid } from 'semantic-ui-react';
import Table from '../Table/Table';

class PaginatedTable extends Component {
  constructor(props) {
    super(props);
    const { rows, pageSize } = props;
    this.state = { currentPage: 1, currentRows: rows.slice(0, pageSize) };
  }

  componentDidUpdate(prevProps) {
    const { rows } = this.props;
    if (rows !== prevProps.rows) {
      this.changePage(1);
    }
  }

  changePage(newPage) {
    const pageNumber = newPage - 1;
    const { pageSize, rows } = this.props;
    this.setState({
      currentPage: newPage,
      currentRows: rows.slice(
        pageNumber * pageSize,
        (pageNumber + 1) * pageSize,
      ),
    });
  }

  paginationTemplate() {
    const { rows, pageSize } = this.props;
    const { currentPage } = this.state;
    const pages = rows.length % pageSize === 0
      ? rows.length / pageSize
      : Math.floor(rows.length / pageSize) + 1;
    const pageItems = Array(pages).fill().map((_, index) => 1 + index);
    return (
      <Menu floated="right" pagination>
        {pageItems.map(page => (
          <Menu.Item
            key={page}
            as="a"
            active={page === currentPage}
            onClick={() => this.changePage(page)}
          >
            {page}
          </Menu.Item>
        ))}
      </Menu>
    );
  }

  render() {
    const { columns } = this.props;
    const { currentRows } = this.state;
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column><Table rows={currentRows} columns={columns} /></Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>{ this.paginationTemplate() }</Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

PaginatedTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageSize: PropTypes.number,
};

PaginatedTable.defaultProps = {
  pageSize: 8,
};

export default PaginatedTable;
