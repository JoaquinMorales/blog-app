// @flow

import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';

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
          <Menu.Item
            name="home"
            active={activeItem === 'home'}
            onClick={this.handleItemClick()}
          />
          <Menu.Item
            name="posts"
            active={activeItem === 'posts'}
            onClick={this.handleItemClick()}
          />
        </Menu>
      </Segment>
    );
  }
}
