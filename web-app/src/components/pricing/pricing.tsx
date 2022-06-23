import React from 'react';
import PricingCard from "./pricingCard";
import {Col, Container, Row} from "react-bootstrap";

const Pricing: React.FC = () => {
    return (
        <Container fluid={true}  id="Pricing" className="pt-4">
            <h1 style={{
                fontSize: "60px",
                textAlign: "center",
                marginBottom: "40px",
                fontFamily: "cursive"
            }}>Pricing</h1>
            <Row className="d-flex justify-content-center flex-row mt-4 mx-0 px-0 mb-5">
                <PricingCard title={"Single"} description={"Free"}/>
                <PricingCard title={"Starter"} description={"25$"}/>
                <PricingCard title={"Pro"} description={"199$"}/>
            </Row>
        </Container>
    );
};

export default Pricing;