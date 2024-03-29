import React from "react";
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
import {useNavigate} from "react-router-dom";

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

const handleTime = (x: Date) => {
    const hour = x.getHours();
    const time = x.toTimeString().substring(0, 5);
    if (hour >= 12) {
        return time + " h";
    }
    return time + " h";
}

const data: Array<any> = [
    {
        id: 1,
        name: "Mr Saman Rathnapriya",
        class: "Maths",
        date: "2022-10-24",
        attendTime: "16:01:34",
        leaveTime: "18:00:00",
    },
    {
        id: 1,
        name: "Mrs Samanthika Perera",
        class: "Science",
        date: "2022-10-21",
        attendTime: "15:00:30",
        leaveTime: "17:00:00",
    },
    {
        id: 1,
        name: "Ms Sumana Dias",
        class: "Science",
        date: "2022-10-21",
        attendTime: "08:00:55",
        leaveTime: "17:00:00",
    },
];



const PStudentProgress: React.FC = () => {

    const isPc = useMediaQuery({minWidth: 991});
    const {SearchBar} = Search;
const navigate = useNavigate();

    const summary = (cell: any, row: any, rowIndex: any, formatExtraData: any) => (
        <Button
            className='nextBtn-outline'
            style={{
                boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
            }}
            onClick={() => {
                navigate(`/parent/summary/${row.class}`)
            }}
        >
            Summary
        </Button>
    );
    const columns = [
        {
            dataField: "id",
            text: "",
            hidden: true
        },
        {
            dataField: "class",
            text:"Subject",
        },
        {
            dataField: "name",
            text:"Tutor Name",
        },
        {
            dataField: "date",
            text: "Date",
            sort: true
        },
        {
            dataField: "attendTime",
            text: "Attend Time"
        },
        {
            dataField: "leaveTime",
            text: "Leave Time"
        },
        {
            dataField: "",
            text: "",
            formatter: summary,
            headerAttrs: {width: 150},
            attrs: {width: 100, class: "EditRow"}
        },
    ];

    // @ts-ignore
    return (

        <ParentLayout>
            <Col lg={12} className='px-lg-5'>
                <Row className='d-lg-flex flex-lg-column align-items-center text-lg-center'>
                    <Col lg={12} md={12} xs={12}>
                        <h1 className='text-lg-start header my-lg-3 text-md-center text-center'>
                            Student Progress
                        </h1>
                    </Col>
                </Row>
                <Row>
                    {isPc &&
                    <ToolkitProvider
                        keyField="id"
                        data={data}
                        columns={columns}
                        search>
                        {(props: any) =>
                            (
                                <Row className='next-table'>
                                    <SearchBar {...props.searchProps}
                                               placeholder="Search Class"
                                    />
                                    <BootstrapTable
                                        columns={columns} data={data} keyField="id"
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
                                        defaultSortDirection="desc"

                                    />
                                </Row>
                            )
                        }
                    </ToolkitProvider>
                    }
                    {!isPc &&
                    <Col md={12} className='d-flex flex-column align-items-center  next-table-list'>
                        {data.map((item) => {
                            return (
                                <Card className='w-100 p-3 mb-2 table-card'>
                                    <ul className='ps-md-3 ps-0'>
                                        <li className='d-none'>
                                            <span className='table-card-label'>{columns[0].text}</span>
                                            <span className='table-card-data'>{item.id}</span>
                                        </li>
                                        <li className='d-flex flex-row align-items-center justify-content-between'>
                                            <span className='table-card-label'>{columns[1].text}</span>
                                            <span className='table-card-data'>{item.class}</span>
                                        </li>
                                        <li className='d-flex flex-row align-items-center justify-content-between'>
                                            <span className='table-card-label'>{columns[2].text}</span>
                                            <span className='table-card-data'>{item.date}</span>
                                        </li>
                                        <li className='d-flex flex-row align-items-center justify-content-between'>
                                            <span className='table-card-label'>{columns[3].text}</span>
                                            <span className='table-card-data'>{item.attendTime}</span>
                                        </li>
                                        <li className='d-flex flex-row align-items-center justify-content-between'>
                                            <span className='table-card-label'>{columns[4].text}</span>
                                            <span className='table-card-data'>{item.leaveTime}</span>
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
