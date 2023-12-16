import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import p1 from "../assets/images/footer-logo.svg.png";
import p2 from "../assets/images/Writealy.png";


const Header = ({ navMargin }) => {
  return (
    <div>
      <div className="d-flex justify-content-center">
      <img src={p1} alt="" />
        <img src={p2} alt="" />
        <Navbar class="container" style={{marginLeft: '450px'}}>
          <Nav className="navbar-container">
            <Nav.Item className="navbar-item">
              <a href="/">Product</a>
            </Nav.Item>
            <Nav.Item className="navbar-item">
              <a href="/">Use cases</a>
            </Nav.Item>
            <Nav.Item className="navbar-item">
              <a href="/">Pricing</a>
            </Nav.Item>
            <Nav.Item className="navbar-item">
              <a href="/">Customers</a>
            </Nav.Item>
            <Nav.Item className="navbar-item">
              <a href="/">Resources</a>
            </Nav.Item>
            <Nav.Item className="navbar-item">
              <a href="/">Sign in</a>
            </Nav.Item>
          </Nav>
        </Navbar>
      </div>

      <Container>
        <Row>
          <Col sm={6} lg={6}>
            {/* <p>Hi</p> */}
          </Col>
          <Col sm={6} lg={6}>
            {/* <p>This is column 2.</p> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
