import * as React from 'react';
import { useEffect, useState } from 'react';
import Card from '../../Card/Card';

import { Col, Container, Row } from 'react-bootstrap';
import '../../../Assets/Styles/main.scss';

import Enrollmentchart from './Enrollmentchart';
import Averagetimechart from './Averagetimechart';
import axios, { AxiosResponse } from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

// import MyRecentCourses from "./MyRecentCourses";
import TopNavbar from '../../Navbars/TopNavbar';
import LeftSidebar from '../../Sidebar/LeftSidebar';
import PanelContainer from '../../Layout/PanelContainer';
import { AiOutlineHistory } from 'react-icons/ai';
import Paymentpiechart from './Paymentpiechart';
import Monthlyattendancechart from './Monthlyattendancechart';
import Bouncerate from './Admincharts/Bouncerate';
import Userdistribution from './Admincharts/Userdistribution';

const convertTime = (time: String) => {
  const hour = time.split(':')[0] || time.split('.')[0];
  const intHour = parseInt(hour);
  const minute = time.split(':')[1] || time.split('.')[1];
  const ampm = intHour >= 12 ? 'PM' : 'AM';
  const newHour = intHour % 12;
  return newHour + ':' + minute + ' ' + ampm;
};

const convertDate = (date: Date) => {
  const d = new Date(date);
  return d.toDateString();
};

// @ts-ignore
/*
window.electron.ipcRenderer.on('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
 // setApps(arg);
  console.log(arg);
});

 */
export const AdminDashboard = () => {
  const { user } = useAuth0();
  const teacherAuthId = user?.sub;
  // const baseURL = `https://learnx.azurewebsites.net/teacher/${teacherAuthId}/upcomingClasses`;
  const baseURL = `http://localhost:8081/teacher/${teacherAuthId}/upcomingClasses`;
  const [upcomingClasses, setUpcomingClasses] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((res: AxiosResponse) => {
        res.data.map((item: any) => {
          setUpcomingClasses(prevState => [
            ...prevState,
            {
              id: item.course.course_id,
              subject: item.course.subject,
              grade: item.course.grade,
              date: convertDate(item.date),
              time: convertTime(item.course.start_time) + ' - ' + convertTime(item.course.end_time),
              // time: item.course.start_time + ' - ' + item.course.end_time,
            },
          ]);
        });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


  const [apps, setApps] = useState<any>([]);

  const updateApps = () => {
    // calling IPC exposed from preload script

    const x = new Promise((resolve, reject) => {
      // @ts-ignore
      window.electron.ipcRenderer.on('ipc-example', arg => {
        // eslint-disable-next-line no-console
        resolve(arg);
      });
      // @ts-ignore
      window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
    });
    x.then((r: any) => {
      setApps(Array.from(r));
      console.log(r);
    });
  };

  return (
    <div className="DashboardTeacher">
      <Container>
        <Row>
          {/*<PanelContainer />*/}
          <div className="PanelHeader">
            <h2>Admin Dashboard </h2>
            {/*<button onClick={updateApps}>GET APPS</button>*/}
          </div>
          <div className="Panel">
            {/*<div>{JSON.stringify(apps)}</div>*/}
            <div className="PanelSubheader">
            
            </div>
            <div className="PanelBody">
              {upcomingClasses.map((item: any) => {
                return (
                  <Card
                    key={item.id}
                    header={item.subject}
                    time={item.time}
                    date={item.date}
                    grade={item.grade}
                    btnname="Start"
                    image={<img src={'/Images/subjects/Mathematics.png'} />}
                  />
                );
              })}
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
                      <h2>Page Views</h2>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={6}>
              <div className="chart">
                <div className="card shadow-sm p-3 mb-5 bg-white rounded" style={{ width: '29rem', height: '15rem' }}>
                  <div className="card-body">
                    <div className="fundsRow" style={{ display: 'Flex', marginBottom: '20px' }}>
                      <h2>Bounce Rate</h2>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <div className="chart">
                <div className="card shadow-sm p-3 mb-5 bg-white rounded" style={{ width: '29rem', height: '15rem' }}>
                  <div className="card-body">
                    <div className="fundsRow" style={{ display: 'Flex', marginBottom: '20px' }}>
                      <h2>Conversions</h2>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col xl={6}>
              <div className="chart">
                <div className="card shadow-sm p-3 mb-5 bg-white rounded" style={{ width: '29rem', height: '15rem' }}>
                  <div className="card-body">
                    <div className="fundsRow" style={{ display: 'Flex', marginBottom: '20px' }}>
                      <h2>Downloads</h2>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <div className="chart">
                <div className="card shadow-sm p-3 mb-5 bg-white rounded" style={{ width: '29rem', height: '15rem' }}>
                  <div className="card-body">
                    <div className="fundsRow" style={{ display: 'Flex', marginBottom: '20px' }}>
                      <h2>Sales Revenue</h2>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={6}>
              <div className="chart">
                <div className="card shadow-sm p-3 mb-5 bg-white rounded" style={{ width: '29rem', height: '15rem' }}>
                  <div className="card-body">
                    <div className="fundsRow" style={{ display: 'Flex', marginBottom: '20px' }}>
                      <h2>User Distribution</h2>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default AdminDashboard;
