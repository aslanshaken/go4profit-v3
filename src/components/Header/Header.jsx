import { Navbar, Nav, Container, Button, Image } from "react-bootstrap";
import React from "react";
import { Avatar } from '@mui/material';
import './Header.css'
import Logo from '../../assets/logo.png'


function Header() {
  return (
    <Navbar expand="xl" sticky="top" className="gap-3 pt-5 pb-5" bg="light" variant="light">
      <Container className="align-items:center color-black">
        <Navbar.Brand href="/" className="mv-logo-right">
         <Image alt="logo" src={Logo} className="logo-img" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="flex-grow-1 justify-content-center align-items-center">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About us</Nav.Link>
            <Nav.Link href="/why-us">Why us</Nav.Link>
            <Nav.Link href="/service">Services</Nav.Link>
            <Nav.Link href="/join-us">Join us</Nav.Link>
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
