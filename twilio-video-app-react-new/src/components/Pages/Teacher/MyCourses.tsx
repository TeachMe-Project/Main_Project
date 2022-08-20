import * as React from 'react';
import CourseCardTeacher from '../../Card/CourseCardTeacher';
import CardHeader from '../../Card/CardHeader';
import CardDetails from '../../Card/CardDetails';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PanelContainer from '../../Layout/PanelContainer';
import { Button } from '../../Button/Button';

import { CardButton } from '../../Card/CardButton';
import { ButtonCommon } from '../../Button/ButtonCommon';

export const MyCourses = () => {
  return (
    <div className="MyCoursesTeacher">
      <Container>
        <Row>
          <PanelContainer />
          <div className="PanelHeader">
            <h2>My Courses</h2>
          </div>
          <div
            className="AddNewCourse"
            style={{ width: 'max-content', position: 'relative', marginBottom: '20px', left: '1067px', top: '23px' }}
          >
            <Link to="/addcourse" className="link">
              <ButtonCommon name={'Add New Course'} />
            </Link>
          </div>

          <div className="Panel">
            <div className="PanelBody">
              <CourseCardTeacher
                header="Mathematics"
                description="This course includes content of grade 8 mathematics
                of local syllabus in English medium. It contains algebraic concepts and skills needed to
                graph and solve linear equations..."
                time="04:00pm - 06:00pm"
                date="Sunday"
                grade="Grade 8"
                medium="English Medium"
                image={<img src={'/Images/subjects/maths.png'} />}
                amount="LKR 2,500"
                btn1="View more"
              />

              <CourseCardTeacher
                header="Science"
                description="This course includes content of grade 8 science
                of local syllabus in English medium.It contains the basics of life, genetics, microbiology,
                plant science, animal science..."
                time="04:00pm - 06:00pm"
                date="Monday"
                grade="Grade 8"
                medium="English Medium"
                image={<img src={'/Images/subjects/science.png'} />}
                amount="LKR 2,500"
                btn1="View more"
              />

              <CourseCardTeacher
                header="Mathematics"
                description="This course includes content of grade 9 mathematics
                of local syllabus in English medium. It contains algebraic concepts and skills needed to
                graph and solve linear equations..."
                time="04:00pm - 06:00pm"
                date="Saturday"
                grade="Grade 9"
                medium="English Medium"
                image={<img src={'/Images/subjects/maths.png'} />}
                amount="LKR 2,500"
                btn1="View more"
              />

              <CourseCardTeacher
                header="Science"
                description="This course includes content of grade 9 science
                of local syllabus in English medium.It contains the basics of life, genetics, microbiology,
                plant science, animal science..."
                time="05:00pm - 07:00pm"
                date="Tuesday"
                image={<img src={'/Images/subjects/science.png'} />}
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
