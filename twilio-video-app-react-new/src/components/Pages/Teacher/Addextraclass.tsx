import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";

// @ts-ignore
import LazyLoad from "react-lazyload";
import { ButtonCommon } from "../../Button/ButtonCommon";

const schema = yup.object().shape({
  topic: yup
    .string()
    .required()
    .label("Topic")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])/, "Topic must contain only letters"),
  description: yup
    .string()
    .required()
    .label("Description"),
  date: yup
    .string()
    .required()
    .label("Deadline")
});

const initialState = {
  topic: "",
  description: "",
  date: ""
};

export const Addextraclass = () => {
  const [isEditing, setISEditing] = useState(false);

  const [pageStage, setPageStage] = useState(2);
  const [topicValidate, settopicValidate] = useState<boolean>(false);
  const [descriptionValidate, setdescriptionValidate] = useState(false);
  const [dateValidate, setdateValidate] = useState(false);

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
  const changedateValidate = (status: boolean): boolean => {
    if (status) {
      setdateValidate(true);
      return false;
    } else {
      setdateValidate(false);
      return true;
    }
  };

  return (
    <div className="StudentProfile">
      <Container>
        <div className="PanelHeader">
          <h2>Add Extra Class</h2>
        </div>
        <div className="PanelContainer">
          <Col xl={8}>
            <div className="RightContainer">
              <Formik on validationSchema={schema} onSubmit={console.log} initialValues={initialState}>
                {({ handleSubmit, handleChange, handleBlur, values, touched, errors, validateField }) => (
                  <Row>
                    <Form noValidate onSubmit={handleSubmit}>

                      {/*date*/}
                      <Row>
                        <Form.Group className="ProfileDetailsContainer" controlId="validationschoolName">
                          <Col xl={4}>
                            <Form.Label style={{ fontWeight: 600 }}>Date</Form.Label>
                          </Col>
                          <Col xl={8}>
                            <Form.Control type="date" placeholder="Date" name="date" />
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
                            <Form.Control type="time" placeholder="Start time" name="starttime" />
                          </Col>
                        </Form.Group>
                      </Row>
                      <Row>
                        <Form.Group className="ProfileDetailsContainer" controlId="validationschoolName">
                          <Col xl={4}>
                            <Form.Label style={{ fontWeight: 600 }}>End time </Form.Label>
                          </Col>
                          <Col xl={8}>
                            <Form.Control type="time" placeholder="End time" name="endtime" />
                          </Col>
                        </Form.Group>
                      </Row>

                      <Row>
                        <Form.Group className="ProfileDetailsContainer" controlId="validationschoolName">
                          <Col xl={4}>
                            <Form.Label style={{ fontWeight: 600 }}></Form.Label>
                          </Col>
                          <Col xl={8} >
                            <div className="Buttonforsubmit" style={{ marginTop: '1rem', marginLeft: '8rem' }}>
                              <ButtonCommon name={"Add Extra Class"} style={{ width: "max-content" }} />
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

export default Addextraclass;
