import React from 'react';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import Button from "react-bootstrap/Button";
import RemoveUserModal from '../Modals/RemoveUserModal';


library.add(fas)


export default function ManageCourses() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <table className="booking-table" id="view-booking">
            <thead>
            <tr className="booking-thead-second-tr">
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
                <td data-label="User Type :" >Institute</td>
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
                <td data-label="User ID :" className="amu-first-td">10000102345</td>
                <td data-label="Username :">manethwijetunga@yahoo.com</td>
                <td data-label="First Name :">Maneth</td>
                <td data-label="Last Name :">Wijetunga</td>
                <td data-label="User Type :" >Institute</td>
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
                <td data-label="User ID :" className="amu-first-td">10000102345</td>
                <td data-label="Username :">manethwijetunga@yahoo.com</td>
                <td data-label="First Name :">Maneth</td>
                <td data-label="Last Name :">Wijetunga</td>
                <td data-label="User Type :" >Institute</td>
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
                <td data-label="User ID :" className="amu-first-td">10000102345</td>
                <td data-label="Username :">manethwijetunga@yahoo.com</td>
                <td data-label="First Name :">Maneth</td>
                <td data-label="Last Name :">Wijetunga</td>
                <td data-label="User Type :" >Institute</td>
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
                <td data-label="User ID :" className="amu-first-td">10000102345</td>
                <td data-label="Username :">manethwijetunga@yahoo.com</td>
                <td data-label="First Name :">Maneth</td>
                <td data-label="Last Name :">Wijetunga</td>
                <td data-label="User Type :" >Institute</td>
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
    );
}
