"use client";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Offcanvas, Button, Dropdown, ButtonGroup } from 'react-bootstrap';
import { CSSProperties } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

const CustomNavbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const navbarStyle: CSSProperties = {
    backgroundColor: '#0854A0',
    padding: '5px 10px',
    height: '50px',
    // width:'690px'
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

  const dropmenuStyle: CSSProperties = {
    backgroundColor: '#0854A0',
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
        <Dropdown className="d-inline mx-2" style={dropmenuStyle}>
          <Dropdown.Toggle id="dropdown-autoclose-true">
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

      <style jsx>{`
      .custom-dropdown-menu {
  background-color: #1781eb; /* Change this to your desired background color */
  color: white; /* Change the text color if needed */
}
    .nav-link-custom {
      transition: color 0.3s ease-in-out;
        }

        /* When the screen size is less than 768px */
        @media (max-width: 800px) {
          .nav-link-custom {
            color:#0854A0  !important; /* Change the font color to yellow when minimized */
          }
        }
      `}</style>
    </div>
  );
};

export default CustomNavbar;



// "use client";
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar, Nav } from 'react-bootstrap';
// import { CSSProperties } from 'react';

// const CustomNavbar: React.FC = () => {

//   const navbarStyle: CSSProperties = {
//     backgroundColor: '#002776', // Dark blue background
//     padding: '5px 10px',
//     height: '50px',
//   };

//   const navLinkStyle: CSSProperties = {
//     color: 'white',
//     fontWeight: 'bold',
//     padding: '0 20px',
//   };

//   return (
//     <Navbar style={navbarStyle} expand="lg">
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="mx-auto">
//           <Nav.Link href="#" style={navLinkStyle}>Home</Nav.Link>
//           <Nav.Link href="#" style={navLinkStyle}>Share</Nav.Link>
//           <Nav.Link href="#" style={navLinkStyle}>Download</Nav.Link>
//           <Nav.Link href="#" style={navLinkStyle}>Print</Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// };

// export default CustomNavbar;
