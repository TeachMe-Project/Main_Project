import React from 'react';
import PricingCard from "./pricingCard";
import {Col, Row} from "react-bootstrap";

const Pricing: React.FC = () => {
    return (
        <Row className="d-flex justify-content-center flex-row mt-4">
            <h1 style={{
                fontSize: "60px",
                textAlign: "center",
                marginBottom: "30px",
                fontFamily: "'Poppins', sans-serif"
            }}>Pricing</h1>
            <PricingCard title={"Single"} description={"Free"}/>
            <PricingCard title={"Starter"} description={"25$"}/>
            <PricingCard title={"Pro"} description={"199$"}/>
        </Row>


    );
};

export default Pricing;