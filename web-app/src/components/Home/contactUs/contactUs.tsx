import React from 'react';
import {Col, Form, Image, Row, Button, Container, Card} from "react-bootstrap";
import Images from "../../../assets/images/Images";
import {GrSend} from "react-icons/gr";
import {Formik} from "formik";
import * as yup from 'yup';

const schema = yup.object().shape({
    Name: yup.string().required(),
    Email: yup.string().email().required(),
    Subject: yup.string().required(),
    Message: yup.string().required(),
});

const initialState = {
    Name: '',
    Email: '',
    Subject: '',
    Message: ''
}
const ContactUs: React.FC = () => {
    return (
        <Formik
            validationSchema={schema}
            onSubmit={console.log}
            initialValues={initialState}
        >
            {({
                  handleSubmit,
                  handleChange,
                  handleBlur,
                  values,
                  touched,
                  errors,
              }) => (
                <Container fluid={true} id='ContactUs'>
                    <h1 style={{
                        fontSize: "60px",
                        textAlign: "center",
                        fontFamily: "cursive"
                    }}>Contact Us</h1>
                    <Row className="m-0" style={{height: "fit-content"}}>
                        <Col lg={6} className="d-flex flex-row justify-content-center">
                            <Image src={Images.contactUs} style={{height: "650px"}}></Image>
                        </Col>
                        <Col lg={5} className="d-flex flex-column justify-content-center p-3 ms-5">
                            <h1 className="mb-3">Quick Contact</h1>
                            <Form noValidate onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="validationName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter the name here"
                                        name="Name"
                                        value={values.Name}
                                        onChange={handleChange}
                                        isInvalid={!!errors.Name}
                                        isValid={touched.Name}
                                        onBlur={handleBlur}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.Name}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="validateEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter the email here"
                                        name="Email"
                                        value={values.Email}
                                        onChange={handleChange}
                                        isInvalid={!!errors.Email}
                                        isValid={touched.Email}
                                        onBlur={handleBlur}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.Email}
                                    </Form.Control.Feedback>
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
                                        onBlur={handleBlur}/>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.Subject}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="validateMessage">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea"
                                                  placeholder="Enter the message here"
                                                  rows={4}
                                                  name="Message"
                                                  value={values.Message}
                                                  onChange={handleChange}
                                                  isInvalid={!!errors.Message}
                                                  isValid={touched.Message}
                                                  onBlur={handleBlur}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.Message}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Button type="submit" variant="primary" className="mt-3 px-4 py-2"
                                        style={{borderRadius: "20px"}}><GrSend
                                    style={{marginRight: "3px"}}/> Submit</Button>
                            </Form>
                        </Col>
                    </Row>
                    <Row className="d-flex flex-row justify-content-evenly mt-2">
                        <Col xl={2}>
                            <Card style={{
                                padding: "10px",
                                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                                display: "flex",
                                flexDirection: "row"
                            }}>
                                <Card.Img variant="top" src={Images.phone} style={{width: "35%", padding: "10px"}}/>
                                <Card.Body style={{padding: "0", paddingTop: "10px"}}>
                                    <Card.Title style={{textAlign: "center"}}>Phone</Card.Title>
                                    <Card.Text style={{textAlign: "center"}}>+9477-1234567</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={2}>
                            <Card style={{
                                padding: "10px",
                                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                                display: "flex",
                                flexDirection: "row"
                            }}>
                                <Card.Img variant="top" src={Images.location} style={{width: "35%", padding: "10px"}}/>
                                <Card.Body style={{padding: "0", paddingTop: "10px"}}>
                                    <Card.Title style={{textAlign: "center"}}>Address</Card.Title>
                                    <Card.Text style={{textAlign: "center"}}>35 ,Reid Avenue, Colombo 7</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={2}>
                            <Card style={{
                                padding: "10px",
                                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                                display: "flex",
                                flexDirection: "row"
                            }}>
                                <Card.Img variant="top" src={Images.email} style={{width: "35%", padding: "10px"}}/>
                                <Card.Body style={{padding: "0", paddingTop: "10px"}}>
                                    <Card.Title style={{textAlign: "center"}}>Email</Card.Title>
                                    <Card.Text style={{textAlign: "center"}}>contact@learningsl.lk</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>)}
        </Formik>
    );
};

export default ContactUs;