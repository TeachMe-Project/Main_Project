import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Images from '../Assets/Images/Images';

const NavBar: React.FC = () => {
  const { loginWithRedirect, logout, isAuthenticated, getAccessTokenSilently, user } = useAuth0();
  const navigate = useNavigate();

  console.log(user);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="light"
      style={{ fontSize: '20px', background: 'white' }}
      className="sticky-top"
    >
      <Container fluid={true}>
        <Row className="w-100">
          <Col lg={2} md={12} xs={12} className="d-flex flex-row justify-content-between mt-md-0">
            <Navbar.Brand onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}>
              <img src={Images.logo} style={{ maxWidth: '200px' }} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ms-2" />
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default NavBar;
