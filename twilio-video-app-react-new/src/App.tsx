import * as React from 'react';
import '../src/Assets/Styles/main.scss';
import LeftSidebarTeacher from './components/Sidebar/LeftSidebarTeacher';
import LeftSidebar from './components/Sidebar/LeftSidebar';
import MainPanel from './components/Pages/Teacher/MainPanel';
// import MainPanel from './components/Pages/Student/MainPanel';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopNavbar from './components/Navbars/TopNavbar';
import Home from './home/Home';
import { useAuth0 } from '@auth0/auth0-react';
import NavBar from './home/navBar';
import Banner from './home/Banner';
// import psList from 'ps-list';
// import {tasklist} from 'tasklist';

// const x =async () => {
//   // return(await psList());
//   return(await tasklist());
// }

function App() {
  const { user, isAuthenticated } = useAuth0();

  const renderMain = () => {
    if (user?.family_name == 'teacher') {
      return (
        <>
          <div className="App">
            <Row>
              <TopNavbar />
            </Row>
            <Row>
              <Col xl={2} className="LeftCol">
                <LeftSidebarTeacher />
                {/*<LeftSidebar />*/}
              </Col>
              <Col xl={10} className={'MiddleCol'}>
                <MainPanel />
              </Col>
            </Row>
          </div>
        </>
      );
    } else if (user?.family_name == 'student') {
      return <h1>Student</h1>;
    } else {
      return <Home />;
    }
  };

  return renderMain();
}

export default App;
