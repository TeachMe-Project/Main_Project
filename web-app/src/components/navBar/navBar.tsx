import React from 'react';
import {useAuth0} from "@auth0/auth0-react";
import {Button, Col, Container, Nav, Navbar, NavDropdown, Row} from 'react-bootstrap';
import Images from "../../assets/images/Images";

const NavBar: React.FC = () => {

    const {loginWithRedirect, logout, isAuthenticated, getAccessTokenSilently, user} = useAuth0();

    return (
        <Navbar collapseOnSelect expand="lg" variant="light" style={{fontSize: "20px"}}>
            <Container fluid={true}>
                <Row className='w-100'>
                    <Col lg={2} md={12} xs={12} className='d-flex flex-row justify-content-between mt-md-2'>
                        <Navbar.Brand href="/">
                            <img src={Images.logo} style={{maxWidth: "240px"}}/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='ms-2'/>
                    </Col>
                    <Col lg={10}>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-lg-auto ms-lg-3 ms-md-5 ps-md-4">
                                <Nav.Link href="#About-Us" className="me-2">About-Us</Nav.Link>
                                <Nav.Link href="#Pricing" className="me-2">Pricing</Nav.Link>
                                <Nav.Link href="#Download" className="me-2">Download</Nav.Link>
                                <Nav.Link href="#ContactUs" className="me-2">ContactUs</Nav.Link>
                            </Nav>
                            <Nav className='ms-md-5 ps-md-4'>
                                <Nav.Link>
                                    <Button variant="secondary" onClick={loginWithRedirect}
                                            style={{borderRadius: "20px", width: "100px", fontSize: "20px"}}>
                                        Login
                                    </Button></Nav.Link>
                                <Nav.Link>
                                    <Button variant="secondary"
                                            style={{borderRadius: "20px", width: "100px", fontSize: "20px"}}>
                                        Signup
                                    </Button>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
};

export default NavBar;