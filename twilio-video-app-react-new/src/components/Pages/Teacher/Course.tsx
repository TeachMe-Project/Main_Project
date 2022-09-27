import * as React from "react";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import Tabs from "../../Tabs/Tabs";
import Details from "./Details";
import PanelContainer from "../../Layout/PanelContainer";
import "bootstrap/dist/css/bootstrap.min.css";
// @ts-ignore
import swal from "@sweetalert/with-react";

import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { ButtonCommon } from "../../Button/ButtonCommon";
import { FiDownload } from "react-icons/fi";
import { MdDelete, MdNotStarted } from "react-icons/md";
import axios, { AxiosResponse } from "axios";
import { useAuth0 } from "@auth0/auth0-react";

library.add(fas);

const convertTime = (x: Date) => {
  const time = x.toLocaleTimeString("it-IT");
  const hour = time.split(":")[0];
  const intHour = parseInt(hour);
  const minute = time.split(":")[1];
  const ampm = intHour >= 12 ? "PM" : "AM";
  const newHour = intHour % 12;
  return newHour + ":" + minute + " " + ampm;
};

const convertDate = (date: Date) => {
  const d = new Date(date);
  return d.toDateString();
};

export const Course = () => {
  const navigate = useNavigate();
  const directToCourse = () => {
    navigate("/");
  };

  const { user } = useAuth0();
  const teacherAuthId = user?.sub;
  const params = useParams();
  console.log(params);
  const baseURLCourse = `https://learnx.azurewebsites.net/course/${params.course_id}`;
  const baseURLStudents = `https://learnx.azurewebsites.net/course/courseStudents/${params.course_id}`;
  const baseURLSchedule = `https://learnx.azurewebsites.net/course/courseUpcoming/${params.course_id}`;

  const [display, setDisplay] = useState<any[]>([]);
  const [details, setDetails] = useState<any[]>([]);
  const [notes, setNotes] = useState<any[]>([]);
  const [homework, setHomework] = useState<any[]>([]);
  const [students, setStudents] = useState<any[]>([]);
  const [schedule, setSchedule] = useState<any[]>([]);
  const [payments, setPayments] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(baseURLCourse)
      .then((res: AxiosResponse) => {
        res.data.map((item: any) => {
          setDetails(prevState => [
            ...prevState,
            {
              subject: item.subject,
              title: item.subject + " by " + item.first_name + " " + item.last_name,
              grade: item.grade,
              medium: item.medium,
              desc: item.description,
              price: "LKR " + item.price,
              start_date: item.start_date,
              end_date: item.end_date,
              start_time: item.start_time,
              day: item.day
            }
          ]);
        });
        console.log(details);
      })
      .catch(err => {
        console.log(err);
      });
    axios
      .get(baseURLCourse)
      .then((res: AxiosResponse) => {
        const note = res.data[0].notes;
        note.map((item: any) => {
          setNotes(prevState => [
            ...prevState,
            {
              id: item.note_id,
              topic: item.topic,
              date: item.uploaded_date.substring(0, 10),
              link: item.note
            }
          ]);
        });
        console.log(notes);
      })
      .catch(err => {
        console.log(err);
      });
    axios
      .get(baseURLCourse)
      .then((res: AxiosResponse) => {
        const hw = res.data[0].homework;
        hw.map((item: any) => {
          setHomework(prevState => [
            ...prevState,
            {
              id: item.homework_id,
              topic: item.topic,
              date: item.uploaded_date.substring(0, 10),
              link: item.homework
            }
          ]);
        });
        console.log(homework);
      })
      .catch(err => {
        console.log(err);
      });
    axios
      .get(baseURLStudents)
      .then((res: AxiosResponse) => {
        res.data.map((item: any) => {
          setStudents(prevState => [
            ...prevState,
            {
              student_id: item.student_id,
              user_id: item.student.user_id,
              name: item.student.first_name + " " + item.student.last_name,
              contact: item.student.parent.mobile_no
            }
          ]);
        });
        console.log(students);
      })
      .catch(err => {
        console.log(err);
      });
    axios
      .get(baseURLSchedule)
      .then((res: AxiosResponse) => {
        res.data.map((item: any) => {
          setSchedule(prevState => [
            ...prevState,
            {
              date: convertDate(item.date),
              start_time: item.start_time,
              end_time: item.end_time
            }
          ]);
        });
        console.log(schedule);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const removeHomework = (item: any) => (
    <a
      className="Reacticonbtn remove"
      onClick={() => {
        swal({
          title: "Request Removal",
          text: `Do you really want to remove this homework?`,
          icon: "error",
          buttons: {
            cancel: true,
            confirm: true
          }
          // dangerMode: true,
        })
          .then((willDelete: any) => {
            const apiData = JSON.stringify({
              "homework_id": item.id,
            });
            axios({
              method: "POST",
              url: `http://localhost:8081/homework/removeHomework`,
              headers: {
                "Content-Type": "application/json",
              },
              data: apiData,
            }).then((apiRes) => {
              console.log(apiRes.status);
              if (apiRes.status === 200) {
                swal(`Poof! You have successfully removed ${item.topic}`, {
                  icon: "success",
                });
              }
              console.log(`Successfully removed ${item.topic}`);
            }).catch((error) => {
              console.log(error.message);
            }).catch((error) => {
              console.log(error.message);
            });
          });
      }}
    ><MdDelete
        className="Reacticon" />
        Remove
     </a>
  );

  return (
    <div className="Course">
      <Container>
        <Row>
          <PanelContainer />
          <div className="PanelHeader">
            <h2>My Courses</h2>
          </div>
          <div className="Panel">

            {details.map((item: any) => {
              return (
                <div className="PanelSubHeader">
                  <div className="PanelImage">{<img src={'/Images/subjects/Mathematics.png'} />}</div>
                  <h3>{item.title}</h3>
                </div>
              );
            })}

            <Tabs>

              <div className="Details" style={{ marginTop: '50px' }}>
                {details.map((item: any) => {
                  return (
                    <div>
                      <div className="buttoneditdetails" style={{ float: 'right', position: 'relative', top: '10px' }}>
                        <Link to="/editdetails" className="link">
                          <ButtonCommon name={'Edit Details'} />
                        </Link>
                      </div>
                      {/* <Details label="Title" value={item.title} symbol=":" /> */}
                      <Details label="Subject" value={item.subject} symbol=":" />
                      <Details
                        label="Description"
                        value={item.desc}
                        symbol=":"
                      />
                      <Details label="Grade" value={item.grade} symbol=":" />
                      <Details label="Medium" value={item.medium} symbol=":" />
                      <Details label="Fee" value={item.price} symbol=":" />
                      <Details label="Start Date" value={item.start_date} symbol=":" />
                      <Details label="End Date" value="2022-03-24" symbol=":" />
                      <Details label="Class Day" value="Thursday" symbol=":" />
                      <Details label="Start time" value={item.start_time} symbol=":" />
                    </div>
                  );
                })}
              </div>


              <div className="Notes">
                <div className="buttoneditdetails" style={{ float: "right", position: "relative", top: "10px" }}>
                  <Link to={`/uploadnotes/${params.course_id}`} className="link">
                    <ButtonCommon name={"Upload Notes"} />
                  </Link>
                </div>
                <div className="noteContainer" style={{ marginTop: "50px" }}>
                  <table className="booking-table" id="view-booking">
                    <tbody>

                      {notes.map((item: any) => {
                        return (
                          <tr>
                            <td data-label="Note ID :"
                              className="noteheader"
                            >
                              {item.topic}
                            </td>
                            <td data-label="Uploaded Date :"
                              className="notedetails">{item.date}</td>

                            <td data-label="">
                              <a
                                download="note1.pdf"
                                href={item.link}
                                target="_blank"
                                className="Reacticonbtn download">
                                <FiDownload className="Reacticon" />
                                Download
                              </a>

                            </td>
                            <td data-label="">
                              <a
                                className="Reacticonbtn remove"
                              >
                                <MdDelete className="Reacticon" />Remove
                              </a>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>

                </div>
              </div>

              <div className="Homework">
                <Link className="link" to="/uploadhomework">
                  <div className="buttoneditdetails" style={{ float: "right", position: "relative", top: "10px" }}>
                    <Link to={`/uploadhomework/${params.course_id}`} className="link">
                      <ButtonCommon name={"Upload Homework"} style={{ width: "max-content" }} />
                    </Link>
                  </div>
                </Link>
                <table className="booking-table" id="view-booking">
                  <tbody>

                    {homework.map((item: any) => {
                      return (
                        <tr>
                          <td data-label="Note ID :"
                            className="noteheader"
                          >
                            {item.topic}
                          </td>
                          <td data-label="Uploaded Date :"
                            className="notedetails">{item.date}</td>

                          <td data-label="">
                            <a
                              download="note1.pdf"
                              href={item.link}
                              target="_blank"
                              className="Reacticonbtn download">
                              <FiDownload className="Reacticon" />
                              Download
                            </a>

                          </td>
                          <td data-label="">
                            {/* <a
                              download="note1.pdf"
                              href=""
                              target="_blank"
                              className="Reacticonbtn remove"
                            >
                              <MdDelete className="Reacticon" />Remove
                            </a> */}
                            {removeHomework(item)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="Students">
                <div className="studentContainer">
                  <table className="booking-table" id="view-booking">
                    <tbody>
                      {students.map((item: any) => {
                        return (
                          <tr>
                            <td data-label="Student ID :" className="notedetails">{item.student_id}</td>
                            <td data-label="Student Name :" className="noteheader">{item.name}</td>
                            <td data-label="Parent's Contact :" className="notedetails">{item.contact}</td>
                            <td data-label="View Profile :">
                              <div className="cancelbutton">
                                {/* <Link to="/studentProfile/${}" className="link">
                                  <ButtonCommon name={"View Profile"} className="viewBtn" />
                                </Link> */}
                                <div className="ButtonCommon viewBtn" onClick={() => navigate(`/studentProfile/${item.user_id}`)}>
                                  View Profile
                                </div>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="Schedules">
                <div className="scheduleContainer">
                  <Row>
                    <div className="buttoneditdetails">
                      <div className="ButtonCommon" style={{ float: "right", position: "relative", top: "10px", width: "max-content" }} onClick={() => navigate(`/addextraclass/${params.course_id}`)}>
                        Schedule Extra Class
                      </div>
                    </div>
                  </Row>
                </div>
                <table className="booking-table" id="view-booking">
                  <tbody>

                    {schedule.map((item: any) => {
                      return (
                        <tr>
                          <td data-label="Note ID :"
                            className="noteheader"
                          >
                            {item.date}</td>
                          <td data-label="Uploaded Date :"
                            className="notedetails">{item.start_time}</td>
                          <td data-label="Uploaded Date :"
                            className="notedetails">{item.end_time}</td>
                          <td data-label="">
                            <a
                              download="note1.pdf"
                              href=""
                              target="_blank"
                              className="Reacticonbtn download">
                              <MdNotStarted className="Reacticon" />
                              Start Class
                            </a>
                          </td>
                        </tr>
                      );
                    })}

                  </tbody>
                </table>
              </div>

              <div className="Pending Payments">
                <div className="paymentsContainer">
                  <table className="booking-table" id="view-booking">
                    <tbody>
                      {payments.map((item: any) => {
                        return (
                          <tr>
                            <td data-label="Student ID :" className="notedetails">10000102345</td>
                            <td data-label="Student Name :" className="noteheader">Romesh Perera</td>
                            <td data-label="Month :" className="notedetails">July</td>
                            <td data-label="Amount :" className="notedetails">LKR 2500</td>
                          </tr>
                        );
                      })}
                      <tr>
                        <td data-label="Student ID :" className="notedetails">10000102345</td>
                        <td data-label="Student Name :" className="noteheader">Romesh Perera</td>
                        <td data-label="Month :" className="notedetails">July</td>
                        <td data-label="Amount :" className="notedetails">LKR 2500</td>
                      </tr>
                      <tr>
                        <td data-label="Student ID :" className="notedetails">10000102345</td>
                        <td data-label="Student Name :" className="noteheader">Romesh Perera</td>
                        <td data-label="Month :" className="notedetails">August</td>
                        <td data-label="Amount :" className="notedetails">LKR 2500</td>
                      </tr>
                      <tr>
                        <td data-label="Student ID :" className="notedetails">10000102111</td>
                        <td data-label="Student Name :" className="noteheader">Neelya Jhones</td>
                        <td data-label="Month :" className="notedetails">August</td>
                        <td data-label="Amount :" className="notedetails">LKR 2500</td>
                      </tr>
                      <tr>
                        <td data-label="Student ID :" className="notedetails">10000102908</td>
                        <td data-label="Student Name :" className="noteheader">Minura Ranasinghe</td>
                        <td data-label="Month :" className="notedetails">August</td>
                        <td data-label="Amount :" className="notedetails">LKR 2500</td>
                      </tr>
                      <tr>
                        <td data-label="Student ID :" className="notedetails">10000102905</td>
                        <td data-label="Student Name :" className="noteheader">Senith De Silva</td>
                        <td data-label="Month :" className="notedetails">August</td>
                        <td data-label="Amount :" className="notedetails">LKR 2500</td>
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
