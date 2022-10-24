import React, {useEffect, useState} from "react";
import {Card, Col, Row} from "react-bootstrap";
import ParentLayout from "./ParentLayout";
import {useMediaQuery} from "react-responsive";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
// @ts-ignore
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min';
import axios, {AxiosResponse} from "axios";
import {useAuth0} from "@auth0/auth0-react";
import Loader from "../../utils/Loader";

const columns = [

    {
        dataField: "subject",
        text: "Subject",
    },
    {
        dataField: "teacher_name",
        text: "Tutor Name",
    },
    {
        dataField: "date",
        text: "Date"
    },
    {
        dataField: "start_time",
        text: "Start Time"
    },
    {
        dataField:"end_time",
        text:"End Time"
    }
];


const PStudentProgress: React.FC = () => {

    


    const isPc = useMediaQuery({minWidth: 991});
    const {user} = useAuth0();
    const user_id = user?.sub;
    const {SearchBar} = Search;
    const [upcoming, setUpcoming] = useState<any[]>([]);
    const [isDataLoading, setIsDataLoading] = useState(false);
    useEffect(() => {
        axios.get(`http://localhost:8081/parent/upcomingClass/${user_id}`).then((res: AxiosResponse) => {
            // setIsDataLoading(true);
            // console.log(res.data)
            res.data.map((item: any) => {
                console.log(res.data)
                setUpcoming(prevState => [...prevState, {
                    subject: item.course.subject,
                    teacher_name : item.course.teacher.title + ' '+item.course.teacher.first_name +' ' + item.course.teacher.last_name,
                    date: item.date.substring(0,10),
                    start_time: item.start_time,
                    end_time: item.end_time
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

        <ParentLayout>
            <Col lg={12} className='px-lg-5'>
                <Row className='d-lg-flex flex-lg-column align-items-center text-lg-center'>
                    <Col lg={12} md={12} xs={12}>
                        <h1 className='text-lg-start header my-lg-3 text-md-center text-center'>
                            Upcoming Classes
                        </h1>
                    </Col>
                </Row>
                <Row>
                    {isPc &&
                    <ToolkitProvider
                        keyField="id"
                        data={upcoming}
                        columns={columns}
                        search>
                        {(props: any) =>
                            (
                                <Row className='next-table'>
                                    <SearchBar {...props.searchProps}
                                               placeholder="Search Class"
                                    />
                                    <BootstrapTable
                                        columns={columns} data={upcoming} keyField="id"
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
                                    {!isDataLoading && <Loader/>}
                                </Row>
                            )
                        }
                    </ToolkitProvider>
                    }
                    {!isPc &&
                    <Col md={12} className='d-flex flex-column align-items-center  next-table-list'>
                        {upcoming.map((item) => {
                            return (
                                <Card className='w-100 p-3 mb-2 table-card'>
                                    <ul className='ps-md-3 ps-0'>
                                        <li className='d-flex flex-row align-items-center justify-content-between'>
                                            <span className='table-card-label'>{columns[0].text}</span>
                                            <span className='table-card-data'>{item.subject}</span>
                                        </li>
                                        <li className='d-flex flex-row align-items-center justify-content-between'>
                                            <span className='table-card-label'>{columns[1].text}</span>
                                            <span className='table-card-data'>{item.teacher_name}</span>
                                        </li>
                                        <li className='d-flex flex-row align-items-center justify-content-between'>
                                            <span className='table-card-label'>{columns[2].text}</span>
                                            <span className='table-card-data'>{item.date}</span>
                                        </li>
                                        <li className='d-flex flex-row align-items-center justify-content-between'>
                                            <span className='table-card-label'>{columns[3].text}</span>
                                            <span className='table-card-data'>{item.start_time}</span>
                                        </li>
                                        <li className='d-flex flex-row align-items-center justify-content-between'>
                                            <span className='table-card-label'>{columns[4].text}</span>
                                            <span className='table-card-data'>{item.end_time}</span>
                                        </li>
                                    </ul>
                                </Card>
                            );
                        })}
                    </Col>
                    }
                </Row>
            </Col>
        </ParentLayout>
    );

};

export default PStudentProgress;
