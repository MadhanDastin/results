"use client";
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Dropdown, Container } from 'react-bootstrap';
import { CSSProperties } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import Link from 'next/link';

const CustomNavbar: React.FC = () => {
  // useEffect(() => {
  //   // Bootstrap JavaScript for enabling components like the navbar toggle
  //   typeof document !== 'undefined'
  //     ? require('bootstrap/dist/js/bootstrap.bundle.min.js')
  //     : null;
  // }, []);
  const [showMenu, setShowMenu] = useState(false);

  const navbarStyle: CSSProperties = {
    backgroundColor: '#0854A0',
    padding: '5px 10px',
    height: '50px',
    width: 'auto'
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

  // const [isOpen, setIsOpen] = useState(false);

  // const toggleNavbar = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <div>
      {/* Main Navbar */}
      <Navbar style={navbarStyle} expand="lg" variant="dark" className='navbar navbar-expand-lg'>
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" style={navLinkStyle}>Home</Nav.Link>
              <Nav.Link href="#" style={navLinkStyle}>Share</Nav.Link>
              <Nav.Link href="#" style={navLinkStyle}>Download</Nav.Link>
              <Nav.Link href="#" style={navLinkStyle}>Print</Nav.Link>
            </Nav>
          <Dropdown className="d-inline mx-2">
            <Dropdown.Toggle as="div" id="dropdown-autoclose-true" style={dropdownToggleStyle} className="no-caret">
              <GiHamburgerMenu />
            </Dropdown.Toggle>

            <Dropdown.Menu className="custom-dropdown-menu dropdown-menu-lg-end" style={dropStyle}>
              <Dropdown.Item href="/changepassword" style={dropLinkStyle}>Change Password</Dropdown.Item>
              <Dropdown.Divider className="white-divider" />
              <Dropdown.Item href="#" style={dropLinkStyle}>Report an issue</Dropdown.Item>
              <Dropdown.Divider className="white-divider"/>
              <Dropdown.Item href="#" style={dropLinkStyle}>Service Feedback</Dropdown.Item>
              <Dropdown.Divider className="white-divider" />
              <Dropdown.Item href="#" style={dropLinkStyle}>Help</Dropdown.Item>
              <Dropdown.Divider className="white-divider"/>
              <Dropdown.Item href="#" style={dropLinkStyle}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link href="/" className="navbar-brand">
            MyWebsite
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={isOpen ? 'true' : 'false'}
            aria-label="Toggle navigation"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/services" className="nav-link">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}

      <style>
        {`
         .white-divider {
            background-color: white !important; /* Set divider color to white */
            height: 1px; /* Adjust height if necessary */
          }

          .no-caret::after {
            display: none !important; /* Hides the dropdown arrow */
          }

          .custom-dropdown-menu {
            max-height: 300px; /* Set a suitable height if needed */
            overflow-y: hidden; /* Allow scrolling if content exceeds height */
            position: absolute !important; /* Ensure it's positioned correctly */
            z-index: 9999; /* Increase z-index to make sure it's above other content */
          }
            @media (max-width: 991px) {
            .navbar-nav .nav-link {
              color: white !important;  /* Ensure the links are white on small screens */
            }
          }
            .navbar-collapse{
            z-index:1;
            background-color:#0854A0;
            color:white!important;
            width:50px;
            }

            /* Default styles for larger screens */
.navbar {
  width: auto; /* Allow the navbar to take the full width */
  max-width: 100%; /* Ensure it doesn't exceed the viewport width */
}

/* Styles for screens smaller than 'lg' */
@media (max-width: 991px) { /* Adjust the breakpoint as needed */
  .navbar {
    width: 100%; /* Set the navbar to full width */
    padding: 0 15px; /* Add padding for better spacing */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Optional: add a shadow for better visibility */
  }

  .navbar-collapse {
    max-width: 100%; /* Ensure collapse area takes full width */
  }

  .navbar-toggler {
    margin-left: auto; /* Align the toggler to the right */
  }
}

        `}
      </style>
    </div>
  );
};

export default CustomNavbar;









// "use client";
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar, Nav, Dropdown } from 'react-bootstrap';
// import { CSSProperties } from 'react';
// import { GiHamburgerMenu } from "react-icons/gi";

// const CustomNavbar: React.FC = () => {
//   const [showMenu, setShowMenu] = useState(false);

//   const navbarStyle: CSSProperties = {
//     backgroundColor: '#0854A0',
//     padding: '5px 10px',
//     height: '50px',
//     width:'auto'
//   };

//   const navLinkStyle: CSSProperties = {
//     color: 'white',
//     fontWeight: 'bold',
//     padding: '0 20px',
//   };

//   const dropLinkStyle: CSSProperties = {
//     color: 'white',
//     backgroundColor: '#0854A0',
//   };

//   const dropStyle: CSSProperties = {
//     backgroundColor: '#0854A0',
//   };


//   const dropdownToggleStyle: CSSProperties = {
//     backgroundColor: '#0854A0',
//     border: 'none',
//     color: 'white', // Optional if you want the icon in white
//   };

  

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <div>
//       {/* Main Navbar */}
//       <Navbar style={navbarStyle} expand="lg">
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mx-auto">
//             <Nav.Link href="/" className="nav-link-custom" style={navLinkStyle}>Home</Nav.Link>
//             <Nav.Link href="#" className="nav-link-custom" style={navLinkStyle}>Share</Nav.Link>
//             <Nav.Link href="#" className="nav-link-custom" style={navLinkStyle}>Download</Nav.Link>
//             <Nav.Link href="#" className="nav-link-custom" style={navLinkStyle}>Print</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//         <Dropdown className="d-inline mx-2">
//           <Dropdown.Toggle as="div" id="dropdown-autoclose-true" style={dropdownToggleStyle} className="no-caret">
//             <GiHamburgerMenu />
//           </Dropdown.Toggle>

//           <Dropdown.Menu className="custom-dropdown-menu" style={dropStyle}>
//             <Dropdown.Item href="/changepassword" style={dropLinkStyle}>Change Password</Dropdown.Item>
//             <Dropdown.Divider />
//             <Dropdown.Item href="#" style={dropLinkStyle}>Report an issue</Dropdown.Item>
//             <Dropdown.Divider />
//             <Dropdown.Item href="#" style={dropLinkStyle}>Service Feedback</Dropdown.Item>
//             <Dropdown.Divider />
//             <Dropdown.Item href="#" style={dropLinkStyle}>Help</Dropdown.Item>
//             <Dropdown.Divider />
//             <Dropdown.Item href="#" style={dropLinkStyle}>Logout</Dropdown.Item>
//           </Dropdown.Menu>
//         </Dropdown>
//       </Navbar>

//       <style>
//         {`
//         .no-caret::after {
//   display: none !important; /* Hides the dropdown arrow */
// }
//   .custom-dropdown-menu {
//   max-height: 300px; /* Set a suitable height if needed */
//   overflow-y: hidden;  /* Allow scrolling if content exceeds height */
//   position: absolute !important;  /* Ensure it's positioned correctly */
//   z-index: 9999;  /* Increase z-index to make sure it's above other content */
// }
//         `}
//       </style>
//     </div>
//   );
// };

// export default CustomNavbar;
