import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Button } from '../../Button/Button';
import { Formik } from 'formik';
import * as yup from 'yup';

// @ts-ignore
import LazyLoad from 'react-lazyload';
import SubmitButton from '../../Button/SubmitButton';
import { ButtonCommon } from '../../Button/ButtonCommon';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import UploadButton from '../../Button/UploadButton';
import AzureCloudStorage from '../../AzureCloudStorage/AzureCloudStorageNotes';

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

                      <Row>
                        <Form.Group className="ProfileDetailsContainer" controlId="validationschoolName">
                          <Col xl={4}>
                            <Form.Label style={{ fontWeight: 600 }}>Upload File</Form.Label>
                          </Col>
                          <Col xl={8}>
                            <Form.Control type="file" placeholder="Notes" name="upload" accept="application/pdf" />
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
        {/* <Form>
          <Form.Group controlId="form.Name">
            <Form.Label>Topic</Form.Label>
            <Form.Control type="text" placeholder="Topic" />
          </Form.Group>
          <Form.Group controlId="form.Name">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Description" />
          </Form.Group>
          <Form.Group controlId="form.Name">
            <Form.Label>Deadline</Form.Label>
            <Form.Control type="date" placeholder="Deadline" />
          </Form.Group> */}
        {/* <Form.Group controlId="form.Name">
            <Form.Label className="form-label" for="customFile">
              Notes File
            </Form.Label>
            <Form.Control type="file" className="form-control" id="customFile" />
          </Form.Group> */}
        {/* <UploadButton /> */}
        {/* <AzureCloudStorage />
        </Form> */}
      </Container>
    </div>
  );
};

export default Uploadnotes;
