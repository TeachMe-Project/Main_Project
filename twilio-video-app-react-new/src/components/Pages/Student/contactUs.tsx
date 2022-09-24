import React from 'react';
import { Col, Form, Image, Row, Button, Container, Card } from 'react-bootstrap';
import Images from '../../../images/SanFrancisco.jpg';

import { GrSend } from 'react-icons/gr';
import { Formik } from 'formik';
import * as yup from 'yup';
import ImageUpload from "./ImageUpload";

const schema = yup.object().shape({
  Name: yup.string().required(),
  Email: yup
    .string()
    .email()
    .required(),
  Subject: yup.string().required(),
  Message: yup.string().required(),
});

const initialState = {
  Name: '',
  Email: '',
  Subject: '',
  Message: '',
};
const ContactUs: React.FC = () => {
  return (
<>
    <Formik validationSchema={schema} onSubmit={console.log} initialValues={initialState}>
      {({ handleSubmit, handleChange, handleBlur, values, touched, errors }) => (
        <Container fluid={true} id="ContactUs">
          <Row className="mt-3" style={{ height: 'fit-content' }}>
            <Col lg={5} className="d-flex flex-row justify-content-center">
              <Image src={'/Images/contactus.jpg'} style={{ height: '450px' }}></Image>
            </Col>
            <Col lg={6} className="d-flex flex-column justify-content-center p-3 ms-5">
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="validationName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name here"
                    name="Name"
                    value={values.Name}
                    onChange={handleChange}
                    isInvalid={!!errors.Name}
                    isValid={touched.Name}
                    onBlur={handleBlur}
                  />
                  <Form.Control.Feedback type="invalid">{errors.Name}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="validateEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter email here"
                    name="Email"
                    value={values.Email}
                    onChange={handleChange}
                    isInvalid={!!errors.Email}
                    isValid={touched.Email}
                    onBlur={handleBlur}
                  />
                  <Form.Control.Feedback type="invalid">{errors.Email}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="validateSubject">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter the subject here"
                    name="Subject"
                    value={values.Subject}
                    onChange={handleChange}
                    isInvalid={!!errors.Subject}
                    isValid={touched.Subject}
                    onBlur={handleBlur}
                  />
                  <Form.Control.Feedback type="invalid">{errors.Subject}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="validateMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Enter the message here"
                    rows={4}
                    name="Message"
                    value={values.Message}
                    onChange={handleChange}
                    isInvalid={!!errors.Message}
                    isValid={touched.Message}
                    onBlur={handleBlur}
                  />
                  <Form.Control.Feedback type="invalid">{errors.Message}</Form.Control.Feedback>
                </Form.Group>
                <Button
                  type="submit"
                  variant="primary"
                  className="mt-3 px-4 py-2"
                  style={{ borderRadius: '20px', float: 'right' }}
                >
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      )}
    </Formik>
      <ImageUpload/>
  </>
  );
};

export default ContactUs;
