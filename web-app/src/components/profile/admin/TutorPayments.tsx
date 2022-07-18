import React from 'react';
import AdminLayout from "./AdminLayout";
import {Col, Row} from "react-bootstrap";

const TutorPayments = () => {
    return (
        <AdminLayout>
            <Col lg={12} className='px-lg-5'>
                <Row className='d-lg-flex flex-lg-column align-items-center text-lg-center'>
                    <Col lg={12}>
                        <h1 className='text-lg-start header my-lg-3'>
                            Tutor's Payments
                        </h1>
                    </Col>
                </Row>

            </Col>
        </AdminLayout>
    );
};

export default TutorPayments;