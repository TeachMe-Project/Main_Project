import * as React from 'react';
import { useEffect, useState } from 'react';
import CourseCardTeacher from '../../Card/CourseCardTeacher';
import CardHeader from '../../Card/CardHeader';
import CardDetails from '../../Card/CardDetails';
import { Row, Col, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import PanelContainer from '../../Layout/PanelContainer';
import { Button } from '../../Button/Button';

import { CardButton } from '../../Card/CardButton';
import { ButtonCommon } from '../../Button/ButtonCommon';
import axios, { AxiosResponse } from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

// const convertTime = (x: Date) => {
//   const time = x.toLocaleTimeString('it-IT');
//   const hour = time.split(':')[0];
//   const intHour = parseInt(hour);
//   const minute = time.split(':')[1];
//   const ampm = intHour >= 12 ? 'PM' : 'AM';
//   const newHour = intHour % 12;
//   return newHour + ':' + minute + ' ' + ampm;
// };

export const MyCourses = () => {
  const { user } = useAuth0();
  const teacherAuthId = user?.sub;
  console.log(teacherAuthId);
  // const baseURL = `https://learnx.azurewebsites.net/teacher/${teacherAuthId}/courses`;
  const baseURL = `http://localhost:8081/teacher/${teacherAuthId}/courses`;
  const [courses, setCourses] = useState<any[]>([]);
  const navigate = useNavigate();
  console.log("this is test");
  useEffect(() => {
    try {
      console.log("this is succcess 1");
      axios
      .get(baseURL)
      .then((res: AxiosResponse) => {
        res.data.map((item: any) => {
          setCourses(prevState => [
            ...prevState,
            {
              // id: item.course_id,
              // subject: item.subject,
              // day: item.day,
              // desc: item.description,
              // // time: convertTime(item.course.start_time) + ' - ' + convertTime(item.course.end_time),
              // time: item.start_time,
              // price: item.price,
              // grade: item.grade,
              // medium: item.medium,
              id: item.course.course_id,
              subject: item.course.subject,
              day: item.course.day,
              desc: item.course.description,
              // time: convertTime(item.course.start_time) + ' - ' + convertTime(item.course.end_time),
              time: item.course.start_time,
              price: item.course.price,
              grade: item.course.grade,
              medium: item.course.medium,
            },
          ]);
        });
        console.log(courses);
      })
      console.log("this is succcess 2");
    } catch (error) {
      console.log("my error");
      console.log(error);
    }
    // axios
    //   .get(baseURL)
    //   .then((res: AxiosResponse) => {
    //     res.data.map((item: any) => {
    //       setCourses(prevState => [
    //         ...prevState,
    //         {
    //           id: item.course.course_id,
    //           subject: item.course.subject,
    //           day: item.course.day,
    //           desc: item.course.description,
    //           // time: convertTime(item.course.start_time) + ' - ' + convertTime(item.course.end_time),
    //           time: item.course.start_time,
    //           price: item.course.price,
    //           grade: item.course.grade,
    //           medium: item.course.medium,
    //         },
    //       ]);
    //     });
    //     console.log(courses);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }, []);

  const goToCoursePage = (id: any) => (
    <div className="ViewMore">
      {/* <button className="CardButton" onClick={() => navigate('/course')}> */}
      <button className="CardButton" onClick={() => navigate(`/course/${id}`)}>
        View More
      </button>
    </div>
  );

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
              {courses.map((item: any) => {
                return (
                  <CourseCardTeacher
                    header={item.subject}
                    description={item.desc}
                    time={item.time}
                    date={item.day}
                    grade={item.grade}
                    medium={item.medium}
                    image={<img src={'/Images/subjects/maths.png'} />}
                    amount={item.price}
                    // btn1="View more"
                  />
                  // goToCoursePage(item.id)
                  // </CourseCardTeacher>
                );
              })}
              {/* <CourseCardTeacher
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
                // btn1="View more"
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
                // btn1="View more"
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
                // btn1="View more"
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
                // btn1="View more"
              /> */}
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default MyCourses;
