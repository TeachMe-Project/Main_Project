import React from 'react';
import {Col, Row, Tab, Tabs} from "react-bootstrap";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {useNavigate} from "react-router-dom";

const CourseProfile = () => {
    const navigate = useNavigate();

    return (
        <Row className='view-courses'>
            <Col lg={12} className='px-5'>
                <h1 style={{color: "#2c3e50"}}
                    className='text-lg-start header my-lg-3 text-md-center text-center d-flex flex-row align-items-center justify-content-between'>Mathematics
                    <AiOutlineCloseCircle className='me-lg-4' style={{cursor: "pointer"}}
                                          onClick={() => navigate(-1)}/>
                </h1>
                <h3 style={{color: "#2c3e50"}}>Mr. Saman Kamalanath</h3>
                <Tabs
                    defaultActiveKey="details"
                    id="uncontrolled-tab-example"
                    className="mt-3"
                >
                    <Tab eventKey="details" title="Course Details" className='d-flex flex-row align-items-center'>
                        <Col lg={3} className='d-flex flex-column course-titles'>
                            <span className='mt-4 mb-2'>
                                Title
                            </span>
                            <span className='my-2'>
                                Subject
                            </span>
                            <span className='my-2'>
                                Grade
                            </span>
                            <span className='my-2'>
                                Medium
                            </span>
                            <span className='my-2'>
                                Fee
                            </span>
                            <span className='my-2'>
                                Start Date
                            </span>
                            <span className='my-2'>
                                End Date
                            </span>
                            <span className='my-2'>
                                Class Day
                            </span>
                            <span className='my-2'>
                                Start Time
                            </span>
                        </Col>
                        <Col lg={1} className='d-flex flex-column'>
                            <span className='mt-4 mb-2'>
                                :
                            </span>
                            <span className='my-2'>
                                :
                            </span>
                            <span className='my-2'>
                                :
                            </span>
                            <span className='my-2'>
                                :
                            </span>
                            <span className='my-2'>
                                :
                            </span>
                            <span className='my-2'>
                                :
                            </span>
                            <span className='my-2'>
                                :
                            </span>
                            <span className='my-2'>
                                :
                            </span>
                            <span className='my-2'>
                                :
                            </span>
                        </Col>
                        <Col lg={7} className='d-flex flex-column ms-3'>
                            <span className='mt-4 mb-2'>
                                Mathematics By Mr Saman Kamalanath
                            </span>
                            <span className='my-2'>
                                Mathematics
                            </span>
                            <span className='my-2'>
                                Grade 08
                            </span>
                            <span className='my-2'>
                                Sinhala
                            </span>
                            <span className='my-2'>
                                LKR 2500
                            </span>
                            <span className='my-2'>
                                2022-03-24
                            </span>
                            <span className='my-2'>
                                2022-03-24
                            </span>
                            <span className='my-2'>
                                Thursday
                            </span>
                            <span className='my-2'>
                                05:00 PM
                            </span>
                        </Col>

                    </Tab>
                    <Tab eventKey="students" title="Students">
                    </Tab>
                    <Tab eventKey="schedule" title="Class-Schedules">
                    </Tab>
                </Tabs>
            </Col>
        </Row>
    );
};

export default CourseProfile;