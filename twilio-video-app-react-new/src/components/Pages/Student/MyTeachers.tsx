import * as React from 'react';
import { useEffect, useState } from 'react';

import Card from '../../Card/Card';
import { Row, Col, Container } from 'react-bootstrap';

import PanelContainer from '../../Layout/PanelContainer';
import { Link } from 'react-router-dom';
import TeacherCard from '../../Card/TeacherCard';
import axios, { AxiosResponse } from 'axios';

export const MyTeachers = () => {
  const baseURL = '';
  const [teachers, setTeachers] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((res: AxiosResponse) => {
        res.data.map((item: any) => {
          setTeachers(prevState => [
            ...prevState,
            {
              grade: item.course.grade,
              subject: item.course.subject,
              // teacher:
            },
          ]);
        });
        console.log(teachers);
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
                    <Link to="/course" className="link">
                      <TeacherCard
                        grade={item.grade}
                        subject={item.subject}
                        image={<img src={'/Images/Teachers/mr1.jpg'} />}
                        teacher="Mr. Lasitha Nuwan"
                        contact="0771212121"
                        description="I'm having 9 years of experience in teaching at a renowned
                    government school as a mathematics teacher. I have produced great results
                   ..."
                      />
                    </Link>
                  );
                })}
                {/* <Link to="/course" className="link">
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
                </Link> */}
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};
export default MyTeachers;
