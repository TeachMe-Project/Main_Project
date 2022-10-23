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
import { useAuth0 } from '@auth0/auth0-react';
import Loader from "../../../auth0/Loader";
import { CardHeader } from "../../Card/CardHeader";
import { CardDetails } from "../../Card/CardDetails";
import { CardButton } from "../../Card/CardButton";
import { useNavigate } from "react-router-dom";

const convertTime = (x: Date) => {
  const time = x.toLocaleTimeString('it-IT');
  const hour = time.split(':')[0];
  const intHour = parseInt(hour);
  const minute = time.split(':')[1];
  const ampm = intHour >= 12 ? 'PM' : 'AM';
  const newHour = intHour % 12;
  return newHour + ':' + minute + ' ' + ampm;
};

export const Dashboard = () => {
  const { user } = useAuth0();
  const studentAuthId = user?.sub;
  console.log({ studentAuthId });
  // const baseURL = `https://learnx.azurewebsites.net/student/${studentAuthId}/upcomingClasses`;
  const baseURL = `https://learnxy.azurewebsites.net/student/upcomingClasses/${studentAuthId}`;
  const [loading, setLoading] = useState(true);
  const [apps, setApps] = useState<any>([]);


  // const updateApps = (()=>{
  //
  //   // calling IPC exposed from preload script
  //       const x = new Promise((resolve, reject) => {
  //
  //     // @ts-ignore
  //     window.electron.ipcRenderer.on('ipc-example', (arg) => {
  //       // eslint-disable-next-line no-console
  //       resolve(arg);
  //
  //     });
  //     // @ts-ignore
  //     window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
  //   })
  //   x.then((r:any)=>{
  //     setApps(Array.from(r));
  //     console.log(r);
  //   })
  //
  //   // axios.post('http://localhost:8081/student/1/insertUsedApps', {
  //   //   // apps:"dfd,erere"
  //   // apps:apps.toString()
  //   // })
  //
  // })



  // const [upcomingClasses, setUpcomingClasses] = useState<any[]>([]);

  // useEffect(() => {
  //
  //   // @ts-ignore
  //   window.electron.ipcRenderer.on('ipc-example', (arg) => {
  //     // eslint-disable-next-line no-console
  //     axios.post('http://localhost:8081/student/'+studentAuthId+'/insertUsedApps', {
  //
  //       apps:Array.from(arg).toString(),
  //       class_id:120
  //     })
  //     console.log(Array.from(arg).toString());
  //   });
  //
  //   // @ts-ignore
  //   window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);},[])


  const insertApp=()=>{
    // @ts-ignore
    window.electron.ipcRenderer.on('ipc-example', (arg) => {
          // eslint-disable-next-line no-console
          axios.post('http://localhost:8081/student/'+studentAuthId+'/insertUsedApps', {

            apps:Array.from(arg).toString(),

          })
          console.log(Array.from(arg).toString());
        });

        // @ts-ignore
        window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);}



// setInterval(insertApp, 10000);

  const [upcomingClasses, setUpcomingClasses] = useState<any[]>([]);
const navigate = useNavigate();
  useEffect(() => {
    insertApp();
    axios
      .get(baseURL)
      .then((res: AxiosResponse) => {
        // console.log(res.data)
        let count =0;
        res.data.map((item: any) => {
          console.log(item)
          // console.log(item.teacher.first_name)
            if(count<3){
              setUpcomingClasses(prevState => [
                ...prevState,
                {
                  id: item.course.course_id,
                  class_id: item.class_id,
                  subject: item.course.subject,
                  teacher: item.teacher.title+'. ' + item.teacher.first_name + ' ' + item.teacher.last_name,
                  date: item.date.substring(0,10),
                  time: item.course.start_time.substring(0,5) + ' - ' + item.course.end_time.substring(0,5),
                },
              ]);
              count++;
            }

        });
        setLoading(false)
        console.log("Upcoming")
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
            {/*<button onClick={updateApps}>GET APPS</button>*/}
          </div>
          <div className="Panel">
            {/*<div>{JSON.stringify(apps)}</div>*/}
            <div className="PanelSubheader">
              <h5>Upcoming Classes</h5>
            </div>
            <div className="PanelBody">
              {loading && <Loader/>}
              {!loading && upcomingClasses.map((item: any) => {
                return (


                // <div className="Card">
                //   <div className="CardImage">{<img src={'/Images/subjects/Mathematics.png'} />}</div>
                //   <div className="CardBody">
                //     <CardHeader header={item.subject} />
                //     <CardDetails details={item.teacher} />
                //     <CardDetails details={item.time} />
                //     <CardDetails details={item.date} />
                //     <button className="CardButton" onClick={() => navigate('./twilio/')}>
                //       Join
                //     </button>
                //   </div>
                // </div>


                <Card
                    key={item.id}
                    id={item.id}
                    class_id={item.class_id}
                    teacher={item.teacher}
                    header={item.subject}
                    time={item.time}
                    date={item.date}
                    grade={item.grade}
                    btnname="Join"
                    image={<img src={"/Images/subjects/Mathematics.png"} />}
                />
                );
              })}
            </div>

            <div className="PanelSubheader">{/*<h5>Search Courses</h5>*/}</div>
            <div className="PanelBody">
              <div className="SearchContainer">
                <div className="SearchDescr">
                  <h2 className="SearchHeading"> Get the best out of Online Learning</h2>
                </div>
                <img src={'/Images/landingpage.png'} />
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
