import React, {useEffect, useState} from 'react';
import {Alert, Col, Form, Row, Tab, Tabs} from "react-bootstrap";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import {useAuth0} from "@auth0/auth0-react";
import {Formik} from "formik";
import axios, {AxiosResponse} from "axios";
import AdminLayout from "./AdminLayout";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {useNavigate, useParams} from "react-router-dom";


type initialStateType = {
    InstituteName: string,
    OwnerName: string,
    Location: string,
    Email: string,
    Mobile_Number: string,
    Description: string,
    Address: string,
    AccountName: string,
    BankName: string,
    BranchName: string,
    AccountNo: string

}


const ViewInstituteProfile = () => {

    const navigate = useNavigate();
    const {user} = useAuth0();
    const [enableEditProfile, setEnableEditProfile] = useState(true);
    const [passwordMail, setPasswordMail] = useState(null);
    const [isEditProfile, setIsEditProfile] = useState(false);
    const params = useParams();
    const [isDataLoading, setIsDataLoading] = useState(true);
    const [error, setError] = useState('');
    const [initialState, setInitialState] = useState<initialStateType>({
        InstituteName: 'Sigma Institute',
        OwnerName: 'Avishka Hettarachchi',
        Location: 'Malabe',
        Email: 'sigmainst@gmail.com',
        Mobile_Number: '0771234567',
        Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 15nd more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        Address: 'Malebe, Colombo 07',
        AccountName: 'Avishka Hettarachchi',
        BankName: 'Bank OF Ceylon',
        BranchName: 'Malabe',
        AccountNo: '6612345678'
    });

    // useEffect(() => {
    //     axios({
    //         method: "GET",
    //         url: `http://localhost:8081/teacher/${params.tutor_id}`,
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //     }).then((res: AxiosResponse) => {
    //         setInitialState({
    //             Firstname: res.data[0].first_name,
    //             Lastname: res.data[0].last_name,
    //             Accountname: res.data[0].account_no,
    //             Accountno: res.data[0].account_no,
    //             Bankname: res.data[0].bank_name,
    //             Branchname: res.data[0].branch_name,
    //             Description: res.data[0].description,
    //             Mobile: res.data[0].contact_no,
    //             Qualification: res.data[0].qualification,
    //             Email: res.data[0].user.username
    //         })
    //         if (res.status === 200) {
    //             console.log(initialState)
    //             setIsDataLoading(true);
    //         }
    //     }).catch((error) => {
    //         console.log(error.message)
    //     })
    // }, []);

    return (
        <AdminLayout>
            <Col lg={12} className='px-lg-5'>
                <Row className='d-lg-flex flex-lg-column align-items-center text-lg-center'>
                    <Col lg={12} md={12} xs={12}>
                        <h1 className='text-lg-start header my-lg-3 text-md-center text-center d-flex flex-row align-items-center justify-content-between'>
                            Institute Profile
                            <AiOutlineCloseCircle className='me-lg-4' style={{cursor: "pointer"}}
                                                  onClick={() => navigate(-1)}/>
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3} className='d-flex flex-column justify-content-center align-items-center'>
                        <img src={user?.picture} className='w-100' style={{borderRadius: "50%"}}/>

                        {passwordMail === "success" &&
                        <Alert variant="success" className="p-1 mt-2"> Check email and reset the password</Alert>
                        }

                    </Col>
                    <Col className='px-lg-5'>
                        {isDataLoading &&
                        <Formik
                            onSubmit={console.log}
                            initialValues={initialState}
                        >
                            {({
                                  values,
                              }) => (
                                <Row className="pb-md-0 pb-4">
                                    <Form noValidate>
                                        <Tabs
                                            defaultActiveKey="profile"
                                            id="uncontrolled-tab-example"
                                            className="mb-3"
                                        >
                                            <Tab eventKey="profile" title="Profile Details">
                                                <Row className="mt-lg-0 pe-lg-4 mt-md-3 d-flex flex-column">
                                                    <Col lg={10} md={6} sm={12} xs={12}>
                                                        <Form.Group className="mb-2"
                                                                    controlId="validationInstituteName">
                                                            <Form.Label style={{fontWeight: 600}}>Institute
                                                                Name</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter institute's name"
                                                                name="InstituteName"
                                                                value={values.InstituteName}
                                                                disabled={enableEditProfile}
                                                            />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg={10} md={6} sm={12} xs={12}>
                                                        <Form.Group className="mb-2" controlId="validationEmail">
                                                            <Form.Label style={{fontWeight: 600}}>Institute's
                                                                email</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                name="Email"
                                                                value={values.Email}
                                                                disabled={enableEditProfile}
                                                            />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row className="mt-lg-0 pe-lg-4 mt-md-3 d-flex flex-column">
                                                    <Col lg={10} md={6} sm={12} xs={12}>
                                                        <Form.Group className="mb-2" controlId="validationOwnerName">
                                                            <Form.Label style={{fontWeight: 600}}>Owner's
                                                                name</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                name="OwnerName"
                                                                value={values.OwnerName}
                                                                disabled={enableEditProfile}
                                                            />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg={10} md={6} sm={12} xs={12}>
                                                        <Form.Group className="mb-2" controlId="validationLocation">
                                                            <Form.Label style={{fontWeight: 600}}>Location</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                name="Location"
                                                                value={values.OwnerName}
                                                                disabled={enableEditProfile}
                                                            />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                            </Tab>
                                            <Tab eventKey="description" title="Description">
                                                <Row className="mt-lg-0 pe-lg-4 mt-md-3">
                                                    <Col lg={10} md={12} sm={12} xs={12}>
                                                        <Form.Group className="mb-2" controlId="validationMobile">
                                                            <Form.Label style={{fontWeight: 600}}>Mobile
                                                                Number</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                name="Mobile"
                                                                value={values.Mobile_Number}
                                                                disabled={enableEditProfile}
                                                            />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row className="mt-lg-0 pe-lg-4 mt-md-3">
                                                    <Col lg={10} md={12} sm={12} xs={12}>
                                                        <Form.Group className="mb-2"
                                                                    controlId="validationAddress">
                                                            <Form.Label
                                                                style={{fontWeight: 600}}>Institute's
                                                                Address</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                name="Address"
                                                                value={values.Address}
                                                                disabled={enableEditProfile}
                                                            />
                                                                                                                    </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row className="mt-lg-0 pe-lg-4 mt-md-3">
                                                    <Col lg={10} md={12} sm={12} xs={12}>
                                                        <Form.Group className="mb-2" controlId="validationDescription">
                                                            <Form.Label
                                                                style={{fontWeight: 600}}>Description</Form.Label>
                                                            <Form.Control as="textarea"
                                                                          placeholder="Enter a description for the institute in order to describe
                                                                            the institute"
                                                                          rows={4}
                                                                          name="Description"
                                                                          value={values.Description}
                                                                          disabled={enableEditProfile}
                                                            />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                            </Tab>
                                            <Tab eventKey="bankdetails" title="Bank Details">
                                                <Row className="mt-lg-0 pe-lg-4 mt-md-3">
                                                    <Col lg={10} md={12} sm={12} xs={12}>
                                                        <Form.Group className="mb-2" controlId="validationAccountName">
                                                            <Form.Label style={{fontWeight: 600}}>Account Holder's
                                                                Name</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                name="AccountName"
                                                                value={values.AccountName}
                                                                disabled={enableEditProfile}
                                                            />
                                                             </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row className="mt-lg-0 pe-lg-4 mt-md-3 d-flex flex-column">
                                                    <Col lg={10} md={6} sm={12} xs={12}>
                                                        <Form.Group className="mb-2" controlId="validationBankName">
                                                            <Form.Label style={{fontWeight: 600}}>Bank Name</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter bank name"
                                                                name="BankName"
                                                                value={values.BankName}
                                                                disabled={enableEditProfile}
                                                            />
                                                           </Form.Group>
                                                    </Col>
                                                    <Col lg={10} md={6} sm={12} xs={12}>
                                                        <Form.Group className="mb-2" controlId="validationBranchName">
                                                            <Form.Label style={{fontWeight: 600}}>Branch
                                                                Name</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter branch name"
                                                                name="BranchName"
                                                                value={values.BranchName}
                                                                disabled={enableEditProfile}
                                                            />
                                                            </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row className="mt-lg-0 pe-lg-4 mt-md-3">
                                                    <Col lg={10} md={12} sm={12} xs={12}>
                                                        <Form.Group className="mb-2" controlId="validationAccountNo">
                                                            <Form.Label style={{fontWeight: 600}}>Account
                                                                Number</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter account number"
                                                                name="AccountNo"
                                                                value={values.AccountNo}
                                                                disabled={enableEditProfile}
                                                            />
                                                            </Form.Group>
                                                    </Col>
                                                </Row>
                                            </Tab>
                                        </Tabs>
                                    </Form>
                                </Row>)}
                        </Formik>}
                    </Col>
                </Row>
            </Col>
        </AdminLayout>
    );
};

export default ViewInstituteProfile;

