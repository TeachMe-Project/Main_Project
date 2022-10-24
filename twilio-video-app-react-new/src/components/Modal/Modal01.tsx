import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SearchIcon from "@material-ui/icons/Search";
import {Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import CardButton from "../Card/CardButton";
import axios from "axios";



const data = [
    {
        id: 10000102345,
        grade: 'Grade 11',
        subject: 'Business & Accounting Studies',
        tutor_name: 'Amila Banadaranayake',
    },
    {
        id: 10000102355,
        grade: 'Grade 07',
        subject: 'History',
        tutor_name: 'Kamal Maggona',
    },
    {
        id: 10000102320,
        grade: "Grade 10",
        subject: "Science",
        tutor_name: "Anusha Palpita",
    },
    {
        id: 10000109945,
        grade: "Grade 06",
        subject: "Sinhala Lang. & Lit",
        tutor_name: "Nimali Weeerasinghe",
    }
    ,
    {
        id: 10000102300,
        grade: "Grade 9",
        subject: "History",
        tutor_name: "Vajira Gamage",

    },
    {
        id: 10000102345,
        grade: "Grade 11",
        subject: "Business & Accounting Studies",
        tutor_name: "Sameera Rajapakse",
    }
];

function Modal01(props:{class_id:string;course_id:string}) {
    const baseURL="http://localhost:8081/student/getUsedApps"
    const [appData, setAppData] = useState<any>([])

    const  class_id=props.class_id;
    const course_id=props.course_id;
    function createAppData() {

        axios
            .post(baseURL, {
                class_id:class_id,
                course_id:course_id
            })
            .then((res) => {
                res.data.map((item: any) => {
                    setAppData((prevState: any) => [...prevState, {
                        name:item.name,
                        count:item.count,
                        student:item.students

                    }])


                })
            });
    }
    useEffect(()=>{
        createAppData();
    },[])

    setInterval(()=>{
        createAppData();
    },60000)




    const [show, setShow] = useState(false);
    const[students,setStudents]=useState<any>([])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [showapp, setappShow] = useState(false);

    const handleappClose = () => setappShow(false);


    const handleappShow = (items:any) => {setappShow(true)
        console.log(items)

        // items.map((item: any) => {
        //     setStudents((prevState: any) => [...prevState, {
        //         name:item
        //
        //     }])
        //     console.log(item)
        //
        //
        // })
setStudents(items)

             };

    return (
        <>
            <Button variant="light" onClick={handleShow}>
                <SearchIcon />Monitor
            </Button>





            <Modal  size={"sm"}   show={showapp} onHide={handleappClose}  >
                <Modal.Header closeButton>

                    <Modal.Title > Students</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {students.map((student:any) => {
                        return (
                            <tr>
                                {student}
                            </tr>

                        );
                    })}

                </Modal.Body>

            </Modal>







            <Modal  size={"sm"}   show={show} onHide={handleClose} className="modal01" >
                <Modal.Header closeButton>

                    <Modal.Title >Monitor Students</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table className="booking-table" id="view-booking">

                        <tbody>

                        {appData.map((item:any) => {
                            if(item.count>0){
                                return (
                                    <tr>
                                        <td data-label="Course ID :">{item.name}</td>
                                        <td data-label="Contact Number :">
                                            <div className="ViewMore">
                                                <Link to="" className="link ViewMoreBtn">


                                                    <Button variant="light"  onClick={() => handleappShow(item.student)}>
                                                        <CardButton  btnname={item.count} />
                                                    </Button>
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>

                                );
                            }

                        })}




                        {/*<tr>*/}
                        {/*    <td data-label="Course ID :">WhatsApp</td>*/}
                        {/*    <td data-label="Contact Number :">*/}
                        {/*        <div className="ViewMore">*/}
                        {/*            <Link to="" className="link ViewMoreBtn">*/}


                        {/*                <Button variant="light"  onClick={handleappShow}>*/}
                        {/*                    <CardButton btnname={'View More(5)'} />*/}
                        {/*                </Button>*/}
                        {/*            </Link>*/}
                        {/*        </div>*/}
                        {/*    </td>*/}
                        {/*</tr>*/}
                        {/*<tr>*/}
                        {/*    <td data-label="Institute ID  :">Facebook</td>*/}
                        {/*    <td data-label="Contact Number :">*/}
                        {/*        <div className="ViewMore">*/}
                        {/*            <Link to="" className="link ViewMoreBtn">*/}
                        {/*                <CardButton btnname={'View More'} />*/}
                        {/*            </Link>*/}
                        {/*        </div>*/}
                        {/*    </td>*/}
                        {/*</tr>*/}
                        {/*<tr>*/}
                        {/*    <td data-label="Institute ID  :">Instagram</td>*/}
                        {/*    <td data-label="Contact Number :">*/}
                        {/*        <div className="ViewMore">*/}
                        {/*            <Link to="" className="link ViewMoreBtn">*/}
                        {/*                <CardButton btnname={'View More'} />*/}
                        {/*            </Link>*/}
                        {/*        </div>*/}
                        {/*    </td>*/}
                        {/*</tr>*/}
                        {/*<tr>*/}
                        {/*    <td data-label="Institute ID  :">COC</td>*/}
                        {/*    <td data-label="Contact Number :">*/}
                        {/*        <div className="ViewMore">*/}
                        {/*            <Link to="" className="link ViewMoreBtn">*/}
                        {/*                <CardButton btnname={'View More'} />*/}
                        {/*            </Link>*/}
                        {/*        </div>*/}
                        {/*    </td>*/}
                        {/*</tr>*/}
                        {/*<tr>*/}
                        {/*    <td data-label="Institute ID  :">COD</td>*/}
                        {/*    <td data-label="Contact Number :">*/}
                        {/*        <div className="ViewMore">*/}
                        {/*            <Link to="" className="link ViewMoreBtn">*/}
                        {/*                <CardButton btnname={'View More'} />*/}
                        {/*            </Link>*/}
                        {/*        </div>*/}
                        {/*    </td>*/}
                        {/*</tr>*/}

                        {/*<tr>*/}
                        {/*    <td data-label="Institute ID  :">PUBG</td>*/}
                        {/*    <td data-label="Contact Number :">*/}
                        {/*        <div className="ViewMore">*/}
                        {/*            <Link to="" className="link ViewMoreBtn">*/}
                        {/*                <CardButton btnname={'View More'} />*/}
                        {/*            </Link>*/}
                        {/*        </div>*/}
                        {/*    </td>*/}
                        {/*</tr>*/}
                        {/*<tr>*/}
                        {/*    <td data-label="Institute ID  :">Telegram</td>*/}
                        {/*    <td data-label="Contact Number :">*/}
                        {/*        <div className="ViewMore">*/}
                        {/*            <Link to="" className="link ViewMoreBtn">*/}
                        {/*                <CardButton btnname={'View More'} />*/}
                        {/*            </Link>*/}
                        {/*        </div>*/}
                        {/*    </td>*/}
                        {/*</tr>*/}

                        {/*<tr>*/}
                        {/*    <td data-label="Institute ID  :">Viber</td>*/}
                        {/*    <td data-label="Contact Number :">*/}
                        {/*        <div className="ViewMore">*/}
                        {/*            <Link to="" className="link ViewMoreBtn">*/}
                        {/*                <CardButton btnname={'View More'} />*/}
                        {/*            </Link>*/}
                        {/*        </div>*/}
                        {/*    </td>*/}
                        {/*</tr>*/}

                        </tbody>
                    </table>

                </Modal.Body>

            </Modal>

        </>
    );
}

export default Modal01;