import * as React from "react";
import { useEffect, useState } from "react";
import ProfileNavBar from "../navBar/profileNavBar";
import { Col, Container, Row } from "react-bootstrap";
import AdminSidebar from "./AdminSidebar";
import { useMediaQuery } from "react-responsive";
import axios, { AxiosResponse } from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import AdminLayout from "./AdminLayout";

import EnrollmentChart from "./EnrollmentChart";
import PaymentChart from "./PaymentChart";
import PieChart from "./PieChart";

import PieChartGrades, { PieChartPayment } from "./PieChartPayment";
import SubjectEnrollment, { GradeEnrollment } from "./gradeenrollment";




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

export const AdminDashboard = () => {
  const { user } = useAuth0();
  const teacherAuthId = user?.sub;
  // const baseURL = `https://learnx.azurewebsites.net/teacher/${teacherAuthId}/upcomingClasses`;
  const baseURLChart1 = `http://localhost:8081/teacher/chart1/${teacherAuthId}`;
  const baseURL = `http://localhost:8081/teacher/${teacherAuthId}/upcomingClasses`;
  const [upcomingClasses, setUpcomingClasses] = useState<any[]>([]);
  const [chart1, setChart1] = useState<any[]>([]);
  const [chart2, setChart2] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((res: AxiosResponse) => {
        res.data.map((item: any) => {
          setUpcomingClasses((prevState) => [
            ...prevState,
            {
              id: item.course.course_id,
              subject: item.course.subject,
              grade: item.course.grade,
              date: convertDate(item.date),
              time:
                convertTime(item.course.start_time) +
                " - " +
                convertTime(item.course.end_time),
            },
          ]);
        });
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(baseURLChart1)
      .then((res: AxiosResponse) => {
        res.data.map((item: any) => {
          const lengthStu = item.student_course.length;
          setChart1((prevState) => [
            ...prevState,
            {
              course: item.course_name,
              student: lengthStu,
            },
          ]);
        });
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(baseURLChart1)
      .then((res: AxiosResponse) => {
        res.data.map((item: any) => {
          const lengthStu = item.student_course.length;
          setChart2((prevState) => [
            ...prevState,
            {
              course: item.course_name,
              amount: "Rs." + item.price * lengthStu,
            },
          ]);
          totalAmount = totalAmount + item.price * lengthStu;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(upcomingClasses);

  const [apps, setApps] = useState<any>([]);

  const updateApps = () => {
    // calling IPC exposed from preload script

    const x = new Promise((resolve, reject) => {
      // @ts-ignore
      window.electron.ipcRenderer.on("ipc-example", (arg) => {
        // eslint-disable-next-line no-console
        resolve(arg);
      });
      // @ts-ignore
      window.electron.ipcRenderer.sendMessage("ipc-example", ["ping"]);
    });
    x.then((r: any) => {
      setApps(Array.from(r));
      console.log(r);
    });
  };
  return (
    <AdminLayout>
      <Col lg={12} className="px-lg-5"  >
        <Row>
          {/*<PanelContainer />*/}
          <Row className="d-lg-flex flex-lg-column align-items-center text-lg-center">
            <Col lg={12} md={12} xs={12}>
              <h1 className="text-lg-start header my-lg-3 text-md-center text-center">
                Admin Dashboard
              </h1>
            </Col>
          </Row>
        </Row>

        <Row style={{height:"80vh", overflowY:"scroll"}}>
          {/* ------------------------------ Row 1 ---------------------------------------- */}

          {/* ------------------------------ Row 2 ---------------------------------------- */}
          <Row>
            <Col xl={3} style={{position:"relative", top:"15px"}}>
              <PieChartPayment />
            </Col>
            <Col xl={3}>
              <PieChart />
            </Col>
            <Col
              xl={6}
              // style={{ position: "relative", left: "570px", marginTop: "10px" }}
            >
              <EnrollmentChart />
            </Col>
          </Row>
          {/* -------------------------------------------------------------------- */}
          <Row>
            <Col xl={6}>
              <PaymentChart />
            </Col>
            <Col xl={6}>
              <GradeEnrollment />

            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <div className="card shadow-sm p-3 mb-5 bg-white rounded">
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{ marginBottom: "20px", color: "#1e90ff" }}
                  >
                    Top 5 Teachers with highest Earnings
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
                      <h5 className="card-title">Mr K Silva</h5>
                    </Col>
                    <Col xl={4}>
                      <p>
                        <b>90,000</b>
                      </p>
                    </Col>
                  </div>

                  <div className="fundsRow" style={{ display: "Flex" }}>
                    <Col xl={8}>
                      <h5 className="card-title">Mrs.Chandrakanthi Perera</h5>
                    </Col>
                    <Col xl={4}>
                      <p>
                        <b>90,000</b>
                      </p>
                    </Col>
                  </div>

                  <div className="fundsRow" style={{ display: "Flex" }}>
                    <Col xl={8}>
                      <h5 className="card-title">Miss.Hasini Arachchige</h5>
                    </Col>
                    <Col xl={4}>
                      <p>
                        <b>80,000</b>
                      </p>
                    </Col>
                  </div>

                  <div className="fundsRow" style={{ display: "Flex" }}>
                    <Col xl={8}>
                      <h5 className="card-title">Mr.Rahul Soyza</h5>
                    </Col>
                    <Col xl={4}>
                      <p>
                        <b>70,000</b>
                      </p>
                    </Col>
                  </div>

                  <div className="fundsRow" style={{ display: "Flex" }}>
                    <Col xl={8}>
                      <h5 className="card-title">Mr Duminda Wijenayake</h5>
                    </Col>
                    <Col xl={4}>
                      <p>
                        <b>70,000</b>
                      </p>
                    </Col>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={6}>
              <div className="card shadow-sm p-3 mb-5 bg-white rounded">
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{ marginBottom: "20px", color: "#1e90ff" }}
                  >
                    Top Revenue Generating Institutes
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
                      <h5 className="card-title">Sigma Institute</h5>
                    </Col>
                    <Col xl={4}>
                      <p>
                        <b>200,000</b>
                      </p>
                    </Col>
                  </div>

                  <div className="fundsRow" style={{ display: "Flex" }}>
                    <Col xl={8}>
                      <h5 className="card-title">Shakthi Institute</h5>
                    </Col>
                    <Col xl={4}>
                      <p>
                        <b>160,000</b>
                      </p>
                    </Col>
                  </div>

                  <div className="fundsRow" style={{ display: "Flex" }}>
                    <Col xl={8}>
                      <h5 className="card-title">Rotary Institute</h5>
                    </Col>
                    <Col xl={4}>
                      <p>
                        <b>120,000</b>
                      </p>
                    </Col>
                  </div>

                  <div className="fundsRow" style={{ display: "Flex" }}>
                    <Col xl={8}>
                      <h5 className="card-title">Syzygy Institute</h5>
                    </Col>
                    <Col xl={4}>
                      <p>
                        <b>100,000</b>
                      </p>
                    </Col>
                  </div>

                  <div className="fundsRow" style={{ display: "Flex" }}>
                    <Col xl={8}>
                      <h5 className="card-title">Acme Institute</h5>
                    </Col>
                    <Col xl={4}>
                      <p>
                        <b>100,000</b>
                      </p>
                    </Col>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Row>
      </Col>
    </AdminLayout>
  );
};
export default AdminDashboard;
