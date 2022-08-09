import * as React from 'react';
import Card from '../../Card/Card';

import { Row, Col, Container } from 'react-bootstrap';
import '../../../Assets/Styles/main.scss';

// import MyRecentCourses from "./MyRecentCourses";
import TopNavbar from '../../Navbars/TopNavbar';
import LeftSidebar from '../../Sidebar/LeftSidebar';
import PanelContainer from '../../Layout/PanelContainer';
import { AiOutlineHistory } from 'react-icons/ai';
import Paymentpiechart from './Paymentpiechart';
import Monthlyattendancechart from './Monthlyattendancechart';
import Enrollmentchart from './Enrollmentchart';
import Averagetimechart from './Averagetimechart';

export const Dashboard = () => {
  return (
    <div className="DashboardTeacher">
      <Container>
        <Row>
          {/*<PanelContainer />*/}
          <div className="PanelHeader">
            <h2>Dashboard</h2>
          </div>
          <div className="Panel">
            <div className="PanelSubheader">
              <h5>Upcoming Classes </h5>
            </div>
            <div className="PanelBody">
              <Card
                header="Mathematics"
                time="04:00pm- 06:00pm"
                date="23-08-2022"
                grade="Grade 8"
                btnname="Start"
                image={<img src={'/Images/subjects/maths.png'} />}
              />
              <Card
                header="Mathematics"
                time="04:00pm- 06:00pm"
                date="24-08-2022"
                grade="Grade 9"
                btnname="Start"
                image={<img src={'/Images/subjects/maths.png'} />}
              />

              <Card
                header="Mathematics"
                time="04:00pm- 06:00pm"
                date="25-08-2022"
                grade="Grade 7"
                btnname="Start"
                image={<img src={'/Images/subjects/maths.png'} />}
              />
            </div>
          </div>
        </Row>

        <Row>
          <div className="Panel">
            <div className="PanelSubheader">
              <h5>Analytics </h5>
            </div>
            <div
              className="chartContainer"
              style={{
                height: '350px',
                display: 'flex',
                position: 'relative',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}
            >
              <div
                className="chart"
                style={{
                  position: 'relative',
                }}
              >
                <Paymentpiechart />
              </div>
              <div
                className="chart"
                style={{
                  height: '350px',
                  marginRight: '40px',
                  position: 'relative',
                  top: 100,
                  marginLeft: '155px',
                }}
              >
                <Monthlyattendancechart />
              </div>
            </div>
            <div
              className="chartContainer"
              style={{
                height: '400px',
                display: 'flex',
                position: 'relative',
                top: -60,
                right: 50,
                alignItems: 'center',
                justifyContent: 'space-around',
              }}
            >
              <div
                className="chart"
                style={{
                  height: '500px',
                  position: 'relative',
                  top: 100,
                  left: 0,
                }}
              >
                <Enrollmentchart />
              </div>
              <div
                className="chart"
                style={{
                  height: '500px',
                  position: 'relative',
                  top: 100,
                  // left: 40,
                }}
              >
                <Averagetimechart />
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
