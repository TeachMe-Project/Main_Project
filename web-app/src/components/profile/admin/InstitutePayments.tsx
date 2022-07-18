import React from 'react';
import {Col, Row} from "react-bootstrap";
import AdminLayout from "./AdminLayout";

const InstitutePayments = () => {
    return (
        <div>
            <AdminLayout>
                <Col lg={12} className='px-lg-5'>
                    <Row className='d-lg-flex flex-lg-column align-items-center text-lg-center'>
                        <Col lg={12}>
                            <h1 className='text-lg-start header my-lg-3'>
                                Institute's Payments
                            </h1>
                        </Col>
                    </Row>

                </Col>
            </AdminLayout>
        </div>
    );
};

export default InstitutePayments;