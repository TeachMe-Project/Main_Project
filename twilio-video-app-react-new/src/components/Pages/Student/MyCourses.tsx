import * as React from 'react';
import { useEffect, useState } from 'react';
import CourseCard from '../../Card/CourseCard';
import CardHeader from '../../Card/CardHeader';
import CardDetails from '../../Card/CardDetails';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PanelContainer from '../../Layout/PanelContainer';
import { Button } from '../../Button/Button';
import axios, { AxiosResponse } from 'axios';

export const MyCourses = () => {
  const baseURL = 'http://localhost:8081/student/:id/courses';
  const [courses, setCourses] = useState<any[]>([]);

  const convertTime = (x: Date) => {
    const time = x.toLocaleTimeString('it-IT');
    const hour = time.split(':')[0];
    const intHour = parseInt(hour);
    const minute = time.split(':')[1];
    const ampm = intHour >= 12 ? 'PM' : 'AM';
    const newHour = intHour % 12;
    return newHour + ':' + minute + ' ' + ampm;
  };

  const handleTime = (start: string, end: string) => {
    return start + ' - ' + end;
  };

  useEffect(() => {
    axios
      .get(baseURL)
      .then((res: AxiosResponse) => {
        res.data.map((item: any) => {
          if (item.course.day === 'MON') {
            setCourses(prevState => [
              ...prevState,
              {
                subject: item.course.subject,
                teacher: item.course.teacher.first_name + ' ' + item.course.teacher.last_name,
                day: 'Monday',
                desc: item.course.description,
                time: handleTime(convertTime(item.course.start_time), convertTime(item.course.end_time)),
                price: item.course.price,
              },
            ]);
          } else if (item.course.day === 'TUE') {
            setCourses(prevState => [
              ...prevState,
              {
                subject: item.course.subject,
                teacher: item.course.teacher.first_name + ' ' + item.course.teacher.last_name,
                day: 'Tuesday',
                desc: item.course.description,
                time: handleTime(convertTime(item.course.start_time), convertTime(item.course.end_time)),
                price: item.course.price,
              },
            ]);
          } else if (item.course.day === 'WED') {
            setCourses(prevState => [
              ...prevState,
              {
                subject: item.course.subject,
                teacher: item.course.teacher.first_name + ' ' + item.course.teacher.last_name,
                day: 'Wednesday',
                desc: item.course.description,
                time: handleTime(convertTime(item.course.start_time), convertTime(item.course.end_time)),
                price: item.course.price,
              },
            ]);
          } else if (item.course.day === 'THU') {
            setCourses(prevState => [
              ...prevState,
              {
                subject: item.course.subject,
                teacher: item.course.teacher.first_name + ' ' + item.course.teacher.last_name,
                day: 'Thursday',
                desc: item.course.description,
                time: handleTime(convertTime(item.course.start_time), convertTime(item.course.end_time)),
                price: item.course.price,
              },
            ]);
          } else if (item.course.day === 'FRI') {
            setCourses(prevState => [
              ...prevState,
              {
                subject: item.course.subject,
                teacher: item.course.teacher.first_name + ' ' + item.course.teacher.last_name,
                day: 'Friday',
                desc: item.course.description,
                time: handleTime(convertTime(item.course.start_time), convertTime(item.course.end_time)),
                price: item.course.price,
              },
            ]);
          } else if (item.course.day === 'SAT') {
            setCourses(prevState => [
              ...prevState,
              {
                subject: item.course.subject,
                teacher: item.course.teacher.first_name + ' ' + item.course.teacher.last_name,
                day: 'Saturday',
                desc: item.course.description,
                time: handleTime(convertTime(item.course.start_time), convertTime(item.course.end_time)),
                price: item.course.price,
              },
            ]);
          } else if (item.course.day === 'SUN') {
            setCourses(prevState => [
              ...prevState,
              {
                subject: item.course.subject,
                teacher: item.course.teacher.first_name + ' ' + item.course.teacher.last_name,
                day: 'Sunday',
                desc: item.course.description,
                time: handleTime(convertTime(item.course.start_time), convertTime(item.course.end_time)),
                price: item.course.price,
              },
            ]);
          }
        });
        console.log(courses);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

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
              {/* {courses.map((item: any) => {
                return (
                  <CourseCard
                    header={item.subject}
                    description={item.desc}
                    time={item.time}
                    date={item.day}
                    image={<img src={'/Images/subjects/maths.png'} />}
                    teacher={item.teacher}
                    amount={item.price}
                    btn1="View more"
                    btn2="Unenroll"
                  />
                );
              })} */}
              <CourseCard
                header="Mathematics"
                description="For A/L"
                time="04:00pm - 06:00pm"
                date="Wednesday"
                image={<img src={'/Images/subjects/maths.png'} />}
                teacher="Mr. Lasitha Nuwan"
                amount="2500"
                btn1="View more"
                btn2="Unenroll"
              />
              <CourseCard
                header="Mathematics"
                description="For A/L"
                time="04:00pm - 06:00pm"
                date="Wednesday"
                image={<img src={'/Images/subjects/maths.png'} />}
                teacher="Mr. Lasitha Nuwan"
                amount="2500"
                btn1="View more"
                btn2="Unenroll"
              />
              <CourseCard
                header="Mathematics"
                description="For A/L"
                time="04:00pm - 06:00pm"
                date="Wednesday"
                image={<img src={'/Images/subjects/maths.png'} />}
                teacher="Mr. Lasitha Nuwan"
                amount="2500"
                btn1="View more"
                btn2="Unenroll"
              />
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default MyCourses;
