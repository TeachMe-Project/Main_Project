import React from 'react';
import {Button, Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import Images from "../../../assets/images/Images";
import {useAuth0} from "@auth0/auth0-react";

const ProfileNavBar: React.FC = () => {

    const {user, logout} = useAuth0();
console.log(user);
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
                            <Nav className='ps-md-4 ms-auto d-flex flex-row align-items-center'>
                                <Nav.Link>
                                    <Button variant="outline-secondary" className='d-flex flex-row align-items-center'
                                            style={{borderRadius: "20px", fontSize: "20px"}}>
                                        <img src={user?.picture} style={{height:"35px", borderRadius:"50%", marginRight:"7px"}}/>
                                        {user?.name}
                                    </Button></Nav.Link>
                                <Nav.Link>
                                    <Button variant="secondary"
                                            style={{borderRadius: "20px", width: "100px", fontSize: "20px"}}
                                    onClick={()=>logout()}>
                                        Logout
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