import React, { Component } from 'react';
import { Input, Menu } from 'semantic-ui-react';
import './Search.css';

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: 0, filtered: [], search: '' };
  }

  handleSearch() {
    return ({ target: { value } }) => this.setState({ search: value });
  }

  handleSelect() {
    return () => {};
  }

  render() {
    const { state: { search } } = this;
    return (
      <div>
        <Input icon="search" placeholder="Search..." value={search} onChange={this.handleSearch()} />
        <Menu vertical className="results">
          <Menu.Item onClick={this.handleSelect()}>Javascript Link</Menu.Item>
          <Menu.Item onClick={this.handleSelect()}>Javascript</Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Search;
