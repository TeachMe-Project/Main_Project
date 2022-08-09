import * as React from 'react';
import Card from '../../Card/Card';

import { Row, Col, Container } from 'react-bootstrap';
import '../../../Assets/Styles/main.scss';

// import MyRecentCourses from "./MyRecentCourses";
import TopNavbar from '../../Navbars/TopNavbar';
import LeftSidebar from '../../Sidebar/LeftSidebar';
import PanelContainer from '../../Layout/PanelContainer';
import { AiOutlineHistory } from 'react-icons/ai';
import Paymentpiechart from './Paymentpiechart';
import Monthlyattendancechart from './Monthlyattendancechart';
import Enrollmentchart from './Enrollmentchart';
import Averagetimechart from './Averagetimechart';

export const Dashboard = () => {
  return (
    <div className="DashboardTeacher">
      <Container>
        <Row>
          <PanelContainer />
          <div className="PanelHeader">
            <h2>Dashboard</h2>
          </div>
          <div className="Panel">
            <div className="PanelSubheader">
              <h5>Upcoming Classes </h5>
            </div>
            <div className="PanelBody">
              <Card
                header="Mathematics"
                time="04:00pm- 06:00pm"
                date="23-05-2022"
                btnname="Start"
                image={<img src={'/Images/subjects/maths.png'} />}
              />
              <Card
                header="Mathematics"
                time="04:00pm- 06:00pm"
                date="24-05-2022"
                btnname="Start"
                image={<img src={'/Images/subjects/maths.png'} />}
                // image={require("../../Assets/Images/testimg2.jpeg")}
              />

              <Card
                header="Mathematics"
                time="04:00pm- 06:00pm"
                date="25-05-2022"
                btnname="Start"
                image={<img src={'/Images/subjects/maths.png'} />}
              />
            </div>
          </div>
        </Row>
        <Row>
          <div className="PanelSubheader">
            <h5>Analytics </h5>
          </div>

          <Row>
            <Col xl={6}>
              <div className="chart">
                <div className="card" style={{ width: '29rem', height: '18rem' }}>
                  <div className="card-body">
                    <h5 className="card-title" style={{ marginBottom: '20px' }}>
                      Monthly Income
                    </h5>
                    <div className="fundsRow" style={{ display: 'Flex' }}>
                      <Col xl={8}>
                        <p style={{ marginRight: '20px' }}>Mathematics by Keshan</p>
                      </Col>
                      <Col xl={4}>
                        <p>Rs.5,000.00</p>
                      </Col>
                    </div>

                    <div className="fundsRow" style={{ display: 'Flex' }}>
                      <Col xl={8}>
                        <p style={{ marginRight: '20px' }}>Combined maths</p>
                      </Col>
                      <Col xl={4}>
                        <p>Rs.20,000.00</p>
                      </Col>
                    </div>
                    <div className="fundsRow" style={{ display: 'Flex' }}>
                      <Col xl={8}>
                        <p style={{ marginRight: '20px' }}>Pure Maths Revision</p>
                      </Col>
                      <Col xl={4}>
                        <p>Rs.5,000.00</p>
                      </Col>
                    </div>

                    <div className="fundsRow" style={{ display: 'Flex' }}>
                      <Col xl={8}>
                        <h5 className="card-title">Total Earnings</h5>
                      </Col>
                      <Col xl={4}>
                        <p>
                          <b>Rs.30,000.00</b>
                        </p>
                      </Col>
                    </div>
                  </div>
                </div>

                {/* <Monthlyattendancechart /> */}
              </div>
            </Col>

            {/* ------------------------------------------------------------------------------- */}

            <Col xl={6}>
              <div className="chart">
                <div className="card" style={{ width: '29rem', height: '18rem' }}>
                  <div className="card-body">
                    <h5 className="card-title" style={{ marginBottom: '20px' }}>
                      Monthly Income
                    </h5>
                    <div className="fundsRow" style={{ display: 'Flex' }}>
                      <Col xl={8}>
                        <p style={{ marginRight: '20px' }}>Mathematics by Keshan</p>
                      </Col>
                      <Col xl={4}>
                        <p>Rs.5,000.00</p>
                      </Col>
                    </div>

                    <div className="fundsRow" style={{ display: 'Flex' }}>
                      <Col xl={8}>
                        <p style={{ marginRight: '20px' }}>Combined maths</p>
                      </Col>
                      <Col xl={4}>
                        <p>Rs.20,000.00</p>
                      </Col>
                    </div>
                    <div className="fundsRow" style={{ display: 'Flex' }}>
                      <Col xl={8}>
                        <p style={{ marginRight: '20px' }}>Pure Maths Revision</p>
                      </Col>
                      <Col xl={4}>
                        <p>Rs.5,000.00</p>
                      </Col>
                    </div>

                    <div className="fundsRow" style={{ display: 'Flex' }}>
                      <Col xl={8}>
                        <h5 className="card-title">Total Earnings</h5>
                      </Col>
                      <Col xl={4}>
                        <p>
                          <b>Rs.30,000.00</b>
                        </p>
                      </Col>
                    </div>

                    <a href="#" className="btn btn-primary" style={{ marginTop: '10px' }}>
                      Withdraw Funds
                    </a>
                  </div>
                </div>

                {/* <Monthlyattendancechart /> */}
              </div>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <div
                className="chart"
                style={{
                  height: '460px',
                  position: 'relative',
                  top: 50,
                  left: -10,
                }}
              >
                <Enrollmentchart />
              </div>
            </Col>
            <Col xl={6}>
              <div
                className="chart"
                style={{
                  height: '460px',
                  width: '480px',
                  position: 'relative',
                  top: 50,
                  // left: 40,
                }}
              >
                <Averagetimechart />
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
