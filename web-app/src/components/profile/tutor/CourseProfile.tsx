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
    // const [students, setStudents] = useState<any>();
    // const [classes, setClasses] = useState<any>();
    const [isDataLoading, setIsDataLoading] = useState(false);
    const gotoCourse = (cell: any, row: any, rowIndex: any, formatExtraData: any) => (
        < FaEye
            style={{
                fontSize: "20px",
                color: "#181312",
                padding: "7px",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                cursor: "pointer",
                boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
            }}
            className='accept-icon'
            onClick={() => {
                swal({
                    title: "User Removal",
                    text: `Do you really want to remove ${row.username}?`,
                    icon: "error",
                    buttons: {
                        cancel: true,
                        confirm: true
                    },
                    // dangerMode: true,
                })
                    .then((willDelete: any) => {
                        if (willDelete) {
                            swal(`Poof! You have successfully removed ${row.username}`, {
                                icon: "success",
                            });
                        }
                    });
            }}
        />
    );

    useEffect(() => {
        const days= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
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
                    class_day: new Date(data.start_date).getDay(),
                    start_time: new Date(data.start_time).toString(),
                    end_time: new Date(data.end_time).getTime().toLocaleString(),
                });

                console.log(course);
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
            sort: true,
        },
        {
            dataField: "username",
            text: "Student Name",
            sort: true,
        },
        {
            dataField: "contact",
            text: "Parent",
        },
        {
            dataField: "",
            text: "",
            formatter: gotoCourse,
            headerAttrs: {width: 100},
            attrs: {width: 100, class: "EditRow"}
        },
    ];

    const column2 = [
        {
            dataField: "date",
            text: "Date",
            sort: true,
        },
        {
            dataField: "time",
            text: "Time",
            sort: true,
        },
        {
            dataField: "duration",
            text: "Duration",
        }
    ];


    const students = [
        {
            student_id: 12345678,
            username: "samana@gmail.com",
            contact: "0987654321"
        }
    ];

    const schedule = [
        {
            date: "2022-02-23",
            time: "05.00PM",
            duration: "2hrs"
        }
    ]


    return (
        <Row className='view-courses'>
            {!isDataLoading && <Loader/>}
            {isDataLoading &&
            <Col lg={12} className='px-5'>
                <h1 style={{color: "#2c3e50"}}
                    className='text-lg-start header my-lg-3 text-md-center text-center d-flex flex-row align-items-center justify-content-between'>
                    {course.subject}
                    <AiOutlineCloseCircle className='me-lg-4' style={{cursor: "pointer"}}
                                          onClick={() => navigate(-1)}/>
                </h1>
                <h3 style={{color: "#2c3e50"}}>
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
                                {course.day}
                            </span>
                                <span className='my-2'>
                                {course.start_time}
                            </span>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="students" title="Students">
                        <Col className='mt-2'>
                            {isPc &&
                            <ToolkitProvider
                                keyField="id"
                                data={students}
                                columns={columns}
                                search>
                                {(props: any) =>
                                    (
                                        <Row className='next-table'>
                                            <SearchBar {...props.searchProps}
                                                       placeholder="Search Courses"
                                            />
                                            <BootstrapTable
                                                columns={columns} data={students} keyField="id"
                                                {...props.baseProps}
                                                bootstrap4={true}
                                                pagination={paginationFactory({sizePerPage: 5, hideSizePerPage: true})}
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
                                data={schedule}
                                columns={column2}
                                search>
                                {(props: any) =>
                                    (
                                        <Row className='next-table'>
                                            <BootstrapTable
                                                columns={column2} data={schedule} keyField="id"
                                                {...props.baseProps}
                                                bootstrap4={true}
                                                pagination={paginationFactory({sizePerPage: 5, hideSizePerPage: true})}
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