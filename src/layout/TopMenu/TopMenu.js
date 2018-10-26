// @flow

import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import './TopMenu.css';

const menuOptions = [
  { name: 'home', to: '/' },
  { name: 'posts', to: '/posts' },
  { name: 'users', to: '/users' },
];

export class TopMenu extends Component {
  constructor(props) {
    super(props);
    const { location: { pathname } } = props;
    const [, module] = pathname.split('/');
    this.state = { activeItem: module === '' ? 'home' : module };
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

TopMenu.propTypes = { location: PropTypes.shape({ pathname: PropTypes.string }).isRequired };
const wrapedTopMenu = withRouter(TopMenu);
wrapedTopMenu.displayName = 'TopMenu';
export default wrapedTopMenu;
