import React from 'react';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import Button from "react-bootstrap/Button";
import {useNavigate} from 'react-router-dom';
import AcceptTutorModal from "../../Modals/AcceptTutorModal";
import RejectTutorModal from "../../Modals/RejectTutorModal";
import AdminLayout from "./AdminLayout";
import {Col, Row} from "react-bootstrap";


library.add(fas)


export default function VerifyTutorsPage() {
    const [modalShowAccept, setModalShowAccept] = React.useState(false);
    const [modalShowReject, setModalShowReject] = React.useState(false);
    const navigate = useNavigate();
    const directToTutorApplication = () => {
        navigate('/');
    };
    return (
        <AdminLayout>
            <Col lg={12} className='px-lg-5'>
                <Row className='d-lg-flex flex-lg-column align-items-center text-lg-center'>
                    <Col lg={12}>
                        <h1 className='text-lg-start header my-lg-3'>
                            Verify Tutors
                        </h1>
                    </Col>
                </Row>
                <table className="booking-table" id="view-booking">
                    <thead>
                    <tr className="booking-thead-second-tr">
                        {/*avt: Admin Verify Tutors*/}
                        <th className="avt-first-th">Application ID</th>
                        <th className="avt-second-th">Applied Date</th>
                        <th className="avt-third-th">Tutor's Name</th>
                        <th className="avt-last-th"></th>
                    </tr>
                    </thead>
                    <tbody>

                    <tr>
                        <td data-label="Application ID :">1000010</td>
                        <td data-label="Applied Date :">2022-07-06</td>
                        <td data-label="Tutor's Name :">Bandara Ranasinghe</td>
                        <td>
                            <div className="Icons">
                                {/*View Icon*/}
                                <Button onClick={directToTutorApplication} className="view-icon">
                                    <FontAwesomeIcon icon={['fas', 'eye']}/>
                                </Button>
                                {/*Accept Icon*/}
                                <Button onClick={() => setModalShowAccept(true)} className="accept-icon">
                                    <FontAwesomeIcon icon={['fas', 'circle-check']}/>
                                </Button>
                                <AcceptTutorModal show={modalShowAccept} onHide={() => setModalShowAccept(false)}/>
                                {/*Reject Icon*/}
                                <Button onClick={() => setModalShowReject(true)} className="reject-icon">
                                    <FontAwesomeIcon icon={['fas', 'circle-xmark']}/>
                                </Button>
                                <RejectTutorModal show={modalShowReject} onHide={() => setModalShowReject(false)}/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td data-label="Application ID :">1000010</td>
                        <td data-label="Applied Date :">2022-07-06</td>
                        <td data-label="Tutor's Name :">Bandara Ranasinghe</td>
                        <td>
                            <div className="Icons">
                                {/*View Icon*/}
                                <Button onClick={directToTutorApplication} className="view-icon">
                                    <FontAwesomeIcon icon={['fas', 'eye']}/>
                                </Button>
                                {/*Accept Icon*/}
                                <Button onClick={() => setModalShowAccept(true)} className="accept-icon">
                                    <FontAwesomeIcon icon={['fas', 'circle-check']}/>
                                </Button>
                                <AcceptTutorModal show={modalShowAccept} onHide={() => setModalShowAccept(false)}/>
                                {/*Reject Icon*/}
                                <Button onClick={() => setModalShowReject(true)} className="reject-icon">
                                    <FontAwesomeIcon icon={['fas', 'circle-xmark']}/>
                                </Button>
                                <RejectTutorModal show={modalShowReject} onHide={() => setModalShowReject(false)}/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td data-label="Application ID :">1000011</td>
                        <td data-label="Applied Date :">2022-07-06</td>
                        <td data-label="Tutor's Name :">Nirosh Senanayake</td>
                        <td>
                            <div className="Icons">
                                {/*View Icon*/}
                                <Button onClick={directToTutorApplication} className="view-icon">
                                    <FontAwesomeIcon icon={['fas', 'eye']}/>
                                </Button>
                                {/*Accept Icon*/}
                                <Button onClick={() => setModalShowAccept(true)} className="accept-icon">
                                    <FontAwesomeIcon icon={['fas', 'circle-check']}/>
                                </Button>
                                <AcceptTutorModal show={modalShowAccept} onHide={() => setModalShowAccept(false)}/>
                                {/*Reject Icon*/}
                                <Button onClick={() => setModalShowReject(true)} className="reject-icon">
                                    <FontAwesomeIcon icon={['fas', 'circle-xmark']}/>
                                </Button>
                                <RejectTutorModal show={modalShowReject} onHide={() => setModalShowReject(false)}/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td data-label="Application ID :">1000012</td>
                        <td data-label="Applied Date :">2022-07-06</td>
                        <td data-label="Tutor's Name :">Nilmini Ranatunga</td>
                        <td>
                            <div className="Icons">
                                {/*View Icon*/}
                                <Button onClick={directToTutorApplication} className="view-icon">
                                    <FontAwesomeIcon icon={['fas', 'eye']}/>
                                </Button>
                                {/*Accept Icon*/}
                                <Button onClick={() => setModalShowAccept(true)} className="accept-icon">
                                    <FontAwesomeIcon icon={['fas', 'circle-check']}/>
                                </Button>
                                <AcceptTutorModal show={modalShowAccept} onHide={() => setModalShowAccept(false)}/>
                                {/*Reject Icon*/}
                                <Button onClick={() => setModalShowReject(true)} className="reject-icon">
                                    <FontAwesomeIcon icon={['fas', 'circle-xmark']}/>
                                </Button>
                                <RejectTutorModal show={modalShowReject} onHide={() => setModalShowReject(false)}/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td data-label="Application ID :">1000013</td>
                        <td data-label="Applied Date :">2022-07-07</td>
                        <td data-label="Tutor's Name :">Surathni Weerasiri</td>
                        <td>
                            <div className="Icons">
                                {/*View Icon*/}
                                <Button onClick={directToTutorApplication} className="view-icon">
                                    <FontAwesomeIcon icon={['fas', 'eye']}/>
                                </Button>
                                {/*Accept Icon*/}
                                <Button onClick={() => setModalShowAccept(true)} className="accept-icon">
                                    <FontAwesomeIcon icon={['fas', 'circle-check']}/>
                                </Button>
                                <AcceptTutorModal show={modalShowAccept} onHide={() => setModalShowAccept(false)}/>
                                {/*Reject Icon*/}
                                <Button onClick={() => setModalShowReject(true)} className="reject-icon">
                                    <FontAwesomeIcon icon={['fas', 'circle-xmark']}/>
                                </Button>
                                <RejectTutorModal show={modalShowReject} onHide={() => setModalShowReject(false)}/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td data-label="Application ID :">1000014</td>
                        <td data-label="Applied Date :">2022-07-07</td>
                        <td data-label="Tutor's Name :">Achira Thennakoon</td>
                        <td>
                            <div className="Icons">
                                {/*View Icon*/}
                                <Button onClick={directToTutorApplication} className="view-icon">
                                    <FontAwesomeIcon icon={['fas', 'eye']}/>
                                </Button>
                                {/*Accept Icon*/}
                                <Button onClick={() => setModalShowAccept(true)} className="accept-icon">
                                    <FontAwesomeIcon icon={['fas', 'circle-check']}/>
                                </Button>
                                <AcceptTutorModal show={modalShowAccept} onHide={() => setModalShowAccept(false)}/>
                                {/*Reject Icon*/}
                                <Button onClick={() => setModalShowReject(true)} className="reject-icon">
                                    <FontAwesomeIcon icon={['fas', 'circle-xmark']}/>
                                </Button>
                                <RejectTutorModal show={modalShowReject} onHide={() => setModalShowReject(false)}/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td data-label="Application ID :">1000015</td>
                        <td data-label="Applied Date :">2022-07-07</td>
                        <td data-label="Tutor's Name :">Mahinda Abeywardhana</td>
                        <td>
                            <div className="Icons">
                                {/*View Icon*/}
                                <Button onClick={directToTutorApplication} className="view-icon">
                                    <FontAwesomeIcon icon={['fas', 'eye']}/>
                                </Button>
                                {/*Accept Icon*/}
                                <Button onClick={() => setModalShowAccept(true)} className="accept-icon">
                                    <FontAwesomeIcon icon={['fas', 'circle-check']}/>
                                </Button>
                                <AcceptTutorModal show={modalShowAccept} onHide={() => setModalShowAccept(false)}/>
                                {/*Reject Icon*/}
                                <Button onClick={() => setModalShowReject(true)} className="reject-icon">
                                    <FontAwesomeIcon icon={['fas', 'circle-xmark']}/>
                                </Button>
                                <RejectTutorModal show={modalShowReject} onHide={() => setModalShowReject(false)}/>
                            </div>
                        </td>
                    </tr>

                    </tbody>
                </table>
            </Col>
        </AdminLayout>
    );
}
