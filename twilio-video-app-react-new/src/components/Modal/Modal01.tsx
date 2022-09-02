import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SearchIcon from "@material-ui/icons/Search";
import {Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import CardButton from "../Card/CardButton";



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

function Modal01() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="light" onClick={handleShow}>
                <SearchIcon />Monitor
            </Button>



            <Modal  size={"sm"}   show={show} onHide={handleClose} className="modal01" >
                <Modal.Header closeButton>

                    <Modal.Title >Monitor Students</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table className="booking-table" id="view-booking">

                        <tbody>
                        <tr>
                            <td data-label="Course ID :">WhatsApp</td>
                            <td data-label="Contact Number :">
                                <div className="ViewMore">
                                    <Link to="" className="link ViewMoreBtn">
                                        <CardButton btnname={'View More'} />
                                    </Link>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td data-label="Institute ID  :">Facebook</td>
                            <td data-label="Contact Number :">
                                <div className="ViewMore">
                                    <Link to="" className="link ViewMoreBtn">
                                        <CardButton btnname={'View More'} />
                                    </Link>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td data-label="Institute ID  :">Instagram</td>
                            <td data-label="Contact Number :">
                                <div className="ViewMore">
                                    <Link to="" className="link ViewMoreBtn">
                                        <CardButton btnname={'View More'} />
                                    </Link>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td data-label="Institute ID  :">COC</td>
                            <td data-label="Contact Number :">
                                <div className="ViewMore">
                                    <Link to="" className="link ViewMoreBtn">
                                        <CardButton btnname={'View More'} />
                                    </Link>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td data-label="Institute ID  :">COD</td>
                            <td data-label="Contact Number :">
                                <div className="ViewMore">
                                    <Link to="" className="link ViewMoreBtn">
                                        <CardButton btnname={'View More'} />
                                    </Link>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td data-label="Institute ID  :">PUBG</td>
                            <td data-label="Contact Number :">
                                <div className="ViewMore">
                                    <Link to="" className="link ViewMoreBtn">
                                        <CardButton btnname={'View More'} />
                                    </Link>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td data-label="Institute ID  :">Telegram</td>
                            <td data-label="Contact Number :">
                                <div className="ViewMore">
                                    <Link to="" className="link ViewMoreBtn">
                                        <CardButton btnname={'View More'} />
                                    </Link>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td data-label="Institute ID  :">Viber</td>
                            <td data-label="Contact Number :">
                                <div className="ViewMore">
                                    <Link to="" className="link ViewMoreBtn">
                                        <CardButton btnname={'View More'} />
                                    </Link>
                                </div>
                            </td>
                        </tr>

                        </tbody>
                    </table>

                </Modal.Body>

            </Modal>

        </>
    );
}

export default Modal01;