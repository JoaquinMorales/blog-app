import React, { Component } from 'react';
import { Input, Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './Search.css';

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: props.items, search: '', showDdl: false,
    };
  }

  handleSearch() {
    return ({ target: { value } }) => {
      const { props: { items } } = this;
      const filtered = items.filter(item => item.value.includes(value));
      this.setState({ search: value, showDdl: value, filtered });
    };
  }

  handleFocus() {
    return () => {
      const { state: { search } } = this;
      if (search) {
        this.setState({ showDdl: true });
      }
    };
  }

  handleSelect(key) {
    const { props: { onSelect } } = this;
    onSelect(key);
    this.setState({ showDdl: false });
  }

  render() {
    const { state: { search, filtered, showDdl } } = this;
    return (
      <div>
        <Input icon="search" placeholder="Search..." value={search} onChange={this.handleSearch()} onFocus={this.handleFocus()} />
        {showDdl
          && (
          <Menu vertical className="results">
            {filtered.length === 0 ? <Menu.Item>No results were found</Menu.Item> : null}
            {filtered.map(item => (<Menu.Item key={item.key} onClick={() => this.handleSelect(item.key)}>{item.value}</Menu.Item>))}
          </Menu>
          )}
      </div>
    );
  }
}

Search.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.number,
    value: PropTypes.string,
  })).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Search;
