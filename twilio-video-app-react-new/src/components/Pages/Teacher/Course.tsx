import * as React from "react";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import Tabs from "../../Tabs/Tabs";
import Details from "./Details";
import PanelContainer from "../../Layout/PanelContainer";
import "bootstrap/dist/css/bootstrap.min.css";

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

export const Course = () => {
  const navigate = useNavigate();
  const directToCourse = () => {
    navigate("/");
  };

  const { user } = useAuth0();
  const teacherAuthId = user?.sub;
  const params = useParams();
  console.log(params);
  const baseURLCourse = `https://learnx.azurewebsites.net/course/${params}`;
  const baseURLStudents = `https://learnx.azurewebsites.net/course/courseStudents/${params}`;
  const baseURLSchedule = `https://learnx.azurewebsites.net/course/courseUpcoming/${params}`;

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
              start_time: item.start_time,
              institute: item.teacher.institute_teacher.institute,
              duration: item.duration + " years"
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
        res.data.map((item: any) => {
          setNotes(prevState => [
            ...prevState,
            {
              date: item.notes.uploaded_date,
              link: item.notes.note
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
        res.data.map((item: any) => {
          setHomework(prevState => [
            ...prevState,
            {
              date: item.notes.uploaded_date,
              link: item.notes.homework
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
              id: item.student_id,
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
              date: item.date,
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

  return (
    <div className="Course">
      <Container>
        <Row>
          <PanelContainer />
          <div className="PanelHeader">
            <h2>My Courses</h2>
          </div>
          <div className="Panel">

            {/* {details.map((item: any) => {
              return (
                <div>
                  <div className="PanelSubHeader">
                    <div className="PanelImage">{<img src={'/Images/subjects/Mathematics.png'} />}</div>
                    <h3>{item.subject} Class</h3>
                  </div>

                  <div className="Details" style={{ marginTop: '50px' }}>
                    <div className="buttoneditdetails" style={{ float: 'right', position: 'relative', top: '10px' }}>
                      <Link to="/editdetails" className="link">
                        <ButtonCommon name={'Edit Details'} />
                      </Link>
                    </div>
                    <Details label="Title" value={item.title} symbol=":" />
                    <Details label="subject" value={item.subject} symbol=":" />
                    <Details
                      label="description"
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
                </div>
              );
            })} */}

            <div className="PanelSubHeader">
              <div className="PanelImage">{<img src={"/Images/subjects/Mathematics.png"} />}</div>
              <h3>Mathematics Class</h3>
            </div>

            <Tabs>

              <div className="Details" style={{ marginTop: "50px" }}>
                <div className="buttoneditdetails" style={{ float: "right", position: "relative", top: "10px" }}>
                  <Link to="/editdetails" className="link">
                    <ButtonCommon name={"Edit Details"} />
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

                <div className="buttoneditdetails" style={{ float: "right", position: "relative", top: "10px" }}>
                  <Link to="/uploadnotes" className="link">
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
                            Note for week 1
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
                              download="note1.pdf"
                              href=""
                              target="_blank"
                              className="Reacticonbtn remove"
                            >
                              <MdDelete className="Reacticon" />Remove
                            </a>
                          </td>
                        </tr>
                      );
                    })}

                    {/* <tr>
                        <td data-label="Note ID :"
                          className="noteheader"
                        >
                          Note for week 1</td>
                        <td data-label="Uploaded Date :"
                          className="notedetails">04-05-2022</td>

                        <td data-label="">
                          <a
                            download="note1.pdf"
                            href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                            target="_blank"
                            className="Reacticonbtn download">
                            <FiDownload className="Reacticon" />
                            Download
                          </a>

                        </td>
                        <td data-label="">
                          <a
                            download="note1.pdf"
                            href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                            target="_blank"
                            className="Reacticonbtn remove"
                          >
                            <MdDelete className="Reacticon" />Remove
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-label="Note ID :"
                          className="noteheader"
                        >
                          Note for week 2</td>
                        <td data-label="Uploaded Date :"
                          className="notedetails">11-05-2022</td>

                        <td data-label="">
                          <a
                            download="note1.pdf"
                            href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                            target="_blank"
                            className="Reacticonbtn download">
                            <FiDownload className="Reacticon" />
                            Download
                          </a>

                        </td>
                        <td data-label="">
                          <a
                            download="note1.pdf"
                            href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                            target="_blank"
                            className="Reacticonbtn remove"
                          >
                            <MdDelete className="Reacticon" />Remove
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-label="Note ID :"
                          className="noteheader"
                        >
                          Note for week 3</td>
                        <td data-label="Uploaded Date :"
                          className="notedetails">18-05-2022</td>

                        <td data-label="">
                          <a
                            download="note1.pdf"
                            href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                            target="_blank"
                            className="Reacticonbtn download">
                            <FiDownload className="Reacticon" />
                            Download
                          </a>

                        </td>
                        <td data-label="">
                          <a
                            download="note1.pdf"
                            href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                            target="_blank"
                            className="Reacticonbtn remove"
                          >
                            <MdDelete className="Reacticon" />Remove
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-label="Note ID :"
                          className="noteheader"
                        >
                          Note for week 4</td>
                        <td data-label="Uploaded Date :"
                          className="notedetails">25-05-2022</td>

                        <td data-label="">
                          <a
                            download="note1.pdf"
                            href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                            target="_blank"
                            className="Reacticonbtn download">
                            <FiDownload className="Reacticon" />
                            Download
                          </a>

                        </td>
                        <td data-label="">
                          <a
                            download="note1.pdf"
                            href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                            target="_blank"
                            className="Reacticonbtn remove"
                          >
                            <MdDelete className="Reacticon" />Remove
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-label="Note ID :"
                          className="noteheader"
                        >
                          Note for week 6</td>
                        <td data-label="Uploaded Date :"
                          className="notedetails">02-06-2022</td>

                        <td data-label="">
                          <a
                            download="note1.pdf"
                            href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                            target="_blank"
                            className="Reacticonbtn download">
                            <FiDownload className="Reacticon" />
                            Download
                          </a>

                        </td>
                        <td data-label="">
                          <a
                            download="note1.pdf"
                            href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                            target="_blank"
                            className="Reacticonbtn remove"
                          >
                            <MdDelete className="Reacticon" />Remove
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-label="Note ID :"
                          className="noteheader"
                        >
                          Note for week 6</td>
                        <td data-label="Uploaded Date :"
                          className="notedetails">09-05-2022</td>

                        <td data-label="">
                          <a
                            download="note1.pdf"
                            href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                            target="_blank"
                            className="Reacticonbtn download">
                            <FiDownload className="Reacticon" />
                            Download
                          </a>

                        </td>
                        <td data-label="">
                          <a
                            download="note1.pdf"
                            href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                            target="_blank"
                            className="Reacticonbtn remove"
                          >
                            <MdDelete className="Reacticon" />Remove
                          </a>
                        </td>
                      </tr> */}

                    </tbody>
                  </table>

                </div>
              </div>

              <div className="Homework">
                <Link className="link" to="/uploadhomework">
                  <div className="buttoneditdetails" style={{ float: "right", position: "relative", top: "10px" }}>
                    <Link to="/uploadhomework" className="link">
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
                          Homework for week 1
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
                            download="note1.pdf"
                            href=""
                            target="_blank"
                            className="Reacticonbtn remove"
                          >
                            <MdDelete className="Reacticon" />Remove
                          </a>
                        </td>
                      </tr>
                    );
                  })}

                  {/* <tr>
                      <td data-label="Note ID :"
                        className="noteheader"
                      >
                        Homework for week 1</td>
                      <td data-label="Uploaded Date :"
                        className="notedetails">04-05-2022</td>

                      <td data-label="">
                        <a
                          download="note1.pdf"
                          href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                          target="_blank"
                          className="Reacticonbtn download">
                          <FiDownload className="Reacticon" />
                          Download
                        </a>

                      </td>
                      <td data-label="">
                        <a
                          download="note1.pdf"
                          href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                          target="_blank"
                          className="Reacticonbtn remove"
                        >
                          <MdDelete className="Reacticon" />Remove
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Note ID :"
                        className="noteheader"
                      >
                        Homework for week 2</td>
                      <td data-label="Uploaded Date :"
                        className="notedetails">11-05-2022</td>

                      <td data-label="">
                        <a
                          download="note1.pdf"
                          href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                          target="_blank"
                          className="Reacticonbtn download">
                          <FiDownload className="Reacticon" />
                          Download
                        </a>

                      </td>
                      <td data-label="">
                        <a
                          download="note1.pdf"
                          href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                          target="_blank"
                          className="Reacticonbtn remove"
                        >
                          <MdDelete className="Reacticon" />Remove
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Note ID :"
                        className="noteheader"
                      >
                        Homework for week 3</td>
                      <td data-label="Uploaded Date :"
                        className="notedetails">18-05-2022</td>

                      <td data-label="">
                        <a
                          download="note1.pdf"
                          href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                          target="_blank"
                          className="Reacticonbtn download">
                          <FiDownload className="Reacticon" />
                          Download
                        </a>

                      </td>
                      <td data-label="">
                        <a
                          download="note1.pdf"
                          href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                          target="_blank"
                          className="Reacticonbtn remove"
                        >
                          <MdDelete className="Reacticon" />Remove
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Note ID :"
                        className="noteheader"
                      >
                        Homework for week 4</td>
                      <td data-label="Uploaded Date :"
                        className="notedetails">25-05-2022</td>

                      <td data-label="">
                        <a
                          download="note1.pdf"
                          href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                          target="_blank"
                          className="Reacticonbtn download">
                          <FiDownload className="Reacticon" />
                          Download
                        </a>

                      </td>
                      <td data-label="">
                        <a
                          download="note1.pdf"
                          href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                          target="_blank"
                          className="Reacticonbtn remove"
                        >
                          <MdDelete className="Reacticon" />Remove
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Note ID :"
                        className="noteheader"
                      >
                        Homework for week 6</td>
                      <td data-label="Uploaded Date :"
                        className="notedetails">02-06-2022</td>

                      <td data-label="">
                        <a
                          download="note1.pdf"
                          href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                          target="_blank"
                          className="Reacticonbtn download">
                          <FiDownload className="Reacticon" />
                          Download
                        </a>

                      </td>
                      <td data-label="">
                        <a
                          download="note1.pdf"
                          href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                          target="_blank"
                          className="Reacticonbtn remove"
                        >
                          <MdDelete className="Reacticon" />Remove
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Note ID :"
                        className="noteheader"
                      >
                        Homework for week 6</td>
                      <td data-label="Uploaded Date :"
                        className="notedetails">09-05-2022</td>

                      <td data-label="">
                        <a
                          download="note1.pdf"
                          href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                          target="_blank"
                          className="Reacticonbtn download">
                          <FiDownload className="Reacticon" />
                          Download
                        </a>

                      </td>
                      <td data-label="">
                        <a
                          download="note1.pdf"
                          href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                          target="_blank"
                          className="Reacticonbtn remove"
                        >
                          <MdDelete className="Reacticon" />Remove
                        </a>
                      </td>
                    </tr> */}

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
                          <td data-label="Student ID :" className="notedetails">{item.id}</td>
                          <td data-label="Student Name :" className="noteheader">{item.name}</td>
                          <td data-label="Parent's Contact :" className="notedetails">{item.contact}</td>
                          <td data-label="View Profile :">
                            <div className="cancelbutton">
                              <Link to="/addcourse" className="link">
                                <ButtonCommon name={"View Profile"} className="viewBtn" />
                              </Link>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                    {/* <tr>
                        <td data-label="Student ID :" className="notedetails">10000102345</td>
                        <td data-label="Student Name :" className="noteheader">Romesh Perera</td>
                        <td data-label="Parent's Contact :" className="notedetails">011 2840231</td>
                        <td data-label="View Profile :">
                          <div className="cancelbutton">
                            <Link to="/addcourse" className="link">
                              <ButtonCommon name={'View Profile'} className="viewBtn" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td data-label="Student ID :" className="notedetails">10000102001</td>
                        <td data-label="Student Name :" className="noteheader">Saduni Weerasinghe</td>
                        <td data-label="Parent Contact :" className="notedetails">071 1450231</td>
                        <td data-label="View Profile :">
                          <div className="cancelbutton">
                            <Link to="/addcourse" className="link">
                              <ButtonCommon name={'View Profile'} className="viewBtn" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td data-label="Student ID :" className="notedetails">10000102908</td>
                        <td data-label="Student Name :" className="noteheader">Minura Ranasinghe</td>
                        <td data-label="Parent Contact :" className="notedetails">078 2402399</td>
                        <td data-label="View Profile :">
                          <div className="cancelbutton">
                            <Link to="/addcourse" className="link">
                              <ButtonCommon name={'View Profile'} className="viewBtn" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td data-label="Student ID :" className="notedetails">10000102111</td>
                        <td data-label="Student Name :" className="noteheader">Neelya Jhones</td>
                        <td data-label="Parent Contact :" className="notedetails">077 2898275</td>
                        <td data-label="View Profile :">
                          <div className="cancelbutton">
                            <Link to="/addcourse" className="link">
                              <ButtonCommon name={'View Profile'} className="viewBtn" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td data-label="Student ID :" className="notedetails">10000102343</td>
                        <td data-label="Student Name :" className="noteheader">Kavindu De Silva</td>
                        <td data-label="Parent Contact :" className="notedetails">070 1189377</td>
                        <td data-label="View Profile :">
                          <div className="cancelbutton">
                            <Link to="/addcourse" className="link">
                              <ButtonCommon name={'View Profile'} className="viewBtn" />
                            </Link>
                          </div>
                        </td>
                      </tr> */}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="Schedules">
                <div className="scheduleContainer">
                  <Row>
                    <Link className="link" to="/addextraclass">
                      <div className="buttoneditdetails" style={{ float: "right", position: "relative", top: "10px" }}>
                        <Link to="/addextraclass" className="link">
                          <ButtonCommon name={"Schedule Extra Class"} style={{ width: "max-content" }} />
                        </Link>
                      </div>
                    </Link>
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
                            Join Class
                          </a>
                        </td>
                      </tr>
                    );
                  })}

                  {/* <tr>
                      <td data-label="Note ID :"
                        className="noteheader"
                      >
                        04-05-2022</td>
                      <td data-label="Uploaded Date :"
                        className="notedetails">04:00 pm</td>
                      <td data-label="Uploaded Date :"
                        className="notedetails">06:00 pm </td>
                      <td data-label="">
                        <a
                          download="note1.pdf"
                          href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                          target="_blank"
                          className="Reacticonbtn download">
                          <MdNotStarted className="Reacticon" />
                          Join Class
                        </a>

                      </td>

                    </tr>
                    <tr>
                      <td data-label="Note ID :"
                        className="noteheader"
                      >
                        11-05-2022</td>
                      <td data-label="Uploaded Date :"
                        className="notedetails">04:00 pm</td>
                      <td data-label="Uploaded Date :"
                        className="notedetails">06:00 pm </td>
                      <td data-label="">
                        <a
                          download="note1.pdf"
                          href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                          target="_blank"
                          className="Reacticonbtn download">
                          <MdNotStarted className="Reacticon" />
                          Join Class
                        </a>

                      </td>

                    </tr>
                    <tr>
                      <td data-label="Note ID :"
                        className="noteheader"
                      >
                        18-05-2022</td>
                      <td data-label="Uploaded Date :"
                        className="notedetails">04:00 pm</td>
                      <td data-label="Uploaded Date :"
                        className="notedetails">06:00 pm </td>
                      <td data-label="">
                        <a
                          download="note1.pdf"
                          href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                          target="_blank"
                          className="Reacticonbtn download">
                          <MdNotStarted className="Reacticon" />
                          Join Class
                        </a>

                      </td>

                    </tr>
                    <tr>
                      <td data-label="Note ID :"
                        className="noteheader"
                      >
                        25-05-2022</td>
                      <td data-label="Uploaded Date :"
                        className="notedetails">04:00 pm</td>
                      <td data-label="Uploaded Date :"
                        className="notedetails">06:00 pm </td>
                      <td data-label="">
                        <a
                          download="note1.pdf"
                          href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                          target="_blank"
                          className="Reacticonbtn download">
                          <MdNotStarted className="Reacticon" />
                          Join Class
                        </a>

                      </td>

                    </tr>
                    <tr>
                      <td data-label="Note ID :"
                        className="noteheader"
                      >
                        02-06-2022</td>
                      <td data-label="Uploaded Date :"
                        className="notedetails">04:00 pm</td>
                      <td data-label="Uploaded Date :"
                        className="notedetails">06:00 pm </td>
                      <td data-label="">
                        <a
                          download="note1.pdf"
                          href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                          target="_blank"
                          className="Reacticonbtn download">
                          <MdNotStarted className="Reacticon" />
                          Join Class
                        </a>

                      </td>

                    </tr>
                    <tr>
                      <td data-label="Note ID :"
                        className="noteheader"
                      >
                        09-06-2022</td>
                      <td data-label="Uploaded Date :"
                        className="notedetails">04:00 pm</td>
                      <td data-label="Uploaded Date :"
                        className="notedetails">06:00 pm </td>
                      <td data-label="">
                        <a
                          download="note1.pdf"
                          href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                          target="_blank"
                          className="Reacticonbtn download">
                          <MdNotStarted className="Reacticon" />
                          Join Class
                        </a>

                      </td>

                    </tr> */}
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
