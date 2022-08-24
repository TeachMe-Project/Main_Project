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
                <Details
                  label="description"
                  value="Mathematics lessons for Student from Grade 6 , Grade 7 , Grade 8 "
                  symbol=":"
                />
                <Details label="Grade" value="8" symbol=":" />
                <Details label="Medium" value="Sinhala" symbol=":" />
                <Details label="Fee" value="LKR 2500" symbol=":" />
                <Details label="Start Date" value="2022-03-24" symbol=":" />
                <Details label="End Date" value="2022-03-24" symbol=":" />
                <Details label="Class Day" value="Thursday" symbol=":" />
                <Details label="Start time" value="05:00 PM" symbol=":" />
              </div>

              <div className="Notes">
                {/*<Row>*/}

                <div className="buttoneditdetails" style={{ float: 'right', position: 'relative', top: '10px' }}>
                  <Link to="/uploadnotes" className="link">
                    <ButtonCommon name={'Upload Notes'} />
                  </Link>
                </div>

                <div className="noteContainer" style={{ marginTop: '50px' }}>
                  {/* <Notes topic="Note for week 1" date="04-05-2022" />
                  <Notes topic="Note for week 2" date="04-05-2022" />
                  <Notes topic="Note for week 3" date="04-05-2022" />
                  <Notes topic="Note for week 4" date="04-05-2022" />
                  <Notes topic="Note for week 5" date="04-05-2022" /> */}

                  <table className="booking-table" id="view-booking">
                    {/* <thead>
                      <tr className="booking-thead-second-tr">
                        {/*amc: Institute Manage Courses
                        <th className="imc-first-th">Student ID</th>
                        <th className="imc-second-th">Student Name</th>
                        <th className="imc-third-th">Month</th>
                        <th className="imc-fourth-th">Amount</th>
                      </tr>
                    </thead> */}
                    <tbody>
                      <tr>
                        <td data-label="Student ID :">Note for week 1</td>
                        <td data-label="Student Name :">04-05-2022</td>
                      </tr>
                      <tr>
                        <td data-label="Student ID :">Note for week 2</td>
                        <td data-label="Student Name :">04-05-2022</td>
                        {/* <td data-label="Month :">August</td>
                        <td data-label="Amount :">LKR 2500</td> */}
                      </tr>
                      <tr>
                        <td data-label="Student ID :">Note for week 3</td>
                        <td data-label="Student Name :">04-05-2022</td>
                        {/* <td data-label="Month :">August</td>
                        <td data-label="Amount :">LKR 2500</td> */}
                      </tr>
                      <tr>
                        <td data-label="Student ID :">Note for week 4</td>
                        <td data-label="Student Name :">04-05-2022</td>
                        {/* <td data-label="Month :">August</td>
                        <td data-label="Amount :">LKR 2500</td> */}
                      </tr>
                    </tbody>
                  </table>
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

                {/* <div className="homeworkContainer" style={{ marginTop: '50px' }}>
                  <Homework topic="Homework for week 1" date="04-05-2022" />
                  <Homework topic="Homework for week 2" date="04-05-2022" />
                  <Homework topic="Homework for week 3" date="04-05-2022" />
                  <Homework topic="Homework for week 4" date="04-05-2022" />
                  <Homework topic="Homework for week 5" date="04-05-2022" />
                </div> */}

                <table className="booking-table" id="view-booking">
                  {/* <thead>
                      <tr className="booking-thead-second-tr">
                        {/*amc: Institute Manage Courses
                        <th className="imc-first-th">Student ID</th>
                        <th className="imc-second-th">Student Name</th>
                        <th className="imc-third-th">Month</th>
                        <th className="imc-fourth-th">Amount</th>
                      </tr>
                    </thead> */}
                  <tbody>
                    <tr>
                      <td data-label="Student ID :">Homework for week 1</td>
                      <td data-label="Student Name :">04-05-2022</td>
                    </tr>
                    <tr>
                      <td data-label="Student ID :">Homework for week 2</td>
                      <td data-label="Student Name :">04-05-2022</td>
                      {/* <td data-label="Month :">August</td>
                        <td data-label="Amount :">LKR 2500</td> */}
                    </tr>
                    <tr>
                      <td data-label="Student ID :">Homework for week 3</td>
                      <td data-label="Student Name :">04-05-2022</td>
                      {/* <td data-label="Month :">August</td>
                        <td data-label="Amount :">LKR 2500</td> */}
                    </tr>
                    <tr>
                      <td data-label="Student ID :">Homework for week 4</td>
                      <td data-label="Student Name :">04-05-2022</td>
                      {/* <td data-label="Month :">August</td>
                        <td data-label="Amount :">LKR 2500</td> */}
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="Students">
                <div className="studentContainer">
                  <table className="booking-table" id="view-booking">
                    <thead>
                      <tr className="booking-thead-second-tr">
                        {/*amc: Institute Manage Courses*/}
                        <th className="imc-first-th">Student ID</th>
                        <th className="imc-second-th">Student Name</th>
                        <th className="imc-second-th">Parent's Contact</th>
                        <th className="imc-last-th"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-label="Student ID :">10000102345</td>
                        <td data-label="Student Name :">Romesh Perera</td>
                        <td data-label="Parent's Contact :">011 2840231</td>
                        <td data-label="View Profile :">
                          <div className="cancelbutton">
                            <Link to="/addcourse" className="link">
                              <ButtonCommon name={'View Profile'} className="viewBtn" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td data-label="Student ID :">10000102001</td>
                        <td data-label="Student Name :">Saduni Weerasinghe</td>
                        <td data-label="Parent Contact :">071 1450231</td>
                        <td data-label="View Profile :">
                          <div className="cancelbutton">
                            <Link to="/addcourse" className="link">
                              <ButtonCommon name={'View Profile'} className="viewBtn" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td data-label="Student ID :">10000102908</td>
                        <td data-label="Student Name :">Minura Ranasinghe</td>
                        <td data-label="Parent Contact :">078 2402399</td>
                        <td data-label="View Profile :">
                          <div className="cancelbutton">
                            <Link to="/addcourse" className="link">
                              <ButtonCommon name={'View Profile'} className="viewBtn" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td data-label="Student ID :">10000102111</td>
                        <td data-label="Student Name :">Neelya Jhones</td>
                        <td data-label="Parent Contact :">077 2898275</td>
                        <td data-label="View Profile :">
                          <div className="cancelbutton">
                            <Link to="/addcourse" className="link">
                              <ButtonCommon name={'View Profile'} className="viewBtn" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td data-label="Student ID :">10000102343</td>
                        <td data-label="Student Name :">Kavindu De Silva</td>
                        <td data-label="Parent Contact :">070 1189377</td>
                        <td data-label="View Profile :">
                          <div className="cancelbutton">
                            <Link to="/addcourse" className="link">
                              <ButtonCommon name={'View Profile'} className="viewBtn" />
                            </Link>
                          </div>
                        </td>
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
                      <th className="imc-third-th"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-label="Date :">2022-08-20</td>
                      <td data-label="Time :">05:00 pm</td>
                      <td data-label="Duration :">2 Hrs</td>
                      <td data-label="Topic :">
                        <div className="cancelbutton">
                          <Link to="/addcourse" className="link">
                            <ButtonCommon name={'Cancel Class'} />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Date :">2022-08-27</td>
                      <td data-label="Time :">05:00 pm</td>
                      <td data-label="Duration :">2 Hrs</td>
                      <td data-label="Topic :">
                        {' '}
                        <div className="cancelbutton">
                          <Link to="/addcourse" className="link">
                            <ButtonCommon name={'Cancel Class'} />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Date :">2022-09-04</td>
                      <td data-label="Time :">05:00 pm</td>
                      <td data-label="Duration :">2 Hrs</td>
                      <td data-label="Topic :">
                        {' '}
                        <div className="cancelbutton">
                          <Link to="/addcourse" className="link">
                            <ButtonCommon name={'Cancel Class'} />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Date :">2022-09-11</td>
                      <td data-label="Time :">05:00 pm</td>
                      <td data-label="Duration :">2 Hrs</td>
                      <td data-label="Topic :">
                        {' '}
                        <div className="cancelbutton">
                          <Link to="/addcourse" className="link">
                            <ButtonCommon name={'Cancel Class'} />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Date :">2022-09-18</td>
                      <td data-label="Time :">05:00 pm</td>
                      <td data-label="Duration :">2 Hrs</td>
                      <td data-label="Topic :">
                        {' '}
                        <div className="cancelbutton">
                          <Link to="/addcourse" className="link">
                            <ButtonCommon name={'Cancel Class'} />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Date :">2022-09-25</td>
                      <td data-label="Time :">05:00 pm</td>
                      <td data-label="Duration :">2 Hrs</td>
                      <td data-label="Topic :">
                        {' '}
                        <div className="cancelbutton">
                          <Link to="/addcourse" className="link">
                            <ButtonCommon name={'Cancel Class'} />
                          </Link>
                        </div>
                      </td>
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
                        <td data-label="Student Name :">Romesh Perera</td>
                        <td data-label="Month :">July</td>
                        <td data-label="Amount :">LKR 2500</td>
                      </tr>
                      <tr>
                        <td data-label="Student ID :">10000102345</td>
                        <td data-label="Student Name :">Romesh Perera</td>
                        <td data-label="Month :">August</td>
                        <td data-label="Amount :">LKR 2500</td>
                      </tr>
                      <tr>
                        <td data-label="Student ID :">10000102111</td>
                        <td data-label="Student Name :">Neelya Jhones</td>
                        <td data-label="Month :">August</td>
                        <td data-label="Amount :">LKR 2500</td>
                      </tr>
                      <tr>
                        <td data-label="Student ID :">10000102908</td>
                        <td data-label="Student Name :">Minura Ranasinghe</td>
                        <td data-label="Month :">August</td>
                        <td data-label="Amount :">LKR 2500</td>
                      </tr>
                      <tr>
                        <td data-label="Student ID :">10000102905</td>
                        <td data-label="Student Name :">Senith De Silva</td>
                        <td data-label="Month :">August</td>
                        <td data-label="Amount :">LKR 2500</td>
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
