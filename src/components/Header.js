import React from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  Button,
  FormControl
} from "react-bootstrap";
import styled from "styled-components";

function Header() {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="/">
          <Img
            src={require("../assets/logo.gif")}
            alt="giordano logo"
            className="giordanoLogo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-between"
        >
          <Nav>
            <Nav.Link href="/men">MEN</Nav.Link>
            <Nav.Link href="/women">WOMEN</Nav.Link>
            <NavDropdown title="SALE" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/sale">온라인 특가</NavDropdown.Item>
              <NavDropdown.Item href="/sale">SEASON OFF</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" className="mr-sm-2" />
            <Button variant="light" bg="grey">
              검색
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

const Img = styled.img`
  position: relative;
  top: -4px;
`;

export default Header;
