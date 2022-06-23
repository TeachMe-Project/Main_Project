import React from 'react';
import {Button, Card, Col, ListGroup, Row} from "react-bootstrap";
import {FcOk} from "react-icons/fc";
import {BsFillCartCheckFill} from "react-icons/bs";
import {IconContext} from "react-icons";

type PricingCardProps = {
    title: string,
    description: string
}

const PricingCard: React.FC<PricingCardProps> = (props) => {

    const {title, description} = props;
    return (
        <Col xl={3} md={5} xs={10} className="d-flex justify-content-center h3">
            <Card>
                <Card.Body style={{textAlign: "center"}}>
                    <Button style={{
                        width: "100%",
                        margin: "auto",
                        fontSize: "25px",
                        background: "#fadd57",
                        color: "#363636",
                        border: "none",
                        fontWeight: "700"
                    }}>{title}</Button>
                    <Card.Text style={{fontSize: "50px", margin: "20px"}}>{description}</Card.Text>
                    <ListGroup variant="flush" style={{fontSize: "18px", textAlign: "left"}}>
                        <ListGroup.Item> <FcOk/> Upto 2 hour Class duration</ListGroup.Item>
                        <ListGroup.Item> <FcOk/> Upto 100 Students</ListGroup.Item>
                        <ListGroup.Item> <FcOk/> Upto 4 classes for month</ListGroup.Item>
                        <ListGroup.Item> <FcOk/> Upto 2 Institute administrators</ListGroup.Item>
                        <ListGroup.Item> <FcOk/> Upto 4 classes for month</ListGroup.Item>
                    </ListGroup>
                    <IconContext.Provider value={{style:{margin:"5px"}}}>
                        <Button variant="primary" style={{
                            borderRadius: "10px",
                            margin: "auto",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "#363636",
                            marginTop:"20px",
                            fontSize:"18px"
                        }}><BsFillCartCheckFill/> Select This Plan</Button>
                    </IconContext.Provider>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default PricingCard;