import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';

function NavigationBar(){


  return (
    <div className="navbarDiv">

    <style jsx>{`
      .navbar-brand {
        font-size: 30px;
        margin-left: 80px;
      }

      .dropdown-toggle {
        margin-left: 70px;
      }
      .nav-link {
        margin-right: 50px;
      }
      .navbar {
        font-weight: bold;
        height: 60px;
        background-color: rgba(0, 0, 0, 0);
        box-shadow: 1px 1px 3px #000000;
      }
      .postJob {
        margin-top: 8px;
      }

      .signInBox{
        margin-top: 10px;
        margin-bottom: 10px;
        height: 30px;
        border-radius: 7%;
        padding: 5px;
        padding-bottom: 30px;
        background-color: rgba(0, 0, 0, .3);
      }
    `}</style>
    <Navbar collapseOnSelect expand="lg" variant="dark">
    <Navbar.Brand className="make-white" href="#home">glassdoor</Navbar.Brand>
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
    <Nav.Link className='signInBox' href="#deets">Sign In</Nav.Link>
    <Nav.Link className='postJob' eventKey={2} href="#memes">
    Post Jobs Free
    </Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Navbar>

    </div>
  );
}

export default NavigationBar;
