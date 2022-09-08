import React, {useEffect, useState} from 'react';
import {Col, Row, Tab, Tabs} from "react-bootstrap";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {useNavigate, useParams} from "react-router-dom";
// @ts-ignore
import swal from "@sweetalert/with-react";
import {FaEye} from "react-icons/fa";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
// @ts-ignore
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from "react-bootstrap-table2-paginator";
import {useMediaQuery} from "react-responsive";
import axios, {AxiosResponse} from "axios";
import Loader from "../../utils/Loader";


const CourseProfile = () => {
    const navigate = useNavigate();
    const {SearchBar} = Search;
    const isPc = useMediaQuery({minWidth: 991});
    const {course_id} = useParams();
    const [course, setCourse] = useState<any>();
    const [student, setStudent] = useState<any>([]);
    const [upcoming, setUpcoming] = useState<any>([]);
    const [isDataLoading, setIsDataLoading] = useState(false);


    useEffect(() => {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        console.log(course_id)
        axios.get(`https://learnx.azurewebsites.net/course/${course_id}`)
            .then((res: AxiosResponse) => {
                // setIsDataLoading(true);
                const data = res.data[0];
                console.log(data)
                setCourse({
                    subject: data.subject,
                    subtitle: data.teacher.title + " " + data.teacher.first_name + " " + data.teacher.last_name,
                    title: data.subject + " By " + data.teacher.title + " " + data.teacher.first_name + " " + data.teacher.last_name,
                    grade: data.grade,
                    description: data.description,
                    fee: data.price,
                    medium: data.medium,
                    start_date: new Date(data.start_date).toDateString(),
                    end_date: new Date(data.start_date).toDateString(),
                    class_day: data.day,
                    start_time: data.start_time,
                    end_time: data.end_time,
                });

                const course_student = data.student_course;
                course_student.map((item:any) => {
                    // console.log(item.student)
                    setStudent( (prevState: any) => [...prevState, {
                        student_id: item.student_id,
                        name: item.student.first_name + ' '+ item.student.last_name,
                        username: item.student.user.username,
                        parent_name: item.student.parent.first_name + ' ' + item.student.parent.last_name,
                        contact: item.student.parent.mobile_no
                    }])
                })
                const course_upcoming = data.teacher_class;
                // console.log(course_upcoming)
                course_upcoming.map((item:any) => {
                    setUpcoming( (prevState: any) => [...prevState, {
                        date: item.date.substring(0,10),
                        start_time: item.start_time,
                        end_time: item.end_time
                    }])
                    console.log(upcoming)
                })
                // const upcoming_class = upcoming.slice(0,12)
                // console.log(upcoming_class)
                // console.log(upcoming_class)
                // setUpcoming(upcoming.slice(0,12))
                // for (let i = 0; i < 12; i++) {
                //    console.log(upcoming[i])
                // }
                // console.log(upcoming);
                setIsDataLoading(true);

            })
            .catch((error: any) => {
                console.log(error.message);
            })
    }, []);


    const columns = [
        {
            dataField: "student_id",
            text: "Student ID",
            hidden:true,
        },
        {
            dataField: "name",
            text: "Student Name",
            sort: true,
        },
        {
            dataField: "username",
            text: "Student Email",
            sort: true,
        },
        {
            dataField: "parent_name",
            text: "Parent Name",
        },
        {
            dataField: "contact",
            text: "Parent Contact",
        },
    ];

    const column2 = [
        {
            dataField: "class_id",
            text: "Class Id",
            hidden: true
        },
        {
            dataField: "date",
            text: "Date",
            sort: true,
        },
        {
            dataField: "start_time",
            text: "Start Time",
            sort: true,
        },
        {
            dataField: "end_time",
            text: "End Time",
        }
    ];






    return (
        <Row className='view-courses'>
            {!isDataLoading && <Loader/>}
            {isDataLoading &&
            <Col lg={12} className='px-5'>
                <h1 style={{color: "#2c3e50"}}
                    className='text-lg-start header mt-lg-2 mb-lg-1 text-md-center text-center d-flex flex-row align-items-center justify-content-between'>
                    {course.subject}
                    <AiOutlineCloseCircle className='me-lg-4' style={{cursor: "pointer"}}
                                          onClick={() => navigate(-1)}/>
                </h1>
                <h3 style={{color: "#2c3e50"}} className='mb-3'>
                    {course.subtitle}
                </h3>
                <Tabs
                    defaultActiveKey="details"
                    id="uncontrolled-tab-example"
                    className="mt-2 ms-0"
                >
                    <Tab eventKey="details" title="Course Details">
                        <Row>
                            <Col lg={3} className='d-flex flex-column course-titles'>
                            <span className='mt-4 mb-2'>
                                Title
                            </span>
                                <span className='my-2'>
                                Subject
                            </span>
                                <span className='my-2'>
                                Grade
                            </span>
                                <span className='my-2'>
                                Description
                            </span>
                                <span className='my-2'>
                                Medium
                            </span>
                                <span className='my-2'>
                                Fee
                            </span>
                                <span className='my-2'>
                                Start Date
                            </span>
                                <span className='my-2'>
                                End Date
                            </span>
                                <span className='my-2'>
                                Class Day
                            </span>
                                <span className='my-2'>
                                Start Time
                            </span>
                                <span className='my-2'>
                                End Time
                            </span>
                            </Col>
                            <Col lg={1} className='d-flex flex-column'>
                            <span className='mt-4 mb-2'>
                                :
                            </span>
                                <span className='my-2'>
                                :
                            </span>
                                <span className='my-2'>
                                :
                            </span>
                                <span className='my-2'>
                                :
                            </span>
                                <span className='my-2'>
                                :
                            </span>
                                <span className='my-2'>
                                :
                            </span>
                                <span className='my-2'>
                                :
                            </span>
                                <span className='my-2'>
                                :
                            </span>
                                <span className='my-2'>
                                :
                            </span>
                                <span className='my-2'>
                                :
                            </span><span className='my-2'>
                                :
                            </span>
                            </Col>
                            <Col lg={7} className='d-flex flex-column ms-3'>
                            <span className='mt-4 mb-2'>
                                    {course.title}
                            </span>
                                <span className='my-2'>
                                {course.subject}
                            </span>
                                <span className='my-2'>
                                {course.grade}
                            </span>
                                <span className='my-2'>
                                {course.description}
                            </span>
                                <span className='my-2'>
                                {course.medium}
                            </span>
                                <span className='my-2'>
                                LKR {course.fee}
                            </span>
                                <span className='my-2'>
                                {course.start_date}
                            </span>
                                <span className='my-2'>
                                {course.end_date}
                            </span>
                                <span className='my-2'>
                                {course.class_day}
                            </span>
                                <span className='my-2'>
                                {course.start_time}
                            </span> <span className='my-2'>
                                {course.end_time}
                            </span>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="students" title="Students">
                        <Col className='mt-2'>
                            {isPc &&
                            <ToolkitProvider
                                keyField="id"
                                data={student}
                                columns={columns}
                                search>
                                {(props: any) =>
                                    (
                                        <Row className='next-table'>
                                            <SearchBar {...props.searchProps}
                                                       placeholder="Search Courses"
                                            />
                                            <BootstrapTable
                                                columns={columns} data={student} keyField="id"
                                                {...props.baseProps}
                                                bootstrap4={true}
                                                pagination={paginationFactory({sizePerPage: 4, hideSizePerPage: true})}
                                                rowStyle={{
                                                    fontSize: "16px",
                                                    fontWeight: "500",
                                                    borderCollapse: "separate",
                                                    borderSpacing: "0 30px",
                                                    color: "#95a5a6",
                                                }}

                                                headerWrapperClasses="next-table"
                                                defaultSortDirection="asc"

                                            />
                                        </Row>
                                    )
                                }
                            </ToolkitProvider>
                            }
                        </Col>
                    </Tab>
                    <Tab eventKey="schedule" title="Class-Schedules">
                        <Col className='mt-3'>
                            {isPc &&
                            <ToolkitProvider
                                keyField="id"
                                data={upcoming}
                                columns={column2}
                                search>
                                {(props: any) =>
                                    (
                                        <Row className='next-table'>
                                            <BootstrapTable
                                                columns={column2} data={upcoming} keyField="id"
                                                {...props.baseProps}
                                                bootstrap4={true}
                                                pagination={paginationFactory({sizePerPage: 4, hideSizePerPage: true})}
                                                rowStyle={{
                                                    fontSize: "16px",
                                                    fontWeight: "500",
                                                    borderCollapse: "separate",
                                                    borderSpacing: "0 30px",
                                                    color: "#95a5a6",
                                                }}

                                                headerWrapperClasses="next-table"
                                                defaultSortDirection="asc"

                                            />
                                        </Row>
                                    )
                                }
                            </ToolkitProvider>
                            }
                        </Col>
                    </Tab>
                </Tabs>
            </Col>
            }
        </Row>
    );
};

export default CourseProfile;