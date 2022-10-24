import * as React from "react";
import { useEffect, useState } from "react";
import Card from "../../Card/Card";

import { Col, Container, Row } from "react-bootstrap";
import "../../../Assets/Styles/main.scss";

import Enrollmentchart from "./Enrollmentchart";
import Averagetimechart from "./Averagetimechart";
import axios, { AxiosResponse } from "axios";
import { useAuth0 } from "@auth0/auth0-react";

// import MyRecentCourses from "./MyRecentCourses";
import TopNavbar from '../../Navbars/TopNavbar';
import LeftSidebar from '../../Sidebar/LeftSidebar';
import PanelContainer from '../../Layout/PanelContainer';
import { AiOutlineHistory } from 'react-icons/ai';
import Paymentpiechart from './Paymentpiechart';
import Monthlyattendancechart from './Monthlyattendancechart';

const convertTime = (time: String) => {
  const hour = time.split(":")[0] || time.split(".")[0];
  const intHour = parseInt(hour);
  const minute = time.split(":")[1] || time.split(".")[1];
  const ampm = intHour >= 12 ? "PM" : "AM";
  const newHour = intHour % 12;
  return newHour + ":" + minute + " " + ampm;
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
let totalAmount = 0;

export const Dashboard = () => {
  const { user } = useAuth0();
  const teacherAuthId = user?.sub;
  // const baseURL = `https://learnxy.azurewebsites.net/teacher/${teacherAuthId}/upcomingClasses`;
  // const baseURLChart1 = `https://learnxy.azurewebsites.net/teacher/chart1/${teacherAuthId}`;
  const baseURLChart1 = `https://learnxy.azurewebsites.net/teacher/chart1/${teacherAuthId}`;
  const baseURL = `https://learnxy.azurewebsites.net/teacher/${teacherAuthId}/upcomingClasses`;
  const [upcomingClasses, setUpcomingClasses] = useState<any[]>([]);
  const [chart1, setChart1] = useState<any[]>([]);
  const [chart2, setChart2] = useState<any[]>([]);
  
  useEffect(() => {
    axios
      .get(baseURL)
      .then((res: AxiosResponse) => {
        res.data.map((item: any) => {
          setUpcomingClasses(prevState => [
            ...prevState,
            {
              id: item.course.course_id,
              class_id:item.class_id,
              subject: item.course.subject,
              grade: item.course.grade,
              date: convertDate(item.date),
              time: convertTime(item.course.start_time) + " - " + convertTime(item.course.end_time)
            }
          ]);
        });
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get(baseURLChart1)
      .then((res: AxiosResponse) => {
        res.data.map((item: any) => {
          const lengthStu = item.student_course.length
          setChart1(prevState => [
            ...prevState,
            {
              course: item.subject + " for " + item.grade,
              student: lengthStu
            }
          ]);
        });
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get(baseURLChart1)
      .then((res: AxiosResponse) => {
        res.data.map((item: any) => {
          const lengthStu = item.student_course.length
          setChart2(prevState => [
            ...prevState,
            {
              course: item.subject + " for " + item.grade,
              amount: 'Rs.' + (item.price * lengthStu)
            }
          ]);
          totalAmount = totalAmount + (item.price * lengthStu);
        });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  console.log(upcomingClasses);


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
              {upcomingClasses.map((item: any) => {
                return (
                  <Card
                    key={item.id}
                    id={item.id}
                    class_id={item.class_id}
                    header={item.subject}
                    time={item.time}
                    date={item.date}
                    grade={item.grade}
                    btnname="Start"
                    image={<img src={"/Images/subjects/Mathematics.png"} />}
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
                <div className="card shadow-sm p-3 mb-5 bg-white rounded" style={{ width: "29rem", height: "15rem", overflow: 'scroll' }}>
                  <div className="card-body">
                    <div className="fundsRow" style={{ display: "Flex", marginBottom: "20px" }}>
                      <Col xl={8}>
                        <h5 className="card-title" style={{ marginBottom: "20px", color: "#1e90ff" }}>
                          Course
                        </h5>
                      </Col>
                      <Col xl={4}>
                        <h5 className="card-title" style={{ marginBottom: "20px", color: "#1e90ff" }}>
                          Student Count
                        </h5>
                      </Col>
                    </div>

                    {chart1.map((item: any) => {
                      return (
                        <div className="fundsRow" style={{ display: "Flex", marginBottom: "20px" }}>
                          <Col xl={8}>
                            <p style={{ marginRight: "20px" }}>{item.course}</p>
                          </Col>
                          <Col xl={4}>
                            <p className="text-center">{item.student}</p>
                          </Col>
                        </div>
                      );
                    })}

                  </div>
                </div>
              </div>
            </Col>

            {/* ------------------------------------------------------------------------------- */}

            <Col xl={6}>
              <div className="chart">
                <div className="card shadow-sm p-3 mb-5 bg-white rounded" style={{ width: "29rem", height: "15rem", overflow: 'scroll' }}>
                  <div className="card-body">
                    <h5 className="card-title" style={{ marginBottom: "20px", color: "#1e90ff" }}>
                      Monthly Income
                    </h5>

                    {chart2.map((item: any) => {
                      return (
                        <div className="fundsRow" style={{ display: "Flex" }}>
                          <Col xl={8}>
                            <p style={{ marginRight: "20px" }}>{item.course}</p>
                          </Col>
                          <Col xl={4}>
                            <p>{item.amount}</p>
                          </Col>
                        </div>
                      );
                    })}

                    <div className="fundsRow" style={{ display: "Flex" }}>
                      <Col xl={8}>
                        <h5 className="card-title">Total Earnings</h5>
                      </Col>
                      <Col xl={4}>
                        <p>
                        <b>Rs. {totalAmount}</b>
                        </p>
                      </Col>
                    </div>
                  </div>
                </div>

              </div>
            </Col>
          </Row>

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
