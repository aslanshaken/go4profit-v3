import { Navbar, Nav, Container, Button, Image } from "react-bootstrap";
import React from "react";
import {useLocation} from 'react-router-dom';
import './Header.css'
import Logo from '../../assets/logo.png'


function Header() {
  const location = useLocation();
  const path = location.pathname

  return (
    <Navbar expand="xl" sticky="top" className="gap-3 pt-4 pb-4 header-container" bg="light" variant="light">
      <Container className="align-items:center color-black">
        <Navbar.Brand href="/" className="mv-logo-right">
         <Image alt="logo" src={Logo} className="logo-img" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="flex-grow-1 justify-content-center align-items-center ">
            <Nav.Link href="/" className={path === '/' && 'active'} >Home</Nav.Link>
            <Nav.Link href="/about" className={path === '/about' && 'active'}>About us</Nav.Link>
            {/* <Nav.Link href="/why-us" className={path === '/why-us' && 'active'}>Why us</Nav.Link> */}
            <Nav.Link href="/services" className={path === '/services' && 'active'}>Services</Nav.Link>
            <Nav.Link href="/join-us" className={path === '/join-us' && 'active'}>Join us</Nav.Link>
            <Nav.Link className="mv-button-right">
              <Button className="call-button">Request a call</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
