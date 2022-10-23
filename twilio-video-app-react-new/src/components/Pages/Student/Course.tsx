import * as React from 'react';
import { useEffect, useState } from 'react';
import Card from '../../Card/Card';
import CardHeader from '../../Card/CardHeader';
import CardDetails from '../../Card/CardDetails';
import { Row, Col, Container, Tab, NavItem } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Tabs from '../../Tabs/Tabs';
import Details from './Details';
import Notes from './Notes';
import Homework from './Homework';
import PendingPayments from './PendingPayments';
import PanelContainer from '../../Layout/PanelContainer';
import { FiDownload } from "react-icons/fi";
import { BiArchive } from "react-icons/bi";
import { MdDelete, MdNotStarted } from "react-icons/md";

// import renderer from "react-test-renderer;
import axios, { AxiosResponse } from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

type tutorName = {
  name?: string;
  image?: HTMLImageElement;
};


const convertTime = (x: Date) => {
  const time = x.toLocaleTimeString('it-IT');
  const hour = time.split(':')[0];
  const intHour = parseInt(hour);
  const minute = time.split(':')[1];
  const ampm = intHour >= 12 ? 'PM' : 'AM';
  const newHour = intHour % 12;
  return newHour + ':' + minute + ' ' + ampm;
};

export const Course = (props: tutorName) => {

  // renderer(){
  //   const noteheader = {
  //     color: "#34495e;",
  //     fontWeight: "700",
  //    fontSize:"14px",
  //     marginBottom: "0.2rem"
  //   };
  // };
  const { user } = useAuth0();
  const studentAuthId = user?.sub;
  const params = useParams();
  const course_id = params.course_id;
  const baseURLDetails = `https://learnxy.azurewebsites.net/course/${course_id}`;
  const baseURLSchedule = `https://learnxy.azurewebsites.net/student/upcomingClasses/${studentAuthId}`;
  const [details, setDetails] = useState<any[]>([]);
  const [notes, setNotes] = useState<any[]>([]);
  const [homework, setHomework] = useState<any[]>([]);
  const [schedule, setSchedule] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(baseURLDetails)
      .then((res: AxiosResponse) => {
        res.data.map((item: any) => {
          console.log(res.data);
          setDetails(prevState => [
            ...prevState,
            {
              teacher_id: item.teacher.teacher_id,
              title: item.subject + " for " + item.grade,
              subject: item.subject,
              teacher: item.teacher.first_name + ' ' + item.teacher.last_name,
              teacher_user_id: item.teacher.user_id,
              grade: item.grade,
              medium: item.medium,
              desc: item.description,
              price: 'LKR ' + item.price,
              start_date: item.start_date,
              institute: item.teacher.institute_teacher.institute,
              duration: item.duration + ' years',
              start_time : item.start_time,
              end_time: item.end_time,
              profile:item.teacher.user.profile_image,
            },
          ]);
        });
        console.log("Data")
        console.log(details);
      })
      .catch(err => {
        console.log(err);
      });
    axios
      .get(baseURLDetails)
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
      .get(baseURLDetails)
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
      .get(baseURLSchedule)
      .then((res: AxiosResponse) => {
        res.data.map((item: any) => {
          console.log(item)
          setSchedule(prevState => [
            ...prevState,
            {
              class_id: item.class_id,
              subject: item.course.subject,
              date: item.date.substring(0, 10),
              start_time: item.course.start_time.substring(0, 5),
              end_time: item.course.end_time.substring(0, 5),
            },
          ]);
        }
        );
        console.log(schedule);
      })
      .catch(error => {
        console.log(error);
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

            {details.map((item: any) => {
              return (
                <div className="PanelSubHeader">
                  <div className="PanelImage">
                    <img src={'/Images/subjects/Mathematics.png'} />
                  </div>
                  <div className="PanelTopic">
                    <div className="SubjectName">
                      <h3>{item.title}</h3>
                    </div>
                    <div className="TutorProfileButton">
                      <Link to={`/teacherProfile/${item.teacher_id}`} className="link">
                        <div className="UserImg">
                          <img src={item.profile} />
                        </div>
                        <div className="Name">{item.teacher}</div>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}

            <Tabs>
              <div className="Details">
                {details.map((item: any) => {
                  return (
                    <div>
                      <Details label="Subject" value={item.subject} symbol=":" />
                      <Details label="Grade" value={item.grade} symbol=":" />
                      <Details label="Medium" value={item.medium} symbol=":" />
                      <Details
                        label="Description"
                        value={item.desc}
                      />
                      <Details label="Monthly Payment" value={item.price} symbol=":" />
                      <Details label="Started Date" value={item.start_date} symbol=":" />
                      <Details label="Institute" value={item.institute} symbol=":" />
                      <Details label="Start Time" value={item.start_time} symbol=":" />
                      <Details label="End Time" value={item.end_time} symbol=":" />
                    </div>
                  );
                })}
              </div>

              <div className="Notes">

                <table className="booking-table" id="view-booking">
                  <tbody>

                    {notes.map((item: any) => {
                      return (
                        <tr>
                          <td data-label="Note ID :"
                            className="noteheader"
                          >
                            {item.topic}</td>
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
                        </tr>
                      );
                    })}

                  </tbody>
                </table>


              </div>
              <div className="Homework">

                <table className="booking-table" id="view-booking">
                  <tbody>

                    {homework.map((item: any) => {
                      return (
                        <tr>
                          <td data-label="Note ID :"
                            className="noteheader"
                          >
                            {item.topic}</td>
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
                        </tr>
                      );
                    })}

                  </tbody>
                </table>

              </div>
              <div className="Upcoming Classes">
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
                              href=""
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
            </Tabs>
          </div>
        </Row>
      </Container>
    </div >
  );
};

export default Course;
