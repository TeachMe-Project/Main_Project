import React, {useEffect, useState} from 'react';
import AdminLayout from "./AdminLayout";
import {Card, Col, Row} from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from "react-bootstrap-table2-paginator";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
// @ts-ignore
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min';
import {useMediaQuery} from "react-responsive";
// @ts-ignore
import swal from "@sweetalert/with-react";
import {FaEye} from "react-icons/fa";
import axios, {AxiosResponse} from 'axios';
import {useNavigate} from "react-router-dom";
import Loader from "../../utils/Loader";


const ManageCourses = () => {

    const isPc = useMediaQuery({minWidth: 991});
    const {SearchBar} = Search;

    const baseURL = "https://learnx.azurewebsites.net/course/allCourses";
    const [courses, setCourses] = React.useState<any[]>([]);
    const navigate = useNavigate();
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
            onClick={() => navigate(`/admin/course/${row.id}`)}
        />
    );
    const columns = [
        {
            dataField: "id",
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
        axios.get(baseURL).then((response: AxiosResponse) => {
            response.data.map((item: any) => {
                    setCourses(prevState => [...prevState, {
                        id: item.course_id,
                        grade: item.grade,
                        subject: item.subject,
                        tutor_name: item.teacher.first_name + ' '+ item.teacher.last_name
                    }])
                }
            )
            setIsDataLoading(true);
        })
            .catch((error:any) => {
                console.log(error.message);
            })
    }, []);

    // @ts-ignore
    return (

        <AdminLayout>
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
                        {courses.map((item: any) => {
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
                                        <li className='d-flex flex-row align-items-center justify-content-between'>
                                            <span className='table-card-label'>{columns[4].text}</span>
                                            <span className='table-card-data'>{item.institute_name}</span>
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
        </AdminLayout>
    );
};

export default ManageCourses;