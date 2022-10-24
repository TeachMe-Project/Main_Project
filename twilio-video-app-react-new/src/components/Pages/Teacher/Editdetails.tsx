import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { Button } from '../../Button/Button';
import { Field, Formik } from 'formik';
import * as yup from 'yup';
import axios, { AxiosResponse } from "axios";
import { useAuth0 } from "@auth0/auth0-react";

// @ts-ignore
import LazyLoad from 'react-lazyload';
// @ts-ignore
import swal from "@sweetalert/with-react";
import SubmitButton from '../../Button/SubmitButton';
import { ButtonCommon } from '../../Button/ButtonCommon';

const schema = yup.object().shape({
  title: yup
    .string()
    .required()
    .label('Title')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])/, 'Title must contain only letters'),
  subject: yup
    .string()
    .required()
    .label('Subject')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])/, 'Subject must contain only letters'),

  grade: yup
    .string()
    .required()
    .label('Grade')
    .matches(/Grade-(?:1[01]|0[1-9])|AL-20\d\d/, 'Grade must be between Grade-03 to A/L-Year-3'),
  fee: yup
    .string()
    .required()
    .label('Fee')
    .matches(/Grade-(?:1[01]|0[1-9])/, 'Fee must be a numerical value'),
  description: yup
    .string()
    .required()
    .label('Description'),
});

type initialState = {
  Subject: string,
  Grade: string,
  Fee: number,
  Medium: string,
  Description: string,
  Start_date: string,
  End_date: string,
  Start_time: string,
};

export const TeacherProfile = () => {
  const [isEditing, setISEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [pageStage, setPageStage] = useState(2);
  const [gradeValidate, setgradeValidate] = useState<boolean>(false);
  const [titleValidate, settitleValidate] = useState(false);
  const [subjectValidate, setsubjectValidate] = useState(false);
  const [feeValidate, setfeeValidate] = useState(false);
  const [descriptionValidate, setdescriptionValidate] = useState(false);
  const [startDateValidate, setStartDateValidate] = useState(false);
  const [endDateValidate, setEndDateValidate] = useState(false);
  const [startTimeValidate, setStartTimeValidate] = useState(false);
  const { user } = useAuth0();
  const user_id = user?.sub;
  const params = useParams();
  console.log(params);
  const baseURLCourse = `http://localhost:8081/course/${params.course_id}`;

  const [initialState, setInitialState] = useState<initialState>({
    Subject: '',
    Grade: '',
    Fee: 0,
    Medium: '',
    Description: '',
    Start_date: '',
    End_date: '',
    Start_time: ''
  });

  useEffect(() => {
    axios({
      method: "GET",
      url: baseURLCourse,
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((res: AxiosResponse) => {
        setInitialState({
          Subject: res.data[0].subject,
          Grade: res.data[0].grade,
          Fee: res.data[0].price,
          Medium: res.data[0].medium,
          Description: res.data[0].description,
          Start_date: res.data[0].start_date,
          End_date: res.data[0].end_date,
          Start_time: res.data[0].start_time
        });
        if (res.status === 200) {
          console.log(initialState);
          setIsLoading(true);
        }
        // });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

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
  const changedescriptionValidate = (status: boolean): boolean => {
    if (status) {
      setdescriptionValidate(true);
      return false;
    } else {
      setdescriptionValidate(false);
      return true;
    }
  };
  const changestartDateValidate = (status: boolean): boolean => {
    if (status) {
      setdescriptionValidate(true);
      return false;
    } else {
      setdescriptionValidate(false);
      return true;
    }
  };
  const changeendDateValidate = (status: boolean): boolean => {
    if (status) {
      setdescriptionValidate(true);
      return false;
    } else {
      setdescriptionValidate(false);
      return true;
    }
  };
  const changestartTimeValidate = (status: boolean): boolean => {
    if (status) {
      setdescriptionValidate(true);
      return false;
    } else {
      setdescriptionValidate(false);
      return true;
    }
  };

  const editDetails = (values: any) => {
    const data = JSON.stringify({
      "description": values.Description,
      "price": parseInt(values.Fee),
      "grade": values.Grade,
      "subject": values.Subject
    });
    axios({
      method: "POST",
      url: `http://localhost:8081/course/${params.course_id}/updateCourseDetails`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    }).then((res: AxiosResponse) => {
      if (res.status == 200) {
        console.log("Done")
        swal(`Poof! You have successfully edited this course`, {
          icon: "success",
        });
      }
    }).catch(function (error) {
      console.log(error.message)
    })
  }

  return (
    <div className="StudentProfile">
      <Container>
        <div className="PanelHeader">
          <h2>Edit Details</h2>
        </div>
        <div className="PanelContainer">
          <Col xl={10}>
            <div className="RightContainer">
              {isLoading && <Formik on validationSchema={schema} onSubmit={console.log} initialValues={initialState}>
                {({ handleSubmit, handleChange, handleBlur, values, touched, errors, validateField }) => (
                  <Row>
                    <Form noValidate onSubmit={handleSubmit}>
                      {/*title*/}
                      {/* <Row>
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
                      </Row> */}

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
                              name="Subject"
                              value={values.Subject}
                              onChange={handleChange}
                              isInvalid={!!errors.Subject ? changesubjectValidate(false) : changesubjectValidate(true)}
                              isValid={touched.Subject}
                              onBlur={handleBlur}
                            />
                            <Form.Control.Feedback type="invalid">{errors.Subject}</Form.Control.Feedback>
                          </Col>
                        </Form.Group>
                      </Row>

                      <Row>
                        <Form.Group className="ProfileDetailsContainer" controlId="validationLastname">
                          <Col xl={4}>
                            <Form.Label style={{ fontWeight: 600 }}>Description</Form.Label>
                          </Col>

                          <Col xl={8}>
                            <Form.Control
                              type="text"
                              placeholder="Description"
                              name="Description"
                              value={values.Description}
                              onChange={handleChange}
                              isInvalid={
                                !!errors.Description
                                  ? changedescriptionValidate(false)
                                  : changedescriptionValidate(true)
                              }
                              isValid={touched.Description}
                              onBlur={handleBlur}
                            />
                            <Form.Control.Feedback type="invalid">{errors.Description}</Form.Control.Feedback>
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
                              isInvalid={!!errors.Grade ? changegradeValidate(false) : changegradeValidate(true)}
                              isValid={touched.Grade}
                              onBlur={handleBlur}
                            />
                            <Form.Control.Feedback type="invalid">{errors.Grade}</Form.Control.Feedback>
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
                            {/* <Form.Control as="select" disabled={true}>
                              <option value="Sinhala" selected>
                                Sinhala
                              </option>
                              <option value="English">English</option>
                              <option value="Tamil">Tamil</option>
                              <option value="Other">Other</option>
                            </Form.Control> */}
                            <Form.Control
                              type="text"
                              placeholder="Medium"
                              name="Medium"
                              value={values.Medium}
                              disabled={true}
                              onChange={handleChange}
                              // isInvalid={!!errors.Medium ? changefeeValidate(false) : changefeeValidate(true)}
                              isValid={touched.Medium}
                              onBlur={handleBlur}
                            />
                          </Col>
                        </Form.Group>
                      </Row>

                      {/* Individual or institute */}
                      {/* <Row>
                        <Form.Group className="ProfileDetailsContainer" controlId="validationPassword">
                          <Col xl={4}>
                            <Form.Label style={{ fontWeight: 600 }}>Class Conducting Method</Form.Label>
                          </Col>
                          <Col xl={4}>
                            <label style={{ marginRight: '25px' }}>
                              <Field type="radio" name="picked" value="Individual" />
                              Individual
                            </label>
                            <label style={{ marginRight: '3px' }}>
                              <Field type="radio" name="picked" value="Institute" />
                              Institute
                            </label>
                          </Col>
                        </Form.Group>
                      </Row> */}

                      {/*Fee*/}
                      <Row>
                        <Form.Group className="ProfileDetailsContainer" controlId="validationPassword">
                          <Col xl={4}>
                            <Form.Label style={{ fontWeight: 600 }}>Monthly Fee</Form.Label>
                          </Col>
                          <Col xl={8}>
                            <Form.Control
                              type="text"
                              placeholder="Course Fee"
                              name="Fee"
                              value={values.Fee}
                              onChange={handleChange}
                              isInvalid={!!errors.Fee ? changefeeValidate(false) : changefeeValidate(true)}
                              isValid={touched.Fee}
                              onBlur={handleBlur}
                            />
                            <Form.Control.Feedback type="invalid">{errors.Fee}</Form.Control.Feedback>
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
                            <Form.Control
                              type="date"
                              placeholder="Start date"
                              name="Start_date"
                              value={values.Start_date}
                              disabled={true}
                              onChange={handleChange}
                              isInvalid={!!errors.Start_date ? changestartDateValidate(false) : changestartDateValidate(true)}
                              isValid={touched.Start_date}
                              onBlur={handleBlur}
                            />
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
                            <Form.Control
                              type="date"
                              placeholder="End date"
                              name="End_date"
                              value={values.End_date}
                              disabled={true}
                              onChange={handleChange}
                              isInvalid={!!errors.End_date ? changeendDateValidate(false) : changeendDateValidate(true)}
                              isValid={touched.End_date}
                              onBlur={handleBlur}
                            />
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
                            <Form.Control as="select" disabled={true}>
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
                            <Form.Control
                              type="time"
                              placeholder="Start time"
                              name="Start_time"
                              value={values.Start_time}
                              disabled={true}
                              onChange={handleChange}
                              isInvalid={!!errors.Start_time ? changestartTimeValidate(false) : changestartTimeValidate(true)}
                              isValid={touched.Start_time}
                              onBlur={handleBlur}
                            />
                          </Col>
                        </Form.Group>
                      </Row>
                      <Row>
                        <Form.Group className="ProfileDetailsContainer" controlId="validationschoolName">
                          <Col xl={4}>
                            <Form.Label style={{ fontWeight: 600 }}></Form.Label>
                          </Col>
                          <Col xl={8} style={{ margin: '0 200px' }}>
                            <div className="Buttonforsubmit" style={{ margin: '30px -92px' }}>
                              <ButtonCommon name="Submit" onClick={() => editDetails(values)} />
                            </div>
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
              </Formik>}
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
