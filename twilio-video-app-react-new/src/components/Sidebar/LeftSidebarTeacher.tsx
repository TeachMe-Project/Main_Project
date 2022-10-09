import React, {useEffect, useState} from 'react';
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsBuilding, BsFillBookFill, BsFillGridFill } from "react-icons/bs";
import { MdContactSupport } from "react-icons/md";
import "../../Assets/Styles/main.scss";
import { Link } from "react-router-dom";
import "../Pages/Student/MainPanel";
import { AiOutlineLogout } from "react-icons/ai";
import { Button } from "../Button/Button";
import { useAuth0 } from "@auth0/auth0-react";

// @ts-ignore
import swal from "@sweetalert/with-react";

export const LeftSidebarTeacher = () => {
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
              <Link to="/institutes" className="link">
                <div className="Sidebar_item">
                  <div>
                    <BsBuilding />
                  </div>
                  <div className="Sidebar_item_name">Institutes</div>
                </div>
              </Link>
            </li>
          </Row>

          <Row>
            <li>
              {/*<Link to="/messages" className="link">*/}
              {/*  <div className="Sidebar_item">*/}
              {/*    <div>*/}
              {/*      <BsFillChatLeftDotsFill />*/}
              {/*    </div>*/}
              {/*    <div className="Sidebar_item_name">Messages</div>*/}
              {/*  </div>*/}
              {/*</Link>*/}

              <Link to="/helpandsupport" className="link">
                <div className="Sidebar_item">
                  <div>
                    <MdContactSupport />
                  </div>
                  <div className="Sidebar_item_name">Help & Support</div>
                </div>
              </Link>
            </li>

            <Link to="/" className="link" onClick={() =>userLogOut() }>
              <div className="LogoutBtn">
                {/*<RiLogoutCircleRFill  size={32} color={"#7c7d87;"} />*/}
                <AiOutlineLogout className="LogoutIcon" />
                <Button name="Log out" />
              </div>
            </Link>
          </Row>
        </ul>
      </Container>
    </div>
  );
};

export default LeftSidebarTeacher;
