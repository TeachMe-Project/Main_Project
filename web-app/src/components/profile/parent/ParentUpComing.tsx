import React, {useEffect, useState} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import ParentSidebar from "./ParentSidebar";
import ProfileNavBar from "../navBar/profileNavBar";
import {Pagination} from "react-headless-pagination";
import axios from 'axios';

type UpComing = {
    id: number,
    name: string,
    class: string,
    date: Date
}

const data: Array<UpComing> = [
    {
        id: 1,
        name: 'Upulshanthashantha Sanasagala',
        class: 'Sinahala',
        date: new Date()
    },
    {
        id: 1,
        name: 'Upulshanthashantha Sanasagala',
        class: 'Sinahala',
        date: new Date()
    },
    {
        id: 1,
        name: 'Upulshanthashantha Sanasagala',
        class: 'Sinahala',
        date: new Date()
    },
    {
        id: 1,
        name: 'Upulshanthashantha Sanasagala',
        class: 'Sinahala',
        date: new Date()
    },
    {
        id: 1,
        name: 'Upulshanthashantha Sanasagala',
        class: 'Sinahala',
        date: new Date()
    },
    {
        id: 1,
        name: 'Upulshanthashantha Sanasagala',
        class: 'Sinahala',
        date: new Date()
    },
    {
        id: 1,
        name: 'Upulshanthashantha Sanasagala',
        class: 'Sinahala',
        date: new Date()
    },
    {
        id: 1,
        name: 'Upulshanthashantha Sanasagala',
        class: 'Sinahala',
        date: new Date()
    },
    {
        id: 1,
        name: 'Upulshanthashantha Sanasagala',
        class: 'Sinahala',
        date: new Date()
    },
]    ;


const ParentUpComing: React.FC = () => {

    const [page, setPage] = useState<number>(0);
    const [items, setItems] = useState(data);
    const [loading, setLoading] = useState(false);
    const [itemPerPage, setItemPerPage] = useState(5);

    const handlePageChange = (page: number) => {
        setPage(page)
    }


    // console.log(data);
    // useEffect(() => {
    //     // const fetchUsers = async () => {
    //     // setLoading(true);
    //     // const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    //     // setItems(res.data);
    //     // setLoading(false)
    //     // }
    //     // fetchUsers().then();
    //     setItems(data);
    // }, []);
    // // console.log(items);

    const indexOfLastItem = (page + 1) * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const currentItem = items.slice(indexOfFirstItem, indexOfLastItem);
    const numberOfPages = Math.ceil(items.length / itemPerPage);

    if (loading) {
        return <h1>Loading.......</h1>
    }

    return (
        <Container fluid={true}>
            <ProfileNavBar/>
            <Row className='ps-0'>
                <Col lg={12} className="ps-0 d-flex flex-row">
                    <ParentSidebar/>
                    <Row className='ms-lg-5 mt-lg-5 w-100 me-5'>
                        <Row>
                            <h1 className='text-lg-center'>
                                Upcoming Classes
                            </h1>
                        </Row>
                        <Row>
                            <Col lg={12} className='d-lg-flex flex-lg-column text-lg-center'>
                                    {currentItem.map((item:UpComing) => (
                                        <Row key={item.id} className='my-lg-3'>
                                            <Col>
                                                <h4>{item.class}</h4>
                                            </Col>
                                            <Col>
                                                <h4>{item.name}</h4>
                                            </Col>
                                            <Col>
                                                <h4>{item.date.toDateString()}</h4>
                                            </Col>
                                        </Row>
                                    ))}
                            </Col>
                        </Row>
                        <Row>
                            <Pagination
                                currentPage={page}
                                setCurrentPage={handlePageChange}
                                totalPages={numberOfPages}
                                edgePageCount={1}
                                middlePagesSiblingCount={1}
                                className="d-flex flex-row align-items-center justify-content-center"
                                truncableText="..."
                                truncableClassName=""
                            >
                                <Pagination.PrevButton
                                    className="btn btn-secondary mx-2">Previous</Pagination.PrevButton>


                                <Pagination.PageButton
                                    activeClassName="btn btn-secondary"
                                    inactiveClassName="btn btn-outline-secondary"
                                    className="btn mx-1"
                                />

                                <Pagination.NextButton className="btn btn-secondary mx-2">Next</Pagination.NextButton>
                            </Pagination>
                        </Row>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default ParentUpComing;