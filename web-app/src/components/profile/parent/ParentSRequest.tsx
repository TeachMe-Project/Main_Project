import React from "react";
import {Col, Row} from "react-bootstrap";
import ParentLayout from "./ParentLayout";
import {useMediaQuery} from "react-responsive";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
// @ts-ignore
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {FaEye} from "react-icons/fa";

type UpComing = {
    id: number;
    name: string;
    class: string;
    month: string;
    payment: number;
    date: string;
    attendTime: string;
    leaveTime: string;
    classStartTime: string;
    classEndTime: string;
};

const ParentSRequest: React.FC = () => {

    const isPc = useMediaQuery({minWidth: 991});
    const {SearchBar} = Search;

    // @ts-ignore
    return (

        <ParentLayout>
            <Col lg={12} className='px-lg-5'>
                <Row className='d-lg-flex flex-lg-column align-items-center text-lg-center'>
                    <Col lg={12} md={12} xs={12}>
                        <h1 className='text-lg-start header my-lg-3 text-md-center text-center'>
                            Student Requests
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Tabs
                        defaultActiveKey="profile"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="enrollrequest" title="Enroll Requests">
                            <div className="enrollrequest">
                                <Row className="studentrequest">
                                    <Col xl={3} className="cardheader">
                                        Mathematics
                                    </Col>
                                    <Col xl={4} className="cardheader">
                                        Mr. Lasitha Nuwan
                                    </Col>
                                    <Col xl={1}>
                                        <button className="icon">
                                        <FaEye />
                                        </button>
                                    </Col>
                                    <Col xl={2}>
                                        <button className="btn accept">Accept</button>
                                    </Col>
                                    <Col xl={2}>
                                        <button className="btn">Reject</button>
                                    </Col>
                                </Row>

                                <Row className="studentrequest">
                                    <Col xl={3} className="cardheader">
                                        Mathematics
                                    </Col>
                                    <Col xl={4} className="cardheader">
                                        Mr. Lasitha Nuwan
                                    </Col>
                                    <Col xl={1}>
                                        <button className="icon">
                                            <FaEye />
                                        </button>
                                    </Col>
                                    <Col xl={2}>
                                        <button className="btn accept">Accept</button>
                                    </Col>
                                    <Col xl={2}>
                                        <button className="btn">Reject</button>
                                    </Col>
                                </Row>

                                <Row className="studentrequest">
                                    <Col xl={3} className="cardheader">
                                        Mathematics
                                    </Col>
                                    <Col xl={4} className="cardheader">
                                        Mr. Lasitha Nuwan
                                    </Col>
                                    <Col xl={1}>
                                        <button className="icon">
                                            <FaEye />
                                        </button>
                                    </Col>
                                    <Col xl={2}>
                                        <button className="btn accept">Accept</button>
                                    </Col>
                                    <Col xl={2}>
                                        <button className="btn">Reject</button>
                                    </Col>
                                </Row>


                            </div>
                        </Tab>
                        <Tab eventKey="unenrollrequest" title="Unenroll Requests">
                            <div className="unenrollrequest">
                                <Row className="studentrequest">
                                    <Col xl={3} className="cardheader">
                                        Mathematics
                                    </Col>
                                    <Col xl={4} className="cardheader">
                                        Mr. Lasitha Nuwan
                                    </Col>
                                    <Col xl={1}>
                                        <button className="icon">
                                            <FaEye />
                                        </button>
                                    </Col>
                                    <Col xl={2}>
                                        <button className="btn accept">Accept</button>
                                    </Col>
                                    <Col xl={2}>
                                        <button className="btn">Reject</button>
                                    </Col>
                                </Row>
                            </div>
                        </Tab>

                    </Tabs>

                </Row>
            </Col>
        </ParentLayout>
    );

};

export default ParentSRequest;
