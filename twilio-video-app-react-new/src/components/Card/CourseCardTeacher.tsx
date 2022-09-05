import * as React from 'react';
import { CardDetails } from './CardDetails';
import { CardHeader } from './CardHeader';
import { CardButton } from './CardButton';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';

type CourseCardTeacher = {
  date?: string;

  description?: string;
  time?: string;
  header?: string;
  amount?: string;
  image?: JSX.Element;
  // btn1?: string;
  grade?: string;
  medium?: string;
};

export const CourseCardTeacher: React.FC<CourseCardTeacher> = props => {
  return (
    <div className="CourseCard">
      <div className="CardImage">{props.image}</div>
      <div className="CardBody">
        <Row>
          <Col xl={5}>
            <CardHeader header={props.header} />
          </Col>
          <Col xl={3}>
            <CardHeader header={props.grade} />
          </Col>
        </Row>
        <CardDetails details={props.description} />
        <div className="lastRow">
          <div className="CardRow">
            <CardDetails details={props.date} />
            <CardDetails details={props.time} />
            <CardDetails details={props.amount} />
            <CardDetails details={props.medium} />
          </div>
          {/* <div className="ViewMore">
            <Link to="/course" className="link">
              <CardButton btnname={props.btn1} />
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default CourseCardTeacher;
