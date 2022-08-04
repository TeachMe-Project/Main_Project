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
import { Homework } from './Homework';
import { Students } from './Students';

import 'bootstrap/dist/css/bootstrap.min.css';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
// import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { ButtonCommon } from '../../Button/ButtonCommon';

library.add(fas);

export const Course = () => {
  const navigate = useNavigate();
  const directToCourse = () => {
    navigate('/');
  };
  return (
    <div className="Course">
      <Container>
        <Row>
          <PanelContainer />
          <div className="PanelHeader">
            <h2>My Courses</h2>
          </div>
          <div className="Panel">
            <div className="PanelSubHeader">
              <div className="PanelImage">{<img src={'/Images/subjects/maths.png'} />}</div>
              <h3>Mathematics Class</h3>
            </div>

            <Tabs>
              <div className="Details" style={{ marginTop: '50px' }}>
                <div className="buttoneditdetails" style={{ float: 'right', position: 'relative', top: '10px' }}>
                  <Link to="/editdetails" className="link">
                    <ButtonCommon name={'Edit Details'} />
                  </Link>
                </div>
                <Details label="Title" value="Mathematics By Roshan Senevirathne" symbol=":" />
                <Details label="subject" value="Mathematics" symbol=":" />
                <Details label="Grade" value="8" symbol=":" />
                <Details label="Medium" value="Sinhala" symbol=":" />
                <Details label="Fee" value="LKR 2500" symbol=":" />
                <Details label="Start Date" value="2022-03-24" symbol=":" />
                <Details label="End Date" value="2022-03-24" symbol=":" />
                <Details label="Class Day" value="Thursday" symbol=":" />
                <Details label="Start time" value="05:00 PM" symbol=":" />
              </div>

              <div className="Notes">
                <Row>
                  <Link className="link" to="/uploadnotes">
                    <div className="buttoneditdetails" style={{ float: 'right', position: 'relative', top: '10px' }}>
                      <Link to="/uploadnotes" className="link">
                        <ButtonCommon name={'Upload Notes'} />
                      </Link>
                    </div>
                  </Link>
                </Row>
                <div className="noteContainer">
                  <Notes topic="Note for week 1" date="04-05-2022" />
                  <Notes topic="Note for week 2" date="04-05-2022" />
                  <Notes topic="Note for week 3" date="04-05-2022" />
                  <Notes topic="Note for week 4" date="04-05-2022" />
                  <Notes topic="Note for week 5" date="04-05-2022" />
                </div>
              </div>
              <div className="Homework">
                <Link className="link" to="/uploadhomework">
                  <div className="buttoneditdetails" style={{ float: 'right', position: 'relative', top: '10px' }}>
                    <Link to="/uploadhomework" className="link">
                      <ButtonCommon name={'Upload Homework'} style={{ width: 'max-content' }} />
                    </Link>
                  </div>
                </Link>

                <div className="homeworkContainer" style={{ marginTop: '50px' }}>
                  <Homework topic="Homework for week 1" date="04-05-2022" />
                  <Homework topic="Homework for week 2" date="04-05-2022" />
                  <Homework topic="Homework for week 3" date="04-05-2022" />
                  <Homework topic="Homework for week 4" date="04-05-2022" />
                  <Homework topic="Homework for week 5" date="04-05-2022" />
                </div>
              </div>

              <div className="Students">
                <div className="studentContainer" style={{ marginTop: '50px' }}>
                  <table className="booking-table" id="view-booking">
                    <thead>
                      <tr className="booking-thead-second-tr">
                        {/*amc: Institute Manage Courses*/}
                        <th className="imc-first-th">Student ID</th>
                        <th className="imc-last-th">Student Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-label="Student ID :">10000102345</td>
                        <td data-label="Student Name :">Romesh Perera</td>
                      </tr>
                      <tr>
                        <td data-label="Student ID :">10000102345</td>
                        <td data-label="Student Name :">Romesh Perera</td>
                      </tr>
                      <tr>
                        <td data-label="Student ID :">10000102345</td>
                        <td data-label="Student Name :">Romesh Perera</td>
                      </tr>
                      <tr>
                        <td data-label="Student ID :">10000102345</td>
                        <td data-label="Student Name :">Romesh Perera</td>
                      </tr>
                      <tr>
                        <td data-label="Student ID :">10000102345</td>
                        <td data-label="Student Name :">Romesh Perera</td>
                      </tr>
                      <tr>
                        <td data-label="Student ID :">10000102345</td>
                        <td data-label="Student Name :">Romesh Perera</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="Class-Schedules">
                <div className="scheduleContainer">
                  <Row>
                    <Link className="link" to="/addextraclass">
                      <div className="buttoneditdetails" style={{ float: 'right', position: 'relative', top: '10px' }}>
                        <Link to="/addextraclass" className="link">
                          <ButtonCommon name={'Schedule Extra Class'} style={{ width: 'max-content' }} />
                        </Link>
                      </div>
                    </Link>
                  </Row>
                </div>
                <table className="booking-table" id="view-booking">
                  <thead>
                    <tr className="booking-thead-second-tr">
                      {/*amc: Institute Manage Courses*/}
                      <th className="imc-first-th">Date</th>
                      <th className="imc-second-th">Time</th>
                      <th className="imc-second-th">Duration</th>
                      <th className="imc-third-th">Topic</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-label="Date :">2022-04-02</td>
                      <td data-label="Time :">05:00 pm</td>
                      <td data-label="Duration :">2 Hrs</td>
                      <td data-label="Topic :">Trigonometry</td>
                    </tr>
                    <tr>
                      <td data-label="Date :">2022-04-02</td>
                      <td data-label="Time :">05:00 pm</td>
                      <td data-label="Duration :">2 Hrs</td>
                      <td data-label="Topic :">Trigonometry</td>
                    </tr>
                    <tr>
                      <td data-label="Date :">2022-04-02</td>
                      <td data-label="Time :">05:00 pm</td>
                      <td data-label="Duration :">2 Hrs</td>
                      <td data-label="Topic :">Trigonometry</td>
                    </tr>
                    <tr>
                      <td data-label="Date :">2022-04-02</td>
                      <td data-label="Time :">05:00 pm</td>
                      <td data-label="Duration :">2 Hrs</td>
                      <td data-label="Topic :">Trigonometry</td>
                    </tr>
                    <tr>
                      <td data-label="Date :">2022-04-02</td>
                      <td data-label="Time :">05:00 pm</td>
                      <td data-label="Duration :">2 Hrs</td>
                      <td data-label="Topic :">Trigonometry</td>
                    </tr>
                    <tr>
                      <td data-label="Date :">2022-04-02</td>
                      <td data-label="Time :">05:00 pm</td>
                      <td data-label="Duration :">2 Hrs</td>
                      <td data-label="Topic :">Trigonometry</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="Pending Payments">
                <div className="paymentsContainer">
                  <table className="booking-table" id="view-booking">
                    <thead>
                      <tr className="booking-thead-second-tr">
                        {/*amc: Institute Manage Courses*/}
                        <th className="imc-first-th">Student ID</th>
                        <th className="imc-second-th">Student Name</th>
                        <th className="imc-third-th">Month</th>
                        <th className="imc-fourth-th">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-label="Student ID :">10000102345</td>
                        <td data-label="Student Name :">Senith De Silva</td>
                        <td data-label="Month :">May</td>
                        <td data-label="Amount :">1500.00</td>
                      </tr>
                      <tr>
                        <td data-label="Student ID :">10000102345</td>
                        <td data-label="Student Name :">Senith De Silva</td>
                        <td data-label="Month :">May</td>
                        <td data-label="Amount :">1500.00</td>
                      </tr>
                      <tr>
                        <td data-label="Student ID :">10000102345</td>
                        <td data-label="Student Name :">Senith De Silva</td>
                        <td data-label="Month :">May</td>
                        <td data-label="Amount :">1500.00</td>
                      </tr>
                      <tr>
                        <td data-label="Student ID :">10000102345</td>
                        <td data-label="Student Name :">Senith De Silva</td>
                        <td data-label="Month :">May</td>
                        <td data-label="Amount :">1500.00</td>
                      </tr>
                      <tr>
                        <td data-label="Student ID :">10000102345</td>
                        <td data-label="Student Name :">Senith De Silva</td>
                        <td data-label="Month :">May</td>
                        <td data-label="Amount :">1500.00</td>
                      </tr>
                      <tr>
                        <td data-label="Student ID :">10000102345</td>
                        <td data-label="Student Name :">Senith De Silva</td>
                        <td data-label="Month :">May</td>
                        <td data-label="Amount :">1500.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Tabs>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Course;
