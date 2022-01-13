import React, { Component } from 'react';

import { CartWidget } from './CartWidget/CartWidget';
import {Navbar,Container,Nav} from 'react-bootstrap'

export default class NavBar extends Component {
    render() {
        return (
   
  <div>

  <br />
  <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/botinf.png"
          width="42"
          height="42"
          className="d-inline-block align-top"
        />&nbsp;&nbsp;{'TIENDA DEPORTIVA'}
           
      </Navbar.Brand>

      <Nav className="me-auto">
      <Nav.Link href="#home">CAMISETAS</Nav.Link>
      <Nav.Link href="#features">ZAPATILLAS</Nav.Link>
      <Nav.Link href="#pricing">BOTINES</Nav.Link>
    </Nav>

      <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        
        <a href="#login"><CartWidget></CartWidget></a>

        </Navbar.Text>
    </Navbar.Collapse>


    </Container>
  </Navbar>




            </div>
        )
    }
}

