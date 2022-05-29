import * as React from 'react';
import Card from "../../Card/Card";
import CardHeader from "../../Card/CardHeader";
import CardDetails from "../../Card/CardDetails";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "../../Button/Button";
export const StudentProfile = () => {
  return (
    <div className="StudentProfile">
      <Container>
        <div className="PanelHeader">
          <h2>Profile</h2>
        </div>
        <div className="PanelContainer">
          <Row>
            <div className="ProfileImg">
            <img src={require("../../../Assets/Images/testimg2.jpeg")} />
            </div>
          </Row>
          <div className="ProfileDetailsContainer">
          <Row>
            <div className="ProfileDetails">
              <Col xl={6}>
                <div className="ProfileLabel">First Name</div>
                <div className="ProfileValue">Maneth</div>
              </Col>
              <Col xl={6}>
              <div className="ProfileLabel">Last Name</div>
                <div className="ProfileValue">Wijetunga</div>
              </Col>
            </div>
          </Row>
          <Row>
            <div className="ProfileDetails">
              <Col xl={6}>
                <div className="ProfileLabel">Username</div>
                <div className="ProfileValue">ManethWije</div>
              </Col>
              <Col xl={6}>
              <div className="ProfileLabel">Email</div>
                <div className="ProfileValue">manethwijetunga@yahoo.com</div>
              </Col>
            </div>
          </Row>
          <Row>
            <div className="ProfileDetails">
              <Col xl={6}>
                <div className="ProfileLabel">School</div>
                <div className="ProfileValue">ABCDEFGH College, Sri Lanka</div>
              </Col>
              <Col xl={6}>
              <div className="ProfileLabel">Grade</div>
                <div className="ProfileValue">8</div>
              </Col>
            </div>
          </Row>
          </div>
          <div className="ProfileButton">
            <Button name="Save Changes"/>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default StudentProfile;
