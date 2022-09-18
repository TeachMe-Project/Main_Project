import * as React from "react";
import Card from "../../Card/Card";
import { Container, Row } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";

type Students = {
  topic?: string;
  date?: string;
};
export const Students: React.FC<Students> = props => {
  return (
    <div className="Students">
      <Container>
        <Row>
          <Card header={props.topic} detail={props.date} btnname={<FiDownload className="ReactIcon" />} />
        </Row>
      </Container>
    </div>
  );
};

export default Students;
