import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {Link} from 'react-router';


const Header = () => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">Code Pair</a>
        </Navbar.Brand>
      </Navbar.Header>
      <LinkContainer to={'/'}>
        <NavItem>challenges</NavItem>
      </LinkContainer>
      <Nav>
        <NavItem>lala</NavItem>
      </Nav>
    </Navbar>
  );
};

export default Header;