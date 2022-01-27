import React from 'react'; 
import { Navbar, Nav ,Container } from 'react-bootstrap';
import {Link} from "react-router-dom"


function Navbarr() {


  return (
    <>
      <Navbar bg="light" className="w-100" variant="light">
        <Container>

        <Navbar.Brand  as={Link} to="/" >
        <p className="h6" >SHOPMAX</p>
        </Navbar.Brand>

        <Nav className="mx-auto" >
          <Nav.Link as={Link} className="mx-1"  to="/">Home</Nav.Link>
          <Nav.Link as={Link}className="mx-1"  to="/Products">Products</Nav.Link>
          <Nav.Link as={Link} className="mx-1" to="/Cart" >Cart</Nav.Link>
          <Nav.Link as={Link}className="mx-1" to="/ContactUs" >Contact</Nav.Link>
        </Nav>

        </Container>
    </Navbar>
    </>

  );
}

export default Navbarr;
