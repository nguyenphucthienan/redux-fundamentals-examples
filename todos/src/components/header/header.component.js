import React, { Component } from 'react';
import { Navbar, Icon } from 'react-materialize';

class Header extends Component {
  render() {
    return (
      <Navbar
        alignLinks='right'
        className='light-blue'
        brand={<span className='brand-logo'>Todos</span>}
        centerLogo
        menuIcon={<Icon>menu</Icon>}
        options={{
          edge: 'left'
        }}
      />
    );
  }
}

export default Header;
