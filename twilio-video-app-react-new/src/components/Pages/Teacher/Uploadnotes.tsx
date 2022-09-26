import React, { useState } from "react";
import {Alert, Button, Col, Container, Form, Row} from "react-bootstrap";
import { Formik } from "formik";
import { ButtonCommon } from '../../Button/ButtonCommon';
import * as yup from "yup";

// @ts-ignore
import {v4 as uuidv4} from "uuid"
import {FirebaseApp} from "../../../auth0/FirebaseConfig";
import "bootstrap/dist/css/bootstrap.min.css";
import {useParams} from "react-router-dom";
import axios from "axios";
// @ts-ignore
import swal from "@sweetalert/with-react";


const schema = yup.object().shape({
  topic: yup
    .string()
    .required()
    .label("Topic")
});

const initialState = {
  topic: ""
};

export const Uploadnotes = () => {

  const [topicValidate, settopicValidate] = useState<boolean>(false);
  const changetopicValidate = (status: boolean): boolean => {
    if (status) {
      settopicValidate(true);
      return false;
    } else {
      settopicValidate(false);
      return true;
    }
  };

  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [imageUpload, setImageUpload] = useState<any>(null);
  const [file, setFile] = useState<any>(null);
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const params = useParams();
  const [loading, setLoading] = useState(false);

  console.log(params.course_id)

  const uploadFile = (event:any) => {

    // console.log(event);
    setUploading(true)
    const storageRef = FirebaseApp.storage().ref();
    console.log(storageRef);
    const fileRef = storageRef.child(`/Notes/${event.name + uuidv4()}`);
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

  const submitNotes = (values:any) => {
    console.log(values)
    const apiData = JSON.stringify({
      "topic": `${values.topic}`,
      "course_id": `${params.course_id}`,
      "note": `${file}`,
    })
    axios({
      method: "POST",
      url: "https://learnx.azurewebsites.net/notes/createNotes",
      headers: {
        'Content-Type': 'application/json'
      },
      data: apiData
    }).then((apiRes) => {
      // console.log(apiData)
      // console.log(apiRes.status);
      if (apiRes.status === 200) {
        setLoading(false);
        swal(`Poof! You have successfully Uploaded the Note`, {
          icon: "success",
        });
      }
    }).catch((error) => {
      console.log(error.message)
    })
  }


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
                              placeholder="Enter name of the lesson"
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

                      <Row>
                        <Form.Group className="ProfileDetailsContainer" controlId="validationschoolName">
                          <Col xl={4}>
                            <Form.Label style={{ fontWeight: 600 }}>Upload File</Form.Label>
                          </Col>
                          <Col xl={8}>
                            <Form.Control
                              type="file"
                              placeholder="Notes"
                              name="upload"
                              accept="application/pdf"
                              onChange={(event:any) => {
                                uploadFile(event.target.files[0]);
                              }}
                            />
                          </Col>
                        </Form.Group>
                      </Row>
                      {uploading &&
                      <Row className="px-5 mx-5 py-3" >
                        <Alert variant="success" >Uploading {progress}%</Alert>
                      </Row>
                      }
                      <Row>
                        <Form.Group className="ProfileDetailsContainer" controlId="validationschoolName">
                          <Col xl={4}>
                            <Form.Label style={{ fontWeight: 600 }}></Form.Label>
                          </Col>
                          <Col xl={8}>
                            <div className="Buttonforsubmit" style={{ marginTop: '1rem', marginLeft: '8rem' }}>
                              <Button name={'Submit'} onClick={()=>submitNotes(values)}>Upload</Button>
                            </div>
                          </Col>
                        </Form.Group>
                      </Row>
                    </Form>
                    {/* <h4>Uploaded {progress}%</h4> */}
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

export default Uploadnotes;
