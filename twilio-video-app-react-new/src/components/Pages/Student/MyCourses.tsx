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
              {/*<Link to="/course" className="link">*/}
              <CourseCard
                header="Mathematics"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad djndkjend edjnedjned..."
                time="04:00pm - 06:00pm"
                date="Sunday"
                image={<img src={'/Images/subjects/maths.png'} />}
                teacher="Mr. Lasitha Nuwan"
                amount="LKR 2,500"
                btn1="View more"
                btn2="Unsubscribe"
              />
              {/*</Link>*/}
              {/*<Link to="/course" className="link">*/}
              <CourseCard
                header="Science"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad djndkjend edjnedjned..."
                time="04:00pm - 06:00pm"
                date="Monday"
                image={<img src={'/Images/subjects/science.png'} />}
                teacher="Ms. Nayana Sandamali"
                amount="LKR 2,500"
                btn1="View more"
                btn2="Unsubscribe"
              />
              {/*</Link>*/}
              {/*<Link to="/course" className="link">*/}
              <CourseCard
                header="History"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad djndkjend edjnedjned..."
                time="04:00pm - 06:00pm"
                date="Saturday"
                image={<img src={'/Images/subjects/history.png'} />}
                teacher="Mr. Kamal Maggona"
                amount="LKR 2,500"
                btn1="View more"
                btn2="Unsubscribe"
              />
              {/*</Link>*/}
              {/*<Link to="/course" className="link">*/}
              <CourseCard
                header="Music"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad djndkjend edjnedjned..."
                time="05:00pm - 07:00pm"
                date="Tuesday"
                image={<img src={'/Images/subjects/music.png'} />}
                teacher="Mr. Anura Kahatagoda"
                amount="LKR 2,500"
                btn1="View more"
                btn2="Unsubscribe"
              />
              {/*</Link>*/}
              {/*<Link to="/course" className="link">*/}
              <CourseCard
                header="Art"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad djndkjend edjnedjned..."
                time="04:00pm - 06:00pm"
                date="Sunday"
                image={<img src={'/Images/subjects/art.png'} />}
                teacher="Mrs. Shiromi Chandraguptha"
                amount="LKR 2,500"
                btn1="View more"
                btn2="Unsubscribe"
              />
              {/*</Link>*/}
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default MyCourses;
