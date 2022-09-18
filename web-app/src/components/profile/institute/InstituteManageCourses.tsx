import React, {useEffect, useState} from 'react';
import {Card, Col, Row} from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from "react-bootstrap-table2-paginator";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import {useMediaQuery} from "react-responsive";
// @ts-ignore
import swal from "@sweetalert/with-react";
// @ts-ignore
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min';
import {FaEye} from "react-icons/fa";
import InstituteLayout from "./InstituteLayout";
import {useNavigate} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";
import axios, {AxiosResponse} from "axios";
import Loader from "../../utils/Loader";


const InstituteManageCourses = () => {

    const isPc = useMediaQuery({minWidth: 991});
    const {SearchBar} = Search;
    const navigate = useNavigate();
    const [courses, setCourses] = useState<any[]>([]);
    const {user} = useAuth0();
    const user_id = user?.sub;
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
            onClick={() => navigate(`/institute/course/${row.course_id}`)}
        />
    );

    const columns = [
        {
            dataField: "course_id",
            text: "Course ID",
            sort: true,
        },
        {
            dataField: "grade",
            text: "Grade",
            sort: true,
        },
        {
            dataField: "subject",
            text: "subject",
        },
        {
            dataField: "tutor_name",
            text: "tutor name"
        },
        {
            dataField: "",
            text: "",
            formatter: gotoCourse,
            headerAttrs: {width: 100},
            attrs: {width: 100, class: "EditRow"}
        },
    ];

    useEffect(() => {
        axios.get(`https://learnx.azurewebsites.net/institute/getAllInstituteCourses/${user_id}`).then((res: AxiosResponse) => {
            // setIsDataLoading(true);
            // console.log(res.data)
            res.data.map((item: any) => {
                setCourses(prevState => [...prevState, {
                    course_id: item.course.course_id,
                    grade: item.course.grade,
                    subject: item.course.subject,
                    tutor_name: item.course.teacher.title + " "+ item.course.teacher.first_name + " " + item.course.teacher.last_name,
                }])

                setIsDataLoading(true);
            })
        })
            .catch((error: any) => {
                console.log(error.message);
            })
    }, []);

    // @ts-ignore
    return (

        <InstituteLayout>
            <Col lg={12} className='px-lg-5'>
                <Row className='d-lg-flex flex-lg-column align-items-center text-lg-center'>
                    <Col lg={12} md={12} xs={12}>
                        <h1 className='text-lg-start header my-lg-3 text-md-center text-center'>
                            Manage Courses
                        </h1>
                    </Col>
                </Row>
                <Row>
                    {!isDataLoading && <Loader/>}
                    {isPc &&
                    <ToolkitProvider
                        keyField="id"
                        data={courses}
                        columns={columns}
                        search>
                        {(props: any) =>
                            (
                                <Row className='next-table'>
                                    <SearchBar {...props.searchProps}
                                               placeholder="Search Courses"
                                    />
                                    <BootstrapTable
                                        columns={columns} data={courses} keyField="id"
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
                    {!isPc &&
                    <Col md={12} className='d-flex flex-column align-items-center  next-table-list'>
                        {courses.map((item) => {
                            return (
                                <Card className='w-100 p-3 mb-2 table-card'>
                                    <ul className='ps-md-3 ps-0'>
                                        <li className='d-none'>
                                            <span className='table-card-label'>{columns[0].text}</span>
                                            <span className='table-card-data'>{item.id}</span>
                                        </li>
                                        <li className='d-flex flex-row align-items-center justify-content-between'>
                                            <span className='table-card-label'>{columns[1].text}</span>
                                            <span className='table-card-data'>{item.grade}</span>
                                        </li>
                                        <li className='d-flex flex-row align-items-center justify-content-between'>
                                            <span className='table-card-label'>{columns[2].text}</span>
                                            <span className='table-card-data'>{item.subject}</span>
                                        </li>
                                        <li className='d-flex flex-row align-items-center justify-content-between'>
                                            <span className='table-card-label'>{columns[3].text}</span>
                                            <span className='table-card-data'>{item.tutor_name}</span>
                                        </li>
                                        <li className='d-flex flex-row align-items-center justify-content-end mt-2'>
                                            <span className='me-3'>
                                                 {gotoCourse(null, item, null, null)}
                                            </span>
                                        </li>
                                    </ul>
                                </Card>
                            );
                        })}
                    </Col>
                    }
                </Row>
            </Col>
        </InstituteLayout>
    );
};

export default InstituteManageCourses;
