import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Button } from '../../Button/Button';

export const StudentProfile = () => {
  return (
    <div className="StudentProfile">
      <Container>
        <div className="PanelHeader">
          <h2>User Profile</h2>
          <Button name=" Edit Profile" />
        </div>
        <div className="PanelContainer">
          <Col xl={4}>
            <div className="LeftContainer">
              <div className="ProfileImg">
                <img src={'/Images/student.png'} />
              </div>
              <div className="ParentContact">
                <div className="ContactHeader">Parent's Contact Details:</div>
                <div className="ParentLabel">Name:</div>
                <div className="ParentValue">Pathmani Ranatunga</div>
                <div className="ParentLabel">Mobile No:</div>
                <div className="ParentValue">0774832976</div>
                <div className="ParentLabel">Email:</div>
                <div className="ParentValue">pathmaniranatunga@gmail.com</div>
              </div>
            </div>
          </Col>

          <Col xl={8}>
            <div className="RightContainer">
              <div className="ProfileDetailsContainer">
                {/*      <div className="ProfileDetails">*/}
                {/*        <Col xl={6}>*/}
                {/*          <div className="ProfileLabel">First Name</div>*/}
                {/*          <div className="ProfileValue">Maneth</div>*/}
                {/*        </Col>*/}
                {/*        <Col xl={6}>*/}
                {/*          <div className="ProfileLabel">Last Name</div>*/}
                {/*          <div className="ProfileValue">Wijetunga</div>*/}
                {/*  </Col>*/}
                {/*</div>*/}

                {/*<div className="ProfileDetails">*/}
                {/*  <Col xl={6}>*/}
                {/*    <div className="ProfileLabel">Username</div>*/}
                {/*    <div className="ProfileValue">ManethWije</div>*/}
                {/*  </Col>*/}
                {/*  <Col xl={6}>*/}
                {/*  <div className="ProfileLabel">Email</div>*/}
                {/*    <div className="ProfileValue">manethwijetunga@yahoo.com</div>*/}
                {/*  </Col>*/}
                {/*</div>*/}

                {/*      <div className="ProfileDetails">*/}
                {/*        <Col xl={6}>*/}
                {/*          <div className="ProfileLabel">School</div>*/}
                {/*          <div className="ProfileValue">ABCDEFGH College, Sri Lanka</div>*/}
                {/*        </Col>*/}
                {/*        <Col xl={6}>*/}
                {/*          <div className="ProfileLabel">Grade</div>*/}
                {/*          <div className="ProfileValue">8</div>*/}
                {/*        </Col>*/}
                {/*      </div>*/}
              </div>
            </div>
          </Col>

          {/*<div className="ProfileButton">*/}
          {/*  <Button name="Save Changes"/>*/}
          {/*</div>*/}
        </div>
      </Container>
    </div>
  );
};

export default StudentProfile;
