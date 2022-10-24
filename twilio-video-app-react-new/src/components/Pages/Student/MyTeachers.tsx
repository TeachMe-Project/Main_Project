import * as React from 'react';
import { useEffect, useState } from 'react';

import Card from '../../Card/Card';
import { Row, Col, Container } from 'react-bootstrap';

import PanelContainer from '../../Layout/PanelContainer';
import { Link } from 'react-router-dom';
import TeacherCard from '../../Card/TeacherCard';
import axios, { AxiosResponse } from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

export const MyTeachers = () => {
  const { user } = useAuth0();
  const studentAuthId = user?.sub;
  const baseURL = `https://learnxy.azurewebsites.net/student/tutors/${studentAuthId}`;
  const [teachers, setTeachers] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((res: AxiosResponse) => {
        console.log(res.data)
        res.data.map((item: any) => {
          setTeachers(prevState => [
            ...prevState,
            {
              profile: item.course.teacher.user.profile_image,
              teacher_id: item.course.teacher_id,
              teacher_user_id: item.course.teacher.user_id,
              grade: item.course.grade,
              subject: item.course.subject,
              teacher: item.course.teacher.title +' ' + item.course.teacher.first_name + ' ' + item.course.teacher.last_name,
              contact: item.course.teacher.contact_no,
              desc: item.course.teacher.description,
            },
          ]);
        });
        // console.log(teachers);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

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
                {teachers.map((item: any) => {
                  return (
                    <Link to={`/teacherProfile/${item.teacher_id}`} className="link">
                      <TeacherCard
                        grade={item.grade}
                        subject={item.subject}
                        image={<img src={item.profile} />}
                        teacher={item.teacher}
                        contact="0771212121"
                        description="I'm having 9 years of experience in teaching at a renowned
                    government school as a mathematics teacher. I have produced great results
                   ..."
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};
export default MyTeachers;
