import React, {useEffect, useState} from "react";
import {Button, Card, Col, Row} from "react-bootstrap";
import ParentLayout from "./ParentLayout";
import {useMediaQuery} from "react-responsive";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
// @ts-ignore
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min';
import {BsCashCoin} from "react-icons/bs";
// @ts-ignore
import swal from "@sweetalert/with-react";
import {useAuth0} from "@auth0/auth0-react";
import axios, {AxiosResponse} from "axios";

type UpComing = {
    id: number;
    name: string;
    class: string;
    month: string;
    payment: number;
    date: string;
    attendTime: string;
    leaveTime: string;
    classStartTime: string;
    classEndTime: string;
};



const payment = (cell: any, row: any, rowIndex: any, formatExtraData: any) => (
    <Button
        className='success-outline'
        style={{
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
    }}
            onClick={() => {
                swal({
                    title: "Class Payment",
                    text: `Do you really want to pay ${row.subject} class fees for ${row.month}?`,
                    icon: "info",
                    buttons: {
                        cancel: true,
                        confirm: true
                    },
                    // dangerMode: true,
                })
                    .then((willDelete: any) => {
                        if (willDelete) {
                            swal(`Poof! You have successfully paid ${row.subject} class fees for ${row.month}`, {
                                icon: "success",
                            });
                        }
                    });
            }}>
        <BsCashCoin style={{marginRight: "5px"}}/> PayNow
    </Button>
);

const columns = [
    {
        dataField: "subject",
        text: "Subject",
    },
    {
        dataField: "month",
        text: "month",
    },
    {
        dataField: "teacher_name",
        text: "Tutor Name",
    },
    {
        dataField: "payment",
        text: "Payment(LKR)"
    },
    {
        dataField: "",
        text: "",
        formatter: payment,
        headerAttrs: {width: 150},
        attrs: {width: 100, class: "EditRow"}
    },

];


const PStudentProgress: React.FC = () => {


    const isPc = useMediaQuery({minWidth: 991});
    const {SearchBar} = Search;
    const [upcoming, setUpcoming] = useState<any[]>([]);
    const {user} = useAuth0();
    const user_id = user?.sub;
    const [isDataLoading, setIsDataLoading] = useState(false);
    useEffect(() => {
        axios.get(`https://learnxy.azurewebsites.net/parent/upcomingPayment/${user_id}`).then((res: AxiosResponse) => {
            // setIsDataLoading(true);
            // console.log(res.data)
            res.data.map((item: any) => {
                console.log(item.course.teacher.first_name)
                setUpcoming(prevState => [...prevState, {
                    subject: item.course.subject,
                    teacher_name : item.course.teacher.title + ' '+ item.course.teacher.first_name +' ' + item.course.teacher.last_name,
                    month: item.month,
                    payment: item.course.price,
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
                            Pending Payment
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
                                            <span className='table-card-data'>{item.month}</span>
                                        </li>
                                        <li className='d-flex flex-row align-items-center justify-content-between'>
                                            <span className='table-card-label'>{columns[2].text}</span>
                                            <span className='table-card-data'>{item.teacher_name}</span>
                                        </li>
                                        <li className='d-flex flex-row align-items-center justify-content-between'>
                                            <span className='table-card-label'>{columns[3].text}</span>
                                            <span className='table-card-data'>{item.payment}</span>
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
