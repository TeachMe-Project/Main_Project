import React, {useEffect, useState} from 'react';
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsBookHalf, BsFillExclamationCircleFill, BsFillGridFill, BsFillPersonFill } from "react-icons/bs";
import { FaBook } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import {useAuth0} from "@auth0/auth0-react";
import "../../Assets/Styles/main.scss";
import { Link } from "react-router-dom";
import "../Pages/Student/MainPanel";
import Button from "../Button/Button";

// @ts-ignore
import swal from "@sweetalert/with-react";

export const LeftSidebar = () => {
  const { logout, user } = useAuth0();

  const [userDetails, setUserDetails] = useState<any>({});
  const user_id = user?.sub;
  const userLogOut = () => {
    swal({
      title: "Log out",
      text: `Do you really want to logout?`,
      icon: "warning",
      buttons: {
        cancel: true,
        confirm: true
      },
    })
        .then((willDelete: any) => {
          if (willDelete) {
            logout({ returnTo: window.location.origin });
          }
        })
  };
  return (
    <div className="LeftSidebar">
      <Container>
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
                    <FaBook />
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
                    <BsFillPersonFill />
                  </div>
                  <div className="Sidebar_item_name">My Tutors</div>
                </div>
              </Link>
            </li>
          </Row>
          <Row>
            <li>
              <Link to="/searchresults" className="link">
                <div className="Sidebar_item">
                  <div>
                    <BsBookHalf/>
                  </div>
                  <div className="Sidebar_item_name">Search Course</div>
                </div>
              </Link>
            </li>
          </Row>
          {/*<Row>*/}
          {/*  <li>*/}
          {/*    <Link to="/messages" className="link">*/}
          {/*      <div className="Sidebar_item">*/}
          {/*        <div>*/}
          {/*          <BsFillChatFill />*/}
          {/*        </div>*/}
          {/*        <div className="Sidebar_item_name">Messages</div>*/}
          {/*      </div>*/}
          {/*    </Link>*/}
          {/*  </li>*/}
          {/*</Row>*/}

          <Row>
            <li>
              <Link to="/helpandsupport" className="link">
                <div className="Sidebar_item">
                  <div>
                    <BsFillExclamationCircleFill />
                  </div>
                  <div className="Sidebar_item_name">Help & Support</div>
                </div>
              </Link>
            </li>
          </Row>

          {/*<Row>*/}
          {/*  <li>*/}
          {/*    <Link to="/twilio" className="link">*/}
          {/*      <div className="Sidebar_item">*/}
          {/*        <div>*/}
          {/*          <BsFillExclamationCircleFill />*/}
          {/*        </div>*/}
          {/*        <div className="Sidebar_item_name">test twilio</div>*/}
          {/*      </div>*/}
          {/*    </Link>*/}
          {/*  </li>*/}
          {/*</Row>*/}
        </ul>

        <Link to="/" className="link" onClick={() =>userLogOut() }>
          <div className="LogoutBtn">
            {/*<RiLogoutCircleRFill  size={32} color={"#7c7d87;"} />*/}
            <AiOutlineLogout className="LogoutIcon" />
            <Button name="Log out" />
          </div>
        </Link>
      </Container>
    </div>
  );
};

export default LeftSidebar;
