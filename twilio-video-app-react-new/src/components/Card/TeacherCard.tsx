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
          <div className="CardRow">
            <CardDetails details={props.subject} />
            <CardDetails details={props.grade} />
          </div>
          <div className="teacherLink">
            <CardDetails details={props.contact} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TeacherCard;
