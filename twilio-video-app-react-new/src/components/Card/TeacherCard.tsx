import * as React from 'react';
import { CardDetails } from './CardDetails';
import { Col, Row } from 'react-bootstrap';

type TeacherCard = {
  teacher?: string;
  subject?: string;
  contact?: string;
  grade?: string;
  image?: JSX.Element;
  btn?: string;
  description?: string;
};

export const TeacherCard: React.FC<TeacherCard> = props => {
  return (
    <div className="CourseCard">
      <div className="CardImage">{props.image}</div>
      <div className="CardBody">
        <div className="teacherName">
          <CardDetails details={props.teacher} />
        </div>
        <CardDetails details={props.description} />
        <div className="lastRow">
          <Row>
            {/*<div className="CardRow">*/}

            <Col xl={4} className="d-flex flex-row align-content-left">
              <CardDetails details={props.subject} />
            </Col>

            <Col xl={4} className="d-flex flex-row align-content-left">
              <CardDetails details={props.grade} />
            </Col>

            <Col xl={4} className="d-flex flex-row align-content-right teacherLink">
              <CardDetails details={props.contact} />
            </Col>
            {/*</div>*/}
          </Row>
        </div>
      </div>
    </div>
  );
};
export default TeacherCard;
