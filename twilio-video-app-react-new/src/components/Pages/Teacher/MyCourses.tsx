import * as React from "react";
import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import PanelContainer from "../../Layout/PanelContainer";
import { ButtonCommon } from "../../Button/ButtonCommon";
import axios, { AxiosResponse } from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import CardDetails from "../../Card/CardDetails";
import { CardHeader } from "../../Card/CardHeader";

export const MyCourses = () => {
  const { user } = useAuth0();
  const teacherAuthId = user?.sub;
  console.log(teacherAuthId);
  const baseURL = `https://learnx.azurewebsites.net/teacher/${teacherAuthId}/courses`;
  const [courses, setCourses] = useState<any[]>([]);
  const navigate = useNavigate();
  console.log("this is test");
  useEffect(() => {
    try {
      console.log("this is succcess 1");
      axios
        .get(baseURL)
        .then((res: AxiosResponse) => {
          const course = res.data[0].course;
          console.log(course);
          course.map((item: any) => {
            setCourses(prevState => [
              ...prevState,
              {
                id: item.course_id,
                subject: item.subject,
                day: item.day,
                desc: item.description,
                time: item.start_time + " - " + item.end_time,
                price: "LKR  " + item.price,
                grade: item.grade,
                medium: item.medium + " Medium",
              }
            ]);
          });
          console.log(courses);
        });
    } catch (error) {
      console.log("my error");
      console.log(error);
    }
  }, []);


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
            style={{ width: "max-content", position: "relative", marginBottom: "20px", left: "1067px", top: "23px" }}
          >
            <Link to="/addcourse" className="link">
              <ButtonCommon name={"Add New Course"} />
            </Link>
          </div>

          <div className="Panel">
            <div className="PanelBody">
              {courses.map((item: any) => {
                return (
                  <div className="CourseCard">
                    <div className="CardImage">{<img src={"/Images/subjects/Mathematics.png"} />}</div>
                    <div className="CardBody">
                      <Row>
                        <Col xl={5}>
                          <CardHeader header={item.subject} />
                        </Col>
                        <Col xl={3}>
                          <CardHeader header={item.grade} />
                        </Col>
                      </Row>
                      <CardDetails details={item.desc} />
                      <div className="lastRow">
                        <div className="CardRow">
                          <CardDetails details={item.day} />
                          <CardDetails details={item.time} />
                          <CardDetails details={item.amount} />
                          <CardDetails details={item.medium} />
                        </div>
                        <div className="ViewMore">
                          <Button className="CardButton" onClick={() => navigate(`/course/${item.id}`)}>View More</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default MyCourses;
