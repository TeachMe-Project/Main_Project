import React from 'react';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import Button from "react-bootstrap/Button";
import {useNavigate} from 'react-router-dom';
import {Col, Row} from "react-bootstrap";
import AdminLayout from "./AdminLayout";

library.add(fas)


export default function ManageCourses() {
    const navigate = useNavigate();
    const directToCourse = () => {
        navigate('/');
    };

    return (
        <AdminLayout>
            <Col lg={12} className='px-lg-5'>
                <Row className='d-lg-flex flex-lg-column align-items-center text-lg-center'>
                    <Col lg={12}>
                        <h1 className='text-lg-start header my-lg-3'>
                            Manage Courses
                        </h1>
                    </Col>
                </Row>
                <table className="booking-table" id="view-booking">
                    <thead>
                    <tr className="booking-thead-second-tr">
                        {/*amc: Admin Manage Courses*/}
                        <th className="amc-first-th">Course ID</th>
                        <th className="amc-second-th">Grade</th>
                        <th className="amc-third-th">Subject</th>
                        <th className="amc-fourth-th">Tutor's name</th>
                        <th className="amc-fifth-th">Institute's name</th>
                        <th className="amc-last-th"></th>
                    </tr>
                    </thead>
                    <tbody>

                    <tr>
                        <td data-label="Course ID :">10000102345</td>
                        <td data-label="Grade :">Grade 10</td>
                        <td data-label="Subject :">Business & Accounting Studies</td>
                        <td data-label="Tutor's Name :">Amila Banadaranayake</td>
                        <td data-label="Institute's Name :">Sigma Institute</td>
                        <td>
                            <div className="Icons">
                                {/*View Icon*/}
                                <Button onClick={directToCourse} className="view-icon">
                                    <FontAwesomeIcon icon={['fas', 'eye']}/>
                                </Button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td data-label="Course ID :">10000102355</td>
                        <td data-label="Grade :">Grade 10</td>
                        <td data-label="Subject :">History</td>
                        <td data-label="Tutor's Name :">Kamal Maggona</td>
                        <td data-label="Institute's Name :">Susipwan Institute</td>
                        <td>
                            <div className="Icons">
                                {/*View Icon*/}
                                <Button onClick={directToCourse} className="view-icon">
                                    <FontAwesomeIcon icon={['fas', 'eye']}/>
                                </Button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td data-label="Course ID :">10000102320</td>
                        <td data-label="Grade :">Grade 10</td>
                        <td data-label="Subject :">Science</td>
                        <td data-label="Tutor's Name :">Anusha Palpita</td>
                        <td data-label="Institute's Name :">Sigma Institute</td>
                        <td>
                            <div className="Icons">
                                {/*View Icon*/}
                                <Button onClick={directToCourse} className="view-icon">
                                    <FontAwesomeIcon icon={['fas', 'eye']}/>
                                </Button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td data-label="Course ID :">10000109945</td>
                        <td data-label="Grade :">Grade 10</td>
                        <td data-label="Subject :">Sinhala Lang. & Lit</td>
                        <td data-label="Tutor's Name :">Nimali Weeerasinghe</td>
                        <td data-label="Institute's Name :">Sakya Institute</td>
                        <td>
                            <div className="Icons">
                                {/*View Icon*/}
                                <Button onClick={directToCourse} className="view-icon">
                                    <FontAwesomeIcon icon={['fas', 'eye']}/>
                                </Button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td data-label="Course ID :">10000102300</td>
                        <td data-label="Grade :">Grade 9</td>
                        <td data-label="Subject :">History</td>
                        <td data-label="Tutor's Name :">Vajira Gamage</td>
                        <td data-label="Institute's Name :">Susipwan Institute</td>
                        <td>
                            <div className="Icons">
                                {/*View Icon*/}
                                <Button onClick={directToCourse} className="view-icon">
                                    <FontAwesomeIcon icon={['fas', 'eye']}/>
                                </Button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td data-label="Course ID :">10000102345</td>
                        <td data-label="Grade :">Grade 11</td>
                        <td data-label="Subject :">Business & Accounting Studies</td>
                        <td data-label="Tutor's Name :">Sameera Rajapakse</td>
                        <td data-label="Institute's Name :">Amiti Institute</td>
                        <td>
                            <div className="Icons">
                                {/*View Icon*/}
                                <Button onClick={directToCourse} className="view-icon">
                                    <FontAwesomeIcon icon={['fas', 'eye']}/>
                                </Button>
                            </div>
                        </td>
                    </tr>


                    </tbody>
                </table>
            </Col>
        </AdminLayout>
    );
}


