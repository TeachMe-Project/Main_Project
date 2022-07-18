import React from 'react';
import AdminLayout from "./AdminLayout";
import {Button, Card, Col, Row} from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from "react-bootstrap-table2-paginator";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import {FaRegMoneyBillAlt} from "react-icons/fa";
import {BsTrashFill} from "react-icons/bs";
import {useMediaQuery} from "react-responsive";

export const productsGenerator = (quantity: number) => {
    const items = [];
    for (let i = 0; i < quantity; i++) {
        items.push({id: i, name: `UpulSantha Sanasagala`, price: 2100 + i});
    }
    return items;
};

const products = productsGenerator(20);

const removeItem = (cell: any, row: any, rowIndex: any, formatExtraData: any) => (
    < BsTrashFill
        style={{
            fontSize: "20px",
            color: "red",
            backgroundColor: "white",
            padding: "4px",
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            cursor: "pointer"
        }}
        className='accept-icon'
        onClick={() => console.log(row)}
    />
);

const makePayments = (cell: any, row: any, rowIndex: any, formatExtraData: any) => (
    <Button style={{
        borderRadius: "20px",
        textAlign: "center",
        alignItems: "center",
        fontSize: "18px",
        fontWeight: "600"
    }}
            onClick={() => alert(row.id)}
    ><FaRegMoneyBillAlt
        style={{marginBottom: "3px", marginRight: "5px"}}/>PayNow</Button>
);
const columns = [
    {
        dataField: "id",
        text: "Product ID",
        hidden: true
    },
    {
        dataField: "name",
        text: "Class Name",
        sort: true,
    },
    {
        dataField: "price",
        text: "Product Price",
        sort: true
    },
    {
        dataField: "price",
        text: "Product Price"
    },
    {
        dataField: "",
        text: "",
        formatter: makePayments,
        headerAttrs: {width: 150},
        attrs: {width: 150, class: "EditRow"}
    },
    {
        dataField: "",
        text: "",
        formatter: removeItem,
        headerAttrs: {width: 100},
        attrs: {width: 100, class: "EditRow"}
    },
];


const TutorPayments = () => {

    const handleOnSelect = (row: { id: number; }, isSelect: any) => {
        if (isSelect && row.id < 3) {
            alert('Oops, You can not select Product ID which less than 3');
            return false; // return false to deny current select action
        }
        return true; // re
    }

    const selectRow = {
        mode: 'checkbox',
        clickToSelect: true,
        onSelect: handleOnSelect,
        hideSelectColumn: true
    };
    const isPc = useMediaQuery({minWidth: 991});
    // @ts-ignore
    return (

        <AdminLayout>
            <Col lg={12} className='px-lg-5'>
                <Row className='d-lg-flex flex-lg-column align-items-center text-lg-center'>
                    <Col lg={12}>
                        <h1 className='text-lg-start header my-lg-3'>
                            Tutor's Payments
                        </h1>
                    </Col>
                </Row>
                <Row>
                    {isPc && <BootstrapTable
                        bootstrap4
                        keyField="id"
                        data={products}
                        columns={columns}
                        pagination={paginationFactory({sizePerPage: 5})}
                        rowStyle={{
                            fontSize: "20px",
                            fontWeight: "600",
                            borderCollapse: "separate",
                            borderSpacing: "0 20px"
                        }}
                        headerWrapperClasses="next-table"
                        defaultSortDirection="asc"
                    />}
                    {!isPc &&
                        products.map((item) => (
                            <Card>
                                <ul>
                                    <li className='d-none'>
                                        <span>{columns[0].text}</span>
                                        <span>{item.id}</span>
                                    </li>
                                    <li className='d-flex flex-row align-items-center justify-content-between'>
                                        <span>{columns[1].text}</span>
                                        <span>{item.name}</span>
                                    </li>
                                    <li className='d-flex flex-row align-items-center justify-content-between'>
                                        <span>{columns[2].text}</span>
                                        <span>{item.price}</span>
                                    </li>
                                    <li className='d-flex flex-row align-items-center justify-content-between'>
                                        <span>{columns[3].text}</span>
                                        <span>{item.id}</span>
                                    </li>
                                    <li className='d-flex flex-row align-items-center justify-content-end'>
                                   <span className='me-3'>
                                        {removeItem(null, item, null, null)}
                                   </span>
                                        <span>
                                    {makePayments(null, item, null, null)}
                                    </span>
                                    </li>
                                </ul>
                            </Card>
                        ))
                    }
                </Row>
            </Col>
        </AdminLayout>
    );
};

export default TutorPayments;