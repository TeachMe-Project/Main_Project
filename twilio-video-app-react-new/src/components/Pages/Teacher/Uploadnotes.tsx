import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Button } from '../../Button/Button';
import { Formik } from 'formik';
import * as yup from 'yup';

// @ts-ignore
import LazyLoad from 'react-lazyload';
import SubmitButton from '../../Button/SubmitButton';

const schema = yup.object().shape({
  topic: yup
    .string()
    .required()
    .label('Topic')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])/, 'Topic must contain only letters'),
  description: yup
    .string()
    .required()
    .label('Description'),
  subtopic: yup
    .string()
    .required()
    .label('Subtopic'),
});

const initialState = {
  topic: '',
  description: '',
  subtopic: '',
};

export const Uploadnotes = () => {
  const [isEditing, setISEditing] = useState(false);

  const [pageStage, setPageStage] = useState(2);
  const [topicValidate, settopicValidate] = useState<boolean>(false);
  const [descriptionValidate, setdescriptionValidate] = useState(false);
  const [subtopicValidate, setsubtopicValidate] = useState(false);

  const changetopicValidate = (status: boolean): boolean => {
    if (status) {
      settopicValidate(true);
      return false;
    } else {
      settopicValidate(false);
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
  const changesubtopicValidate = (status: boolean): boolean => {
    if (status) {
      setsubtopicValidate(true);
      return false;
    } else {
      setsubtopicValidate(false);
      return true;
    }
  };

  return (
    <div className="StudentProfile">
      <Container>
        <div className="PanelHeader">
          <h2>Upload Notes</h2>
        </div>
        <div className="PanelContainer">
          <Col xl={8}>
            <div className="RightContainer">
              <Formik on validationSchema={schema} onSubmit={console.log} initialValues={initialState}>
                {({ handleSubmit, handleChange, handleBlur, values, touched, errors, validateField }) => (
                  <Row>
                    <Form noValidate onSubmit={handleSubmit}>
                      {/*topic*/}
                      <Row>
                        <Form.Group className="ProfileDetailsContainer" controlId="validationFirstName">
                          <Col xl={4}>
                            <Form.Label style={{ fontWeight: 600 }}>Topic</Form.Label>
                          </Col>

                          <Col xl={8}>
                            <Form.Control
                              type="text"
                              placeholder="Topic of the lesson"
                              name="topic"
                              value={values.topic}
                              onChange={handleChange}
                              isInvalid={!!errors.topic ? changetopicValidate(false) : changetopicValidate(true)}
                              isValid={touched.topic}
                              onBlur={handleBlur}
                            />
                            <Form.Control.Feedback type="invalid">{errors.topic}</Form.Control.Feedback>
                          </Col>
                        </Form.Group>
                      </Row>

                      {/*subtopic*/}
                      <Row>
                        <Form.Group className="ProfileDetailsContainer" controlId="validationFirstName">
                          <Col xl={4}>
                            <Form.Label style={{ fontWeight: 600 }}>Sub Topic</Form.Label>
                          </Col>

                          <Col xl={8}>
                            <Form.Control
                              type="text"
                              placeholder="Sub Topic of the lesson"
                              name="subtopic"
                              value={values.subtopic}
                              onChange={handleChange}
                              isInvalid={!!errors.subtopic ? changetopicValidate(false) : changetopicValidate(true)}
                              isValid={touched.subtopic}
                              onBlur={handleBlur}
                            />
                            <Form.Control.Feedback type="invalid">{errors.subtopic}</Form.Control.Feedback>
                          </Col>
                        </Form.Group>
                      </Row>

                      {/*description*/}
                      <Row>
                        <Form.Group className="ProfileDetailsContainer" controlId="validationLastname">
                          <Col xl={4}>
                            <Form.Label style={{ fontWeight: 600 }}>Description</Form.Label>
                          </Col>

                          <Col xl={8}>
                            <Form.Control
                              type="text"
                              placeholder="Description"
                              name="description"
                              value={values.description}
                              onChange={handleChange}
                              isInvalid={
                                !!errors.description
                                  ? changedescriptionValidate(false)
                                  : changedescriptionValidate(true)
                              }
                              isValid={touched.description}
                              onBlur={handleBlur}
                            />
                            <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
                          </Col>
                        </Form.Group>
                      </Row>

                      <Row>
                        <Form.Group className="ProfileDetailsContainer" controlId="validationschoolName">
                          <Col xl={4}>
                            <Form.Label style={{ fontWeight: 600 }}>Upload File</Form.Label>
                          </Col>
                          <Col xl={8}>
                            <Form.Control type="file" placeholder="Notes" name="deadline" />
                          </Col>
                        </Form.Group>
                      </Row>

                      <Row>
                        <Form.Group className="ProfileDetailsContainer" controlId="validationschoolName">
                          <Col xl={4}>
                            <Form.Label style={{ fontWeight: 600 }}></Form.Label>
                          </Col>
                          <Col xl={8}>
                            <SubmitButton />
                          </Col>
                        </Form.Group>
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

export default Uploadnotes;
