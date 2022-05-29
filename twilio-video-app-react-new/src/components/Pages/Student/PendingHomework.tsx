import * as React from 'react';
import { Card } from "../../Card/Card";
import { CardHeader } from "../../Card/CardHeader";
import { CardDetails } from "../../Card/CardDetails";
import { CardButton } from "../../Card/CardButton";
import { AiOutlineHistory } from "react-icons/ai";
import { Row, Col, Container } from "react-bootstrap";

export const PendingHomework = () => {
  return (
    <div className="PendingHomework">
      <Card>
        <Row>
          <Col xl={1}>
            <div className="CardImg">
            <img src={require("../../../Assets/Images/testimg1.jpg")} />
              </div>
          </Col>
          <Col xl={10}>
            <div className="CardContent">
              <Col xl={4}>
                <CardHeader>Mathematics class</CardHeader>
              </Col>
              <Col xl={3}>
                <CardDetails>Mr. Lasitha Nuwan</CardDetails>
              </Col>
              <Col xl={3}>
                <CardDetails>28 - 04 - 2022</CardDetails>
              </Col>
              <Col xl={2}>
                <CardButton>View</CardButton>
              </Col>
            </div>
          </Col>
          <Col xl={1}>
            <AiOutlineHistory className="PendingClock" />
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default PendingHomework;
