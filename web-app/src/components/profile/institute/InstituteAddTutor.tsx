import React, {useState} from 'react';
import InstituteLayout from "./InstituteLayout";
import {Button, Card, Col, Form, ListGroup, Row} from "react-bootstrap";
import Images from "../../../assets/images/Images";
import {FaSearch} from "react-icons/fa";
import axios, {AxiosResponse} from "axios";
import {useParams} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";
// @ts-ignore
import swal from "@sweetalert/with-react";


const InstituteAddTutor = () => {
    const [tutor, setTutor] = useState({
        tutor_name: '',
        email: '',
        contact: '',
        description: '',
        teacher_id: ''
    });
    const [loading, setLoading] = useState(false);
    const params = useParams();
    const {user} = useAuth0();
    const user_id = user?.sub;

    const searchTeacher = (email: String) => {
        const data = JSON.stringify({
            "teacher_email": `${email}`,
        });
        axios({
            method: "POST",
            url: `https://learnxy.azurewebsites.net/institute/searchTeacher`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        }).then((res: AxiosResponse) => {
            const data = res.data[0];
            console.log(data)
            setTutor({
                tutor_name: data.teacher.first_name + " " + data.teacher.last_name,
                email: data.username,
                contact: data.teacher.contact_no,
                description: data.teacher.description,
                teacher_id: data.teacher.teacher_id
            })
            setLoading(true)
        })
    }

    const tutorRequest = (teacher_id: String) => {
        const data = JSON.stringify({
            "teacher_id": teacher_id,
        });
        axios({
            method: "POST",
            url: `https://learnxy.azurewebsites.net/institute/addTeacher/${user_id}`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        }).then((res: AxiosResponse) => {
            if (res.status == 200) {
                console.log("Done")
                swal(`Poof! You have successfully added Tutor to your institute`, {
                    icon: "success",
                });
                setLoading(false);
            }
        }).catch(function (error) {
            console.log(error.message)
        })
    }

    // @ts-ignore
    return (
        <InstituteLayout>
            <Col lg={12} className='px-lg-5'>
                <Row className='d-lg-flex flex-lg-column align-items-center text-lg-center'>
                    <Col lg={12} md={12} xs={12}>
                        <h1 className='text-lg-start header my-lg-3 text-md-center text-center'>
                            Add Tutor
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col className="px-3 d-flex flex-row align-items-center">
                        <Form.Control type="text" placeholder="Enter email of the tutor" className='mb-3'
                                      onChange={(event) => searchTeacher(event.target.value)}/>
                        <Button variant='secondary' className='mb-3 ms-2'
                                style={{borderRadius: "50%"}}><FaSearch/></Button>
                    </Col>
                </Row>
                <Row>
                    {loading && <Col md={12} className='d-flex flex-column align-items-center  next-table-list'>
                        <Card className='d-flex flex-row w-100'>
                            <Card.Img style={{width: "200px", height: "200px", borderRadius: "50%"}} className='my-auto'
                                      variant="top"
                                      src={Images.tutorpro}/>
                            <Card.Body>
                                <Card.Title>Tutor Name: {tutor.tutor_name}</Card.Title>
                                <ListGroup className="list-group-flush" style={{width: "fit-content"}}>
                                    <ListGroup.Item className="px-0"><span
                                        style={{fontWeight: "700", marginRight: "10px"}}>Email:</span> {tutor.email}
                                    </ListGroup.Item>
                                    <ListGroup.Item className="px-0"><span style={{
                                        fontWeight: "700",
                                        marginRight: "10px"
                                    }}>Contact-No:</span> {tutor.contact}</ListGroup.Item>
                                    <ListGroup.Item className="px-0"><span style={{
                                        fontWeight: "700",
                                        marginRight: "10px"
                                    }}>Description</span></ListGroup.Item>
                                </ListGroup>
                                <Card.Text>
                                    {tutor.description}
                                </Card.Text>
                                <Button style={{float: "right", borderRadius: "15px"}} variant='secondary'
                                        onClick={() => tutorRequest(tutor.teacher_id)}>Add to Institute</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    }
                    {!loading &&
                    <Col md={12} className='d-flex flex-column align-items-center next-table-list my-auto '>
                        <h1 style={{fontSize: "2.5rem"}} className='my-3'>Let's recruit a tutor to our institute</h1>
                        <img src={Images.teacherSignup} className='mt-2' style={{width: '400px'}}/>
                    </Col>}
                </Row>
            </Col>
        </InstituteLayout>
    );
};

export default InstituteAddTutor;