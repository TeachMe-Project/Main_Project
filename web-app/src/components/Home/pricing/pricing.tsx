import React from 'react';
import PricingCard from "./pricingCard";
import {Container, Row} from "react-bootstrap";

const Pricing: React.FC = () => {
    return (
        <Container fluid={true}  id="Pricing" className="pt-4 mb-5">
            <h1 style={{
                fontSize: "60px",
                textAlign: "center",
                marginBottom: "40px",
                marginTop:"100px",
                color:"#2c3e50"
            }}>Pricing</h1>
            <Row className="d-flex justify-content-center flex-row mt-4 mx-0 px-0 mb-5">
                <PricingCard title={"Basic"} description={"Free"}/>
                <PricingCard title={"Plus"} description={"$ 25"}/>
                <PricingCard title={"Premium"} description={"$ 199"}/>
            </Row>
        </Container>
    );
};

export default Pricing;