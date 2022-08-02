import * as React from 'react';
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFillGridFill, BsFillBookFill, BsWalletFill, BsFillChatLeftDotsFill, BsBuilding } from 'react-icons/bs';
import { GiTeacher } from 'react-icons/gi';
import { IoMdCog } from 'react-icons/io';
import { MdContactSupport } from 'react-icons/md';
import '../../Assets/Styles/main.scss';
import { Link } from 'react-router-dom';
import '../Pages/Student/MainPanel';
import { AiOutlineLogout } from 'react-icons/ai';
import { Button } from '../Button/Button';

export const LeftSidebarTeacher = () => {
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
              <Link to="/messages" className="link">
                <div className="Sidebar_item">
                  <div>
                    <BsFillChatLeftDotsFill />
                  </div>
                  <div className="Sidebar_item_name">Messages</div>
                </div>
              </Link>
              <Link to="/helpandsupport" className="link">
                <div className="Sidebar_item">
                  <div>
                    <MdContactSupport />
                  </div>
                  <div className="Sidebar_item_name">Help and Support</div>
                </div>
              </Link>
            </li>
          </Row>
        </ul>

        <Link to="/" className="link">
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

export default LeftSidebarTeacher;
