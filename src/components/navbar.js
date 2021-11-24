import React from "react";
import Logo from "../assets/img/brand_logo.png";
import user from "../assets/img/user.png";
import cart from "../assets/img/cart.png";
import { Navbar, Nav, Container, Button, Form } from "react-bootstrap";

const Navbar1 = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="custom-navbar p-0"
    >
      <Container fluid className="pe-0 ps-5">
        <Navbar.Brand href="#reformer">
          <img src={Logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#reformer">The Reformer</Nav.Link>
            <Nav.Link href="#workouts">Workouts</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#about">
              <img src={user} alt="user" />
            </Nav.Link>
            <Nav.Link href="#about">
              <img src={cart} alt="cart" />
            </Nav.Link>
            <Form className="d-flex">
              <Button variant="primary" className="rounded-0 px-5 ms-3">
                SHOP NOW
              </Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navbar1;
