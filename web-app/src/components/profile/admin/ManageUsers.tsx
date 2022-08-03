import React from 'react';
import AdminLayout from "./AdminLayout";
import {Card, Col, Row} from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from "react-bootstrap-table2-paginator";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import {BsTrashFill} from "react-icons/bs";
import {useMediaQuery} from "react-responsive";
// @ts-ignore
import swal from "@sweetalert/with-react";
// @ts-ignore
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min';
import axios from "axios";


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
                text: `Do you really want to remove ${row.first_name} ${row.last_name} ?`,
                icon: "error",
                buttons: {
                    cancel: true,
                    confirm: true
                },
                // dangerMode: true,
            })
                .then((willDelete: any) => {
                    if (willDelete) {
                        swal(`Poof! You have successfully removed ${row.first_name} ${row.last_name}`, {
                            icon: "success",
                        });
                    }
                });
        }}
    />
);

const columns = [
    {
        dataField: "user_id",
        text: "User ID",
        sort:true,
    },
    {
        dataField: "username",
        text: "User Name",
        sort:true,
    },
    {
        dataField: "first_name",
        text: "First Name",
    },
    {
        dataField: "last_name",
        text: "Last Name"
    },
    {
        dataField: "type",
        text: "User Type"
    },
    {
        dataField: "",
        text: "",
        formatter: removeItem,
        headerAttrs: {width: 100},
        attrs: {width: 100, class: "EditRow"}
    },
];


const ManageUsers = () => {

    const baseURL = "http://localhost:8081/user/allUsers";
    const [users, setUsers] = React.useState<any[]>(null!);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setUsers(response.data);
    })
    .catch((error)=>{
        console.log(error);
    })
  }, []);

    const isPc = useMediaQuery({minWidth: 991});
    const {SearchBar} = Search;

    

  if(users === null){
    return 
    
    }

    // @ts-ignore
    return (

        <AdminLayout>
            <Col lg={12} className='px-lg-5'>
                <Row className='d-lg-flex flex-lg-column align-items-center text-lg-center'>
                    <Col lg={12} md={12} xs={12}>
                        <h1 className='text-lg-start header my-lg-3 text-md-center text-center'>
                        <div>
     
    </div>
                        </h1>
                    </Col>
                </Row>
                <Row>
                    {isPc &&
                    <ToolkitProvider
                        keyField="id"
                        data={users}
                        columns={columns}
                        search>
                        {(props: any) =>
                            (
                                <Row className='next-table'>
                                    <SearchBar {...props.searchProps}
                                               placeholder="Search Users"
                                    />
                                    <BootstrapTable
                                        columns={columns} data={users} keyField="id"
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
                        {users.map((item:any) => {
                            return (
                                <Card className='w-100 p-3 mb-2 table-card'>
                                    <ul className='ps-md-3 ps-0'>
                                        <li className='d-none'>
                                            <span className='table-card-label'>{columns[0].text}</span>
                                            <span className='table-card-data'>{item.user_id}</span>
                                        </li>
                                        <li className='d-flex flex-row align-items-center justify-content-between'>
                                            <span className='table-card-label'>{columns[1].text}</span>
                                            <span className='table-card-data'>{item.username}</span>
                                        </li>
                                        
                                        <li className='d-flex flex-row align-items-center justify-content-end mt-2'>
                                            <span className='me-3'>
                                                 {removeItem(null, item, null, null)}
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

export default ManageUsers;