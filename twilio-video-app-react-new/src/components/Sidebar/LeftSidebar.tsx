import * as React from 'react';
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsFillGridFill, BsFillBookFill } from "react-icons/bs";
import { GiTeacher } from "react-icons/gi";
import { IoMdCog } from "react-icons/io";
import "../../Assets/Styles/main.scss";
import { Link } from "react-router-dom";
import "../Pages/Student/MainPanel";

export const LeftSidebar = () => {
  return (
    <div className="LeftSidebar">
      <Container>
        {/* <div className="Logo">Logo</div> */}
        <ul className="LeftNavbar">
          <Row>
            <li>
              <Link to="/" className="link">
                <div className="Sidebar_item">
                  <div>
                    <BsFillGridFill />
                    {/* Link to edit the vertical align of react icons
            https://github.com/react-icons/react-icons */}
                  </div>
                  <div className="Sidebar_item_name">Dashboard</div>
                </div>
              </Link>
            </li>
          </Row>

          <Row>
            <li>
              <Link to="/mycourses" className="link">
                <div className="Sidebar_item">
                  <div>
                    <BsFillBookFill />
                  </div>
                  <div className="Sidebar_item_name">My Courses</div>
                </div>
              </Link>
            </li>
          </Row>

          <Row>
            <li>
              <Link to="/myteachers" className="link">
                <div className="Sidebar_item">
                  <div>
                    <GiTeacher />
                  </div>
                  <div className="Sidebar_item_name">My Teachers</div>
                </div>
              </Link>
            </li>
          </Row>

          <Row>
            <li>
              <Link to="/settings" className="link">
                <div className="Sidebar_item">
                  <div>
                    {/* <IoMdCog.Provider value={{ style: { verticalAlign: 'middle' } }} /> */}
                    <IoMdCog />
                  </div>
                  <div className="Sidebar_item_name">Settings</div>
                </div>
              </Link>
            </li>
          </Row>
        </ul>
      </Container>
    </div>
  );
};

export default LeftSidebar;
