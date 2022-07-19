import React, {useState} from 'react';
import {Col, Row} from "react-bootstrap";
import {Pagination} from "react-headless-pagination";
import {useMediaQuery} from "react-responsive";
import ParentLayout from "./ParentLayout";

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
        class: 'Maths',
        date: new Date()
    },
    {
        id: 1,
        name: 'Upulshanthashantha Sanasagala',
        class: 'Science',
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
        class: 'Maths',
        date: new Date()
    },
];


const PUpComingClasses: React.FC = () => {

    const [page, setPage] = useState<number>(0);
    const [items, setItems] = useState(data);
    const [loading, setLoading] = useState(false);
    const [itemPerPage, setItemPerPage] = useState(5);
    const isMobile = useMediaQuery({maxWidth: 768});
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
    const [toggled, setToggled] = useState(false);

    const handleToggleSidebar = () => {
        if (!toggled) {
            setToggled(true);
            return toggled;
        }
        setToggled(false);
    };

    if (loading) {
        return <h1>Loading.......</h1>
    }

    return (
        <ParentLayout>
            <Col lg={12} className='px-lg-5'>
                <Row className='d-lg-flex flex-lg-column align-items-center text-lg-center'>
                    <Col lg={12}>
                        <h1 className='text-lg-start header my-lg-1'>
                            Upcoming Classes
                        </h1>
                    </Col>
                </Row>
                <Row className='d-lg-flex flex-lg-column align-items-center text-lg-center'>
                    <Col lg={10} className='d-lg-flex flex-lg-column align-items-center text-lg-center'>

                        {currentItem.map((item: UpComing) => (
                            <Row key={item.id} className='my-lg-3 w-100 py-lg-1 my-md-4 py-md-2'
                                 style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", borderRadius: "20px"}}>
                                <Col>
                                    <h4>{item.class}</h4>
                                </Col>
                                <Col>
                                    <h4>{item.name}</h4>
                                </Col>
                                <Col>
                                    <h4>{item.date.toDateString()}</h4>
                                </Col>
                                <Col>
                                    <h4>01.00 PM</h4>
                                </Col>
                            </Row>
                        ))}
                    </Col>
                </Row>
                <Row>
                    <Col lg={10} className='d-lg-flex flex-lg-column align-items-end'>
                        <Pagination
                            currentPage={page}
                            setCurrentPage={handlePageChange}
                            totalPages={numberOfPages}
                            edgePageCount={1}
                            middlePagesSiblingCount={1}
                            className="d-flex flex-row align-items-center justify-content-end"
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

                            <Pagination.NextButton
                                className="btn btn-secondary mx-2">Next</Pagination.NextButton>
                        </Pagination>
                    </Col>
                </Row>
            </Col>
        </ParentLayout>
    );
};

export default PUpComingClasses;





