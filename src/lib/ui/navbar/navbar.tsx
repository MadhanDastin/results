"use client";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import { CSSProperties } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

const CustomNavbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const navbarStyle: CSSProperties = {
    backgroundColor: '#0854A0',
    padding: '5px 10px',
    height: '50px',
    width:'auto'
  };

  const navLinkStyle: CSSProperties = {
    color: 'white',
    fontWeight: 'bold',
    padding: '0 20px',
  };

  const dropLinkStyle: CSSProperties = {
    color: 'white',
    backgroundColor: '#0854A0',
  };

  const dropStyle: CSSProperties = {
    backgroundColor: '#0854A0',
  };


  const dropdownToggleStyle: CSSProperties = {
    backgroundColor: '#0854A0',
    border: 'none',
    color: 'white', // Optional if you want the icon in white
  };

  

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      {/* Main Navbar */}
      <Navbar style={navbarStyle} expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/" className="nav-link-custom" style={navLinkStyle}>Home</Nav.Link>
            <Nav.Link href="#" className="nav-link-custom" style={navLinkStyle}>Share</Nav.Link>
            <Nav.Link href="#" className="nav-link-custom" style={navLinkStyle}>Download</Nav.Link>
            <Nav.Link href="#" className="nav-link-custom" style={navLinkStyle}>Print</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Dropdown className="d-inline mx-2">
          <Dropdown.Toggle as="div" id="dropdown-autoclose-true" style={dropdownToggleStyle} className="no-caret">
            <GiHamburgerMenu />
          </Dropdown.Toggle>

          <Dropdown.Menu className="custom-dropdown-menu" style={dropStyle}>
            <Dropdown.Item href="/changepassword" style={dropLinkStyle}>Change Password</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#" style={dropLinkStyle}>Report an issue</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#" style={dropLinkStyle}>Service Feedback</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#" style={dropLinkStyle}>Help</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#" style={dropLinkStyle}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>

      <style>
        {`
        .no-caret::after {
  display: none !important; /* Hides the dropdown arrow */
}
  .custom-dropdown-menu {
  max-height: 300px; /* Set a suitable height if needed */
  overflow-y: hidden;  /* Allow scrolling if content exceeds height */
  position: absolute !important;  /* Ensure it's positioned correctly */
  z-index: 9999;  /* Increase z-index to make sure it's above other content */
}
        `}
      </style>
    </div>
  );
};

export default CustomNavbar;
