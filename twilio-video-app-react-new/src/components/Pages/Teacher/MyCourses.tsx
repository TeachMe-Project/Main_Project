import * as React from 'react';
import CourseCardTeacher from '../../Card/CourseCardTeacher';
import CardHeader from '../../Card/CardHeader';
import CardDetails from '../../Card/CardDetails';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PanelContainer from '../../Layout/PanelContainer';

export const MyCourses = () => {
  return (
    <div className="MyCoursesTeacher">
      <Container>
        <Row>
          <PanelContainer />
          <div className="PanelHeader">
            <h2>My Courses</h2>
          </div>
          <div className="Panel">
            <div className="PanelBody">
              <CourseCardTeacher
                header="Mathematics"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad djndkjend edjnedjned..."
                time="04:00pm - 06:00pm"
                date="Sunday"
                image={<img src={'/Images/subjects/maths.png'} />}
                amount="LKR 2,500"
                btn1="View more"
              />

              <CourseCardTeacher
                header="Science"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad djndkjend edjnedjned..."
                time="04:00pm - 06:00pm"
                date="Monday"
                image={<img src={'/Images/subjects/science.png'} />}
                amount="LKR 2,500"
                btn1="View more"
              />

              <CourseCardTeacher
                header="History"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad djndkjend edjnedjned..."
                time="04:00pm - 06:00pm"
                date="Saturday"
                image={<img src={'/Images/subjects/history.png'} />}
                amount="LKR 2,500"
                btn1="View more"
              />

              <CourseCardTeacher
                header="Music"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad djndkjend edjnedjned..."
                time="05:00pm - 07:00pm"
                date="Tuesday"
                image={<img src={'/Images/subjects/music.png'} />}
                amount="LKR 2,500"
                btn1="View more"
              />

              <CourseCardTeacher
                header="Art"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad djndkjend edjnedjned..."
                time="04:00pm - 06:00pm"
                date="Sunday"
                image={<img src={'/Images/subjects/art.png'} />}
                amount="LKR 2,500"
                btn1="View more"
              />
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default MyCourses;
