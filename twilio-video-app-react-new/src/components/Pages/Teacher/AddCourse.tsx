import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";

// @ts-ignore
import LazyLoad from "react-lazyload";
// @ts-ignore
import swal from "@sweetalert/with-react";
import axios, { AxiosResponse } from "axios";
import { useAuth0 } from "@auth0/auth0-react";
// @ts-ignore
import {v4 as uuidv4} from "uuid"
import {FirebaseApp} from "../../../auth0/FirebaseConfig";


const schema = yup.object().shape({
  title: yup.string().required().label("Title"),
  subject: yup.string().required().label("Subject"),
  grade: yup.string().required().label("Grade").matches(/Grade-(?:1[01]|0[1-9])|AL-20\d\d/, "Grade must be between Grade-03 to A/L-Year-3"),
  fee: yup.string().required().label("Fee"),
  description: yup.string().required().label("Description"),
  medium: yup.string().required(),
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  class_date: yup.string().required(),
  start_time: yup.string().required()
});

const initialState = {
  title: "",
  subject: "",
  grade: "",
  fee: "",
  description: "",
  medium: "",
  start_date: "",
  end_date: "",
  class_date: "",
  start_time: "",
  end_time: "",
  institute: ""
};

export const AddCourse = () => {
  const [isEditing, setISEditing] = useState(false);

  const [pageStage, setPageStage] = useState(2);
  const [gradeValidate, setGradeValidate] = useState<boolean>(false);
  const [titleValidate, setTitleValidate] = useState(false);
  const [subjectValidate, setSubjectValidate] = useState(false);
  const [feeValidate, setFeeValidate] = useState(false);
  const [descriptionValidate, setDescriptionValidate] = useState(false);
  const [startDateValidate, setStartDateValidate] = useState(false);
  const [endDateValidate, setEndDateValidate] = useState(false);
  const [classDateValidate, setClassDateValidate] = useState(false);
  const [startTimeValidate, setStartTimeValidate] = useState(false);
  const [endTimeValidate, setEndTimeValidate] = useState(false);
  const [mediumValidate, setMediumValidate] = useState(false);
  const [instituteValidate, setInstituteValidate] = useState(false);

  const changeGradeValidate = (status: boolean): boolean => {
    if (status) {
      setGradeValidate(true);
      return false;
    } else {
      setGradeValidate(false);
      return true;
    }
  };
  const changeTitleValidate = (status: boolean): boolean => {
    if (status) {
      setTitleValidate(true);
      return false;
    } else {
      setTitleValidate(false);
      return true;
    }
  };
  const changeSubjectValidate = (status: boolean): boolean => {
    if (status) {
      setSubjectValidate(true);
      return false;
    } else {
      setSubjectValidate(false);
      return true;
    }
  };
  const changeFeeValidate = (status: boolean): boolean => {
    if (status) {
      setFeeValidate(true);
      return false;
    } else {
      setFeeValidate(false);
      return true;
    }
  };
  const changeDescriptionValidate = (status: boolean): boolean => {
    if (status) {
      setDescriptionValidate(true);
      return false;
    } else {
      setDescriptionValidate(false);
      return true;
    }
  };
  const changeStartDateValidate = (status: boolean): boolean => {
    if (status) {
      setStartDateValidate(true);
      return false;
    } else {
      setStartDateValidate(false);
      return true;
    }
  };
  const changeEndDateValidate = (status: boolean): boolean => {
    if (status) {
      setEndDateValidate(true);
      return false;
    } else {
      setEndDateValidate(false);
      return true;
    }
  };
  const changeClassDateValidate = (status: boolean): boolean => {
    if (status) {
      setClassDateValidate(true);
      return false;
    } else {
      setClassDateValidate(false);
      return true;
    }
  };
  const changeStartTimeValidate = (status: boolean): boolean => {
    if (status) {
      setStartTimeValidate(true);
      return false;
    } else {
      setStartTimeValidate(false);
      return true;
    }
  };
  const changeEndTimeValidate = (status: boolean): boolean => {
    if (status) {
      setStartTimeValidate(true);
      return false;
    } else {
      setEndTimeValidate(false);
      return true;
    }
  };
  const changeMediumValidate = (status: boolean): boolean => {
    if (status) {
      setMediumValidate(true);
      return false;
    } else {
      setMediumValidate(false);
      return true;
    }
  };
  const changeInstituteValidate = (status: boolean): boolean => {
    if (status) {
      setInstituteValidate(true);
      return false;
    } else {
      setInstituteValidate(false);
      return true;
    }
  };

  const { user } = useAuth0();
  const user_id = user?.sub;
  const [institutes, setInstitutes] = useState<any[]>([]);
  const [isDataLoading, setIsDataLoading] = useState(false);
  useEffect(() => {
    axios.get(`https://learnxy.azurewebsites.net/teacher/teacherInstitutes/${user_id}`).then((res: AxiosResponse) => {
      // setIsDataLoading(true);
      // console.log(res.data)
      res.data.map((item: any) => {
        setInstitutes(prevState => [...prevState, {
          institute_id: item.institute_id,
          institute_name: item.institute.institute_name
        }]);
        console.log(institutes);
      });

    })
      .catch((error: any) => {
        console.log(error.message);
      });
  }, []);

  const courseCreate = (values: any) => {
    const data = JSON.stringify({
      "user_id": user_id,
      "description": values.description,
      "price": parseInt(values.fee),
      "day": values.class_date,
      "grade": values.grade,
      "subject": values.subject,
      "start_date": values.start_date,
      "end_date": values.end_date,
      "start_time": values.start_time,
      "end_time": values.end_time,
      "medium": values.medium,
      "institute": parseInt(values.institute),
      "image_url":file,
    });
    axios({
      method: "POST",
      url: "http://localhost:8081/course/createCourse",
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    }).then((res: AxiosResponse) => {
      if (res.status == 200) {
        console.log("Done")
        swal(`Poof! You have successfully added this course`, {
          icon: "success",
        });
      }
    }).catch(function (error) {
      console.log(error.message)
    })
  }

  const [uploading,setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState<any>(null);
  
   const uploadCourseProfile = (event:any) => {

    // console.log(event);
    setUploading(true)
    const storageRef = FirebaseApp.storage().ref();
    console.log(storageRef);
    const fileRef = storageRef.child(`/CourseProfile/${event.name + uuidv4()}`);
    const uploadTask = fileRef.put(event);
    uploadTask.on(
        'state_changed',
        snapshot => {
          const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setProgress(prog);
        },
        err => console.log(err),
        () => {
          fileRef.getDownloadURL().then(url => {
            console.log(url);
            setFile(url);
          });
        }
    );
  };


  return (
    <div className="AddCourse">
      <Container>
        <div className="PanelHeader">
          <h2>New Course</h2>
        </div>
        <div className="PanelContainer">
          <Col xl={10}>
            <div className="RightContainer">
              <Formik on validationSchema={schema} onSubmit={console.log} initialValues={initialState}>
                {({ handleSubmit, handleChange, handleBlur, values, touched, errors, validateField }) => (
                  <Row>
                    <Form noValidate onSubmit={handleSubmit}>
                      {/*title*/}
                      {/* <Row>
                        <Form.Group className="ProfileDetailsContainer"
                          controlId="validationFirstName">
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
                              isInvalid={!!errors.title && touched.title ? changeTitleValidate(false) : changeTitleValidate(true)}
                              isValid={touched.title}
                              onBlur={handleBlur}
                            />
                            <Form.Control.Feedback
                              type="invalid">{errors.title}</Form.Control.Feedback>
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
                              name="subject"
                              value={values.subject}
                              onChange={handleChange}
                              isInvalid={
                                !!errors.subject && touched.subject
                                  ? changeSubjectValidate(false)
                                  : changeSubjectValidate(true)
                              }
                              isValid={touched.subject}
                              onBlur={handleBlur}
                            />
                            <Form.Control.Feedback type="invalid">{errors.subject}</Form.Control.Feedback>
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
                              name="description"
                              value={values.description}
                              onChange={handleChange}
                              isInvalid={
                                !!errors.description && touched.description
                                  ? changeDescriptionValidate(false)
                                  : changeDescriptionValidate(true)
                              }
                              isValid={touched.description}
                              onBlur={handleBlur}
                            />
                            <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
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
                              as="select"
                              placeholder="Select the grade here"
                              name="grade"
                              value={values.grade}
                              onChange={handleChange}
                              isInvalid={
                                !!errors.grade && touched.grade ? changeGradeValidate(false) : changeGradeValidate(true)
                              }
                              isValid={touched.grade}
                              onBlur={handleBlur}
                            >
                              <option value="NotSelected" selected>
                                Select Grade
                              </option>
                              <option value="Grade-03">Grade 3</option>
                              <option value="Grade-04">Grade 4</option>
                              <option value="Grade-05">Grade 5</option>
                              <option value="Grade-06">Grade 6</option>
                              <option value="Grade-07">Grade 7</option>
                              <option value="Grade-08">Grade 8</option>
                              <option value="Grade-09">Grade 9</option>
                              <option value="Grade-10">Grade 10</option>
                              <option value="Grade-11">Grade 11</option>
                              <option value="Grade-12">Grade 12</option>
                              <option value="Grade-13">Grade 13</option>
                              <option value="Other">Other</option>
                            </Form.Control>
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
                            <Form.Control
                              as="select"
                              placeholder="Select the Medium here"
                              name="medium"
                              value={values.medium}
                              onChange={handleChange}
                              isInvalid={
                                !!errors.medium && touched.medium
                                  ? changeMediumValidate(false)
                                  : changeMediumValidate(true)
                              }
                              isValid={touched.medium}
                              onBlur={handleBlur}
                            >
                              <option value="NotSelected" selected>
                                Select Medium
                              </option>
                              <option value="Sinhala">Sinhala</option>
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
                              placeholder="Enter Monthly Course Fee Here"
                              name="fee"
                              value={values.fee}
                              onChange={handleChange}
                              isInvalid={
                                !!errors.fee && touched.fee ? changeFeeValidate(false) : changeFeeValidate(true)
                              }
                              isValid={touched.fee}
                              onBlur={handleBlur}
                            />
                            <Form.Control.Feedback type="invalid">{errors.fee}</Form.Control.Feedback>
                          </Col>
                        </Form.Group>
                      </Row>
                      {/* Individual or institute */}
                      <Row>
                        <Form.Group className="ProfileDetailsContainer" controlId="validationPassword">
                          <Col xl={4}>
                            <Form.Label style={{ fontWeight: 600 }}>Institute</Form.Label>
                          </Col>
                          <Col xl={8}>
                            <Form.Control
                              as="select"
                              placeholder="Select the Institute here"
                              name="institute"
                              value={values.institute}
                              onChange={handleChange}
                              isInvalid={
                                !!errors.institute && touched.institute
                                  ? changeInstituteValidate(false)
                                  : changeInstituteValidate(true)
                              }
                              isValid={touched.institute}
                              onBlur={handleBlur}
                            >
                              <option value="NoInstitute" selected>
                                {' '}
                                None
                              </option>
                              {institutes.map(item => {
                                return <option value={item.institute_id}>{item.institute_name}</option>;
                              })}
                            </Form.Control>

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
                            <Form.Control
                              type="date"
                              placeholder="Enter Start date here"
                              name="start_date"
                              value={values.start_date}
                              onChange={handleChange}
                              isInvalid={
                                !!errors.start_date && touched.start_date
                                  ? changeStartDateValidate(false)
                                  : changeStartDateValidate(true)
                              }
                              isValid={touched.start_date}
                              onBlur={handleBlur}
                              min={new Date().toISOString().substring(0, 10)}
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
                              placeholder="Enter End date here"
                              name="end_date"
                              value={values.end_date}
                              onChange={handleChange}
                              isInvalid={
                                !!errors.end_date && touched.end_date
                                  ? changeEndDateValidate(false)
                                  : changeEndDateValidate(true)
                              }
                              isValid={touched.end_date}
                              onBlur={handleBlur}
                            />
                          </Col>
                        </Form.Group>
                      </Row>
                      {/*Class Date*/}
                      <Row>
                        <Form.Group className="ProfileDetailsContainer" controlId="validationschoolName">
                          <Col xl={4}>
                            <Form.Label style={{ fontWeight: 600 }}>General class day</Form.Label>
                          </Col>
                          <Col xl={8}>
                            <Form.Control
                              as="select"
                              name="class_date"
                              value={values.class_date}
                              onChange={handleChange}
                              isInvalid={
                                !!errors.class_date && touched.class_date
                                  ? changeClassDateValidate(false)
                                  : changeClassDateValidate(true)
                              }
                              isValid={touched.class_date}
                              onBlur={handleBlur}
                            >
                              <option value="Monday" selected>
                                {' '}
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
                              placeholder="Enter Class Start time Here"
                              name="start_time"
                              value={values.start_time}
                              onChange={handleChange}
                              isInvalid={
                                !!errors.start_time && touched.start_time
                                  ? changeStartTimeValidate(false)
                                  : changeStartTimeValidate(true)
                              }
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
                              placeholder="Enter Class End time Here"
                              name="end_time"
                              value={values.end_time}
                              onChange={handleChange}
                              isInvalid={
                                !!errors.end_time && touched.end_time
                                  ? changeEndTimeValidate(false)
                                  : changeEndTimeValidate(true)
                              }
                              isValid={touched.end_time}
                              onBlur={handleBlur}
                            />
                          </Col>
                        </Form.Group>
                      </Row>
                      <Row>
                        <Form.Group className="ProfileDetailsContainer" controlId="validationschoolName">
                          <Col xl={4}>
                            <Form.Label style={{ fontWeight: 600 }}>Upload Image</Form.Label>
                          </Col>
                          <Col xl={8}>
                            <Form.Control
                              type="file"
                              placeholder="Notes"
                              name="upload"
                              accept="image/*"
                              onChange={(event: any) => {
                                uploadCourseProfile(event.target.files[0]);
                              }}
                            />
                          </Col>
                        </Form.Group>
                      </Row>
                      <Row>
                        <Form.Group className="ProfileDetailsContainer" controlId="validationschoolName">
                          <Col xl={4}>
                            <Form.Label style={{ fontWeight: 600 }}></Form.Label>
                          </Col>
                          <Col xl={8}>
                            <div className="Buttonforsubmit" style={{ margin: '0px 163px' }}>
                              <Button type="submit" onClick={() => courseCreate(values)}>
                                Add Course
                              </Button>
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
              </Formik>
            </div>
          </Col>
        </div>
      </Container>
    </div>
  );
};

export default AddCourse;
