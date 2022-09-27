import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Button } from "../../Button/Button";
import { Formik } from "formik";
import * as yup from "yup";
import axios, { AxiosResponse } from "axios";
import { useAuth0 } from "@auth0/auth0-react";

// @ts-ignore
import LazyLoad from "react-lazyload";

type initialState = {
  Firstname: string,
  Lastname: string,
  Email: string,
  Grade: string,
  Schoolname: string,
};

export const StudentProfile = () => {
  const { user } = useAuth0();
  const studentAuthId = user?.sub;
  const params = useParams();
  console.log(params);
  const baseURLStudent = `https://learnx.azurewebsites.net/student/${params.user_id}`;
  const [parentProfDetails, setParentProfDetails] = useState<any>([]);

  const [initialState, setInitialState] = useState<initialState>({
    Firstname: '',
    Lastname: '',
    Email: '',
    Grade: '',
    Schoolname: '',
  });

  useEffect(() => {
    axios
      .get(baseURLStudent)
      .then((res: AxiosResponse) => {
        res.data.map((item: any) => {
          setInitialState({
            Firstname: item.first_name,
            Lastname: item.last_name,
            Email: item.user.username,
            Grade: item.grade,
            Schoolname: item.school,
          });
        });
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get(baseURLStudent)
      .then((res: AxiosResponse) => {
        res.data.map((item: any) => {
          setParentProfDetails({
            Studentpic: item.user.profile_image,
            Parentname: item.parent.first_name + ' ' + item.parent.last_name,
            Parentcontact: item.parent.contact,
            // Parentemail: item.parent.user.username,
          });
        });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="StudentProfile">
      <Container>
        <div className="PanelHeader">
          <h2>Student Profile</h2>
        </div>
        <div className="PanelContainer">
          <Col xl={4}>
            {/* {parentProfDetails.map((item: any) => {
              return ( */}
                <div className="LeftContainer">
                  <div className="ProfileImg">
                    <img src={parentProfDetails.Studentpic} />
                  </div>
                  <div className="ParentContact">
                    <div className="ContactHeader">Parent's Contact Details:</div>
                    <div className="ParentLabel">Name:</div>
                    <div className="ParentValue">{parentProfDetails.Parentname}</div>
                    <div className="ParentLabel">Mobile No:</div>
                    <div className="ParentValue">{parentProfDetails.Parentcontact}</div>
                    <div className="ParentLabel">Email:</div>
                    {/* <div className="ParentValue">{item.Parentemail}</div> */}
                  </div>
                </div>
              {/* );
            })} */}
          </Col>

          <Col xl={8}>
            <div className="RightContainer">
              <Formik onSubmit={console.log} initialValues={initialState}>
                {({ values, }) => (
                  <Row>
                    <Form noValidate>
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

                            />
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
                            />
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
                            />
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
                            />
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
                            />
                          </Col>
                        </Form.Group>
                      </Row>

                      <Row>

                      </Row>
                    </Form>
                  </Row>
                )}
              </Formik>
            </div>
          </Col>
        </div>
      </Container>
    </div>
  );
};

export default StudentProfile;
