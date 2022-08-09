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

type tutorName = {
  name?: string;
  image?: HTMLImageElement;
};
export const Course = (props: tutorName) => {
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
                  value="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
                />
                <Details label="Monthly Payment" value="LKR 2500" symbol=":" />
                <Details label="Started Date" value="2022-03-24" symbol=":" />
                <Details label="Institute" value="Sigma Institute" symbol=":" />
                <Details label="Duration" value="12 months" symbol=":" />
              </div>
              <div className="Notes">
                <Notes topic="Note for week 1" date="2022-04-05" />
                <Notes topic="Note for week 2" date="2022-04-12" />
                <Notes topic="Note for week 3" date="2022-04-19" />
                <Notes topic="Note for week 4" date="2022-04-26" />
                <Notes topic="Note for week 5" date="2022-05-03" />
              </div>
              <div className="Homework">
                <Homework name="Homework for week 1" date="2022-04-05" />
                <Homework name="Homework for week 2" date="2022-04-12" />
                <Homework name="Homework for week 3" date="2022-04-19" />
                <Homework name="Homework for week 4" date="2022-04-26" />
                <Homework name="Homework for week 4" date="2022-04-26" />
                <Homework name="Homework for week 4" date="2022-04-26" />
                <Homework name="Homework for week 4" date="2022-04-26" />
                <Homework name="Homework for week 4" date="2022-04-26" />
              </div>
            </Tabs>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Course;
