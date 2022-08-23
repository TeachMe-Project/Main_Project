import * as React from 'react';
import '../src/Assets/Styles/main.scss';
import LeftSidebarTeacher from './components/Sidebar/LeftSidebarTeacher';
import LeftSidebar from './components/Sidebar/LeftSidebar';
import MainPanelTeacher from './components/Pages/Teacher/MainPanel';
import MainPanelStudent from './components/Pages/Student/MainPanel';
import { Col, Row } from 'react-bootstrap';
import TopNavbar from './components/Navbars/TopNavbar';
import Home from './home/Home';
import { useAuth0 } from '@auth0/auth0-react';
import NavBar from './home/navBar';
import UnAuth from './auth0/unAuth';
// import psList from 'ps-list';
// const psList=window.require('ps-list');
//
// console.log( psList());
// const x = () => {
//   console.log(psList());
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
                <MainPanelTeacher />
              </Col>
            </Row>
          </div>
        </>
      );
    } else if (user?.family_name == 'student') {
      return (
        <>
          <div className="App">
            <Row>
              <TopNavbar />
            </Row>
            <Row>
              <Col xl={2} className="LeftCol">
                <LeftSidebar />
              </Col>
              <Col xl={10} className={'MiddleCol'}>
                <MainPanelStudent />
              </Col>
            </Row>
          </div>
        </>
      );
    } else if (user?.family_name == 'admin' || user?.family_name == 'parent') {
      return (
        <>
          <NavBar />
          <UnAuth />
        </>
      );
    } else {
      return <Home />;
    }
  };

  return renderMain();
}

export default App;
