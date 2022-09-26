import * as React from 'react';
import { useEffect, useState } from 'react';
import Card from '../../Card/Card';
import CardHeader from '../../Card/CardHeader';
import CardDetails from '../../Card/CardDetails';
import { Row, Col, Container, Tab, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
  const baseURLDetails = `https://learnx.azurewebsites.net/course/${studentAuthId}`;
  const baseURLNotes = `https://learnx.azurewebsites.net/student/${studentAuthId}/notes`;
  const baseURLHomework = `https://learnx.azurewebsites.net/student/${studentAuthId}/homeworks`;
  const baseURLUpcoming = `https://learnx.azurewebsites.net/student/${studentAuthId}/upcomingClasses`;
  const [details, setDetails] = useState<any[]>([]);
  const [homework, setHomework] = useState<any[]>([]);
  const [notes, setNotes] = useState<any[]>([]);
  const [upcomingClasses, setUpcomingClasses] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(baseURLDetails)
      .then((res: AxiosResponse) => {
        res.data.map((item: any) => {
          setDetails(prevState => [
            ...prevState,
            {
              subject: item.subject,
              teacher: item.course.teacher.first_name + ' ' + item.course.teacher.last_name,
              grade: item.grade,
              medium: item.medium,
              desc: item.description,
              price: 'LKR ' + item.price,
              start_date: item.start_date,
              institute: item.teacher.institute_teacher.institute,
              duration: item.duration + ' years',
            },
          ]);
        });
        console.log(details);
      })
      .catch(err => {
        console.log(err);
      });
    axios
      .get(baseURLHomework)
      .then((res: AxiosResponse) => {
        res.data.map((item: any) => {
          setHomework(prevState => [
            ...prevState,
            {
              date: item.uploaded_date,
              link: item.homework,
            },
          ]);
        });
        console.log(homework);
      })
      .catch(err => {
        console.log(err);
      });
    axios
      .get(baseURLNotes)
      .then((res: AxiosResponse) => {
        res.data.map((item: any) => {
          setNotes(prevState => [
            ...prevState,
            {
              date: item.uploaded_date,
              link: item.note,
            },
          ]);
        });
        console.log(notes);
      })
      .catch(err => {
        console.log(err);
      });
    axios
      .get(baseURLUpcoming)
      .then((res: AxiosResponse) => {
        res.data.map((item: any) => {
          setUpcomingClasses(prevState => [
            ...prevState,
            {
              date: item.date,
              start_time: convertTime(item.course.start_time),
              end_time: convertTime(item.course.end_time)
            },
          ]);
        });
        console.log(upcomingClasses);
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
            <div className="PanelSubHeader">
              <div className="PanelImage">
                <img src={'/Images/subjects/Mathematics.png'} />
              </div>

              {/* {details.map((item: any) => {
                return (
                  <div className="PanelTopic">
                    <div className="SubjectName">
                      <h3>{item.subject}</h3>
                    </div>
                    <div className="TutorProfileButton">
                      <Link to="/userprofile" className="link">
                        <div className="UserImg">
                          <img src={'/Images/Teachers/mr1.jpg'} />
                        </div>
                        <div className="Name">{item.teacher}</div>
                      </Link>
                    </div>
                  </div>
                );
              })} */}

              <div className="PanelTopic">
                <div className="SubjectName">
                  <h3>Mathematics</h3>
                </div>
                <div className="TutorProfileButton">
                  <Link to="/userprofile" className="link">
                    <div className="UserImg">
                      <img src={'/Images/Teachers/mr1.jpg'} />
                    </div>
                    <div className="Name">Mr. Lasitha Nuwan</div>
                  </Link>
                </div>
              </div>
            </div>

            <Tabs>
              {/* {details.map((item: any) => {
                return (
                  <div className="Details">
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
                    <Details label="Duration" value={item.duration} symbol=":" />
                  </div>
                );
              })} */}

              <div className="Details">
                <Details label="Subject" value="Mathematics" symbol=":" />
                <Details label="Grade" value="8" symbol=":" />
                <Details label="Medium" value="English" symbol=":" />
                <Details
                  label="Description"
                  value="This course includes content of grade 8 mathematics
                of local syllabus in English medium. It contains algebraic concepts and skills needed to
                graph and solve linear equations and inequalities."
                />
                <Details label="Monthly Payment" value="LKR 2500" symbol=":" />
                <Details label="Started Date" value="2022-03-24" symbol=":" />
                <Details label="Institute" value="Sigma Institute" symbol=":" />
                <Details label="Duration" value="12 months" symbol=":" />
              </div>
              <div className="Notes">

                <table className="booking-table" id="view-booking">
                  <tbody>

                    {/* {notes.map((item: any) => {
                      return (
                        <tr>
                          <td data-label="Note ID :"
                            className="noteheader"
                          >
                            Note for week 1</td>
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
                              href=""
                              className="Reacticonbtn archive"
                            >
                              <BiArchive className="Reacticon" />Archive
                            </a>

                          </td>
                          <td data-label="">
                            <a
                              href=""
                              className="Reacticonbtn remove"
                            >
                              <MdDelete className="Reacticon" />Remove
                            </a>
                          </td>
                        </tr>
                      );
                    })} */}

                    <tr>
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
                    </tr>

                  </tbody>
                </table>


              </div>
              <div className="Homework">

                <table className="booking-table" id="view-booking">
                  <tbody>

                    {/* {homework.map((item: any) => {
                      return (
                        <tr>
                          <td data-label="Note ID :"
                            className="noteheader"
                          >
                            Homework for week 1</td>
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
                              href=""
                              className="Reacticonbtn archive"
                            >
                              <BiArchive className="Reacticon" />Archive
                            </a>

                          </td>
                          <td data-label="">
                            <a
                              href=""
                              className="Reacticonbtn remove"
                            >
                              <MdDelete className="Reacticon" />Remove
                            </a>
                          </td>
                        </tr>
                      );
                    })} */}

                    <tr>
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
                    </tr>

                  </tbody>
                </table>

              </div>
              <div className="Upcoming Classes">
                <table className="booking-table" id="view-booking">
                  <tbody>

                    {/* {upcomingClasses.map((item: any) => {
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
                    })} */}

                    <tr>
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

                    </tr>
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
