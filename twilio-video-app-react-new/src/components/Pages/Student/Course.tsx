import * as React from 'react';
import Card from '../../Card/Card';
import CardHeader from '../../Card/CardHeader';
import CardDetails from '../../Card/CardDetails';
import { Row, Col, Container, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Tabs from '../../Tabs/Tabs';
import Details from './Details';
import Notes from './Notes';
import Homework from './Homework';
import PendingPayments from './PendingPayments';
import PanelContainer from '../../Layout/PanelContainer';
import {FiDownload} from "react-icons/fi";
import {BiArchive} from "react-icons/bi";
import {MdDelete, MdNotStarted} from "react-icons/md";

// import renderer from "react-test-renderer;

type tutorName = {
  name?: string;
  image?: HTMLImageElement;
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
                <img src={'/Images/subjects/maths.png'} />
              </div>

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

                <table className="booking-table"  id="view-booking">
                  <tbody>

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
                        <FiDownload  className="Reacticon"/>
                            Download
                          </a>

                    </td>
                    <td data-label="">
                          <a
                              download="note1.pdf"
                              href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                              target="_blank"
                              className="Reacticonbtn archive"
                          >
                          <BiArchive className="Reacticon" />Archive
                          </a>

                    </td>
                    <td data-label="">
                          <a
                              download="note1.pdf"
                              href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                              target="_blank"
                              className="Reacticonbtn remove"
                          >
                          <MdDelete  className="Reacticon"/>Remove
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
                        <FiDownload  className="Reacticon"/>
                        Download
                      </a>

                    </td>
                    <td data-label="">
                      <a
                          download="note1.pdf"
                          href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                          target="_blank"
                          className="Reacticonbtn archive"
                      >
                        <BiArchive className="Reacticon" />Archive
                      </a>

                    </td>
                    <td data-label="">
                      <a
                          download="note1.pdf"
                          href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                          target="_blank"
                          className="Reacticonbtn remove"
                      >
                        <MdDelete  className="Reacticon"/>Remove
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
                        <FiDownload  className="Reacticon"/>
                        Download
                      </a>

                    </td>
                    <td data-label="">
                      <a
                          download="note1.pdf"
                          href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                          target="_blank"
                          className="Reacticonbtn archive"
                      >
                        <BiArchive className="Reacticon" />Archive
                      </a>

                    </td>
                    <td data-label="">
                      <a
                          download="note1.pdf"
                          href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                          target="_blank"
                          className="Reacticonbtn remove"
                      >
                        <MdDelete  className="Reacticon"/>Remove
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
                        <FiDownload  className="Reacticon"/>
                        Download
                      </a>

                    </td>
                    <td data-label="">
                      <a
                          download="note1.pdf"
                          href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                          target="_blank"
                          className="Reacticonbtn archive"
                      >
                        <BiArchive className="Reacticon" />Archive
                      </a>

                    </td>
                    <td data-label="">
                      <a
                          download="note1.pdf"
                          href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                          target="_blank"
                          className="Reacticonbtn remove"
                      >
                        <MdDelete  className="Reacticon"/>Remove
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
                        <FiDownload  className="Reacticon"/>
                        Download
                      </a>

                    </td>
                    <td data-label="">
                      <a
                          download="note1.pdf"
                          href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                          target="_blank"
                          className="Reacticonbtn archive"
                      >
                        <BiArchive className="Reacticon" />Archive
                      </a>

                    </td>
                    <td data-label="">
                      <a
                          download="note1.pdf"
                          href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                          target="_blank"
                          className="Reacticonbtn remove"
                      >
                        <MdDelete  className="Reacticon"/>Remove
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
                        <FiDownload  className="Reacticon"/>
                        Download
                      </a>

                    </td>
                    <td data-label="">
                      <a
                          download="note1.pdf"
                          href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                          target="_blank"
                          className="Reacticonbtn archive"
                      >
                        <BiArchive className="Reacticon" />Archive
                      </a>

                    </td>
                    <td data-label="">
                      <a
                          download="note1.pdf"
                          href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                          target="_blank"
                          className="Reacticonbtn remove"
                      >
                        <MdDelete  className="Reacticon"/>Remove
                      </a>
                    </td>
                  </tr>

                  </tbody>
                </table>


              </div>
              <div className="Homework">

                <table className="booking-table"  id="view-booking">
                  <tbody>

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
                        <FiDownload  className="Reacticon"/>
                        Download
                      </a>

                    </td>
                    <td data-label="">
                      <a
                          download="note1.pdf"
                          href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                          target="_blank"
                          className="Reacticonbtn archive"
                      >
                        <BiArchive className="Reacticon" />Archive
                      </a>

                    </td>
                    <td data-label="">
                      <a
                          download="note1.pdf"
                          href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                          target="_blank"
                          className="Reacticonbtn remove"
                      >
                        <MdDelete  className="Reacticon"/>Remove
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
                        <FiDownload  className="Reacticon"/>
                        Download
                      </a>

                    </td>
                    <td data-label="">
                      <a
                          download="note1.pdf"
                          href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                          target="_blank"
                          className="Reacticonbtn archive"
                      >
                        <BiArchive className="Reacticon" />Archive
                      </a>

                    </td>
                    <td data-label="">
                      <a
                          download="note1.pdf"
                          href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                          target="_blank"
                          className="Reacticonbtn remove"
                      >
                        <MdDelete  className="Reacticon"/>Remove
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
                        <FiDownload  className="Reacticon"/>
                        Download
                      </a>

                    </td>
                    <td data-label="">
                      <a
                          download="note1.pdf"
                          href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                          target="_blank"
                          className="Reacticonbtn archive"
                      >
                        <BiArchive className="Reacticon" />Archive
                      </a>

                    </td>
                    <td data-label="">
                      <a
                          download="note1.pdf"
                          href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                          target="_blank"
                          className="Reacticonbtn remove"
                      >
                        <MdDelete  className="Reacticon"/>Remove
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
                        <FiDownload  className="Reacticon"/>
                        Download
                      </a>

                    </td>
                    <td data-label="">
                      <a
                          download="note1.pdf"
                          href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                          target="_blank"
                          className="Reacticonbtn archive"
                      >
                        <BiArchive className="Reacticon" />Archive
                      </a>

                    </td>
                    <td data-label="">
                      <a
                          download="note1.pdf"
                          href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                          target="_blank"
                          className="Reacticonbtn remove"
                      >
                        <MdDelete  className="Reacticon"/>Remove
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
                        <FiDownload  className="Reacticon"/>
                        Download
                      </a>

                    </td>
                    <td data-label="">
                      <a
                          download="note1.pdf"
                          href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                          target="_blank"
                          className="Reacticonbtn archive"
                      >
                        <BiArchive className="Reacticon" />Archive
                      </a>

                    </td>
                    <td data-label="">
                      <a
                          download="note1.pdf"
                          href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                          target="_blank"
                          className="Reacticonbtn remove"
                      >
                        <MdDelete  className="Reacticon"/>Remove
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
                        <FiDownload  className="Reacticon"/>
                        Download
                      </a>

                    </td>
                    <td data-label="">
                      <a
                          download="note1.pdf"
                          href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                          target="_blank"
                          className="Reacticonbtn archive"
                      >
                        <BiArchive className="Reacticon" />Archive
                      </a>

                    </td>
                    <td data-label="">
                      <a
                          download="note1.pdf"
                          href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                          target="_blank"
                          className="Reacticonbtn remove"
                      >
                        <MdDelete  className="Reacticon"/>Remove
                      </a>
                    </td>
                  </tr>

                  </tbody>
                </table>
              </div>
              <div className="Upcoming Classes">
                <table className="booking-table"  id="view-booking">
                  <tbody>

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
                      <MdNotStarted  className="Reacticon"/>
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
                      <MdNotStarted  className="Reacticon"/>
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
                      <MdNotStarted  className="Reacticon"/>
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
                      <MdNotStarted  className="Reacticon"/>
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
                      <MdNotStarted  className="Reacticon"/>
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
                      <MdNotStarted  className="Reacticon"/>
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
    </div>
  );
};

export default Course;
