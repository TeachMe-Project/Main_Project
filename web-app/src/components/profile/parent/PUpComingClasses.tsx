import React, {useState} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import ParentSidebar from "./ParentSidebar";
import ProfileNavBar from "../navBar/profileNavBar";
import {Pagination} from "react-headless-pagination";
import axios from 'axios';
import {useMediaQuery} from "react-responsive";

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
        if (toggled === false) {
            setToggled(true);
            return toggled;
        }
        setToggled(false);
    };

    if (loading) {
        return <h1>Loading.......</h1>
    }

    return (
        <Container fluid={true} className="profile-actions m-0 px-0">
            <ProfileNavBar handleToggleSidebar={handleToggleSidebar} isMobile={isMobile}/>
            <Row className="ps-0 action-page mx-0">
                <Col lg={12} className="d-flex flex-row p-0">
                    <ParentSidebar handleToggleSidebar={handleToggleSidebar} toggle={toggled}/>
                    <Row className='px-0 d-flex mx-auto mt-lg-5 w-75'>
                       <Col lg={12} className='px-lg-5'>
                           <Row className='d-lg-flex flex-lg-column align-items-center text-lg-center'>
                               <Col lg={12}>
                                   <h1 className='text-lg-start header my-md-5'>
                                       Upcoming Classes
                                   </h1>
                               </Col>
                           </Row>
                           <Row className='d-lg-flex flex-lg-column align-items-center text-lg-center'>
                               <Col lg={12} className='d-lg-flex flex-lg-column align-items-center text-lg-center'>

                                   {currentItem.map((item: UpComing) => (
                                       <Row key={item.id} className='my-lg-3 w-100 py-lg-2 my-md-4 py-md-2'
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
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default PUpComingClasses;



