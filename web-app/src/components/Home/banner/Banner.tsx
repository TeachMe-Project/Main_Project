import React from 'react';
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import Images from "../../../assets/images/Images";
import {MdOutlineAddShoppingCart, MdOutlineSend} from "react-icons/md";

const Banner: React.FC = () => {
    return (
        <Container fluid={true} className='banner mb-lg-5'>
            <Row className="mt-3 d-flex flex-lg-row flex-column-reverse">
                <Col lg={5} md={12} className='d-lg-flex flex-lg-column justify-content-lg-center'>
                    <Row className="ms-lg-3">
                        <Col lg={12} className="m-0 px-lg-4 text-lg-start text-md-center text-center">
                            <h1 className='banner-header text-lg-start text-center'>The Online Learning</h1>
                            <p className='mt-lg-3 banner-text text-md-start '>Lorem
                                ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed aliquet dolor. Nullam ac
                                venenatis neque. Donec consectetur nibh in lacus vulputate volutpat. Ut vulputate elit
                                eros,</p>
                            <Button className="px-md-5 py-2 mt-3 btn-secondary">
                                <MdOutlineAddShoppingCart style={{marginRight: "5px", fontSize: "20px"}}/> Try It Now
                            </Button>
                            <Button className="ms-4 px-md-5 py-2 mt-3 btn-secondary" >
                                <MdOutlineSend style={{marginRight: "5px", fontSize: "20px"}}/> Contact Us
                            </Button>
                        </Col>
                    </Row>
                </Col>
                <Col lg={7} md={12} >
                    <Row>
                        <Col lg={12} md={12} className='mx-md-auto'>
                            <Image src={Images.home} className='w-100'></Image>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </Container>
    );
};

export default Banner;