import * as React from 'react';
import Card from '../../Card/Card';
import { Row, Col, Container } from 'react-bootstrap';
import '../../../Assets/Styles/main.scss';
import PendingHomework from './PendingHomework';
// import MyRecentCourses from "./MyRecentCourses";
import TopNavbar from '../../Navbars/TopNavbar';
import LeftSidebar from '../../Sidebar/LeftSidebar';
import PanelContainer from '../../Layout/PanelContainer';
import Searchbar from '../../Searchbar/Searchbar';

export const Dashboard = () => {
  return (
    <div className="Dashboard">
      <Container>
        <Row>
          <PanelContainer />
          <div className="PanelHeader">
            <h2>Dashboard</h2>
          </div>
          <div className="Panel">
            <div className="PanelSubheader">
              <h5>Upcoming Classes</h5>
            </div>
            <div className="PanelBody">
              <Card
                header="Mathematics"
                teacher="Mr. Lasitha Nuwan"
                time="04:00pm- 06:00pm"
                date="23-08-2022"
                btnname="Join"
                image={<img src={'/Images/subjects/maths.png'} />}
              />
              <Card
                header="Science"
                teacher="Ms. Nayana Sandamali"
                time="04:00pm- 06:00pm"
                date="25-08-2022"
                btnname="Join"
                image={<img src={'/Images/subjects/science.png'} />}
              />

              <Card
                header="Music"
                teacher="Mr. Anura Kahatgoda"
                time="06:00pm- 08:00pm"
                date="26-08-2022"
                btnname="Join"
                image={<img src={'/Images/subjects/music.png'} />}
              />
            </div>

            <div className="PanelSubheader">{/*<h5>Search Courses</h5>*/}</div>
            <div className="PanelBody">
              <div className="SearchContainer">
                <div className="SearchDescr">
                  <h2> Get the best out of Online Learning</h2>
                </div>
                <img src={'/Images/landingpage.png'} />
                <Searchbar />
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
