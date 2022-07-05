import React, {useEffect, useState} from 'react';
import TextTransition, {presets} from "react-text-transition";
import {Button, Col, Container, Row} from "react-bootstrap";
import {ImArrowLeft2} from "react-icons/im";
import Images from "../../assets/images/Images";
import {useNavigate} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";

const TEXTS = [
    "Get started today and let Proktara deliver secure and frictionless online proctoring. So, you can focus on the quality of your evaluation.",
    "Proktara is an on-demand, easy-to-use, and cost-effective online proctoring solution for higher education institutions and professional organizations.",
];

const SignUpCategory = () => {

    const [index, setIndex] = useState(0);
    const navigate = useNavigate();
    const {loginWithRedirect} = useAuth0();

    useEffect(() => {
        const intervalId = setInterval(() =>
                setIndex(index => index + 1),
            5000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);


    return (
        <Container fluid={true} className="signupCategory d-flex flex-column">
            <Row className="d-flex flex-row align-items-center">
                <Col lg={6} md={12} sm={12} className="leftSide d-flex flex-column justify-content-center">
                    <Row className="ms-lg-5 me-lg-4">
                        <Col>
                            <div className="d-md-flex flex-column align-items-lg-start align-items-md-center justify-content-between mt-4">
                                <a href="/"
                                   className="backBtn d-lg-flex text-black flex-row align-items-center fw-bolder text-decoration-none mb-lg-5 d-md-none d-sm-none">
                                    <ImArrowLeft2 style={{marginRight: "4px"}}/> Go Back To Homepage
                                </a>
                                <img src={Images.logo} className="logo mt-lg-3" onClick={() => navigate('/')} alt=""/>

                            </div>
                            <h1 className="mt-lg-4 mt-md-4 mb-md-3 ms-md-2">
                                Sign Up In Learning
                            </h1>
                            <p className="mt-lg-5 transformText ms-md-2">
                                <TextTransition springConfig={presets.wobbly}>
                                    {TEXTS[index % TEXTS.length]}
                                </TextTransition>
                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col lg={6} md={12} sm={12}
                     className="d-flex flex-lg-row justify-content-lg-center justify-content-md-center mt-md-2 justify-content-md-center">
                    <Row className="categoryForm p-4">
                        <Col className=" d-flex flex-column">
                            <img src={Images.bannerSignup} className="formImage"/>
                            <h1 className="text-center my-lg-2">Sign Up As</h1>
                            <Button onClick={() => navigate('/teacherSignup')}
                                    className="mt-lg-4 mt-md-3 mx-auto userBtn">Teacher</Button>
                            <Button onClick={() => navigate('/instituteSignup')}
                                    className="mt-lg-4 mt-md-3 mx-auto userBtn">Institute</Button>
                            <Button onClick={() => navigate('/parentSignup')}
                                    className="mt-lg-4 mt-md-3 mx-auto userBtn">Parent</Button>
                            <Row>
                                <Col
                                    className="d-flex flex-row align-items-center justify-content-center mt-lg-4 mt-md-3 loginFooter">
                                    <h6 className="text-center mb-0">Already have an account?</h6><a
                                    onClick={loginWithRedirect}
                                    className="pointer-event ms-3 p-0 mb-0 text-decoration-none fw-bold"
                                    style={{color: "#45484c"}}>Login</a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row style={{height: "5vh", position: "absolute", bottom: "0", width: "100vw"}} className="text-center">
                <Col lg={12}>
                    ©Copyright 2022. All rights reserved.
                </Col>
            </Row>
        </Container>
    );
};

export default SignUpCategory;