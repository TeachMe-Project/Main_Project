import React from 'react';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import Button from "react-bootstrap/Button";
import RemoveUserModal from './Modals/RemoveUserModal';
import {Col, Row} from "react-bootstrap";
import AdminLayout from "./AdminLayout";


library.add(fas)


export default function ManageCourses() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <AdminLayout>
            <Col lg={12} className='px-lg-5'>
                <Row className='d-lg-flex flex-lg-column align-items-center text-lg-center'>
                    <Col lg={12}>
                        <h1 className='text-lg-start header my-lg-3'>
                            Manage Users
                        </h1>
                    </Col>
                </Row>
                <table className="booking-table text-center" id="view-booking">
                    <thead>
                    <tr className="booking-thead-second-tr text-center">
                        {/*amu:Admin Manage Users*/}
                        <th className="amu-first-th">User ID</th>
                        <th className="amu-second-th">Username</th>
                        <th className="amu-third-th">First Name</th>
                        <th className="amu-fourth-th">Last Name</th>
                        <th className="amu-fifth-th">User type</th>
                        <th className="amu-last-th"></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td data-label="User ID :" className="amu-first-td">10000102345</td>
                        <td data-label="Username :">manethwijetunga@yahoo.com</td>
                        <td data-label="First Name :">Maneth</td>
                        <td data-label="Last Name :">Wijetunga</td>
                        <td data-label="User Type :">Institute</td>
                        <td className="amu-last-td">
                            <div className="Icons">
                                {/*Remove Icon*/}
                                <Button className="trash-icon" onClick={() => setModalShow(true)}>
                                    <FontAwesomeIcon icon={['fas', 'trash']}/>
                                </Button>
                                <RemoveUserModal show={modalShow} onHide={() => setModalShow(false)}/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td data-label="User ID :" className="amu-first-td">10000102775</td>
                        <td data-label="Username :">anurasenanayake@gmail.com</td>
                        <td data-label="First Name :">Anura</td>
                        <td data-label="Last Name :">Senanayake</td>
                        <td data-label="User Type :">Parent</td>
                        <td className="amu-last-td">
                            <div className="Icons">
                                {/*Remove Icon*/}
                                <Button className="trash-icon" onClick={() => setModalShow(true)}>
                                    <FontAwesomeIcon icon={['fas', 'trash']}/>
                                </Button>
                                <RemoveUserModal show={modalShow} onHide={() => setModalShow(false)}/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td data-label="User ID :" className="amu-first-td">10000102300</td>
                        <td data-label="Username :">thilinamadhushanka@yahoo.com</td>
                        <td data-label="First Name :">Thilina</td>
                        <td data-label="Last Name :">Madhushanka</td>
                        <td data-label="User Type :">Student</td>
                        <td className="amu-last-td">
                            <div className="Icons">
                                {/*Remove Icon*/}
                                <Button className="trash-icon" onClick={() => setModalShow(true)}>
                                    <FontAwesomeIcon icon={['fas', 'trash']}/>
                                </Button>
                                <RemoveUserModal show={modalShow} onHide={() => setModalShow(false)}/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td data-label="User ID :" className="amu-first-td">10000102366</td>
                        <td data-label="Username :">michaeldass@gmail.com</td>
                        <td data-label="First Name :">Michael</td>
                        <td data-label="Last Name :">Dass</td>
                        <td data-label="User Type :">Student</td>
                        <td className="amu-last-td">
                            <div className="Icons">
                                {/*Remove Icon*/}
                                <Button className="trash-icon" onClick={() => setModalShow(true)}>
                                    <FontAwesomeIcon icon={['fas', 'trash']}/>
                                </Button>
                                <RemoveUserModal show={modalShow} onHide={() => setModalShow(false)}/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td data-label="User ID :" className="amu-first-td">10000102005</td>
                        <td data-label="Username :">samweerasinghe@gmail.com</td>
                        <td data-label="First Name :">Sameera</td>
                        <td data-label="Last Name :">Weerasinghe</td>
                        <td data-label="User Type :">Teacher</td>
                        <td className="amu-last-td">
                            <div className="Icons">
                                {/*Remove Icon*/}
                                <Button className="trash-icon" onClick={() => setModalShow(true)}>
                                    <FontAwesomeIcon icon={['fas', 'trash']}/>
                                </Button>
                                <RemoveUserModal show={modalShow} onHide={() => setModalShow(false)}/>
                            </div>
                        </td>
                    </tr>

                    </tbody>
                </table>
            </Col>
        </AdminLayout>
    );
}

