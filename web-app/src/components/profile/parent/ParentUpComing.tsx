import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ParentSidebar from "./ParentSidebar";

const ParentUpComing: React.FC = () => {
    return (
        <Container fluid={true}>
            <Row className='ps-0 bg-black' style={{height:"10vh"}}>
                <h1>Nav Bar</h1>
            </Row>
            <Row className='ps-0'>
                <Col lg={12} className="ps-0 d-flex flex-row">
                    <ParentSidebar/>
                    <Row className='ms-lg-5 mt-lg-5 w-100 me-5'>
                        <Row>
                            <h1>
                                Upcoming Payment
                            </h1>
                        </Row>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default ParentUpComing;