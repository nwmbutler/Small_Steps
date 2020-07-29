import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from "../sslogo.png";


export default class Header extends React.Component {
  render() {
    return (
      <Navbar className="colorNav" sticky="top">
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="200"
            height="60"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}
