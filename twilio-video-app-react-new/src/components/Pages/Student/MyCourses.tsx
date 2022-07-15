import * as React from 'react';
import CourseCard from '../../Card/CourseCard';
import CardHeader from '../../Card/CardHeader';
import CardDetails from '../../Card/CardDetails';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PanelContainer from '../../Layout/PanelContainer';

export const MyCourses = () => {
  return (
    <div className="MyCourses">
      <Container>
        <Row>
          <PanelContainer />
          <div className="PanelHeader">
            <h2>My Courses</h2>
          </div>
          <div className="Panel">
            <div className="PanelBody">
              <Link to="/course" className="link">
                <CourseCard
                  header="Mathematics"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad djndkjend edjnedjned..."
                  time="04:00pm - 06:00pm"
                  date="Sunday"
                  image={<img src={'/Images/subjects/maths.png'} />}
                  teacher="Lasitha Nuwan"
                  amount="LKR 2,500"
                  btn="Unsubscribe"
                />
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default MyCourses;
