import userEvent from '@testing-library/user-event';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashRouter, Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth';


const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar bg="primary" variant="dark" sticky="top" collapseOnSelect expand="lg" >
        <Container>
          <Navbar.Brand href="/home">DENTALCARE</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="me-auto">
              <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={HashLink} to="/home#contact">Contact Us</Nav.Link>
              <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
              <Nav.Link as={HashLink} to="/home#team">Our Team</Nav.Link>
              <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
              <Nav.Link as={Link} to="/appointment">Get Appoint</Nav.Link>

            </Nav>
            <Navbar.Text>
              {
                user.email ? <div>
                  <button onClick={logOut} className='btn btn-danger mx-1'>Logout</button>
                  <a href="#login">{user.displayName}</a>
                </div> : <Nav.Link as={Link} to="/login">Login</Nav.Link>
              }

            </Navbar.Text>
          </Navbar.Collapse>

        </Container>
      </Navbar>

    </>
  );
};

export default Header;