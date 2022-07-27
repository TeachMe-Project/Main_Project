import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import Images from "../../assets/images/Images";
import {Formik} from "formik";
import * as yup from 'yup';
// @ts-ignore
import LazyLoad from 'react-lazyload';
import SignUpComplete from "./signUpComplete";
import Footer from "../Home/footer/footer";

const schema = yup.object().shape({
    InstituteName: yup.string().required().label('Institute Name'),
    OwnerName: yup.string().required().label('Owner Name'),
    Location: yup.string().required(),
    Email: yup.string().email().required(),
    Password: yup.string().required().matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?=.{8,})/,
        "Must contain 8 characters including 1 uppercase, 1 lowercase, 1 number & 1 special character"
    ),
    Confirm_Password: yup.string().label('Confirm Password').required().matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?=.{8,})/,
        "Must contain 8 characters including 1 uppercase, 1 lowercase, 1 number & 1 special character"
    ).oneOf([yup.ref('Password'), null], 'Passwords must match'),
    Description: yup.string().required(),
    Address: yup.string().required(),
    Mobile_Number: yup.string().required().label("Mobile Number").matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\(\d{2,3}\\)[ \\-]*)|(\d{2,4})[ \\-]*)*?\d{3,4}?[ \\-]*\d{3,4}?$/,
        "Entered mobile number is invalid"),
    AccountName: yup.string().label("Account Holder's Name").required(),
    BankName: yup.string().label("Bank Name").required(),
    BranchName: yup.string().label("Branch Name").required(),
    AccountNo: yup.string().label("Account Number").required()
});

const initialState = {
    InstituteName: '',
    OwnerName: '',
    Location: '',
    Email: '',
    Password: '',
    Confirm_Password: '',
    Mobile_Number: '',
    Description: '',
    Address: '',
    AccountName: '',
    BankName: '',
    BranchName: '',
    AccountNo: ''
}

const InstituteSignup = () => {

    const [pageStage, setPageStage] = useState(4);
    const [instituteNameValidate, setInstituteNameValidate] = useState<boolean>(false);
    const [ownerNameValidate, setOwnerNameValidate] = useState(false);
    const [locationValidate, setLocationValidate] = useState(false);
    const [emailValidate, setEmailValidate] = useState(false);
    const [passwordValidate, setPasswordValidate] = useState(false);
    const [rPasswordValidate, setRPasswordValidate] = useState(false);
    const [descriptionValidate, setDescriptionValidate] = useState(false);
    const [addressValidate, setAddressValidate] = useState(false);
    const [mobileValidate, setMobileValidate] = useState(false);
    const [accountNameValidate, setAccountNameValidate] = useState(false);
    const [bankNameValidate, setBankNameValidate] = useState(false);
    const [branchNameValidate, setBranchNameValidate] = useState(false);
    const [accountNoValidate, setAccountNoValidate] = useState(false);


    const changeInstituteNameValidate = (status: boolean): boolean => {
        if (status) {
            setInstituteNameValidate(true);
            return false
        } else {
            setInstituteNameValidate(false);
            return true
        }
    }
    const changeOwnerNameValidate = (status: boolean): boolean => {
        if (status) {
            setOwnerNameValidate(true);
            return false
        } else {
            setOwnerNameValidate(false);
            return true
        }
    }
    const changeLocationValidate = (status: boolean): boolean => {
        if (status) {
            setLocationValidate(true);
            return false
        } else {
            setLocationValidate(false);
            return true
        }
    }
    const changeEmailValidate = (status: boolean): boolean => {
        if (status) {
            setEmailValidate(true);
            return false
        } else {
            setEmailValidate(false);
            return true
        }
    }
    const changePasswordValidate = (status: boolean): boolean => {
        if (status) {
            setPasswordValidate(true);
            return false
        } else {
            setPasswordValidate(false);
            return true
        }
    }
    const changeRPasswordValidate = (status: boolean): boolean => {
        if (status) {
            setRPasswordValidate(true);
            return false
        } else {
            setRPasswordValidate(false);
            return true
        }
    }
    const changeDescriptionValidate = (status: boolean): boolean => {
        if (status) {
            setDescriptionValidate(true);
            return false
        } else {
            setDescriptionValidate(false);
            return true
        }
    }
    const changeAddressValidate = (status: boolean): boolean => {
        if (status) {
            setAddressValidate(true);
            return false
        } else {
            setAddressValidate(false);
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
    const changeAccountNameValidate = (status: boolean): boolean => {
        if (status) {
            setAccountNameValidate(true);
            return false
        } else {
            setAccountNameValidate(false);
            return true
        }
    }
    const changeBankNameValidate = (status: boolean): boolean => {
        if (status) {
            setBankNameValidate(true);
            return false
        } else {
            setBankNameValidate(false);
            return true
        }
    }
    const changeBranchNameValidate = (status: boolean): boolean => {
        if (status) {
            setBranchNameValidate(true);
            return false
        } else {
            setBranchNameValidate(false);
            return true
        }
    }
    const changeAccountNoValidate = (status: boolean): boolean => {
        if (status) {
            setAccountNoValidate(true);
            return false
        } else {
            setAccountNoValidate(false);
            return true
        }
    }


    return (
        <Container fluid={true}>
            <Row
                className="d-flex flex-column align-items-center justify-content-lg-center Signup-Container justify-content-md-start">
                <Col lg={9} md={12} xs={12}
                     className="Signup d-flex flex-lg-column justify-content-lg-center p-md-3 mt-md-2 mt-3">
                    <Row className="d-flex align-items-center">
                        <h1 className="text-center mb-lg-2 signup-header pt-md-3 mb-3">Signup For Institute</h1>
                        <Col lg={6} md={12} sm={12} className="d-flex justify-content-lg-center mx-auto">
                            <img src={Images.instituteSignup} className="Signup-Image w-75 p-lg-2 mt-md-3 my-lg-auto"
                                 alt="Institute-signup"/>
                        </Col>
                        <Col>
                            <Row>
                                <Row className="mt-lg-5 pe-lg-4 mt-md-5 mt-4 pe-0">
                                    <Col lg={10} md={12} className="mb-3 mx-lg-auto px-md-5 px-3">
                                        <LazyLoad once>
                                            <div className="progressbar">
                                                <div
                                                    className={pageStage === 1 ? 'progress-step progress-step-active' : 'progress-step'}
                                                    data-title="Details"></div>
                                                <div
                                                    className={pageStage === 2 ? 'progress-step progress-step-active' : 'progress-step'}
                                                    data-title="Description"></div>
                                                <div
                                                    className={pageStage === 3 ? 'progress-step progress-step-active' : 'progress-step'}
                                                    data-title="Bank"></div>
                                                <div
                                                    className={pageStage === 4 ? 'progress-step progress-step-active' : 'progress-step'}
                                                    data-title="Finished"></div>
                                            </div>
                                        </LazyLoad>
                                    </Col>
                                </Row>
                            </Row>
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
                                            {(pageStage === 1) && <LazyLoad once>
                                                <Row className="mt-lg-3 pe-lg-4 mt-md-3">

                                                    <Col lg={6} md={6} sm={12} xs={12}>
                                                        <Form.Group className="mb-3"
                                                                    controlId="validationInstituteName">
                                                            <Form.Label style={{fontWeight: 600}}>Institute
                                                                Name</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter institute's name"
                                                                name="Institute's name"
                                                                value={values.InstituteName}
                                                                onChange={handleChange}
                                                                isInvalid={!!errors.InstituteName ? changeInstituteNameValidate(false) : changeInstituteNameValidate(true)}
                                                                isValid={touched.InstituteName}
                                                                onBlur={handleBlur}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.InstituteName}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg={6} md={6} sm={12} xs={12}>
                                                        <Form.Group className="mb-3" controlId="validationEmail">
                                                            <Form.Label style={{fontWeight: 600}}>Institute's email</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter institute's email"
                                                                name="Email"
                                                                value={values.Email}
                                                                onChange={handleChange}
                                                                isInvalid={!!errors.Email ? changeEmailValidate(false) : changeEmailValidate(true)}
                                                                isValid={touched.Email}
                                                                onBlur={handleBlur}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.Email}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row className="mt-lg-3 pe-lg-4 mt-md-3">
                                                    <Col lg={6} md={6} sm={12} xs={12}>
                                                        <Form.Group className="mb-3" controlId="validationOwnerName">
                                                            <Form.Label style={{fontWeight: 600}}>Owner's
                                                                name</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter owner's name"
                                                                name="OwnerName"
                                                                value={values.OwnerName}
                                                                onChange={handleChange}
                                                                isInvalid={!!errors.OwnerName ? changeOwnerNameValidate(false) : changeOwnerNameValidate(true)}
                                                                isValid={touched.OwnerName}
                                                                onBlur={handleBlur}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.OwnerName}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg={6} md={6} sm={12} xs={12}>
                                                        <Form.Group className="mb-3" controlId="validationLocation">
                                                            <Form.Label style={{fontWeight: 600}}>Location</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter location"
                                                                name="Location"
                                                                value={values.Location}
                                                                onChange={handleChange}
                                                                isInvalid={!!errors.Location ? changeLocationValidate(false) : changeLocationValidate(true)}
                                                                isValid={touched.Location}
                                                                onBlur={handleBlur}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.Location}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row className="mt-lg-3 pe-lg-4 mt-md-3">
                                                    <Col lg={6} md={6} sm={12} xs={12}>
                                                        <Form.Group className="mb-3" controlId="validationPassword">
                                                            <Form.Label style={{fontWeight: 600}}>Password</Form.Label>
                                                            <Form.Control
                                                                type="password"
                                                                placeholder="Enter password"
                                                                name="Password"
                                                                value={values.Password}
                                                                onChange={handleChange}
                                                                isInvalid={!!errors.Password ? changePasswordValidate(false) : changePasswordValidate(true)}
                                                                isValid={touched.Password}
                                                                onBlur={handleBlur}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.Password}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg={6} md={6} sm={12} xs={12}>
                                                        <Form.Group className="mb-3" controlId="validationRPassword">
                                                            <Form.Label style={{fontWeight: 600}}>Re-type
                                                                Password</Form.Label>
                                                            <Form.Control
                                                                type="password"
                                                                placeholder="Re-type password"
                                                                name="Confirm_Password"
                                                                value={values.Confirm_Password}
                                                                onChange={handleChange}
                                                                isInvalid={!!errors.Confirm_Password ? changeRPasswordValidate(false) : changeRPasswordValidate(true)}
                                                                isValid={touched.Confirm_Password}
                                                                onBlur={handleBlur}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.Confirm_Password}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row className="mt-lg-3 pe-lg-4 mt-md-3">
                                                    <Col
                                                        className="d-flex flex-row justify-content-lg-end justify-content-end">
                                                        <Button type="button" className="px-4 nextBtn"
                                                                variant="primary"
                                                                onClick={
                                                                    () => {
                                                                        if (instituteNameValidate && ownerNameValidate && locationValidate && emailValidate && passwordValidate && rPasswordValidate) {
                                                                            setPageStage(2);
                                                                        }
                                                                    }
                                                                }
                                                                onClickCapture={() => {
                                                                    validateField("InstituteName");
                                                                    validateField("OwnerName");
                                                                    validateField("Location");
                                                                    validateField("Email");
                                                                    validateField("Password");
                                                                    validateField("Confirm_Password");
                                                                }
                                                                }
                                                        >Next</Button>
                                                    </Col>
                                                </Row>
                                            </LazyLoad>}
                                            {(pageStage === 2) && <LazyLoad once>
                                                <Row className=" pe-lg-4 mt-md-3">
                                                    <Col lg={12} md={12} sm={12} xs={12}>
                                                        <Form.Group className="mb-3" controlId="validationMobile">
                                                            <Form.Label style={{fontWeight: 600}}>Mobile Number</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter mobile number in format: 0771234567"
                                                                name="Mobile"
                                                                value={values.Mobile_Number}
                                                                onChange={handleChange}
                                                                isInvalid={!!errors.Mobile_Number ? changeMobileValidate(false) : changeMobileValidate(true)}
                                                                isValid={touched.Mobile_Number}
                                                                onBlur={handleBlur}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.Mobile_Number}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row className="pe-lg-4 mt-md-3">
                                                    <Col lg={12} md={12} sm={12} xs={12}>
                                                        <Form.Group className="mb-3"
                                                                    controlId="validationAddress">
                                                            <Form.Label
                                                                style={{fontWeight: 600}}>Institute's Address</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter institute's address "
                                                                name="Address"
                                                                value={values.Address}
                                                                onChange={handleChange}
                                                                isInvalid={!!errors.Address ? changeAddressValidate(false) : changeAddressValidate(true)}
                                                                isValid={touched.Address}
                                                                onBlur={handleBlur}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.Address}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row className=" pe-lg-4 mt-md-3">
                                                    <Col lg={12} md={12} sm={12} xs={12}>
                                                        <Form.Group className="mb-3" controlId="validationDescription">
                                                            <Form.Label
                                                                style={{fontWeight: 600}}>Description</Form.Label>
                                                            <Form.Control as="textarea"
                                                                          placeholder="Enter a description for the institute in order to describe
                                                                            the institute"
                                                                          rows={4}
                                                                          name="Description"
                                                                          value={values.Description}
                                                                          onChange={handleChange}
                                                                          isInvalid={!!errors.Description ? changeDescriptionValidate(false) : changeDescriptionValidate(true)}
                                                                          isValid={touched.Description}
                                                                          onBlur={handleBlur}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.Description}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row className="pe-lg-4 mt-md-3">
                                                    <Col className="d-flex flex-row justify-content-between ">

                                                        <Button type="button" className="px-4 nextBtn"
                                                                variant="primary"
                                                                onClick={() => setPageStage(1)}
                                                        >Previous</Button>
                                                        <Button type="button" className="px-4 nextBtn"
                                                                variant="primary"
                                                                onClick={
                                                                    () => {
                                                                        if (descriptionValidate && addressValidate && mobileValidate) {
                                                                            setPageStage(3);
                                                                        }
                                                                    }
                                                                }
                                                                onClickCapture={() => {
                                                                    validateField("Description");
                                                                    validateField("Address");
                                                                    validateField("Mobile");
                                                                }
                                                                }
                                                        >Next</Button>
                                                    </Col>
                                                </Row>
                                            </LazyLoad>}
                                            {(pageStage === 3) && <LazyLoad once>
                                                <Row className="mt-lg-3 pe-lg-4 mt-md-3">
                                                    <Col lg={12} md={12} sm={12} xs={12}>
                                                        <Form.Group className="mb-3" controlId="validationAccountName">
                                                            <Form.Label style={{fontWeight: 600}}>Account Holder's
                                                                Name</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter account holder's name"
                                                                name="AccountName"
                                                                value={values.AccountName}
                                                                onChange={handleChange}
                                                                isInvalid={!!errors.AccountName ? changeAccountNameValidate(false) : changeAccountNameValidate(true)}
                                                                isValid={touched.AccountName}
                                                                onBlur={handleBlur}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.AccountName}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row className="mt-lg-3 pe-lg-4 mt-md-3">
                                                    <Col lg={6} md={6} sm={12} xs={12}>
                                                        <Form.Group className="mb-3" controlId="validationBankName">
                                                            <Form.Label style={{fontWeight: 600}}>Bank Name</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter bank name"
                                                                name="BankName"
                                                                value={values.BankName}
                                                                onChange={handleChange}
                                                                isInvalid={!!errors.BankName ? changeBankNameValidate(false) : changeBankNameValidate(true)}
                                                                isValid={touched.BankName}
                                                                onBlur={handleBlur}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.BankName}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg={6} md={6} sm={12} xs={12}>
                                                        <Form.Group className="mb-3" controlId="validationBranchName">
                                                            <Form.Label style={{fontWeight: 600}}>Branch
                                                                Name</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter branch name"
                                                                name="BranchName"
                                                                value={values.BranchName}
                                                                onChange={handleChange}
                                                                isInvalid={!!errors.BranchName ? changeBranchNameValidate(false) : changeBranchNameValidate(true)}
                                                                isValid={touched.BranchName}
                                                                onBlur={handleBlur}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.BranchName}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row className="mt-lg-3 pe-lg-4 mt-md-3">
                                                    <Col lg={12} md={12} sm={12} xs={12}>
                                                        <Form.Group className="mb-3" controlId="validationAccountNo">
                                                            <Form.Label style={{fontWeight: 600}}>Account
                                                                Number</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter account number"
                                                                name="AccountNo"
                                                                value={values.AccountNo}
                                                                onChange={handleChange}
                                                                isInvalid={!!errors.AccountNo ? changeAccountNoValidate(false) : changeAccountNoValidate(true)}
                                                                isValid={touched.AccountNo}
                                                                onBlur={handleBlur}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.AccountNo}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row className="mt-lg-3 pe-lg-4 mt-md-3">
                                                    <Col className="d-flex flex-row justify-content-between">
                                                        <Button type="button" className="px-4 nextBtn"
                                                                variant="primary"
                                                                onClick={() => setPageStage(2)}
                                                        >Previous</Button>

                                                        <Button type="submit" className="px-4 nextBtn"
                                                                variant="primary"
                                                                onClick={() => {
                                                                    if (accountNameValidate && accountNoValidate && branchNameValidate && bankNameValidate) {
                                                                        setPageStage(4);
                                                                    }
                                                                }
                                                                }
                                                                onClickCapture={() => {
                                                                    validateField("AccountName");
                                                                    validateField("BankName");
                                                                    validateField("BranchName");
                                                                    validateField("AccountNo");
                                                                }
                                                                }
                                                        >Next</Button>
                                                    </Col>
                                                </Row>
                                            </LazyLoad>}
                                            {(pageStage === 4) && <LazyLoad once>
                                                <SignUpComplete/>
                                            </LazyLoad>}

                                        </Form>
                                    </Row>)}
                            </Formik>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Footer/>
        </Container>
    );
};

export default InstituteSignup;