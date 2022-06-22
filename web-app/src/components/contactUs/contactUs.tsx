import React, {useState} from 'react';
import {Col, Form, Image, Row, FormText, Button, Container, Card} from "react-bootstrap";
import Images from "../../assets/images/Images";
import {GrSend} from "react-icons/gr";


const ContactUs: React.FC = () => {
    return (
        <Container fluid={true}>
            <h1 style={{
                fontSize: "60px",
                textAlign: "center",
                fontFamily: "cursive"
            }}>Contact Us</h1>
            <Row className="m-0" style={{height: "fit-content"}}>
                <Col xl={6} className="d-flex flex-row justify-content-center">
                    <Image src={Images.contactUs} style={{height: "650px"}}></Image>
                </Col>
                <Col xl={5} className="d-flex flex-column justify-content-center p-3 ms-5">
                    <h1 className="mb-3">Quick Contact</h1>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control required type="text" placeholder="Enter the name here" id="name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control required type="email" placeholder="Enter the email here" id="email"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control required type="text" placeholder="Enter the subject here" id="subject" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control required as="textarea" placeholder="Enter the message here" rows={4} id="message" />
                        </Form.Group>
                        <Button type="submit" variant="primary" className="mt-3 px-4 py-2"><GrSend
                            style={{marginRight: "3px"}}/> Submit</Button>
                    </Form>
                </Col>
            </Row>
            <Row className="d-flex flex-row justify-content-evenly mt-2">
                <Col xl={2}>
                    <Card style={{padding: "10px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                        <Card.Img variant="top" src={Images.phone} style={{width: "35%", margin: "auto"}}/>
                        <Card.Body style={{padding: "0", paddingTop: "10px"}}>
                            <Card.Title style={{textAlign: "center"}}>+9477-1234567</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={2}>
                    <Card style={{padding: "10px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                        <Card.Img variant="top" src={Images.location} style={{width: "35%", margin: "auto"}}/>
                        <Card.Body style={{padding: "0", paddingTop: "10px"}}>
                            <Card.Title style={{textAlign: "center"}}>35 ,Reid Avenue, Colombo 7</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={2}>
                    <Card style={{padding: "10px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                        <Card.Img variant="top" src={Images.email} style={{width: "35%", margin: "auto"}}/>
                        <Card.Body style={{padding: "0", paddingTop: "10px"}}>
                            <Card.Title style={{textAlign: "center"}}>contact.teachme.lk</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactUs;