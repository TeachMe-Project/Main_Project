import React from 'react';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";
import AcceptInstituteModal from "./Modals/AcceptInstituteModal";
import RejectInstituteModal from "./Modals/RejectInstituteModal";
import AdminLayout from "./AdminLayout";
import {Col, Row} from "react-bootstrap";

library.add(fas);

export default function VerifyInstitutesPage() {
    const [modalShowAccept, setModalShowAccept] = React.useState(false);
    const [modalShowReject, setModalShowReject] = React.useState(false);
    const navigate = useNavigate();
    const directToInstituteApplication = () => {
        navigate('/');
    };
    return (
        <AdminLayout>
            <Col lg={12} className='px-lg-5'>
                <Row className='d-lg-flex flex-lg-column align-items-center text-lg-center'>
                    <Col lg={12}>
                        <h1 className='text-lg-start header my-lg-3'>
                            Verify Institute
                        </h1>
                    </Col>
                </Row>
                <table className="booking-table" id="view-booking">
                    <thead>
                    <tr className="booking-thead-second-tr">
                        {/*avi: Admin Verify Institutes*/}
                        <th className="avi-first-th">Application ID</th>
                        <th className="avi-second-th">Applied Date</th>
                        <th className="avi-third-th">Institute Name</th>
                        <th className="avi-last-th"></th>
                    </tr>
                    </thead>
                    <tbody>

                    <tr>
                        <td data-label="Application ID :">1000010</td>
                        <td data-label="Applied Date :">2022-07-08</td>
                        <td data-label="Institute Name :">Sigma Institute</td>
                        <td>
                            <div className="Icons">
                                {/*View Icon*/}
                                <Button onClick={directToInstituteApplication} className="view-icon">
                                    <FontAwesomeIcon icon={['fas', 'eye']}/>
                                </Button>
                                {/*Accept Icon*/}
                                <Button onClick={() => setModalShowAccept(true)} className="accept-icon">
                                    <FontAwesomeIcon icon={['fas', 'circle-check']}/>
                                </Button>
                                <AcceptInstituteModal show={modalShowAccept} onHide={() => setModalShowAccept(false)}/>
                                {/*Reject Icon*/}
                                <Button onClick={() => setModalShowReject(true)} className="reject-icon">
                                    <FontAwesomeIcon icon={['fas', 'circle-xmark']}/>
                                </Button>
                                <RejectInstituteModal show={modalShowReject} onHide={() => setModalShowReject(false)}/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td data-label="Application ID :">1000011</td>
                        <td data-label="Applied Date :">2022-07-08</td>
                        <td data-label="Institute Name :">Susipwan Institute</td>
                        <td>
                            <div className="Icons">
                                {/*View Icon*/}
                                <Button onClick={directToInstituteApplication} className="view-icon">
                                    <FontAwesomeIcon icon={['fas', 'eye']}/>
                                </Button>
                                {/*Accept Icon*/}
                                <Button onClick={() => setModalShowAccept(true)} className="accept-icon">
                                    <FontAwesomeIcon icon={['fas', 'circle-check']}/>
                                </Button>
                                <AcceptInstituteModal show={modalShowAccept} onHide={() => setModalShowAccept(false)}/>
                                {/*Reject Icon*/}
                                <Button onClick={() => setModalShowReject(true)} className="reject-icon">
                                    <FontAwesomeIcon icon={['fas', 'circle-xmark']}/>
                                </Button>
                                <RejectInstituteModal show={modalShowReject} onHide={() => setModalShowReject(false)}/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td data-label="Application ID :">1000012</td>
                        <td data-label="Applied Date :">2022-07-08</td>
                        <td data-label="Institute Name :">Sakya Institute</td>
                        <td>
                            <div className="Icons">
                                {/*View Icon*/}
                                <Button onClick={directToInstituteApplication} className="view-icon">
                                    <FontAwesomeIcon icon={['fas', 'eye']}/>
                                </Button>
                                {/*Accept Icon*/}
                                <Button onClick={() => setModalShowAccept(true)} className="accept-icon">
                                    <FontAwesomeIcon icon={['fas', 'circle-check']}/>
                                </Button>
                                <AcceptInstituteModal show={modalShowAccept} onHide={() => setModalShowAccept(false)}/>
                                {/*Reject Icon*/}
                                <Button onClick={() => setModalShowReject(true)} className="reject-icon">
                                    <FontAwesomeIcon icon={['fas', 'circle-xmark']}/>
                                </Button>
                                <RejectInstituteModal show={modalShowReject} onHide={() => setModalShowReject(false)}/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td data-label="Application ID :">1000013</td>
                        <td data-label="Applied Date :">2022-07-09</td>
                        <td data-label="Institute Name :">Sasip Institute</td>
                        <td>
                            <div className="Icons">
                                {/*View Icon*/}
                                <Button onClick={directToInstituteApplication} className="view-icon">
                                    <FontAwesomeIcon icon={['fas', 'eye']}/>
                                </Button>
                                {/*Accept Icon*/}
                                <Button onClick={() => setModalShowAccept(true)} className="accept-icon">
                                    <FontAwesomeIcon icon={['fas', 'circle-check']}/>
                                </Button>
                                <AcceptInstituteModal show={modalShowAccept} onHide={() => setModalShowAccept(false)}/>
                                {/*Reject Icon*/}
                                <Button onClick={() => setModalShowReject(true)} className="reject-icon">
                                    <FontAwesomeIcon icon={['fas', 'circle-xmark']}/>
                                </Button>
                                <RejectInstituteModal show={modalShowReject} onHide={() => setModalShowReject(false)}/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td data-label="Application ID :">1000014</td>
                        <td data-label="Applied Date :">2022-07-09</td>
                        <td data-label="Institute Name :">Amiti Institute</td>
                        <td>
                            <div className="Icons">
                                {/*View Icon*/}
                                <Button onClick={directToInstituteApplication} className="view-icon">
                                    <FontAwesomeIcon icon={['fas', 'eye']}/>
                                </Button>
                                {/*Accept Icon*/}
                                <Button onClick={() => setModalShowAccept(true)} className="accept-icon">
                                    <FontAwesomeIcon icon={['fas', 'circle-check']}/>
                                </Button>
                                <AcceptInstituteModal show={modalShowAccept} onHide={() => setModalShowAccept(false)}/>
                                {/*Reject Icon*/}
                                <Button onClick={() => setModalShowReject(true)} className="reject-icon">
                                    <FontAwesomeIcon icon={['fas', 'circle-xmark']}/>
                                </Button>
                                <RejectInstituteModal show={modalShowReject} onHide={() => setModalShowReject(false)}/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td data-label="Application ID :">1000015</td>
                        <td data-label="Applied Date :">2022-07-08</td>
                        <td data-label="Institute Name :">Pahanma Institute</td>
                        <td>
                            <div className="Icons">
                                {/*View Icon*/}
                                <Button onClick={directToInstituteApplication} className="view-icon">
                                    <FontAwesomeIcon icon={['fas', 'eye']}/>
                                </Button>
                                {/*Accept Icon*/}
                                <Button onClick={() => setModalShowAccept(true)} className="accept-icon">
                                    <FontAwesomeIcon icon={['fas', 'circle-check']}/>
                                </Button>
                                <AcceptInstituteModal show={modalShowAccept} onHide={() => setModalShowAccept(false)}/>
                                {/*Reject Icon*/}
                                <Button onClick={() => setModalShowReject(true)} className="reject-icon">
                                    <FontAwesomeIcon icon={['fas', 'circle-xmark']}/>
                                </Button>
                                <RejectInstituteModal show={modalShowReject} onHide={() => setModalShowReject(false)}/>
                            </div>
                        </td>
                    </tr>

                    </tbody>
                </table>
            </Col>
        </AdminLayout>
    );
}
