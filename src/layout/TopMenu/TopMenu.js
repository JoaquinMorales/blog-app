// @flow

import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './TopMenu.css';

const menuOptions = [
  { name: 'home', to: '/' },
  { name: 'posts', to: '/posts' },
  { name: 'users', to: '/users' },
];

export default class TopMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: 'home' };
  }

  handleItemClick() {
    return (e, { name }) => this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted>
        <Menu inverted secondary>
          {
            menuOptions.map(item => (
              <Menu.Item
                key={item.name}
                name={item.name}
                active={activeItem === item.name}
                to={item.to}
                onClick={this.handleItemClick()}
                as={Link}
              />
            ))
          }
        </Menu>
      </Segment>
    );
  }
}
