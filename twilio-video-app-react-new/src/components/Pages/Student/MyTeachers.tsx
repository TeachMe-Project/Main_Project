import * as React from 'react';

import Card from '../../Card/Card';
import { Row, Col, Container } from 'react-bootstrap';
import ChatBox from '../../ChatBox/ChatBox';

import PanelContainer from '../../Layout/PanelContainer';
import { Link } from 'react-router-dom';
import TeacherCard from '../../Card/TeacherCard';

export const MyTeachers = () => {
  return (
    <div className="MyTeachers">
      <Container>
        <div className="PanelHeader">
          <h2>My Teachers</h2>
        </div>
        <div className="PanelContainer">
          {/* <Card>
            Search bar
            <br />
            jkwnfkjenfejkfnejfnef\efjkenjkn
          </Card> */}
          {/* <ChatBox></ChatBox> */}
          {/* <h5>My Recent Courses</h5> */}
          <div className="MyCoursesCardBackground"></div>
        </div>

        {/* <Tabs>
        <div label="Gator">
          See ya later, <em>Alligator</em>!
        </div>
        <div label="Crocodile">
          After 'while, <em>Crocodile</em>!
        </div>
        <div label="Sarcosuchus">
          Nothing to see here, this tab is <em>extinct</em>!
        </div>
      </Tabs> */}

        <Row>
          <PanelContainer />
          <div className="PanelHeader">
            <h2>My Teachers</h2>
          </div>
          <div className="Panel">
            <div className="PanelBody">
              <Link to="/course" className="link">
                <TeacherCard
                  grade="Grade 9"
                  subject="Mathematics"
                  image={<img src={'/Images/Teachers/mr1.jpg'} />}
                  teacher="Mr. Lasitha Nuwan"
                  contact="0771212121"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad djndkjend edjnedjned..."
                />
              </Link>
              <Link to="/course" className="link">
                <TeacherCard
                  grade="Grade 9"
                  subject="Science"
                  image={<img src={'/Images/Teachers/ms1.jpg'} />}
                  teacher="Mr. Nayana Sandamali"
                  contact="0771212990"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad djndkjend edjnedjned..."
                />
              </Link>
              <Link to="/course" className="link">
                <TeacherCard
                  grade="Grade 9"
                  subject="History"
                  image={<img src={'/Images/Teachers/mr2.jpg'} />}
                  teacher="Mr. Kamal Maggona"
                  contact="0771212450"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad djndkjend edjnedjned..."
                />
              </Link>
              <Link to="/course" className="link">
                <TeacherCard
                  grade="Grade 9"
                  subject="Music"
                  image={<img src={'/Images/Teachers/mr3.jpg'} />}
                  teacher="Mr. Anura Kahatagoda"
                  contact="0771212789"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad djndkjend edjnedjned..."
                />
              </Link>
              <Link to="/course" className="link">
                <TeacherCard
                  grade="Grade 9"
                  subject="Art"
                  image={<img src={'/Images/Teachers/mrs1.jpg'} />}
                  teacher="Mrs. Shiromi Chandraguptha"
                  contact="0771215555"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad djndkjend edjnedjned..."
                />
              </Link>

              {/*<Link to="/course" className="link">*/}
              {/*  <CourseCard*/}
              {/*    header="Science"*/}
              {/*    description="Lorem ipsum dolor sit amet, consectetur adipiscing*/}
              {/*    elit, sed do eiusmod tempor incididunt ut labore et dolore*/}
              {/*    magna aliqua. Ut enim ad djndkjend edjnedjned..."*/}
              {/*    time="04:00pm - 06:00pm"*/}
              {/*    date="Monday"*/}
              {/*    image={<img src={'/Images/subjects/science.png'} />}*/}
              {/*    teacher="Ms. Nayana Sandamali"*/}
              {/*    amount="LKR 2,500"*/}
              {/*    btn="Unsubscribe"*/}
              {/*  />*/}
              {/*</Link>*/}
              {/*<Link to="/course" className="link">*/}
              {/*  <CourseCard*/}
              {/*    header="History"*/}
              {/*    description="Lorem ipsum dolor sit amet, consectetur adipiscing*/}
              {/*    elit, sed do eiusmod tempor incididunt ut labore et dolore*/}
              {/*    magna aliqua. Ut enim ad djndkjend edjnedjned..."*/}
              {/*    time="04:00pm - 06:00pm"*/}
              {/*    date="Saturday"*/}
              {/*    image={<img src={'/Images/subjects/history.png'} />}*/}
              {/*    teacher="Mr. Kamal Maggona"*/}
              {/*    amount="LKR 2,500"*/}
              {/*    btn="Unsubscribe"*/}
              {/*  />*/}
              {/*</Link>*/}
              {/*<Link to="/course" className="link">*/}
              {/*  <CourseCard*/}
              {/*    header="Music"*/}
              {/*    description="Lorem ipsum dolor sit amet, consectetur adipiscing*/}
              {/*    elit, sed do eiusmod tempor incididunt ut labore et dolore*/}
              {/*    magna aliqua. Ut enim ad djndkjend edjnedjned..."*/}
              {/*    time="05:00pm - 07:00pm"*/}
              {/*    date="Tuesday"*/}
              {/*    image={<img src={'/Images/subjects/music.png'} />}*/}
              {/*    teacher="Mr. Anura Kahatagoda"*/}
              {/*    amount="LKR 2,500"*/}
              {/*    btn="Unsubscribe"*/}
              {/*  />*/}
              {/*</Link>*/}
              {/*<Link to="/course" className="link">*/}
              {/*  <CourseCard*/}
              {/*    header="Art"*/}
              {/*    description="Lorem ipsum dolor sit amet, consectetur adipiscing*/}
              {/*    elit, sed do eiusmod tempor incididunt ut labore et dolore*/}
              {/*    magna aliqua. Ut enim ad djndkjend edjnedjned..."*/}
              {/*    time="04:00pm - 06:00pm"*/}
              {/*    date="Sunday"*/}
              {/*    image={<img src={'/Images/subjects/art.png'} />}*/}
              {/*    teacher="Mrs. Shiromi Chandraguptha"*/}
              {/*    amount="LKR 2,500"*/}
              {/*    btn="Unsubscribe"*/}
              {/*  />*/}
              {/*</Link>*/}
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};
export default MyTeachers;
