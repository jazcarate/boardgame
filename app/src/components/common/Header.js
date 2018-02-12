import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {Link} from 'react-router';


const Header = () => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">Resist'em</a>
        </Navbar.Brand>
      </Navbar.Header>
      <LinkContainer to={'/'}>
        <NavItem>Start</NavItem>
      </LinkContainer>
    </Navbar>
  );
};

export default Header;