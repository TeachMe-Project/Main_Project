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
import Parentsaveragetimechart from './Parentaveragetimechart';
import {useEffect, useState} from "react";



// @ts-ignore
/*
window.electron.ipcRenderer.on('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
 // setApps(arg);
  console.log(arg);
});

 */
export const Dashboard = () => {

  const [apps,setApps] = useState<any>([]);

  const updateApps = (()=>{
    // calling IPC exposed from preload script

    const x = new Promise((resolve, reject) => {
      // @ts-ignore
      window.electron.ipcRenderer.on('ipc-example', (arg) => {
        // eslint-disable-next-line no-console
        resolve(arg);

      });
      // @ts-ignore
      window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
    })
    x.then((r:any)=>{
      setApps(Array.from(r));
      console.log(r);
    })

  })

  return (
    <div className="DashboardTeacher">
      <Container>
        <Row>
          {/*<PanelContainer />*/}
          <div className="PanelHeader">
            <h2>Dashboard </h2>
            {/*<button onClick={updateApps}>GET APPS</button>*/}
          </div>
          <div className="Panel">
            {/*<div>{JSON.stringify(apps)}</div>*/}
            <div className="PanelSubheader">
              <h5>Upcoming Classes </h5>
            </div>
            <div className="PanelBody">
              <Card
                header="Mathematics"
                time="04:00pm- 06:00pm"
                date="23-08-2022"
                grade="Grade 8"
                btnname="Start"
                image={<img src={'/Images/subjects/maths.png'} />}
              />
              <Card
                header="Mathematics"
                time="04:00pm- 06:00pm"
                date="24-08-2022"
                grade="Grade 9"
                btnname="Start"
                image={<img src={'/Images/subjects/maths.png'} />}
              />

              <Card
                header="Mathematics"
                time="04:00pm- 06:00pm"
                date="30-08-2022"
                grade="Grade 8"
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
                <div className="card shadow-sm p-3 mb-5 bg-white rounded" style={{ width: '29rem', height: '15rem' }}>
                  <div className="card-body">
                    <div className="fundsRow" style={{ display: 'Flex', marginBottom: '20px' }}>
                      <Col xl={8}>
                        <h5 className="card-title" style={{ marginBottom: '20px', color: '#1e90ff' }}>
                          Course
                        </h5>
                      </Col>
                      <Col xl={4}>
                        <h5 className="card-title" style={{ marginBottom: '20px', color: '#1e90ff' }}>
                          Student Count
                        </h5>
                      </Col>
                    </div>
                    <div className="fundsRow" style={{ display: 'Flex', marginBottom: '20px' }}>
                      <Col xl={8}>
                        <p style={{ marginRight: '20px' }}>Mathematics</p>
                      </Col>
                      <Col xl={4}>
                        <p className="text-center">20</p>
                      </Col>
                    </div>

                    <div className="fundsRow" style={{ display: 'Flex', marginBottom: '20px' }}>
                      <Col xl={8}>
                        <p style={{ marginRight: '20px' }}>Science</p>
                      </Col>
                      <Col xl={4}>
                        <p className="text-center">18</p>
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
                <div className="card shadow-sm p-3 mb-5 bg-white rounded" style={{ width: '29rem', height: '15rem' }}>
                  <div className="card-body">
                    <h5 className="card-title" style={{ marginBottom: '20px', color: '#1e90ff' }}>
                      Monthly Income
                    </h5>
                    <div className="fundsRow" style={{ display: 'Flex' }}>
                      <Col xl={8}>
                        <p style={{ marginRight: '20px' }}>Mathematics</p>
                      </Col>
                      <Col xl={4}>
                        <p>Rs.5,000.00</p>
                      </Col>
                    </div>

                    <div className="fundsRow" style={{ display: 'Flex' }}>
                      <Col xl={8}>
                        <p style={{ marginRight: '20px' }}>Science</p>
                      </Col>
                      <Col xl={4}>
                        <p>Rs.20,000.00</p>
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
          </Row>

          {/* <Row>
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
          </Row> */}

          <Row>
            <Col xl={6}>
              <Averagetimechart />
            </Col>
            <Col xl={6}>
              <Enrollmentchart />
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
