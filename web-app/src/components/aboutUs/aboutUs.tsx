import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import Feature from "./feature";
import Images from "../../assets/images/Images";

const AboutUs: React.FC = () => {
    return (
        <Container fluid={true} className='about-us'>
            <h1 style={{
                fontSize: "60px",
                textAlign: "center",
                marginBottom: "30px",
                fontFamily: "cursive"
            }}> Why TeachMe</h1>
            <Row style={{display: "flex", flexDirection: "row"}}>
                <Col xl={5}>
                    <Image src={Images.banner} style={{height: "600px"}}></Image>
                </Col>
                <Col xl={7} style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-evenly"
                }}>
                    <Row style={{width: "100%"}}>
                        <Feature
                            title={"Enable teachers to keep track of student online activities during live classroom sessions."}
                            image={Images.monitoring}/>
                        <Feature
                            title={"Enable Institutes to recruit teachers to conduct online courses and improve their\n" +
                                "online presence."} image={Images.virtual_class}/>
                    </Row>
                    <Row style={{width: "100%"}}>
                        <Feature
                            title={"Offer parents to have a comprehensive understanding of their children’s online\n" +
                                "education activities."} image={Images.reading_books}/>
                        <Feature
                            title={"Offer a built-in user-friendly video conferencing platform which is more convenient for\n" +
                                "both students and teachers."} image={Images.online_lesson}/>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutUs;