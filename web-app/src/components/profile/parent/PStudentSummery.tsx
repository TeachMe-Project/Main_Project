import React, {useState} from 'react';
import ParentLayout from "./ParentLayout";
import {Col, ListGroup, Row, Tab, Tabs} from "react-bootstrap";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {useNavigate, useParams} from "react-router-dom";
import Images from "../../../assets/images/Images";
// @ts-ignore
import { faker } from '@faker-js/faker';
// @ts-ignore
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
// @ts-ignore
import { Bar } from 'react-chartjs-2';
import Parentsaveragetimechart from "./Parentaveragetimechart";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PStudentSummery = () => {

    const navigate = useNavigate();
    const params = useParams();
    console.log(params.subject);
    const [num, setNum] = useState(0);

    function randomNumberInRange() {
        return Math.floor(Math.random() * (60 - 0 + 1)) + 0;
    }


    return (
        <ParentLayout>
            <Col lg={12} className='px-lg-5'>
                <Row className='d-lg-flex flex-lg-column align-items-center text-lg-center'>
                    <Col lg={12} md={12} xs={12}>
                        <h1 className='text-lg-start header my-lg-3 text-md-center text-center d-flex flex-row align-items-center justify-content-between'>
                            Summary
                            <AiOutlineCloseCircle className='me-lg-4' style={{cursor: "pointer"}}
                                                  onClick={() => navigate(-1)}/>
                        </h1>
                    </Col>
                </Row>
                <Row>

                    <Col lg={5} >
                        <Parentsaveragetimechart subject={params.subject} />
                    </Col>
                    <Col lg={5} >
                        <div className="chart">
                            <div className="card shadow-sm p-3 mb-5 bg-white rounded" style={{ width: '29rem', height: '15rem' }}>
                                <div className="card-body">
                                    <div className="fundsRow" style={{ display: 'Flex', marginBottom: '20px' }}>
                                        <Col xl={8}>
                                            <h5 className="card-title" style={{ marginBottom: '20px', color: '#1e90ff' }}>
                                                Apps Used
                                            </h5>
                                        </Col>
                                        <Col xl={4}>
                                            <h5 className="card-title" style={{ marginBottom: '20px', color: '#1e90ff' }}>
                                                Time (Mins)
                                            </h5>
                                        </Col>
                                    </div>
                                    <div className="fundsRow" style={{ display: 'Flex', marginBottom: '20px' }}>
                                        <Col xl={8}>
                                            <p style={{ marginRight: '20px' }}>
                                                <b>Whatsapp.exe</b>
                                            </p>
                                        </Col>
                                        <Col xl={4}>
                                            <p className="text-center">
                                                <b>{randomNumberInRange()}</b>
                                            </p>
                                        </Col>
                                    </div>

                                    <div className="fundsRow" style={{ display: 'Flex', marginBottom: '20px' }}>
                                        <Col xl={8}>
                                            <p style={{ marginRight: '20px' }}>
                                                <b>Spotify</b>
                                            </p>
                                        </Col>
                                        <Col xl={4}>
                                            <p className="text-center">
                                                <b>{randomNumberInRange()}</b>
                                            </p>
                                        </Col>
                                    </div>
                                </div>
                            </div>

                            {/* <Monthlyattendancechart /> */}
                        </div>

                    </Col>
                </Row>
            </Col>
        </ParentLayout>
    );
};

export default PStudentSummery;