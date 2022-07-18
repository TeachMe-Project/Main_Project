import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Button } from '../../Button/Button';
import { Formik } from 'formik';
import * as yup from 'yup';

// @ts-ignore
import LazyLoad from 'react-lazyload';

const schema = yup.object().shape({
  Firstname: yup
    .string()
    .required()
    .label('First Name')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])/, 'First Name must contain only letters'),
  Lastname: yup
    .string()
    .required()
    .label('Last Name')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])/, 'Last Name must contain only letters'),
  Email: yup
    .string()
    .email()
    .required()
    .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Enter a valid Email address'),
  Password: yup
    .string()
    .required()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?=.{8,})/,
      'Must contain 8 characters with 1 uppercase letter, 1 lowercase letter, 1 number & 1 special character'
    ),
  Grade: yup
    .string()
    .required()
    .matches(/Grade-(?:1[01]|0[1-9])|AL-20\d\d/, 'Grade must be between Grade-03 to A/L-Year-3'),
  Schoolname: yup
    .string()
    .required()
    .label('School Name'),
});

const initialState = {
  Firstname: '',
  Lastname: '',
  Email: '',
  Password: '',
  Grade: '',
  Schoolname: '',
};

export const StudentProfile = () => {
  const [isEditing, setISEditing] = useState(false);

  const [pageStage, setPageStage] = useState(2);
  const [gradeValidate, setGradeValidate] = useState<boolean>(false);
  const [fistNameValidate, setFistNameValidate] = useState(false);
  const [lastNameValidate, setLastNameValidate] = useState(false);
  const [emailValidate, setEmailValidate] = useState(false);
  const [passwordValidate, setPasswordValidate] = useState(false);
  const [schoolNameValidate, setSchoolNameValidate] = useState(false);

  const changeGradeValidate = (status: boolean): boolean => {
    if (status) {
      setGradeValidate(true);
      return false;
    } else {
      setGradeValidate(false);
      return true;
    }
  };
  const changeFistNameValidate = (status: boolean): boolean => {
    if (status) {
      setFistNameValidate(true);
      return false;
    } else {
      setFistNameValidate(false);
      return true;
    }
  };
  const changeLastNameValidate = (status: boolean): boolean => {
    if (status) {
      setLastNameValidate(true);
      return false;
    } else {
      setLastNameValidate(false);
      return true;
    }
  };
  const changeEmailValidate = (status: boolean): boolean => {
    if (status) {
      setEmailValidate(true);
      return false;
    } else {
      setEmailValidate(false);
      return true;
    }
  };
  const changePasswordValidate = (status: boolean): boolean => {
    if (status) {
      setPasswordValidate(true);
      return false;
    } else {
      setPasswordValidate(false);
      return true;
    }
  };
  const changeSchoolNameValidate = (status: boolean): boolean => {
    if (status) {
      setSchoolNameValidate(true);
      return false;
    } else {
      setSchoolNameValidate(false);
      return true;
    }
  };

  return (
    <div className="StudentProfile">
      <Container>
        <div className="PanelHeader">
          <h2>User Profile</h2>
          {!isEditing && <Button name=" Edit Profile" onClick={() => setISEditing(true)} />}
        </div>
        <div className="PanelContainer">
          <Col xl={4}>
            <div className="LeftContainer">
              <div className="ProfileImg">
                <img src={'/Images/student.png'} />
              </div>
              <div className="ParentContact">
                <div className="ContactHeader">Parent's Contact Details:</div>
                <div className="ParentLabel">Name:</div>
                <div className="ParentValue">Pathmani Ranatunga</div>
                <div className="ParentLabel">Mobile No:</div>
                <div className="ParentValue">0774832976</div>
                <div className="ParentLabel">Email:</div>
                <div className="ParentValue">pathmaniranatunga@gmail.com</div>
              </div>
            </div>
          </Col>

          <Col xl={8}>
            <div className="RightContainer">
              <Formik on validationSchema={schema} onSubmit={console.log} initialValues={initialState}>
                {({ handleSubmit, handleChange, handleBlur, values, touched, errors, validateField }) => (
                  <Row>
                    <Form noValidate onSubmit={handleSubmit}>
                      {/*FirstName*/}
                      <Row>
                        <Form.Group className="ProfileDetailsContainer" controlId="validationFirstName">
                          <Col xl={4}>
                            <Form.Label style={{ fontWeight: 600 }}>First Name</Form.Label>
                          </Col>

                          <Col xl={8}>
                            <Form.Control
                              type="text"
                              placeholder="Enter the first name here"
                              name="Firstname"
                              value={values.Firstname}
                              onChange={handleChange}
                              isInvalid={
                                !!errors.Firstname ? changeFistNameValidate(false) : changeFistNameValidate(true)
                              }
                              isValid={touched.Firstname}
                              onBlur={handleBlur}
                            />
                            <Form.Control.Feedback type="invalid">{errors.Firstname}</Form.Control.Feedback>
                          </Col>
                        </Form.Group>
                      </Row>
                      {/*LastName*/}
                      <Row>
                        <Form.Group className="ProfileDetailsContainer" controlId="validationLastname">
                          <Col xl={4}>
                            <Form.Label style={{ fontWeight: 600 }}>Last Name</Form.Label>
                          </Col>

                          <Col xl={8}>
                            <Form.Control
                              type="text"
                              placeholder="Enter the last name here"
                              name="Lastname"
                              value={values.Lastname}
                              onChange={handleChange}
                              isInvalid={
                                !!errors.Lastname ? changeLastNameValidate(false) : changeLastNameValidate(true)
                              }
                              isValid={touched.Lastname}
                              onBlur={handleBlur}
                            />
                            <Form.Control.Feedback type="invalid">{errors.Lastname}</Form.Control.Feedback>
                          </Col>
                        </Form.Group>
                      </Row>
                      {/*Email*/}
                      <Row>
                        <Form.Group className="ProfileDetailsContainer" controlId="validationEmail">
                          <Col xl={4}>
                            <Form.Label style={{ fontWeight: 600 }}>Email</Form.Label>
                          </Col>
                          <Col xl={8}>
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
                            <Form.Control.Feedback type="invalid">{errors.Email}</Form.Control.Feedback>
                          </Col>
                        </Form.Group>
                      </Row>
                      {/*Password*/}
                      <Row>
                        <Form.Group className="ProfileDetailsContainer" controlId="validationPassword">
                          <Col xl={4}>
                            <Form.Label style={{ fontWeight: 600 }}>Password</Form.Label>
                          </Col>
                          <Col xl={8}>
                            <Form.Control
                              type="password"
                              placeholder="Enter the password here"
                              name="Password"
                              value={values.Password}
                              onChange={handleChange}
                              isInvalid={
                                !!errors.Password ? changePasswordValidate(false) : changePasswordValidate(true)
                              }
                              isValid={touched.Password}
                              onBlur={handleBlur}
                            />
                            <Form.Control.Feedback type="invalid">{errors.Password}</Form.Control.Feedback>
                          </Col>
                        </Form.Group>
                      </Row>
                      {/*SchoolName*/}
                      <Row>
                        <Form.Group className="ProfileDetailsContainer" controlId="validationschoolName">
                          <Col xl={4}>
                            <Form.Label style={{ fontWeight: 600 }}>School Name</Form.Label>
                          </Col>
                          <Col xl={8}>
                            <Form.Control
                              type="text"
                              placeholder="Enter school name here"
                              name="Schoolname"
                              value={values.Schoolname}
                              onChange={handleChange}
                              isInvalid={
                                !!errors.Schoolname ? changeSchoolNameValidate(false) : changeSchoolNameValidate(true)
                              }
                              isValid={touched.Schoolname}
                              onBlur={handleBlur}
                            />
                            <Form.Control.Feedback type="invalid">{errors.Schoolname}</Form.Control.Feedback>
                          </Col>
                        </Form.Group>
                      </Row>
                      {/*Grade*/}
                      <Row>
                        <Form.Group className="ProfileDetailsContainer" controlId="validationGrade">
                          <Col xl={4}>
                            <Form.Label style={{ fontWeight: 600 }}>Grade</Form.Label>
                          </Col>
                          <Col xl={8}>
                            <Form.Control
                              type="text"
                              placeholder="Enter the grade here"
                              name="Grade"
                              value={values.Grade}
                              onChange={handleChange}
                              isInvalid={!!errors.Grade ? changeGradeValidate(false) : changeGradeValidate(true)}
                              isValid={touched.Grade}
                              onBlur={handleBlur}
                            />
                            <Form.Control.Feedback type="invalid">{errors.Grade}</Form.Control.Feedback>
                          </Col>
                        </Form.Group>
                      </Row>

                      <Row>
                        {isEditing && (
                          <Button
                            name="Save Changes"
                            onClick={() => {
                              if (
                                gradeValidate &&
                                fistNameValidate &&
                                lastNameValidate &&
                                emailValidate &&
                                passwordValidate &&
                                schoolNameValidate
                              ) {
                                setPageStage(2);
                              }
                            }}
                            onClickCapture={() => {
                              validateField('Grade');
                              validateField('Firstname');
                              validateField('Lastname');
                              validateField('Email');
                              validateField('Password');
                              validateField('Schoolname');
                            }}
                          />
                        )}
                      </Row>
                    </Form>
                  </Row>
                )}
              </Formik>
            </div>
          </Col>

          {/*<div className="ProfileButton">*/}
          {/*  <Button name="Save Changes"/>*/}
          {/*</div>*/}
        </div>
      </Container>
    </div>
  );
};

export default StudentProfile;
