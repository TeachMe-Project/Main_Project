import * as React from "react";
import { useEffect, useState } from "react";
import ProfileNavBar from "../navBar/profileNavBar";
import { Col, Container, Row } from "react-bootstrap";
import AdminSidebar from "./AdminSidebar";
import { useMediaQuery } from "react-responsive";
import axios, { AxiosResponse } from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import AdminLayout from "./AdminLayout";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import EnrollmentChart from "./EnrollmentChart";
import PaymentChart from "./PaymentChart";
import PieChart from "./PieChart";
import NewCourses from "./NewCourses";



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
      <Col lg={12} className="px-lg-5">
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

        <Row>
          {/* ------------------------------ Row 1 ---------------------------------------- */}

          {/* ------------------------------ Row 2 ---------------------------------------- */}
          <Row>
            <Col
              xl={2}
              style={{
                marginTop: "10px",
                marginLeft: "180px",
                marginRight: "350px",
                position: "absolute",
              }}
            >
              <PieChart />
            </Col>
            <Col
              xl={6}
              style={{ position: "relative", left: "585px", marginTop: "10px" }}
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
              <NewCourses />
            </Col>
          </Row>
        </Row>
      </Col>
    </AdminLayout>
  );
};
export default AdminDashboard;
