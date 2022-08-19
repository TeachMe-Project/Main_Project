import React from 'react';
import NavBar from './navBar';
import { useAuth0 } from '@auth0/auth0-react';
import TopNavbar from '../components/Navbars/TopNavbar';
import LeftSidebarTeacher from '../components/Sidebar/LeftSidebarTeacher';
import { Col, Row } from 'react-bootstrap';
import MainPanel from '../components/Pages/Teacher/MainPanel';
import Banner from './Banner';

const Home = () => {
  return (
    <>
      <NavBar />
      <Row className="p-0 m-0">
        <Banner />
      </Row>
    </>
  );
};

export default Home;
