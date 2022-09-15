import * as React from "react";
import { useEffect, useState } from "react";
import Card from "../../Card/Card";

import { Col, Container, Row } from "react-bootstrap";
import "../../../Assets/Styles/main.scss";

import Enrollmentchart from "./Enrollmentchart";
import Averagetimechart from "./Averagetimechart";
import axios, { AxiosResponse } from "axios";
import { useAuth0 } from "@auth0/auth0-react";

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

export const Dashboard = () => {
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
              time: convertTime(item.course.start_time) + " - " + convertTime(item.course.end_time)
              // time: item.course.start_time + ' - ' + item.course.end_time,
            }
          ]);
        });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  console.log(upcomingClasses);

  return (
    <div className="DashboardTeacher">
      <Container>
        <Row>
          {/*<PanelContainer />*/}
          <div className="PanelHeader">
            <h2>Dashboard</h2>
          </div>
          <div className="Panel">
            <div className="PanelSubheader">
              <h5>Upcoming Classes </h5>
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
                    image={<img src={"/Images/subjects/Mathematics.png"} />}
                  />
                );
              })}
              {/* <Card
                header="Mathematics"
                time="04:00pm- 06:00pm"
                date="23-08-2022"
                grade="Grade 8"
                btnname="Start"
                image={<img src={'/Images/subjects/Mathematics.png'} />}
              />
              <Card
                header="Mathematics"
                time="04:00pm- 06:00pm"
                date="24-08-2022"
                grade="Grade 9"
                btnname="Start"
                image={<img src={'/Images/subjects/Mathematics.png'} />}
              />

              <Card
                header="Mathematics"
                time="04:00pm- 06:00pm"
                date="30-08-2022"
                grade="Grade 8"
                btnname="Start"
                image={<img src={'/Images/subjects/maths.png'} />}
              /> */}
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
                <div className="card shadow-sm p-3 mb-5 bg-white rounded" style={{ width: "29rem", height: "15rem" }}>
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
                    <div className="fundsRow" style={{ display: "Flex", marginBottom: "20px" }}>
                      <Col xl={8}>
                        <p style={{ marginRight: "20px" }}>Mathematics</p>
                      </Col>
                      <Col xl={4}>
                        <p className="text-center">20</p>
                      </Col>
                    </div>

                    <div className="fundsRow" style={{ display: "Flex", marginBottom: "20px" }}>
                      <Col xl={8}>
                        <p style={{ marginRight: "20px" }}>Science</p>
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
                <div className="card shadow-sm p-3 mb-5 bg-white rounded" style={{ width: "29rem", height: "15rem" }}>
                  <div className="card-body">
                    <h5 className="card-title" style={{ marginBottom: "20px", color: "#1e90ff" }}>
                      Monthly Income
                    </h5>
                    <div className="fundsRow" style={{ display: "Flex" }}>
                      <Col xl={8}>
                        <p style={{ marginRight: "20px" }}>Mathematics</p>
                      </Col>
                      <Col xl={4}>
                        <p>Rs.5,000.00</p>
                      </Col>
                    </div>

                    <div className="fundsRow" style={{ display: "Flex" }}>
                      <Col xl={8}>
                        <p style={{ marginRight: "20px" }}>Science</p>
                      </Col>
                      <Col xl={4}>
                        <p>Rs.20,000.00</p>
                      </Col>
                    </div>

                    <div className="fundsRow" style={{ display: "Flex" }}>
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
