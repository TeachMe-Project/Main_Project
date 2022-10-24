import * as React from 'react';
import {useEffect, useState} from 'react';
import CourseCard from '../../Card/CourseCard';
import {Container, Row} from 'react-bootstrap';
import PanelContainer from '../../Layout/PanelContainer';
import axios, {AxiosResponse} from 'axios';
import {useAuth0} from '@auth0/auth0-react';
import {CardHeader} from "../../Card/CardHeader";
import {Link, useNavigate} from "react-router-dom";
import {CardDetails} from "../../Card/CardDetails";
import {CardButton} from "../../Card/CardButton";

export const MyCourses = () => {
    const {user} = useAuth0();
    const studentAuthId = user?.sub;
    const baseURL = `https://learnxy.azurewebsites.net/student/tutors/${studentAuthId}`;
    const [courses, setCourses] = useState<any[]>([]);
    const navigate = useNavigate();
    // const convertTime = (x: Date) => {
    //   const time = x.toLocaleTimeString('it-IT');
    //   const hour = time.split(':')[0];
    //   const intHour = parseInt(hour);
    //   const minute = time.split(':')[1];
    //   const ampm = intHour >= 12 ? 'PM' : 'AM';
    //   const newHour = intHour % 12;
    //   return newHour + ':' + minute + ' ' + ampm;
    // };

    useEffect(() => {
        axios
            .get(baseURL)
            .then((res: AxiosResponse) => {
                res.data.map((item: any) => {
                    console.log(item)
                        setCourses(prevState => [
                            ...prevState,
                            {
                                teacher_id: item.course.teacher_id,
                                teacher_user_id: item.course.teacher.user_id,
                                course_id: item.course_id,
                                subject: item.course.subject,
                                teacher: item.course.teacher.title + ' ' +item.course.teacher.first_name + ' ' + item.course.teacher.last_name,
                                day: item.course.day,
                                desc: item.course.description,
                                time: item.course.start_time.substring(0,5) + ' - ' + item.course.end_time.substring(0,5),
                                price: 'LKR '+ item.course.price,
                                course_image: item.course.image_url,
                            },
                        ]);
                    // console.log(courses)
                    console.log("Details Here")
                    console.log(courses)
                });
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div className="MyCourses">
            <Container>
                <Row>
                    <PanelContainer/>
                    <div className="PanelHeader">
                        <h2>My Courses</h2>
                    </div>

                    <div className="Panel">
                        <div className="PanelBody">
                            {courses.map((item: any) => {
                                return (
                                <div className="CourseCard">
                                     <div className="CardImage"><img src={item.course_image}/></div>
                                     <div className="CardBody">
                                         <CardHeader header={item.subject} />
                                         <div className="teacherLink">
                                             <Link to={`/teacherProfile/${item.teacher_id}`} className="link">
                                                 <CardDetails details={item.teacher} />
                                             </Link>
                                         </div>
                                         <CardDetails details={item.desc} />
                                         <div className="lastRow">
                                             <div className="CardRow">
                                                 <CardDetails details={item.date} />
                                                 <div className='CardDetails'>
                                                     Time: {item.time}
                                                 </div>
                                                 <CardDetails details={item.amount} />
                                             </div>
                                             <div className="ViewMore">
                                                 <Link to={`/course/${item.course_id}`} className="link">
                                                     <button className="CardButton">
                                                         View more
                                                     </button>
                                                 </Link>
                                             </div>
                                             <div  className="link">
                                                 <div className="link">
                                                     <button className="CardButton">
                                                         Unenroll
                                                     </button>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                                )
                            })}

                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default MyCourses;
