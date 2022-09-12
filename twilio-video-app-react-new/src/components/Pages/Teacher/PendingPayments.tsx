import * as React from "react";
import Card from "../../Card/Card";
import { Container, Row } from "react-bootstrap";

type PendingPayments = {
  month?: string;
  date?: string;
  amount?: string;
};

const PendingPayments: React.FC<PendingPayments> = props => {
  return (
    <div className="PendingPayments">
      <Container>
        <Row>
          <Card header={props.month} detail={props.date} amount={props.amount} />
        </Row>
      </Container>
    </div>
  );
};

export default PendingPayments;
