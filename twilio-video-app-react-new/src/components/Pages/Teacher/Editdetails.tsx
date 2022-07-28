import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Button } from '../../Button/Button';
import { Formik } from 'formik';
import * as yup from 'yup';

// @ts-ignore
import LazyLoad from 'react-lazyload';

const schema = yup.object().shape({
  title: yup
    .string()
    .required()
    .label('First Name')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])/, 'Title must contain only letters'),
  subject: yup
    .string()
    .required()
    .label('Last Name')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])/, 'Subject must contain only letters'),

  grade: yup
    .string()
    .required()
    .matches(/Grade-(?:1[01]|0[1-9])|AL-20\d\d/, 'Grade must be between Grade-03 to A/L-Year-3'),
  fee: yup
    .string()
    .required()
    .matches(/Grade-(?:1[01]|0[1-9])/, 'Fee must be a numerical value'),
});

const initialState = {
  title: '',
  subject: '',
  grade: '',
  fee: '',
};

export const TeacherProfile = () => {
  const [isEditing, setISEditing] = useState(false);

  const [pageStage, setPageStage] = useState(2);
  const [gradeValidate, setgradeValidate] = useState<boolean>(false);
  const [titleValidate, settitleValidate] = useState(false);
  const [subjectValidate, setsubjectValidate] = useState(false);
  const [feeValidate, setfeeValidate] = useState(false);

  const changegradeValidate = (status: boolean): boolean => {
    if (status) {
      setgradeValidate(true);
      return false;
    } else {
      setgradeValidate(false);
      return true;
    }
  };
  const changetitleValidate = (status: boolean): boolean => {
    if (status) {
      settitleValidate(true);
      return false;
    } else {
      settitleValidate(false);
      return true;
    }
  };
  const changesubjectValidate = (status: boolean): boolean => {
    if (status) {
      setsubjectValidate(true);
      return false;
    } else {
      setsubjectValidate(false);
      return true;
    }
  };

  const changefeeValidate = (status: boolean): boolean => {
    if (status) {
      setfeeValidate(true);
      return false;
    } else {
      setfeeValidate(false);
      return true;
    }
  };

  return (
    <div className="StudentProfile">
      <Container>
        <div className="PanelHeader">
          <h2>Edit Details</h2>
        </div>
        <div className="PanelContainer">
          <Col xl={8}>
            <div className="RightContainer">
              <Formik on validationSchema={schema} onSubmit={console.log} initialValues={initialState}>
                {({ handleSubmit, handleChange, handleBlur, values, touched, errors, validateField }) => (
                  <Row>
                    <Form noValidate onSubmit={handleSubmit}>
                      {/*title*/}
                      <Row>
                        <Form.Group className="ProfileDetailsContainer" controlId="validationFirstName">
                          <Col xl={4}>
                            <Form.Label style={{ fontWeight: 600 }}>Title</Form.Label>
                          </Col>

                          <Col xl={8}>
                            <Form.Control
                              type="text"
                              placeholder="Enter the Title of the course"
                              name="title"
                              value={values.title}
                              onChange={handleChange}
                              isInvalid={!!errors.title ? changetitleValidate(false) : changetitleValidate(true)}
                              isValid={touched.title}
                              onBlur={handleBlur}
                            />
                            <Form.Control.Feedback type="invalid">{errors.title}</Form.Control.Feedback>
                          </Col>
                        </Form.Group>
                      </Row>
                      {/*subject*/}
                      <Row>
                        <Form.Group className="ProfileDetailsContainer" controlId="validationLastname">
                          <Col xl={4}>
                            <Form.Label style={{ fontWeight: 600 }}>Subject</Form.Label>
                          </Col>

                          <Col xl={8}>
                            <Form.Control
                              type="text"
                              placeholder="Subject of the course"
                              name="subject"
                              value={values.subject}
                              onChange={handleChange}
                              isInvalid={!!errors.subject ? changesubjectValidate(false) : changesubjectValidate(true)}
                              isValid={touched.subject}
                              onBlur={handleBlur}
                            />
                            <Form.Control.Feedback type="invalid">{errors.subject}</Form.Control.Feedback>
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
                              name="grade"
                              value={values.grade}
                              onChange={handleChange}
                              isInvalid={!!errors.grade ? changegradeValidate(false) : changegradeValidate(true)}
                              isValid={touched.grade}
                              onBlur={handleBlur}
                            />
                            <Form.Control.Feedback type="invalid">{errors.grade}</Form.Control.Feedback>
                          </Col>
                        </Form.Group>
                      </Row>

                      {/*medium*/}
                      <Row>
                        <Form.Group className="ProfileDetailsContainer" controlId="validationEmail">
                          <Col xl={4}>
                            <Form.Label style={{ fontWeight: 600 }}>Medium</Form.Label>
                          </Col>
                          <Col xl={8}>
                            <Form.Control as="select">
                              <option value="Sinhala" selected>
                                Sinhala
                              </option>
                              <option value="English">English</option>
                              <option value="Tamil">Tamil</option>
                              <option value="Other">Other</option>
                            </Form.Control>
                          </Col>
                        </Form.Group>
                      </Row>
                      {/*Fee*/}
                      <Row>
                        <Form.Group className="ProfileDetailsContainer" controlId="validationPassword">
                          <Col xl={4}>
                            <Form.Label style={{ fontWeight: 600 }}>Fee</Form.Label>
                          </Col>
                          <Col xl={8}>
                            <Form.Control
                              type="text"
                              placeholder="Course Fee"
                              name="fee"
                              value={values.fee}
                              onChange={handleChange}
                              isInvalid={!!errors.fee ? changefeeValidate(false) : changefeeValidate(true)}
                              isValid={touched.fee}
                              onBlur={handleBlur}
                            />
                            <Form.Control.Feedback type="invalid">{errors.fee}</Form.Control.Feedback>
                          </Col>
                        </Form.Group>
                      </Row>
                      {/*Start date*/}
                      <Row>
                        <Form.Group className="ProfileDetailsContainer" controlId="validationschoolName">
                          <Col xl={4}>
                            <Form.Label style={{ fontWeight: 600 }}>Start date</Form.Label>
                          </Col>
                          <Col xl={8}>
                            <Form.Control type="date" placeholder="Start date" name="startdate" />
                          </Col>
                        </Form.Group>
                      </Row>

                      {/*End date*/}
                      <Row>
                        <Form.Group className="ProfileDetailsContainer" controlId="validationschoolName">
                          <Col xl={4}>
                            <Form.Label style={{ fontWeight: 600 }}>End date</Form.Label>
                          </Col>
                          <Col xl={8}>
                            <Form.Control type="date" placeholder="End date" name="startdate" />
                          </Col>
                        </Form.Group>
                      </Row>
                      {/*Class Date*/}
                      <Row>
                        <Form.Group className="ProfileDetailsContainer" controlId="validationschoolName">
                          <Col xl={4}>
                            <Form.Label style={{ fontWeight: 600 }}>Class Date</Form.Label>
                          </Col>
                          <Col xl={8}>
                            <Form.Control as="select">
                              <option value="Monday" selected>
                                Monday
                              </option>
                              <option value="Tuesday">Tuesday</option>
                              <option value="Wednesday">Wednesday</option>
                              <option value="Thursday">Thursday</option>
                              <option value="Friday">Friday</option>
                              <option value="Saturday">Saturday</option>
                              <option value="Sunday">Sunday</option>
                            </Form.Control>
                          </Col>
                        </Form.Group>
                      </Row>
                      {/*Time*/}
                      <Row>
                        <Form.Group className="ProfileDetailsContainer" controlId="validationschoolName">
                          <Col xl={4}>
                            <Form.Label style={{ fontWeight: 600 }}>Start time </Form.Label>
                          </Col>
                          <Col xl={8}>
                            <Form.Control type="text" placeholder="Start time" name="starttime" />
                          </Col>
                        </Form.Group>
                      </Row>

                      {/* <Row>
                        {isEditing && (
                          <Button
                            name="Save Changes"
                            onClick={() => {
                              if (
                                gradeValidate &&
                                titleValidate &&
                                subjectValidate &&
                                gradeValidate &&
                                mediumValidate &&
                             
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
                      </Row> */}
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

export default TeacherProfile;
