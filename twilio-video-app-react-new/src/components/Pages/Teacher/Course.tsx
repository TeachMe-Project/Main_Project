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
              <h3>Mathematics Class</h3>
              <div className="PanelImage">{<img src={'/Images/subjects/maths.png'} />}</div>
            </div>

            <Tabs>
              <div className="Details" style={{ marginTop: '50px' }}>
                <Link to="/editdetails" className="link">
                  <Button
                    className="cardButton"
                    style={{
                      marginBottom: '20px',
                      marginRight: '20px',
                      float: 'right',
                    }}
                  >
                    Edit Details
                  </Button>
                </Link>

                <Details label="Subject" value="Mathematics" symbol=":" />
                <Details label="Teacher" value="Mr. Lasitha Nuwan" symbol=":" />
                <Details label="Grade" value="8" symbol=":" />
                <Details
                  label="Description"
                  value="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
                />
                <Details label="Medium" value="Sinhala" symbol=":" />
                <Details label="Monthly Payment" value="LKR 2500" symbol=":" />
                <Details label="Started Date" value="2022-03-24" symbol=":" />
                <Details label="Institute" value="Sigma Institute" symbol=":" />
                <Details label="Duration" value="12 months" symbol=":" />
              </div>

              <div className="Notes">
                <Row>
                  <Link className="link" to="/uploadnotes">
                    <Button
                      style={{
                        float: 'right',
                        marginRight: '44px',
                      }}
                    >
                      Upload New notes
                    </Button>
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
                  <Button
                    style={{
                      float: 'right',
                      marginRight: '44px',
                    }}
                  >
                    Upload Homework
                  </Button>
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
                        <th className="imc-first-th">Course ID</th>
                        <th className="imc-second-th">Grade</th>
                        <th className="imc-third-th">Subject</th>
                        <th className="imc-fourth-th">Tutor's name</th>
                        <th className="imc-last-th"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-label="Course ID :">10000102345</td>
                        <td data-label="Grade :">Grade 10</td>
                        <td data-label="Subject :">Business & Accounting Studies</td>
                        <td data-label="Tutor's Name :">Amila Banadaranayake</td>
                        <td>
                          <div className="Icons">
                            {/*View Icon*/}
                            <Button onClick={directToCourse} className="view-icon">
                              <FontAwesomeIcon icon={['fas', 'eye']} />
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td data-label="Course ID :">10000102355</td>
                        <td data-label="Grade :">Grade 10</td>
                        <td data-label="Subject :">History</td>
                        <td data-label="Tutor's Name :">Kamal Maggona</td>
                        <td>
                          <div className="Icons">
                            {/*View Icon*/}
                            <Button onClick={directToCourse} className="view-icon">
                              <FontAwesomeIcon icon={['fas', 'eye']} />
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td data-label="Course ID :">10000102320</td>
                        <td data-label="Grade :">Grade 10</td>
                        <td data-label="Subject :">Science</td>
                        <td data-label="Tutor's Name :">Anusha Palpita</td>
                        <td>
                          <div className="Icons">
                            {/*View Icon*/}
                            <Button onClick={directToCourse} className="view-icon">
                              <FontAwesomeIcon icon={['fas', 'eye']} />
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td data-label="Course ID :">10000109945</td>
                        <td data-label="Grade :">Grade 10</td>
                        <td data-label="Subject :">Sinhala Lang. & Lit</td>
                        <td data-label="Tutor's Name :">Nimali Weeerasinghe</td>
                        <td>
                          <div className="Icons">
                            {/*View Icon*/}
                            <Button onClick={directToCourse} className="view-icon">
                              <FontAwesomeIcon icon={['fas', 'eye']} />
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td data-label="Course ID :">10000102300</td>
                        <td data-label="Grade :">Grade 9</td>
                        <td data-label="Subject :">History</td>
                        <td data-label="Tutor's Name :">Vajira Gamage</td>
                        <td>
                          <div className="Icons">
                            {/*View Icon*/}
                            <Button onClick={directToCourse} className="view-icon">
                              <FontAwesomeIcon icon={['fas', 'eye']} />
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td data-label="Course ID :">10000102345</td>
                        <td data-label="Grade :">Grade 11</td>
                        <td data-label="Subject :">Business & Accounting Studies</td>
                        <td data-label="Tutor's Name :">Sameera Rajapakse</td>
                        <td>
                          <div className="Icons">
                            {/*View Icon*/}
                            <Button onClick={directToCourse} className="view-icon">
                              <FontAwesomeIcon icon={['fas', 'eye']} />
                            </Button>
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
                      <Button
                        style={{
                          marginBottom: '20px',
                          marginRight: '20px',
                          float: 'right',
                        }}
                      >
                        Add Extra Class
                      </Button>
                    </Link>
                  </Row>
                </div>
                <table className="booking-table" id="view-booking">
                  <thead>
                    <tr className="booking-thead-second-tr">
                      {/*amc: Institute Manage Courses*/}
                      <th className="imc-first-th">Course ID</th>
                      <th className="imc-second-th">Grade</th>
                      <th className="imc-third-th">Subject</th>
                      <th className="imc-fourth-th">Tutor's name</th>
                      <th className="imc-last-th"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-label="Course ID :">10000102345</td>
                      <td data-label="Grade :">Grade 10</td>
                      <td data-label="Subject :">Business & Accounting Studies</td>
                      <td data-label="Tutor's Name :">Amila Banadaranayake</td>
                      <td>
                        <div className="Icons">
                          {/*View Icon*/}
                          <Button onClick={directToCourse} className="view-icon">
                            <FontAwesomeIcon icon={['fas', 'eye']} />
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Course ID :">10000102355</td>
                      <td data-label="Grade :">Grade 10</td>
                      <td data-label="Subject :">History</td>
                      <td data-label="Tutor's Name :">Kamal Maggona</td>
                      <td>
                        <div className="Icons">
                          {/*View Icon*/}
                          <Button onClick={directToCourse} className="view-icon">
                            <FontAwesomeIcon icon={['fas', 'eye']} />
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Course ID :">10000102320</td>
                      <td data-label="Grade :">Grade 10</td>
                      <td data-label="Subject :">Science</td>
                      <td data-label="Tutor's Name :">Anusha Palpita</td>
                      <td>
                        <div className="Icons">
                          {/*View Icon*/}
                          <Button onClick={directToCourse} className="view-icon">
                            <FontAwesomeIcon icon={['fas', 'eye']} />
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Course ID :">10000109945</td>
                      <td data-label="Grade :">Grade 10</td>
                      <td data-label="Subject :">Sinhala Lang. & Lit</td>
                      <td data-label="Tutor's Name :">Nimali Weeerasinghe</td>
                      <td>
                        <div className="Icons">
                          {/*View Icon*/}
                          <Button onClick={directToCourse} className="view-icon">
                            <FontAwesomeIcon icon={['fas', 'eye']} />
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Course ID :">10000102300</td>
                      <td data-label="Grade :">Grade 9</td>
                      <td data-label="Subject :">History</td>
                      <td data-label="Tutor's Name :">Vajira Gamage</td>
                      <td>
                        <div className="Icons">
                          {/*View Icon*/}
                          <Button onClick={directToCourse} className="view-icon">
                            <FontAwesomeIcon icon={['fas', 'eye']} />
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Course ID :">10000102345</td>
                      <td data-label="Grade :">Grade 11</td>
                      <td data-label="Subject :">Business & Accounting Studies</td>
                      <td data-label="Tutor's Name :">Sameera Rajapakse</td>
                      <td>
                        <div className="Icons">
                          {/*View Icon*/}
                          <Button onClick={directToCourse} className="view-icon">
                            <FontAwesomeIcon icon={['fas', 'eye']} />
                          </Button>
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
