import { Navbar, Nav, Container, Button, Image } from "react-bootstrap";
import React from "react";
import { useLocation } from "react-router-dom";
import "./Header.css";
import Logo from "../../assets/logo.png";

function Header() {
  const location = useLocation();
  const path = location.pathname;

  return (
      <Navbar
        expand="xl"
        sticky="top"
        className="gap-3 pt-4 pb-4 header-container"
        variant="light"
      >
        <Container className="align-items:center">
          <Navbar.Brand href="/" className="mv-logo-right">
            <Image alt="logo" src={Logo} height={70} />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{
              borderColor: "white",
              color: "white",
              background: "white",
              opacity: 0.8,
            }}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="flex-grow-1 justify-content-center align-items-center navlink">
              <Nav.Link
                href="/"
                className={path === "/" && "active"}
                style={{ color: "white" }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="/about"
                className={path === "/about" && "active"}
                style={{ color: "white" }}
              >
                About us
              </Nav.Link>
              <Nav.Link
                href="/services"
                className={path === "/services" && "active"}
                style={{ color: "white" }}
              >
                Services
              </Nav.Link>
              <Nav.Link
                href="/join-us"
                className={path === "/join-us" && "active"}
                style={{ color: "white" }}
              >
                Join us
              </Nav.Link>
              <Nav.Link href="/book-a-call" className="mv-button-right">
                <Button className="call-button">
                  Get a Free Audit of Your Bookkeeping
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default Header;
