import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";

// @ts-ignore
import LazyLoad from "react-lazyload";
// @ts-ignore
import swal from "@sweetalert/with-react";
import { ButtonCommon } from "../../Button/ButtonCommon";
import axios, { AxiosResponse } from "axios";
import { useAuth0 } from "@auth0/auth0-react";

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
  date: "",
  start_time: "",
  end_time: ""
};

export const Addextraclass = () => {
  const { user } = useAuth0();
  const teacherAuthId = user?.sub;
  const params = useParams();
  const course_id = params.course_id;
  console.log(course_id);
  console.log(teacherAuthId);
  
  const [isEditing, setISEditing] = useState(false);

  const [pageStage, setPageStage] = useState(2);
  // const [topicValidate, settopicValidate] = useState<boolean>(false);
  // const [descriptionValidate, setdescriptionValidate] = useState(false);
  const [dateValidate, setdateValidate] = useState(false);
  const [starttimeValidate, setstarttimeValidate] = useState(false);
  const [endtimeValidate, setendtimeValidate] = useState(false);

  // const changetopicValidate = (status: boolean): boolean => {
  //   if (status) {
  //     settopicValidate(true);
  //     return false;
  //   } else {
  //     settopicValidate(false);
  //     return true;
  //   }
  // };
  // const changedescriptionValidate = (status: boolean): boolean => {
  //   if (status) {
  //     setdescriptionValidate(true);
  //     return false;
  //   } else {
  //     setdescriptionValidate(false);
  //     return true;
  //   }
  // };
  const changedateValidate = (status: boolean): boolean => {
    if (status) {
      setdateValidate(true);
      return false;
    } else {
      setdateValidate(false);
      return true;
    }
  };
  const changestarttimeValidate = (status: boolean): boolean => {
    if (status) {
      setstarttimeValidate(true);
      return false;
    } else {
      setstarttimeValidate(false);
      return true;
    }
  };
  const changeendtimeValidate = (status: boolean): boolean => {
    if (status) {
      setendtimeValidate(true);
      return false;
    } else {
      setendtimeValidate(false);
      return true;
    }
  };

  const date = (new Date());
  date.setDate(date.getDate()+1)

  const extraClassCreate = (values: any) => {
    console.log(values.date);
    console.log(values.start_time);
    const data = JSON.stringify({
      "user_id": teacherAuthId,
      "course_id": course_id,
      "date": values.date,
      "start_time": values.start_time,
      "end_time": values.end_time,
    });
    axios({
      method: "POST",
      url: "http://localhost:8081/class/createClass",
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    }).then((res: AxiosResponse) => {
      if (res.status == 200) {
        console.log("Done")
        swal(`Poof! You have successfully added this extra class`, {
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
                            <Form.Control 
                              type="date" 
                              placeholder="Date" 
                              name="date"
                              value={values.date}
                              onChange={handleChange}
                              isInvalid={!!errors.date ? changedateValidate(false) : changedateValidate(true)}
                              isValid={touched.date}
                              onBlur={handleBlur}
                              min={date.toISOString().substring(0,10)}
                            />
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
                              name="start_time" 
                              value={values.start_time}
                              onChange={handleChange}
                              isInvalid={!!errors.start_time ? changestarttimeValidate(false) : changestarttimeValidate(true)}
                              isValid={touched.start_time}
                              onBlur={handleBlur}
                            />
                          </Col>
                        </Form.Group>
                      </Row>
                      <Row>
                        <Form.Group className="ProfileDetailsContainer" controlId="validationschoolName">
                          <Col xl={4}>
                            <Form.Label style={{ fontWeight: 600 }}>End time </Form.Label>
                          </Col>
                          <Col xl={8}>
                            <Form.Control 
                              type="time" 
                              placeholder="End time" 
                              name="end_time" 
                              value={values.end_time}
                              onChange={handleChange}
                              isInvalid={!!errors.end_time ? changeendtimeValidate(false) : changeendtimeValidate(true)}
                              isValid={touched.end_time}
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
                          <Col xl={8} >
                            <div className="Buttonforsubmit" style={{ marginTop: '1rem', marginLeft: '8rem' }}>
                              <ButtonCommon name={"Add Extra Class"} style={{ width: "max-content" }} onClick={() => extraClassCreate(values)} />
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
