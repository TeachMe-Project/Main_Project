import * as React from "react";
import { Container, Col, Row } from "react-bootstrap";

type Details = {
  label?:string;
  value?:string;
  symbol?:any;
};


export const Details: React.FC<Details> = (props) => {
  return (
    <div className="Details">
      <Container>
          <Row className="DetailItem">
            <Col xl={3}>
              <div className="DetailLabel">{props.label}</div>
            </Col>
            <Col xl={1}>
              <div className="DetailLabel">{props.symbol}</div>
            </Col>
            <Col xl={8}>
              <div className="DetailValue">{props.value}</div>
            </Col>
          </Row>
      </Container>
    </div>
  );
};

export default Details;
