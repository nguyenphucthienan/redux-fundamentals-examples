import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, NavItem, Dropdown, Divider, Icon } from 'react-materialize';

import './header.styles.scss';

class Header extends Component {
  render() {
    const { currentUser } = this.props;
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
              Hi {currentUser.username}!<Icon right>arrow_drop_down</Icon>
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

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
