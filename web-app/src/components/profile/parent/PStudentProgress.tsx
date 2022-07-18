import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";
import {Pagination} from "react-headless-pagination";
import ParentLayout from "./ParentLayout";

type UpComing = {
    id: number;
    name: string;
    class: string;
    month: string;
    payment: number;
    date: Date;
    attendTime: Date;
    leaveTime: Date;
    classStartTime: Date;
    classEndTime: Date;
};

const data: Array<UpComing> = [
    {
        id: 1,
        name: "Upulshanthashantha Sanasagala",
        class: "Mathematics",
        month: "September",
        payment: 1500,
        date: new Date(2022,7,20,15,30),
        attendTime: new Date(2022,7,20,15,35),
        leaveTime: new Date(2022,7,20,17,30),
        classStartTime: new Date(2022,7,20,15,30),
        classEndTime: new Date(2022,7,20,17,30),
    },
    {
        id: 1,
        name: "Upulshanthashantha Sanasagala",
        class: "Science",
        month: "September",
        payment: 1500,
        date: new Date(2022,7,21,15,30),
        attendTime: new Date(2022,7,20,15,31),
        leaveTime: new Date(2022,7,20,17,30),
        classStartTime: new Date(2022,7,20,15,30),
        classEndTime: new Date(2022,7,20,17,30),
    },
    {
        id: 1,
        name: "Upulshanthashantha Sanasagala",
        class: "History",
        month: "September",
        payment: 1500,
        date: new Date(2022,7,22,15,30),
        attendTime: new Date(2022,7,20,15,33),
        leaveTime: new Date(2022,7,20,17,30),
        classStartTime: new Date(2022,7,20,15,30),
        classEndTime: new Date(2022,7,20,17,30),
    },
    {
        id: 1,
        name: "Upulshanthashantha Sanasagala",
        class: "English",
        month: "September",
        payment: 1500,
        date: new Date(2022,7,23,15,30),
        attendTime: new Date(2022,7,20,15,30),
        leaveTime: new Date(2022,7,20,17,30),
        classStartTime: new Date(2022,7,20,15,30),
        classEndTime: new Date(2022,7,20,17,30),
    },
    {
        id: 1,
        name: "Upulshanthashantha Sanasagala",
        class: "Commerce",
        month: "September",
        payment: 1500,
        date: new Date(2022,7,24,15,30),
        attendTime: new Date(2022,7,20,15,45),
        leaveTime: new Date(2022,7,20,17,30),
        classStartTime: new Date(2022,7,20,15,30),
        classEndTime: new Date(2022,7,20,17,30),
    },
    {
        id: 1,
        name: "Upulshanthashantha Sanasagala",
        class: "Mathematics",
        month: "September",
        payment: 1500,
        date: new Date(2022,7,25,15,30),
        attendTime: new Date(2022,7,20,15,45),
        leaveTime: new Date(2022,7,20,17,30),
        classStartTime: new Date(2022,7,20,15,30),
        classEndTime: new Date(2022,7,20,17,30),
    },
    {
        id: 1,
        name: "Upulshanthashantha Sanasagala",
        class: "Mathematics",
        month: "September",
        payment: 1500,
        date: new Date(2022,7,26,15,30),
        attendTime: new Date(2022,7,20,15,45),
        leaveTime: new Date(2022,7,20,17,30),
        classStartTime: new Date(2022,7,20,15,30),
        classEndTime: new Date(2022,7,20,17,30),
    },
    {
        id: 1,
        name: "Upulshanthashantha Sanasagala",
        class: "Mathematics",
        month: "September",
        payment: 1500,
        date: new Date(),
        attendTime: new Date(),
        leaveTime: new Date(),
        classStartTime: new Date(),
        classEndTime: new Date(),
    },
    {
        id: 1,
        name: "Upulshanthashantha Sanasagala",
        class: "Mathematics",
        month: "September",
        payment: 1500,
        date: new Date(),
        attendTime: new Date(),
        leaveTime: new Date(),
        classStartTime: new Date(),
        classEndTime: new Date(),
    },

];

const PStudentProgress: React.FC = () => {
    const [page, setPage] = useState<number>(0);
    const [items, setItems] = useState(data);
    const [loading, setLoading] = useState(false);
    const [itemPerPage, setItemPerPage] = useState(5);

    const handlePageChange = (page: number) => {
        setPage(page);
    };

    const handleTime = (x: Date) => {
        const hour = x.getHours();
        const time = x.toTimeString().substring(0, 5);
        if (hour >= 12){
            return time + " PM";
        }
        return time + " AM";
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
        return <h1>Loading.......</h1>;
    }

    return (
        <ParentLayout>
            <Col lg={12} className='px-lg-5'>
                <Row className="d-lg-flex flex-lg-column align-items-center text-lg-center">
                    <Col lg={10}>
                        <h1 className="text-lg-start header my-lg-1">Progress of Student</h1>
                    </Col>
                </Row>
                <Row className="d-lg-flex flex-lg-column align-items-center text-lg-center">
                    <Col
                        lg={10}
                        className="d-lg-flex flex-lg-column align-items-center text-lg-center"
                    >
                        {currentItem.map((item: UpComing) => (
                            <Row
                                key={item.id}
                                className="my-lg-3 w-100 py-lg-1 my-md-4 py-md-2"
                                style={{
                                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                                    borderRadius: "20px",
                                }}
                            >
                                <Col>
                                    <h4>{item.class} Class</h4>
                                </Col>
                                <Col>
                                    <h4>{item.date.toDateString()}</h4>
                                </Col>
                                <Col>
                                    <h4>{handleTime(item.attendTime)}</h4>
                                </Col>
                                <Col>
                                    <h4>{handleTime(item.leaveTime)}</h4>
                                </Col>
                                <Col>
                                    <h4>{handleTime(item.classStartTime)} - {handleTime(item.classEndTime)}</h4>
                                </Col>
                            </Row>
                        ))}
                    </Col>
                </Row>
                <Row>
                    <Col lg={10} className="d-lg-flex flex-lg-column align-items-end">
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
                            <Pagination.PrevButton className="btn btn-secondary mx-2">
                                Previous
                            </Pagination.PrevButton>

                            <Pagination.PageButton
                                activeClassName="btn btn-secondary"
                                inactiveClassName="btn btn-outline-secondary"
                                className="btn mx-1"
                            />

                            <Pagination.NextButton className="btn btn-secondary mx-2">
                                Next
                            </Pagination.NextButton>
                        </Pagination>
                    </Col>
                </Row>
            </Col>
        </ParentLayout>
    );
};

export default PStudentProgress;
