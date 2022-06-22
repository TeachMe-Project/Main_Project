import React from 'react';
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import Images from "../../assets/images/Images";

const Home: React.FC = () => {
    return (
        <Container fluid={true}>
            <Row style={{height:"10vh", background:"gray"}}>

            </Row>
            <Row className="mt-3">
                <Col xl={5} style={{display: "flex", flexDirection: "column", justifyContent: "space-evenly",}}>
                    <Row className="ms-3">
                        <Col xl={12} className="m-0 px-4">
                        <h1 style={{fontFamily: "'Poppins', sans-serif", fontSize: "50px"}}>The Online Learning</h1>
                        <p style={{fontSize:"20px", marginTop:"20px", fontFamily: "'Poppins', sans-serif"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed aliquet dolor. Nullam ac
                            venenatis neque. Donec consectetur nibh in lacus vulputate volutpat. Ut vulputate elit eros,</p>
                            <Button className="px-5 py-2 mt-3 btn-secondary" style={{ borderRadius:"10px"}}>
                                Try It Now
                            </Button>
                            <Button className="ms-4 px-5 py-2 mt-3 btn-secondary" style={{borderRadius:"10px"}}>
                                Contact Us
                            </Button>
                        </Col>
                    </Row>
                </Col>
                <Col xl={7}>
                    <Image src={Images.home} style={{width: "100%"}}></Image>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;