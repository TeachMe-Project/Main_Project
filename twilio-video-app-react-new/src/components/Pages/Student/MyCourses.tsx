import * as React from 'react';
import CourseCard from '../../Card/CourseCard';
import CardHeader from '../../Card/CardHeader';
import CardDetails from '../../Card/CardDetails';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PanelContainer from '../../Layout/PanelContainer';
import { Button } from '../../Button/Button';

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
              <CourseCard
                header="Mathematics"
                description="This course includes content of grade 8 mathematics
                of local syllabus in English medium. It contains algebraic concepts and skills needed to
                graph and solve linear equations..."
                time="04:00pm - 06:00pm"
                date="Sunday"
                image={<img src={'/Images/subjects/maths.png'} />}
                teacher="Mr. Lasitha Nuwan"
                amount="LKR 2,500"
                btn1="View more"
                btn2="Unenroll"
              />

              <CourseCard
                header="Science"
                description="This course includes content of grade 8 science
                of local syllabus in English medium.It contains the basics of life, genetics, microbiology,
                plant science, animal science..."
                time="04:00pm - 06:00pm"
                date="Monday"
                image={<img src={'/Images/subjects/science.png'} />}
                teacher="Ms. Imalka Sandamali"
                amount="LKR 2,500"
                btn1="View more"
                btn2="Unenroll"
              />

              <CourseCard
                header="History"
                description="This course includes content of grade 8 history
                of local syllabus in English medium. It contains about the pre-historic era,
                Anuradhapura and Polonnaruwa kingdoms..."
                time="04:00pm - 06:00pm"
                date="Saturday"
                image={<img src={'/Images/subjects/history.png'} />}
                teacher="Mr. Kamal Maggona"
                amount="LKR 2,500"
                btn1="View more"
                btn2="Unenroll"
              />

              <CourseCard
                header="Western Music"
                description="This course includes content of grade 8 western music
                of local syllabus in English medium. It contains about the history of western music,
                western songs, relationship with plays..."
                time="05:00pm - 07:00pm"
                date="Tuesday"
                image={<img src={'/Images/subjects/music.png'} />}
                teacher="Mr. Anura Kahatagoda"
                amount="LKR 2,500"
                btn1="View more"
                btn2="Unenroll"
              />

              {/*<CourseCard*/}
              {/*  header="Art"*/}
              {/*  description="Lorem ipsum dolor sit amet, consectetur adipiscing*/}
              {/*    elit, sed do eiusmod tempor incididunt ut labore et dolore*/}
              {/*    magna aliqua. Ut enim ad djndkjend edjnedjned..."*/}
              {/*  time="04:00pm - 06:00pm"*/}
              {/*  date="Sunday"*/}
              {/*  image={<img src={'/Images/subjects/art.png'} />}*/}
              {/*  teacher="Mrs. Shiromi Chandraguptha"*/}
              {/*  amount="LKR 2,500"*/}
              {/*  btn1="View more"*/}
              {/*  btn2="Unsubscribe"*/}
              {/*/>*/}
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default MyCourses;
