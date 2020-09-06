import React, { Component } from 'react';
import { Navbar, NavItem, Dropdown, Divider, Icon } from 'react-materialize';

import './component.styles.scss';

class Header extends Component {
  render() {
    const { user } = this.props;
    return (
      <Navbar
        alignLinks='right'
        className='header light-blue'
        brand={<span className='brand-logo'>Redux</span>}
        menuIcon={<Icon>menu</Icon>}
        options={{
          edge: 'left'
        }}
      >
        <NavItem>About</NavItem>
        <Dropdown
          options={{
            alignment: 'left',
            autoTrigger: true,
            closeOnClick: true,
            constrainWidth: true,
            coverTrigger: true
          }}
          trigger={
            <a href='#!'>
              Hi {user.username}!<Icon right>arrow_drop_down</Icon>
            </a>
          }
        >
          <span>Profile</span>
          <Divider />
          <span>Logout</span>
        </Dropdown>
      </Navbar>
    );
  }
}

export default Header;
