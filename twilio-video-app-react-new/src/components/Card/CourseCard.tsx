import * as React from 'react';
import { CardDetails } from './CardDetails';
import { CardHeader } from './CardHeader';
import { CardButton } from './CardButton';

type CourseCard = {
  date?: string;
  teacher?: string;
  description?: string;
  time?: string;
  header?: string;
  amount?: string;
  image?: JSX.Element;
  btn?: string;
};

export const CourseCard: React.FC<CourseCard> = props => {
  return (
    <div className="CourseCard">
      <div className="CardImage">{props.image}</div>
      <div className="CardBody">
        <CardHeader header={props.header} />
        <div className="teacherLink">
          <CardDetails details={props.teacher} />
        </div>
        <CardDetails details={props.description} />
        <div className="lastRow">
          <div className="CardRow">
            <CardDetails details={props.date} />
            <CardDetails details={props.time} />
            <CardDetails details={props.amount} />
          </div>

          <CardButton btnname={props.btn} />
        </div>
      </div>
    </div>
  );
};
export default CourseCard;
