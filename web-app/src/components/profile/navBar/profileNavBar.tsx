import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import Images from "../../../assets/images/Images";
import {useAuth0} from "@auth0/auth0-react";
import {useNavigate} from "react-router-dom";
import {BsFillBellFill} from 'react-icons/bs';
import {FiMenu} from 'react-icons/fi';
import {useMediaQuery} from "react-responsive";
// @ts-ignore
import swal from "@sweetalert/with-react";
import axios, {AxiosResponse} from "axios";


type ProfileNavBarProps = {
    isMobile: boolean,
    handleToggleSidebar: () => void
}

const ProfileNavBar: React.FC<ProfileNavBarProps> = (props) => {

    const {user, logout} = useAuth0();
    const navigate = useNavigate();
    const {isMobile, handleToggleSidebar} = props;
    const isPc = useMediaQuery({minWidth: 991});
    const [userDetails, setUserDetails] = useState<any>({});
    const user_id = user?.sub;
    const userLogOut = () => {
        swal({
            title: "Log out",
            text: `Do you really want to logout?`,
            icon: "warning",
            buttons: {
                cancel: true,
                confirm: true
            },
        })
            .then((willDelete: any) => {
                if (willDelete) {
                    logout();
                }
            })
    };
    console.log(user)
    useEffect(() => {
        // @ts-ignore
        if(user.family_name == "parent") {
            axios.get(`https://learnxy.azurewebsites.net/parent/${user_id}`).then((res: AxiosResponse) => {
                // setIsDataLoading(true);
                console.log(res)
                setUserDetails({
                    first_name: res.data.parent[0].first_name,
                    last_name: res.data.parent[0].last_name,
                    profile: res.data.profile_image
                })
            })
                .catch((error: any) => {
                    console.log(error.message);
                })
        }
        else{
                axios.get(`https://learnxy.azurewebsites.net/admin/${user_id}`).then((res: AxiosResponse) => {
                    // setIsDataLoading(true);
                    console.log(res)
                    setUserDetails({
                        first_name: res.data.admin[0].first_name,
                        last_name: res.data.admin[0].last_name,
                        profile: res.data.profile_image
                    })
                })
                    .catch((error: any) => {
                        console.log(error.message);
                    })
        }
    }, []);



    return (
        <Navbar collapseOnSelect expand="lg" variant="light" className="profile-navbar"
                style={{fontSize: "20px", boxShadow: "rgba(0, 0, 0, 0.1) 0px 25px 20px -20px"}}>
            <Container fluid={true} className='mx-0 py-0' style={{width: "100vw"}}>
                <Row className='w-100'>
                    <Col lg={2} md={12} xs={12} className='d-flex flex-row justify-content-between mt-md-2 py-0'>
                        <Row className='d-flex flex-row align-content-center'>
                            <Col>
                                {isMobile && <Button className='ms-0 me-1 p-1 pb-2' variant='outline-light'
                                                     style={{color: "#82807c", verticalAlign: "middle"}}
                                                     onClick={handleToggleSidebar}><FiMenu
                                    className='navbar-toggler-icon'/></Button>
                                }
                                <Navbar.Brand onClick={() => navigate('/')} style={{cursor: "pointer"}}>
                                    <img src={Images.logo} style={{maxWidth: "190px"}} alt='logo'
                                         className='profile-nav-logo'/>
                                </Navbar.Brand>
                            </Col>
                        </Row>
                        {!isPc &&
                        <Row className='d-flex flex-row-reverse align-items-center'>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" className='p-0 border-none m-0'
                                           style={{width: "fit-content", borderRadius: "50%"}}
                            ><img src={userDetails.profile}
                                  style={{height: "35px", borderRadius: "50%"}}
                                  alt='user'/></Navbar.Toggle>
                            <BsFillBellFill className='profile-notification me-3'/>

                        </Row>
                        }
                    </Col>
                    <Col lg={10} className='ps-2'>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav
                                className='ps-md-4 ms-auto d-flex flex-lg-row flex-column align-items-end navbar-expand-card'>
                                <Nav.Link>
                                    <Button className='d-flex flex-row align-items-center p-0 pe-3 profile-view'
                                            style={{
                                                borderRadius: "20px",
                                                fontSize: "18px",
                                                boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
                                            }}
                                    onClick={()=> navigate(`/${user?.family_name}/profile`)}>
                                        <img src={userDetails.profile}
                                             style={{height: "40px", borderRadius: "50%", marginRight: "10px"}}
                                             alt='user'/>
                                        {userDetails.first_name} {userDetails.last_name}
                                    </Button>
                                </Nav.Link>
                                {isPc &&
                                <Nav.Link>
                                    <BsFillBellFill className='profile-notification' onClick={() => navigate(`/${user?.family_name}/notification`)}/>
                                </Nav.Link>}
                                <Nav.Link>
                                    <Button variant="secondary" className="LoginBtn"
                                            style={{borderRadius: "20px", width: "100px"}}
                                            onClick={() => userLogOut()}>
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