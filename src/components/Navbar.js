import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../sslogo.png";


export default class Header extends React.Component {
  render() {
    return (
      <Navbar className="colorNav" sticky="top">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="200"
            height="60"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
      </Navbar>
    );
  }
}
