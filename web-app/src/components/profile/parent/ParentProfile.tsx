import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import ProfileNavBar from "../navBar/profileNavBar";
import {useMediaQuery} from "react-responsive";
import {useAuth0} from "@auth0/auth0-react";
import {Formik} from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
    Firstname: yup.string().required(),
    Lastname: yup.string().required(),
    Email: yup.string().email().required(),
    Password: yup.string().required().matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?=.{8,})/,
        "Must contain 8 characters including 1 uppercase, 1 lowercase, 1 number & 1 special character"
    ),
    Confirm_Password: yup.string().label('Confirm Password').required().matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?=.{8,})/,
        "Must contain 8 characters including 1 uppercase, 1 lowercase, 1 number & 1 special character"
    ).oneOf([yup.ref('Password'), null], 'Passwords must match'),
    Mobile: yup.string().required().matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\(\d{2,3}\\)[ \\-]*)|(\d{2,4})[ \\-]*)*?\d{3,4}?[ \\-]*\d{3,4}?$/,
        "Phone number is invalid")
});




const ParentProfile = () => {
    const [toggled, setToggled] = useState(false);
    const isMobile = useMediaQuery({maxWidth: 768});
    const {user} = useAuth0();
    const [fistNameValidate, setFistNameValidate] = useState(false);
    const [lastNameValidate, setLastNameValidate] = useState(false);
    const [mobileValidate, setMobileValidate] = useState(false);

    const initialState = {
        Firstname: user?.given_name,
        Lastname: user?.name,
        Email: user?.email,
        Password: '',
        Confirm_Password: '',
        Mobile: '',
    }
console.log(user);
    const handleToggleSidebar = () => {
        if (!toggled) {
            setToggled(true);
            return toggled;
        }
        setToggled(false);
    };

    const changeFistNameValidate = (status: boolean): boolean => {
        if (status) {
            setFistNameValidate(true);
            return false
        } else {
            setFistNameValidate(false);
            return true
        }
    }
    const changeLastNameValidate = (status: boolean): boolean => {
        if (status) {
            setLastNameValidate(true);
            return false
        } else {
            setLastNameValidate(false);
            return true
        }
    }
    const changeMobileValidate = (status: boolean): boolean => {
        if (status) {
            setMobileValidate(true);
            return false
        } else {
            setMobileValidate(false);
            return true
        }
    }
    return (
        <Container fluid={true} className='p-0 m-0 w-100'>
            <ProfileNavBar isMobile={isMobile} handleToggleSidebar={handleToggleSidebar}/>
            <Row className='d-flex flex-row align-items-center justify-content-center profile m-0'>
                <Col lg={8} className='card'>
                    <Row className='p-2'>
                        <h1 className='text-center profile-header'>User Profile</h1>
                        <Col lg={4} className='d-flex flex-column align-items-center'>
                            <img src={user?.picture} style={{borderRadius: "50%"}} className='w-75'/>
                            <Button variant="secondary" className='mt-4' style={{borderRadius:"20px"}}>Edit Profile</Button>
                        </Col>
                        <Col>
                            <Formik
                                validationSchema={schema}
                                onSubmit={console.log}
                                initialValues={initialState}
                            >
                                {({
                                      handleSubmit,
                                      handleChange,
                                      handleBlur,
                                      values,
                                      touched,
                                      errors,
                                      validateField,

                                  }) => (
                                    <Row className="pb-md-0 pb-4">
                                        <Form noValidate onSubmit={handleSubmit}>
                                            <Row className="mt-lg-1 pe-lg-4 mt-md-3">
                                                <Col lg={12} md={6} sm={12} xs={12}>
                                                    <Form.Group className="mb-3" controlId="validationEmail">
                                                        <Form.Label style={{fontWeight: 600}}>Email</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Enter email"
                                                            name="Email"
                                                            value={values.Email}
                                                            disabled={true}
                                                            onChange={handleChange}
                                                            isValid={touched.Email}
                                                            onBlur={handleBlur}
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            {errors.Email}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row className="mt-lg-1 pe-lg-4 mt-md-3">
                                                <Col lg={12} md={6} sm={12} xs={12}>
                                                    <Form.Group className="mb-1" controlId="validationFirstName">
                                                        <Form.Label style={{fontWeight: 600}}>First
                                                            name</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Enter first name"
                                                            name="Firstname"
                                                            value={values.Firstname}
                                                            onChange={handleChange}
                                                            isInvalid={!!errors.Firstname ? changeFistNameValidate(false) : changeFistNameValidate(true)}
                                                            isValid={touched.Firstname}
                                                            onBlur={handleBlur}
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            {errors.Firstname}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row className="mt-lg-1 pe-lg-4 mt-md-3">
                                            <Col lg={12} md={6} sm={12} xs={12}>
                                                <Form.Group className="mb-2" controlId="validationLastname">
                                                    <Form.Label style={{fontWeight: 600}}>Last name</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Enter last name"
                                                        name="Lastname"
                                                        value={values.Lastname}
                                                        onChange={handleChange}
                                                        isInvalid={!!errors.Lastname ? changeLastNameValidate(false) : changeLastNameValidate(true)}
                                                        isValid={touched.Lastname}
                                                        onBlur={handleBlur}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.Lastname}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                            <Row className="mt-lg-1 pe-lg-4 mt-md-3">
                                            <Col lg={12} md={6} sm={12} xs={12}>
                                                <Form.Group className="mb-2" controlId="validationMobile">
                                                    <Form.Label style={{fontWeight: 600}}>Mobile
                                                        number</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Mobile no. format: 0771234567"
                                                        name="Mobile"
                                                        value={values.Mobile}
                                                        onChange={handleChange}
                                                        isInvalid={!!errors.Mobile ? changeMobileValidate(false) : changeMobileValidate(true)}
                                                        isValid={touched.Mobile}
                                                        onBlur={handleBlur}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.Mobile}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                            <Row className="mt-lg-3 pe-lg-4 mt-md-3">
                                                <Col
                                                    className="d-flex flex-row justify-content-lg-end justify-content-end">
                                                    <Button type="submit" className="px-4 nextBtn"
                                                            variant="primary"
                                                        // onClick={
                                                        //     () => {
                                                        //         if (mobileValidate && fistNameValidate && lastNameValidate && emailValidate && passwordValidate && rPasswordValidate) {
                                                        //             setPageStage(2);
                                                        //         }
                                                        //     }
                                                        // }
                                                        // onClickCapture={() => {
                                                        //     validateField("Mobile");
                                                        //     validateField("Firstname");
                                                        //     validateField("Lastname");
                                                        //     validateField("Email");
                                                        //     validateField("Password");
                                                        //     validateField("Confirm_Password");
                                                        // }
                                                        //}
                                                    >Next</Button>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </Row>)}
                            </Formik>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default ParentProfile;