import * as React from 'react';
import { useEffect, useState } from 'react';
import Card from '../../Card/Card';
import CardHeader from '../../Card/CardHeader';
import CardDetails from '../../Card/CardDetails';
import { Row, Col, Container, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Tabs from '../../Tabs/Tabs';
import Details from './Details';
import Notes from './Notes';
import Homework from './Homework';
import PendingPayments from './PendingPayments';
import PanelContainer from '../../Layout/PanelContainer';
import axios, { AxiosResponse } from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

type tutorName = {
  name?: string;
  image?: HTMLImageElement;
};

export const Course = (props: tutorName) => {
  const baseURLDetails = 'https://learnx.azurewebsites.net/student/:id/courses';
  const baseURLHomework = 'https://learnx.azurewebsites.net/student/:id/homeworks';
  const [details, setDetails] = useState<any[]>([]);
  const [homework, setHomework] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(baseURLDetails)
      .then((res: AxiosResponse) => {
        res.data.map((item: any) => {
          setDetails(prevState => [
            ...prevState,
            {
              subject: item.subject,
              teacher: item.course.teacher.first_name + ' ' + item.course.teacher.last_name,
              grade: item.grade,
              medium: item.medium,
              desc: item.description,
              price: 'LKR ' + item.price,
              start_date: item.start_date,
              institute: item.teacher.institute_teacher.institute,
              duration: item.duration + ' years',
            },
          ]);
        });
        console.log(details);
      })
      .catch(err => {
        console.log(err);
      });
    axios
      .get(baseURLHomework)
      .then((res: AxiosResponse) => {
        res.data.map((item: any) => {
          setHomework(prevState => [
            ...prevState,
            {
              date: item.uploaded_date,
              link: item.homework,
            },
          ]);
        });
        console.log(homework);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="Course">
      <Container>
        <Row>
          <PanelContainer />
          <div className="PanelHeader">
            <h2>My Courses</h2>
          </div>
          <div className="Panel">
            <div className="PanelSubHeader">
              <div className="PanelImage">
                <img src={'/Images/subjects/maths.png'} />
              </div>

              <div className="PanelTopic">
                <div className="SubjectName">
                  <h3>Mathematics</h3>
                </div>
                <div className="TutorProfileButton">
                  <Link to="/userprofile" className="link">
                    <div className="UserImg">
                      <img src={'/Images/Teachers/mr1.jpg'} />
                    </div>
                    <div className="Name">Mr. Lasitha Nuwan</div>
                  </Link>
                </div>
              </div>
            </div>

            <Tabs>
              {details.map((item: any) => {
                return (
                  <div className="Details">
                    <Details label="Subject" value="Mathematics" symbol=":" />
                    <Details label="Grade" value="8" symbol=":" />
                    <Details label="Medium" value="English" symbol=":" />
                    <Details
                      label="Description"
                      value="This course includes content of grade 8 mathematics
                    of local syllabus in English medium. It contains algebraic concepts and skills needed to
                    graph and solve linear equations and inequalities."
                    />
                    <Details label="Monthly Payment" value="LKR 2500" symbol=":" />
                    <Details label="Started Date" value="2022-03-24" symbol=":" />
                    <Details label="Institute" value="Sigma Institute" symbol=":" />
                    <Details label="Duration" value="12 months" symbol=":" />
                  </div>
                );
              })}
              <div className="Notes">
                <Notes topic="Note for week 1" date="2022-04-05" />
                <Notes topic="Note for week 2" date="2022-04-12" />
                <Notes topic="Note for week 3" date="2022-04-19" />
                <Notes topic="Note for week 4" date="2022-04-26" />
                <Notes topic="Note for week 5" date="2022-05-03" />
              </div>
              <div className="Homework">
                <Homework name="Homework for week 1" date="2022-04-05" />
                <Homework name="Homework for week 2" date="2022-04-12" />
                <Homework name="Homework for week 3" date="2022-04-19" />
                <Homework name="Homework for week 4" date="2022-04-26" />
                <Homework name="Homework for week 4" date="2022-04-26" />
                <Homework name="Homework for week 4" date="2022-04-26" />
                <Homework name="Homework for week 4" date="2022-04-26" />
                <Homework name="Homework for week 4" date="2022-04-26" />
              </div>
              <div className="Upcoming Classes">
                <Homework name="Homework for week 1" date="2022-04-05" />
                <Homework name="Homework for week 2" date="2022-04-12" />
                <Homework name="Homework for week 3" date="2022-04-19" />
                <Homework name="Homework for week 4" date="2022-04-26" />
                <Homework name="Homework for week 4" date="2022-04-26" />
                <Homework name="Homework for week 4" date="2022-04-26" />
                <Homework name="Homework for week 4" date="2022-04-26" />
                <Homework name="Homework for week 4" date="2022-04-26" />
              </div>
            </Tabs>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Course;
