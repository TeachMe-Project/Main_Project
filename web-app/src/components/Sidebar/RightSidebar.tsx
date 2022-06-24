import * as React from 'react';
import { Container, Row } from "react-bootstrap";
import UserProfileNavbar from "../Navbars/UserProfileNavbar";
// import CustomCalendar from "../Calendars/CustomCalendar";
import UpcomingCard from "../Card/UpcomingCard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

export const RightSidebar = () => {
  return (
    <div className="RightSidebar">
      <Container>
        <Row>
          <UserProfileNavbar name="Maneth Wijetunga">
            <Link to="/userprofile" className="link">
            </Link>
          </UserProfileNavbar>
        </Row>
        <Row>
          {/* <div className="CustomCalendar">
            <CustomCalendar />
          </div> */}
        </Row>
        <Row>
          <div className="UpcomingClasses">
            <h6>Upcoming classes</h6>
            <UpcomingCard />
            <UpcomingCard />
            <UpcomingCard />
            <UpcomingCard />
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default RightSidebar;
