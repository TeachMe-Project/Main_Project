import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Button } from '../../Button/Button';
import { Formik } from 'formik';
import * as yup from 'yup';

// @ts-ignore
import LazyLoad from 'react-lazyload';
import SubmitButton from '../../Button/SubmitButton';
import { ButtonCommon } from '../../Button/ButtonCommon';

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
  deadline: yup
    .string()
    .required()
    .label('Deadline'),
});

const initialState = {
  topic: '',
  description: '',
  deadline: '',
};

export const Uploadhomework = () => {
  const [isEditing, setISEditing] = useState(false);

  const [pageStage, setPageStage] = useState(2);
  const [topicValidate, settopicValidate] = useState<boolean>(false);
  const [descriptionValidate, setdescriptionValidate] = useState(false);
  const [deadlineValidate, setdeadlineValidate] = useState(false);

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
  const changedeadlineValidate = (status: boolean): boolean => {
    if (status) {
      setdeadlineValidate(true);
      return false;
    } else {
      setdeadlineValidate(false);
      return true;
    }
  };

  return (
    <div className="StudentProfile">
      <Container>
        <div className="PanelHeader">
          <h2>Upload Homework</h2>
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

                      {/*Deadline*/}
                      <Row>
                        <Form.Group className="ProfileDetailsContainer" controlId="validationschoolName">
                          <Col xl={4}>
                            <Form.Label style={{ fontWeight: 600 }}>Deadline</Form.Label>
                          </Col>
                          <Col xl={8}>
                            <Form.Control type="date" placeholder="Deadline" name="deadline" />
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
                          <Col xl={8} style={{ margin: '0 108px' }}>
                            <div className="Buttonforsubmit">
                              <ButtonCommon name={'Submit'} />
                            </div>
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

export default Uploadhomework;
