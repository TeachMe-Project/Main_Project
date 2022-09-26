import React, {useState} from 'react';
import {Button, Col, Container, Form, Image, Row} from "react-bootstrap";
import {GrSend} from "react-icons/gr";
import {Formik} from "formik";
import * as yup from 'yup';
import axios, {AxiosResponse} from "axios";
// @ts-ignore
import swal from "@sweetalert/with-react";
import Loader from "../../../auth0/Loader";

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

    const [loading, setLoading] = useState(false);
    const handleOnSubmit = (values: any) => {
        setLoading(true);
        const data = JSON.stringify({
            "email": `${values.Email}`,
            "name": `${values.Name}`,
            "subject": `${values.Subject}`,
            "message": `${values.Message}`
        });
        axios({
            method: "POST",
            url: "https://learnx.azurewebsites.net/contact/contactUs",
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        }).then((res: AxiosResponse) => {
                if (res.status === 200) {
                    swal({
                        title: "Thanks you!",
                        text: `Thank you for contacting us, we'll be in touch very soon.`,
                        icon: "success",
                        buttons: {
                            confirm: true
                        },
                    })
                }
            }
        ).catch((error) => {
            console.log(values)
            console.log("error")
            console.log(error.message)
        })
    }

    return (
        <Formik
            validationSchema={schema}
            onSubmit={handleOnSubmit}
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
                <Container fluid={true} id='ContactUs' className='about-us'>
                    <Row className="m-0" style={{height: "fit-content"}}>
                        <Col lg={6} className="d-flex flex-row justify-content-center">
                            <Image src={'/Images/contactus.jpg'} style={{height: '450px'}}></Image>
                        </Col>
                        <Col lg={5} className="d-flex flex-column justify-content-center p-3 ms-lg-5">
                            <Form noValidate onSubmit={handleSubmit}>
                                <Form.Group className="mb-2" controlId="validationName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter the name here"
                                        name="Name"
                                        value={values.Name}
                                        onChange={handleChange}
                                        isInvalid={!!errors.Name && touched.Name}
                                        isValid={touched.Name}
                                        onBlur={handleBlur('Name')}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.Name}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-2" controlId="validateEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter the email here"
                                        name="Email"
                                        value={values.Email}
                                        onChange={handleChange}
                                        isInvalid={!!errors.Email && touched.Email}
                                        isValid={touched.Email}
                                        onBlur={handleBlur("Email")}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.Email}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                {loading && <Loader/>}
                                <Form.Group className="mb-2" controlId="validateSubject">
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter the subject here"
                                        name="Subject"
                                        value={values.Subject}
                                        onChange={handleChange}
                                        isInvalid={!!errors.Subject && touched.Subject}
                                        isValid={touched.Subject}
                                        onBlur={handleBlur("Subject")}/>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.Subject}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-2" controlId="validateMessage">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea"
                                                  placeholder="Enter the message here"
                                                  rows={4}
                                                  name="Message"
                                                  value={values.Message}
                                                  onChange={handleChange}
                                                  isInvalid={!!errors.Message && touched.Message}
                                                  isValid={touched.Message}
                                                  onBlur={handleBlur("Message")}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.Message}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Button type="submit" variant="primary" className="mt-2 px-3 py-1"
                                        style={{borderRadius: "20px", float: "right"}}><GrSend
                                    style={{marginRight: "8px"}}
                                /> Submit</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>)}
        </Formik>
    );
};

export default ContactUs;