import * as React from 'react';
import Card from "../../Card/Card";
import CardHeader from "../../Card/CardHeader";
import CardDetails from "../../Card/CardDetails";
import { Container, Row, Col } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";

type PendingPayments = {
  month?:string;
  date?:string;
  amount?:string;
};

const PendingPayments: React.FC<PendingPayments> = (props) => {
  return (
    <div className="PendingPayments">
        <Container>
        <Row>
        <Card header= {props.month}
          detail={props.date} 
          amount={props.amount} 
         />
        </Row>
      </Container>
    </div>
  )
}

export default PendingPayments