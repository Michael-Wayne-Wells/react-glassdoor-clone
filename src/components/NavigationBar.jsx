import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';

function NavigationBar(){


  return (
    <div className="navbarDiv">

    <style jsx>{`
      .navbar-brand {
        margin-left: 80px;
      }
      .dropdown-toggle {
        margin-left: 70px;
      }
      .nav-link {
        margin-right: 50px;
      }
      .navbar {
        background: rgba (0, 0, 0, 0)
      }
    `}</style>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">Glassdoor</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">

    <NavDropdown title="Find a Job" id="collasible-nav-dropdown">
    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    </NavDropdown>
    <NavDropdown title="For Employers" id="collasible-nav-dropdown">
    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    </NavDropdown>
    </Nav>
    <Nav>
    <Nav.Link href="#deets">Sign In</Nav.Link>
    <Nav.Link eventKey={2} href="#memes">
    Post Jobs Free
    </Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Navbar>

    </div>
  );
}

export default NavigationBar;
