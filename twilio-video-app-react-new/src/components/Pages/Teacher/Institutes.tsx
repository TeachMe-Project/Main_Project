import * as React from 'react';
import Card from '../../Card/Card';
import CardHeader from '../../Card/CardHeader';
import CardDetails from '../../Card/CardDetails';
import { Row, Col, Container, Tab, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Tabs from '../../Tabs/Tabs';
import Details from './Details';
import Notes from './Notes';

import PendingPayments from './PendingPayments';
import PanelContainer from '../../Layout/PanelContainer';
import UploadButton from '../../Button/UploadButton';

import 'bootstrap/dist/css/bootstrap.min.css';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
import { Instituterequest } from './Instituterequest';

import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { useNavigate } from 'react-router-dom';
import { CourseCardTeacher } from '../../Card/CourseCardTeacher';
import { InstituteCard } from '../../Card/InstituteCard';

library.add(fas);

export const Institutes = () => {
  const navigate = useNavigate();
  const directToCourse = () => {
    navigate('/');
  };
  return (
    <div className="Notifications">
      <Container>
        <Row>
          <PanelContainer />
          <div className="PanelHeader">
            <h2>Institutes</h2>
          </div>
          <div className="Panel">
            <div className="PanelSubHeader"></div>

            <Tabs>
              <div className="Current Institutes">
                <Link to="/editdetails" className="link"></Link>
                <table className="booking-table" id="view-booking">
                  <thead>
                    <tr className="booking-thead-second-tr">
                      {/*amc: Institute Manage Courses*/}
                      <th className="imc-first-th">Institute ID </th>
                      <th className="imc-second-th">Institute Name</th>
                      <th className="imc-second-th">Contact Number</th>

                      {/* <th className="imc-last-th"></th> */}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-label="Course ID :">10000102345</td>
                      <td data-label="Institute Name :">Sigma</td>
                      <td data-label="Contact Number :">011 2859684</td>
                    </tr>
                    <tr>
                      <td data-label="Institute ID  :">10000102355</td>
                      <td data-label="Institute Name :">Rotary</td>
                      <td data-label="Contact Number :">011 2859684</td>
                    </tr>
                    <tr>
                      <td data-label="Institute ID  :">10000102320</td>
                      <td data-label="Institute Name :">Syzygy</td>
                      <td data-label="Contact Number :">011 2859684</td>
                    </tr>
                    <tr>
                      <td data-label="Institute ID  :">10000109945</td>
                      <td data-label="Institute Name :">Montana</td>
                      <td data-label="Contact Number :">011 2859684</td>
                    </tr>
                    <tr>
                      <td data-label="Institute ID  :">10000102300</td>
                      <td data-label="Institute Name :">Sasip</td>
                      <td data-label="Contact Number :">011 2859684</td>
                    </tr>
                    <tr>
                      <td data-label="Institute ID  :">10000102345</td>
                      <td data-label="Institute Name :">Shakthi</td>
                      <td data-label="Contact Number :">011 2859684</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="New Requests">
                {/* <Link className="link" to="/uploadnotes"></Link>
                <br />
                <Instituterequest name="Syzygy Institute" />
                <Instituterequest name="Sigma Institute" />
                <Instituterequest name="Sigma Institute" />
                <Instituterequest name="Sigma Institute" />
                <Instituterequest name="Sigma Institute" /> */}

                <div className="Panel">
                  <div className="PanelBody" style={{ display: 'block' }}>
                    <InstituteCard
                      institutename="Sigma Institute"
                      image={<img src={'/Images/subjects/science.png'} />}
                      btn1="View more"
                      btn2="Accept"
                      btn3="Decline"
                    />

                    <InstituteCard
                      institutename="Sigma Institute"
                      image={<img src={'/Images/subjects/science.png'} />}
                      btn1="View more"
                      btn2="Accept"
                      btn3="Decline"
                    />

                    <InstituteCard
                      institutename="Sigma Institute"
                      image={<img src={'/Images/subjects/science.png'} />}
                      btn1="View more"
                      btn2="Accept"
                      btn3="Decline"
                    />
                  </div>
                </div>
              </div>
            </Tabs>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Institutes;
