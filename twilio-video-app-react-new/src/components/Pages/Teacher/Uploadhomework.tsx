import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Formik } from "formik";
import { ButtonCommon } from '../../Button/ButtonCommon';
import * as yup from "yup";

// @ts-ignore
import LazyLoad from "react-lazyload";
import "bootstrap/dist/css/bootstrap.min.css";
import uploadFileToBlob, { isStorageConfigured } from '../../AzureCloudStorage/azure-storage-blob-homework';
// import AzureCloudStorage from "../../AzureCloudStorage/AzureCloudStorageHomework";

const storageConfigured = isStorageConfigured();


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
  deadline: yup
    .string()
    .required()
    .label("Deadline")
});

const initialState = {
  topic: ""
};

export const Uploadhomework = () => {
  const [isEditing, setISEditing] = useState(false);

  const [pageStage, setPageStage] = useState(2);
  const [topicValidate, settopicValidate] = useState<boolean>(false);
  // const [descriptionValidate, setdescriptionValidate] = useState(false);
  // const [deadlineValidate, setdeadlineValidate] = useState(false);

  // all blobs in container
  const [blobList, setBlobList] = useState<string[]>([]);

  // current file to upload into container
  const [fileSelected, setFileSelected] = useState(null);

  // UI/form management
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [inputKey, setInputKey] = useState(Math.random().toString(36));

  const changetopicValidate = (status: boolean): boolean => {
    if (status) {
      settopicValidate(true);
      return false;
    } else {
      settopicValidate(false);
      return true;
    }
  };

  const onFileChange = (event: any) => {
    // capture file into state
    setFileSelected(event.target.files[0]);
  };

  const onFileUpload = async () => {
    // prepare UI
    setUploaded(false);
    setUploading(true);

    // *** UPLOAD TO AZURE STORAGE ***
    const blobsInContainer: string[] = await uploadFileToBlob(fileSelected);
    // await uploadFileToBlob(fileSelected);

    // prepare UI for results
    setBlobList(blobsInContainer);

    // reset state/form
    setFileSelected(null);
    setUploading(false);
    setUploaded(true);
    setInputKey(Math.random().toString(36));
  };

  const DisplayForm = () => (
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



                      <Row>
                        <Form.Group className="ProfileDetailsContainer" controlId="validationschoolName">
                          <Col xl={4}>
                            <Form.Label style={{ fontWeight: 600 }}>Upload File</Form.Label>
                          </Col>
                          <Col xl={8}>
                            <Form.Control 
                              type="file" 
                              placeholder="Notes" 
                              name="fileupload" 
                              accept="application/pdf"
                              onChange={onFileChange} />
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
                              <ButtonCommon name={'Submit'} onClick={onFileUpload} />
                            </div>
                          </Col>
                        </Form.Group>
                      </Row>
                      {/* <AzureCloudStorage /> */}
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

  return (
    <div>
      {!storageConfigured && <div>Storage is not configured.</div>}
      {storageConfigured && !uploading && DisplayForm()}
      {storageConfigured && uploading && <div>Uploading</div>}
      {storageConfigured && uploaded && <div>Successfully uploaded. Go back to page</div>}
    </div>
  );
};

export default Uploadhomework;
