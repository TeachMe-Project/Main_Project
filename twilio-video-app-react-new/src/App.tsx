import * as React from 'react';
import '../src/Assets/Styles/main.scss';
// import LeftSidebarTeacher from './components/Sidebar/LeftSidebarTeacher';
import LeftSidebar from './components/Sidebar/LeftSidebar';
// import MainPanel from './components/Pages/Teacher/MainPanel';
import MainPanel from './components/Pages/Student/MainPanel';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import TopNavbar from './components/Navbars/TopNavbar';

// import psList from 'ps-list';
// import {tasklist} from 'tasklist';

// const x =async () => {
//   // return(await psList());
//   return(await tasklist());
// }

function App() {
  // x().then(r => console.log(r));

  return (
    <Router>
      <div className="App">
        <Row>
          <TopNavbar />
        </Row>
        <Row>
          <Col xl={2} className="LeftCol">
            {/* <LeftSidebarTeacher /> */}
            <LeftSidebar />
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
