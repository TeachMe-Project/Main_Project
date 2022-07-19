import * as React from 'react';

import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from '../../Button/Button';

export const CreateCourse = () => {
  return (
    <div className="CreateCourseContainer">
      <Container>
        <div className="PanelHeader">
          <h2>Create New Course</h2>
        </div>
        <div className="PanelContainer">
          <Row>
            <div className="CourseImg">
              <img src={require('../../../Assets/Images/testimg2.jpeg')} />
            </div>
          </Row>
          <div className="CourseDetailsContainer">
            <Row>
              <div className="CourseDetails">
                <Col xl={6}>
                  <div className="CourseLabel">Course Name</div>
                  <div className="CourseValue">Science</div>
                </Col>
                <Col xl={6}>
                  <div className="CourseLabel">Grade</div>
                  <div className="CourseValue">10</div>
                </Col>
              </div>
            </Row>
            <Row>
              <div className="CourseDetails">
                <Col xl={6}>
                  <div className="CourseLabel">Monthly Fee</div>
                  <div className="CourseValue">2500</div>
                </Col>
                <Col xl={6}>
                  <div className="CourseLabel">Course Description</div>
                  <div className="CourseValue">This course lorem ipsum</div>
                </Col>
              </div>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CreateCourse;
