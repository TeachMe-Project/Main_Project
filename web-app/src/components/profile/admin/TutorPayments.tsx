// import React from 'react';
// import AdminLayout from "./AdminLayout";
// import {Button, Card, Col, Row} from "react-bootstrap";
// import BootstrapTable from 'react-bootstrap-table-next';
// import paginationFactory from "react-bootstrap-table2-paginator";
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
// import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
// import {FaRegMoneyBillAlt} from "react-icons/fa";
// import {BsTrashFill} from "react-icons/bs";
// import {useMediaQuery} from "react-responsive";
// // @ts-ignore
// import swal from "@sweetalert/with-react";
// // import ToolkitProvider from 'react-bootstrap-table2-toolkit';
// // @ts-ignore
// import ToolkitProvider from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min';
// import { Search } from 'react-bootstrap-table2-toolkit';
//
// export const productsGenerator = (quantity: number) => {
//     const items = [];
//     for (let i = 0; i < quantity; i++) {
//         items.push({id: i, name: `UpulSantha Sanasagala`, price: 2100 + i});
//     }
//     return items;
// };
//
// const products = productsGenerator(20);
//
// const removeItem = (cell: any, row: any, rowIndex: any, formatExtraData: any) => (
//     < BsTrashFill
//         style={{
//             fontSize: "20px",
//             color: "#e74c3c",
//             padding: "7px",
//             width: "30px",
//             height: "30px",
//             borderRadius: "50%",
//             cursor: "pointer",
//             boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
//
//         }}
//         className='accept-icon'
//         onClick={() => {
//             swal({
//                 title: "User Removal",
//                 text: `Do you really want to remove ${row.name}?`,
//                 icon: "error",
//                 buttons: {
//                     cancel: true,
//                     confirm: true
//                 },
//                 // dangerMode: true,
//             })
//                 .then((willDelete: any) => {
//                     if (willDelete) {
//                         swal(`Poof! You have successfully removed ${row.name}`, {
//                             icon: "success",
//                         });
//                     }
//                 });
//         }}
//     />
// );
//
// const makePayments = (cell: any, row: any, rowIndex: any, formatExtraData: any) => (
//     <Button style={{
//         borderRadius: "20px",
//         textAlign: "center",
//         alignItems: "center",
//         fontSize: "18px",
//         fontWeight: "600"
//     }}
//             onClick={() => swal({
//                 icon: "info",
//                 title: "Are You Sure"
//             })}
//     ><FaRegMoneyBillAlt
//         style={{marginBottom: "3px", marginRight: "5px"}}/>PayNow</Button>
// );
//
//
// const columns = [
//     {
//         dataField: "id",
//         text: "Product ID",
//         hidden: true
//     },
//     {
//         dataField: "name",
//         text: "Class Name",
//         sort: true,
//     },
//     {
//         dataField: "price",
//         text: "Product Price",
//         sort: true
//     },
//     {
//         dataField: "price",
//         text: "Product Price"
//     },
//     {
//         dataField: "",
//         text: "",
//         formatter: makePayments,
//         headerAttrs: {width: 150},
//         attrs: {width: 150, class: "EditRow"}
//     },
//     {
//         dataField: "",
//         text: "",
//         formatter: removeItem,
//         headerAttrs: {width: 100},
//         attrs: {width: 100, class: "EditRow"}
//     },
// ];
//
//
// const TutorPayments = () => {
//
//     const handleOnSelect = (row: { id: number; }, isSelect: any) => {
//         if (isSelect && row.id < 3) {
//             alert('Oops, You can not select Product ID which less than 3');
//             return false; // return false to deny current select action
//         }
//         return true; // re
//     }
//
//     const selectRow = {
//         mode: 'checkbox',
//         clickToSelect: true,
//         onSelect: handleOnSelect,
//         hideSelectColumn: true
//     };
//     const isPc = useMediaQuery({minWidth: 991});
//     const { SearchBar } = Search;
//     // @ts-ignore
//     return (
//
//         <AdminLayout>
//             <Col lg={12} className='px-lg-5'>
//                 <Row className='d-lg-flex flex-lg-column align-items-center text-lg-center'>
//                     <Col lg={12}>
//                         <h1 className='text-lg-start header my-lg-3'>
//                             Tutor's Payments
//                         </h1>
//                     </Col>
//                 </Row>
//                 <Row>
//                     {/*<ToolkitProvider*/}
//                     {/*    keyField="id"*/}
//                     {/*    data={products}*/}
//                     {/*    columns={columns}*/}
//                     {/*    search*/}
//                     {/*>*/}
//                     {/*    {*/}
//                     {/*        // (props:any) => (*/}
//                                 {/*// <>*/}
//                                 {/*<SearchBar { ...props.searchProps } />*/}
//                                     <BootstrapTable
//                                         keyField="id"
//                                         data={products}
//                                         columns={columns}
//                                         pagination={paginationFactory({sizePerPage:5})}
//                                         rowStyle={{
//                                             fontSize: "16px",
//                                             fontWeight: "500",
//                                             borderCollapse: "separate",
//                                             borderSpacing: "0 20px",
//                                             color: "#95a5a6",
//                                             padding: "30px"
//                                         }}
//                                         headerWrapperClasses="next-table"
//                                         defaultSortDirection="asc"
//                                     />
//                                 {/*</>*/}
//                             {/*// )}*/}
//                     {/*</ToolkitProvider>*/}
//                     {!isPc &&
//                     <Col md={12} className='d-flex flex-column align-items-center next-table-list'>
//                         {products.map((item) => (
//                             <Card className='w-75 p-3 mb-2'>
//                                 <ul className='ps-3'>
//                                     <li className='d-none'>
//                                         <span>{columns[0].text}</span>
//                                         <span>{item.id}</span>
//                                     </li>
//                                     <li className='d-flex flex-row align-items-center justify-content-between'>
//                                         <span>{columns[1].text}</span>
//                                         <span>{item.name}</span>
//                                     </li>
//                                     <li className='d-flex flex-row align-items-center justify-content-between'>
//                                         <span>{columns[2].text}</span>
//                                         <span>{item.price}</span>
//                                     </li>
//                                     <li className='d-flex flex-row align-items-center justify-content-between'>
//                                         <span>{columns[3].text}</span>
//                                         <span>{item.id}</span>
//                                     </li>
//                                     <li className='d-flex flex-row align-items-center justify-content-end'>
//                                    <span className='me-3'>
//                                         {removeItem(null, item, null, null)}
//                                    </span>
//                                         <span>
//                                     {makePayments(null, item, null, null)}
//                                     </span>
//                                     </li>
//                                 </ul>
//                             </Card>
//                         ))}
//                     </Col>
//                     }
//                 </Row>
//             </Col>
//         </AdminLayout>
//     );
// };
//
// export default TutorPayments;

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
// @ts-ignore
import swal from "@sweetalert/with-react";
// @ts-ignore
import ToolkitProvider,{Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min';

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
            color: "#e74c3c",
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
                text: `Do you really want to remove ${row.name}?`,
                icon: "error",
                buttons: {
                    cancel: true,
                    confirm: true
                },
                // dangerMode: true,
            })
                .then((willDelete: any) => {
                    if (willDelete) {
                        swal(`Poof! You have successfully removed ${row.name}`, {
                            icon: "success",
                        });
                    }
                });
        }}
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
            onClick={() => swal({
                icon: "info",
                title: "Are You Sure"
            })}
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

    const isPc = useMediaQuery({minWidth: 991});
    const { SearchBar } = Search;
    // @ts-ignore
    return (

        <AdminLayout>21
            <Col lg={12} className='px-lg-5'>
                <Row className='d-lg-flex flex-lg-column align-items-center text-lg-center'>
                    <Col lg={12}>
                        <h1 className='text-lg-start header my-lg-3'>
                            Tutor's Payments
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <ToolkitProvider
                        keyField="id"
                        data={products}
                        columns={columns}
                        search>
                        {(props: any) =>
                            (
                                <Row>
                                    <SearchBar {...props.searchProps}/>
                                <BootstrapTable
                                    pagination={paginationFactory({sizePerPage: 5})}
                                    rowStyle={{
                                        fontSize: "16px",
                                        fontWeight: "500",
                                        borderCollapse: "separate",
                                        borderSpacing: "0 20px",
                                        color: "#95a5a6"
                                    }}
                                    headerWrapperClasses="next-table"
                                    defaultSortDirection="asc"
                                    columns={columns} data={products} keyField="id"
                                    {...props.baseProps}
                                />
                                </Row>
                            )
                        }
                    </ToolkitProvider>

                    {!isPc &&
                    <Col md={12} className='d-flex flex-column align-items-center next-table-list'>
                        {products.map((item) => (
                            <Card className='w-75 p-3 mb-2'>
                                <ul className='ps-3'>
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
                        ))}
                    </Col>
                    }
                </Row>
            </Col>
        </AdminLayout>
    );
};

export default TutorPayments;