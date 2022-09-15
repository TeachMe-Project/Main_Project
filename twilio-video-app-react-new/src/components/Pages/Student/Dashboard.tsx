import * as React from 'react';
import { useEffect, useState } from 'react';
import Card from '../../Card/Card';
import { Row, Col, Container } from 'react-bootstrap';
import '../../../Assets/Styles/main.scss';
import PendingHomework from './PendingHomework';
// import MyRecentCourses from "./MyRecentCourses";
import TopNavbar from '../../Navbars/TopNavbar';
import LeftSidebar from '../../Sidebar/LeftSidebar';
import PanelContainer from '../../Layout/PanelContainer';
import Searchbar from '../../Searchbar/Searchbar';
import axios, { AxiosResponse } from 'axios';

export const Dashboard = () => {

  const [apps,setApps] = useState<any>([]);

  const updateApps = (()=>{
    // calling IPC exposed from preload script

    const x = new Promise((resolve, reject) => {
      // @ts-ignore
      window.electron.ipcRenderer.on('ipc-example', (arg) => {
        // eslint-disable-next-line no-console
        resolve(arg);

      });
      // @ts-ignore
      window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
    })
    x.then((r:any)=>{
      setApps(Array.from(r));
      console.log(r);
    })

  })



  const baseURL = 'https://learnx.azurewebsites.net/student/:id/upcomingClasses';
  const [upcomingClasses, setUpcomingClasses] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((res: AxiosResponse) => {
        res.data.map((item: any) => {
          setUpcomingClasses(prevState => [
            ...prevState,
            {
              subject: item.course.subject,
              // teacher:
              date: item.date,
              start_time: item.start_time,
              end_time: item.end_time,
            },
          ]);
        });
        console.log(upcomingClasses);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="Dashboard">
      <Container>
        <Row>
          <PanelContainer />
          <div className="PanelHeader">
            <h2>Dashboard</h2>
            <button onClick={updateApps}>GET APPS</button>
          </div>
          <div className="Panel">
            <div>{JSON.stringify(apps)}</div>
            <div className="PanelSubheader">
              <h5>Upcoming Classes</h5>
            </div>
            <div className="PanelBody">
              {/* {upcomingClasses.map((item: any) => {
                return (
                  <Card
                    header={item.subject}
                    // teacher="Mr. Lasitha Nuwan"
                    time="04:00pm- 06:00pm"
                    date={item.date}
                    btnname="Join"
                    image={<img src={'/Images/subjects/maths.png'} />}
                  />
                );
              })} */}
              <Card
                header="Mathematics"
                teacher="Mr. Lasitha Nuwan"
                time="04:00pm- 06:00pm"
                date="22 Aug 2022"
                btnname="Join"
                image={<img src={'/Images/subjects/maths.png'} />}
              />
              <Card
                header="Mathematics"
                teacher="Mr. Lasitha Nuwan"
                time="04:00pm- 06:00pm"
                date="23 Aug 2022"
                btnname="Join"
                image={<img src={'/Images/subjects/maths.png'} />}
              />
              <Card
                header="Mathematics"
                teacher="Mr. Lasitha Nuwan"
                time="04:00pm- 06:00pm"
                date="24 Aug 2022"
                btnname="Join"
                image={<img src={'/Images/subjects/maths.png'} />}
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
