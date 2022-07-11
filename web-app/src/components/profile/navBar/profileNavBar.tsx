import React from 'react';
import {Button, Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import Images from "../../../assets/images/Images";

const ProfileNavBar: React.FC = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="light" style={{fontSize: "20px",boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px"}}>
            <Container fluid={true} className='mx-lg-0 px-0'>
                <Row className='w-100'>
                    <Col lg={2} md={12} xs={12} className='d-flex flex-row justify-content-between mt-md-2'>
                        <Navbar.Brand href="/">
                            <img src={Images.logo} style={{maxWidth: "240px"}}/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='ms-2'/>
                    </Col>
                    <Col lg={10}>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className='ps-md-4 ms-auto'>
                                <Nav.Link>
                                    <Button variant="secondary"
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

export default ProfileNavBar;