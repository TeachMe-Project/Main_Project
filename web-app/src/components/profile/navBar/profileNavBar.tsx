import React from 'react';
import {Button, Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import Images from "../../../assets/images/Images";
import {useAuth0} from "@auth0/auth0-react";
import {useNavigate} from "react-router-dom";
import {FaRegUserCircle} from 'react-icons/fa';
import {FiMenu} from 'react-icons/fi';

type ProfileNavBarProps = {
    isMobile: boolean,
    handleToggleSidebar: () => void
}

const ProfileNavBar: React.FC<ProfileNavBarProps> = (props) => {

    const {user, logout} = useAuth0();
    const navigate = useNavigate();
    const {isMobile, handleToggleSidebar} = props
    return (
        <Navbar collapseOnSelect expand="lg" variant="light"
                style={{fontSize: "20px", boxShadow: "rgba(0, 0, 0, 0.1) 0px 25px 20px -20px", height: "10vh"}}>
            <Container fluid={true} className='mx-0 px-2 py-0'>
                <Row className='w-100'>
                    <Col lg={2} md={12} xs={12} className='d-flex flex-row justify-content-between mt-md-2 py-0'>
                        <Row className='d-flex flex-row align-content-center'>
                            <Col>
                                {isMobile && <Button className='ms-0 me-1 p-1' variant='outline-light'
                                                     style={{fontSize: "30px", color: "#82807c"}}
                                                     onClick={handleToggleSidebar}><FiMenu/></Button>
                                }
                                <Navbar.Brand onClick={() => navigate('/')} style={{cursor: "pointer"}}>
                                    <img src={Images.logo} style={{maxWidth: "240px"}} alt='logo'
                                         className='profile-nav-logo'/>
                                </Navbar.Brand>
                            </Col>
                        </Row>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='ms-2'
                                       style={{
                                           fontSize: "30px",
                                           color: "#82807c",
                                           float: "right"
                                       }}><FaRegUserCircle/></Navbar.Toggle>

                    </Col>
                    <Col lg={10}>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav
                                className='ps-md-4 ms-auto d-flex flex-lg-row flex-column align-items-end align-items-end'>
                                <Nav.Link>
                                    <Button variant="outline-secondary" className='d-flex flex-row align-items-center'
                                            style={{borderRadius: "20px", fontSize: "20px"}}>
                                        <img src={user?.picture}
                                             style={{height: "35px", borderRadius: "50%", marginRight: "7px"}}
                                             alt='user'/>
                                        {user?.name}
                                    </Button></Nav.Link>
                                <Nav.Link>
                                    <Button variant="secondary"
                                            style={{borderRadius: "20px", width: "100px", fontSize: "20px"}}
                                            onClick={() => logout()}>
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