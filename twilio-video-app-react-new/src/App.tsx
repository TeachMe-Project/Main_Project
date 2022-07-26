import * as React from 'react';
import '../src/Assets/Styles/main.scss';
import LeftSidebarTeacher from './components/Sidebar/LeftSidebarTeacher';
import MainPanel from './components/Pages/Teacher/MainPanel';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import TopNavbar from './components/Navbars/TopNavbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Row>
          <TopNavbar />
        </Row>
        <Row>
          <Col xl={2} className="LeftCol">
            <LeftSidebarTeacher />
          </Col>
          <Col xl={10} className={'MiddleCol'}>
            <MainPanel />
          </Col>
        </Row>
      </div>
    </Router>
  );
}

export default App;
