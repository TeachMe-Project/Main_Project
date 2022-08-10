import * as React from 'react';

import Card from '../../Card/Card';
import { Row, Col, Container } from 'react-bootstrap';

import PanelContainer from '../../Layout/PanelContainer';
import { Link } from 'react-router-dom';
import TeacherCard from '../../Card/TeacherCard';

export const MyTeachers = () => {
  return (
    <div className="MyTeachers">
      <Container>
        <Row>
          <PanelContainer />
          <div className="PanelHeader">
            <h2>My Tutors</h2>
          </div>
          <div className="Panel">
            <div className="PanelBody">
              <div className="small-scrollbar">
                <Link to="/course" className="link">
                  <TeacherCard
                    grade="Grade 8"
                    subject="Mathematics"
                    image={<img src={'/Images/Teachers/mr1.jpg'} />}
                    teacher="Mr. Lasitha Nuwan"
                    contact="0771212121"
                    description="I'm having 9 years of experience in teaching at a renowned
                    government school as a mathematics teacher. I have produced great results
                   ..."
                  />
                </Link>
                <Link to="/course" className="link">
                  <TeacherCard
                    grade="Grade 8"
                    subject="Science"
                    image={<img src={'/Images/Teachers/ms1.jpg'} />}
                    teacher="Ms. Imalka Sandamali"
                    contact="0771212990"
                    description="I'm having more than 5 years of experience in teaching at a renowned
                    government school as a science teacher. I have produced great results
                   ..."
                  />
                </Link>
                <Link to="/course" className="link">
                  <TeacherCard
                    grade="Grade 8"
                    subject="History"
                    image={<img src={'/Images/Teachers/mr2.jpg'} />}
                    teacher="Mr. Kamal Maggona"
                    contact="0771212450"
                    description="I'm having more than 15 years of experience in teaching at a renowned
                    government school as a history teacher. I have produced great results
                   ..."
                  />
                </Link>
                <Link to="/course" className="link">
                  <TeacherCard
                    grade="Grade 8"
                    subject="Western Music"
                    image={<img src={'/Images/Teachers/mr3.jpg'} />}
                    teacher="Mr. Anura Kahatagoda"
                    contact="0771212789"
                    description="I'm having more than 7 years of experience in teaching at a renowned
                    government school as a western music teacher. I have produced...
                   ..."
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
          </div>
        </Row>
      </Container>
    </div>
  );
};
export default MyTeachers;
