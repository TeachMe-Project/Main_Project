import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import Images from "../../assets/images/Images";
import {Formik} from "formik";
import * as yup from 'yup';
// @ts-ignore
import LazyLoad from 'react-lazyload';
import SignUpComplete from "./signUpComplete";
import Footer from "../footer/footer";

const schema = yup.object().shape({
    Title: yup.string().required(),
    Firstname: yup.string().required(),
    Lastname: yup.string().required(),
    Email: yup.string().email().required(),
    Password: yup.string().required().matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
    Confirm_Password: yup.string().label('Confirm Password').required().matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ).oneOf([yup.ref('Password'), null], 'Passwords must match'),
    Description: yup.string().required(),
    Qualification: yup
        .mixed()
        .required()
    ,
    Mobile: yup.string().required().matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\(\d{2,3}\\)[ \\-]*)|(\d{2,4})[ \\-]*)*?\d{3,4}?[ \\-]*\d{3,4}?$/,
        "Phone number is not valid"),
    AccountName: yup.string().label("Account Holder Name").required(),
    BankName: yup.string().label("Bank Name").required(),
    BranchName: yup.string().label("Branch Name").required(),
    AccountNo: yup.string().label("Account Number").required()
});


const initialState = {
    Title: '',
    Firstname: '',
    Lastname: '',
    Email: '',
    Password: '',
    Confirm_Password: '',
    Mobile: '',
    Description: '',
    Qualification: '',
    AccountName: '',
    BankName: '',
    BranchName: '',
    AccountNo: ''
}

const TeacherSignup = () => {

    const [pageStage, setPageStage] = useState(1);
    const [titleValidate, setTitleValidate] = useState<boolean>(false);
    const [fistNameValidate, setFistNameValidate] = useState(false);
    const [lastNameValidate, setLastNameValidate] = useState(false);
    const [emailValidate, setEmailValidate] = useState(false);
    const [passwordValidate, setPasswordValidate] = useState(false);
    const [rPasswordValidate, setRPasswordValidate] = useState(false);
    const [descriptionValidate, setDescriptionValidate] = useState(false);
    const [qualificationValidate, setQualificationValidate] = useState(false);
    const [mobileValidate, setMobileValidate] = useState(false);
    const [accountNameValidate, setAccountNameValidate] = useState(false);
    const [bankNameValidate, setBankNameValidate] = useState(false);
    const [branchNameValidate, setBranchNameValidate] = useState(false);
    const [accountNoValidate, setAccountNoValidate] = useState(false);


    const changeTitleValidate = (status: boolean): boolean => {
        if (status) {
            setTitleValidate(true);
            return false
        } else {
            setTitleValidate(false);
            return true
        }
    }
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
    const changeQualificationValidate = (status: boolean): boolean => {
        if (status) {
            setQualificationValidate(true);
            return false
        } else {
            setQualificationValidate(false);
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
            <Row className="d-flex flex-column align-items-center justify-content-center Signup-Container">
                <Col lg={9} md={12} xs={12} className="Signup d-lg-flex flex-lg-column justify-content-lg-center">
                    <Row className="d-flex align-items-center">
                        <h1 className="text-center mb-lg-2 signup-header pt-md-3">Signup For Teacher</h1>
                        <Col lg={6}>
                            <img src={Images.teacherSignup} className="Signup-Image w-100 p-lg-2 mt-md-3 my-lg-auto" alt="teacher-signup"/>
                        </Col>
                        <Col>
                            <Row>
                                <Row className="mt-lg-5 pe-lg-4">
                                    <Col lg={10} className="mb-3 mx-lg-auto">
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
                                    <Row>
                                        <Form noValidate onSubmit={handleSubmit}>
                                            {(pageStage === 1) && <LazyLoad once>
                                                <Row className="mt-lg-3 pe-lg-4">
                                                    <Col lg={6} md={6} sm={12} xs={12}>
                                                        <Form.Group className="mb-3" controlId="validationTitle">
                                                            <Form.Label>Title</Form.Label>
                                                            <Form.Select
                                                                name="Title"
                                                                value={values.Title}
                                                                onChange={handleChange}
                                                                isInvalid={!!errors.Title ? changeTitleValidate(false) : changeTitleValidate(true)}
                                                                isValid={touched.Title}
                                                                onBlur={handleBlur}
                                                            >
                                                                < option> Select Mr/Mrs/Ms</option>
                                                                <option value="Mr">Mr.</option>
                                                                <option value="Mrs">Mrs.</option>
                                                                <option value="Ms">Ms.</option>
                                                            </Form.Select>
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.Title}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg={6} md={6} sm={12} xs={12}>
                                                        <Form.Group className="mb-3" controlId="validationFirstName">
                                                            <Form.Label>First Name</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter the first name here"
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
                                                <Row className="mt-lg-3 pe-lg-4">
                                                    <Col lg={6} md={6} sm={12} xs={12}>
                                                        <Form.Group className="mb-3" controlId="validationLastname">
                                                            <Form.Label>Last Name</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter the last name here"
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
                                                    <Col lg={6} md={6} sm={12} xs={12}>
                                                        <Form.Group className="mb-3" controlId="validationEmail">
                                                            <Form.Label>Email</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter the email"
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
                                                <Row className="mt-lg-3 pe-lg-4">
                                                    <Col lg={6} md={6} sm={12} xs={12}>
                                                        <Form.Group className="mb-3" controlId="validationPassword">
                                                            <Form.Label>Password</Form.Label>
                                                            <Form.Control
                                                                type="password"
                                                                placeholder="Enter the password here"
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
                                                            <Form.Label>Retype Password</Form.Label>
                                                            <Form.Control
                                                                type="password"
                                                                placeholder="Retype password here"
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
                                                <Row className="mt-lg-3 pe-lg-4">
                                                    <Col className="d-flex flex-row justify-content-lg-end">
                                                        <Button type="button" className="px-4"
                                                                variant="primary"
                                                                onClick={
                                                                    () => {
                                                                        if (titleValidate && fistNameValidate && lastNameValidate && emailValidate && passwordValidate && rPasswordValidate) {
                                                                            setPageStage(2);
                                                                        }
                                                                    }
                                                                }
                                                                onClickCapture={() => {
                                                                    validateField("Title");
                                                                    validateField("Firstname");
                                                                    validateField("Lastname");
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
                                                <Row className=" pe-lg-4">
                                                    <Col lg={12} md={6} sm={12} xs={12}>
                                                        <Form.Group className="mb-3" controlId="validationMobile">
                                                            <Form.Label>Mobile No</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="077-1234567"
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
                                                <Row className=" pe-lg-4">
                                                    <Col lg={12} md={6} sm={12} xs={12}>
                                                        <Form.Group className="mb-3" controlId="validationDescription">
                                                            <Form.Label>Description</Form.Label>
                                                            <Form.Control as="textarea"
                                                                          placeholder="Enter the description here"
                                                                          rows={5}
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
                                                <Row className="pe-lg-4">
                                                    <Col lg={12} md={6} sm={12} xs={12}>
                                                        <Form.Group className="mb-3"
                                                                    controlId="validationQualification">
                                                            <Form.Label>Qualification</Form.Label>
                                                            <Form.Control
                                                                type="file"
                                                                placeholder="Enter the qualification here"
                                                                name="Qualification"
                                                                value={values.Qualification}
                                                                onChange={handleChange}
                                                                isInvalid={!!errors.Qualification ? changeQualificationValidate(false) : changeQualificationValidate(true)}
                                                                isValid={touched.Qualification}
                                                                onBlur={handleBlur}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.Qualification}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row className="pe-lg-4">
                                                    <Col className="d-flex flex-row justify-content-lg-between">

                                                        <Button type="button" className="px-4"
                                                                variant="primary"
                                                                onClick={() => setPageStage(1)}
                                                        >Previous</Button>
                                                        <Button type="button" className="px-4"
                                                                variant="primary"
                                                                onClick={
                                                                    () => {
                                                                        if (descriptionValidate && qualificationValidate && mobileValidate) {
                                                                            setPageStage(3);
                                                                        }
                                                                    }
                                                                }
                                                                onClickCapture={() => {
                                                                    validateField("Description");
                                                                    validateField("Qualification");
                                                                    validateField("Mobile");
                                                                }
                                                                }
                                                        >Next</Button>
                                                    </Col>
                                                </Row>
                                            </LazyLoad>}
                                            {(pageStage === 3) && <LazyLoad once>
                                                <Row className="mt-lg-3 pe-lg-4">
                                                    <Col lg={12} md={6} sm={12} xs={12}>
                                                        <Form.Group className="mb-3" controlId="validationAccountName">
                                                            <Form.Label>Account Holder Name</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter the account name here"
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
                                                <Row className="mt-lg-3 pe-lg-4">
                                                    <Col lg={6} md={6} sm={12} xs={12}>
                                                        <Form.Group className="mb-3" controlId="validationBankName">
                                                            <Form.Label>Bank Name</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter the bank here"
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
                                                            <Form.Label>Branch Name</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter the branch name here"
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
                                                <Row className="mt-lg-3 pe-lg-4">
                                                    <Col lg={12} md={6} sm={12} xs={12}>
                                                        <Form.Group className="mb-3" controlId="validationAccountNo">
                                                            <Form.Label>Account No</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter the account no here"
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
                                                <Row className="mt-lg-3 pe-lg-4">
                                                    <Col className="d-flex flex-row justify-content-lg-between">
                                                        <Button type="button" className="px-4"
                                                                variant="primary"
                                                                onClick={() => setPageStage(2)}
                                                        >Previous</Button>

                                                        <Button type="submit" className="px-4"
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

export default TeacherSignup;