import * as React from 'react';
import { CardDetails } from './CardDetails';
import { CardHeader } from './CardHeader';
import { CardButton } from './CardButton';
import { Link } from 'react-router-dom';

type CourseCard = {
  date?: string;
  teacher?: string;
  description?: string;
  time?: string;
  header?: string;
  amount?: string;
  image?: JSX.Element;
  btn1?: string;
  btn2?: string;
};

export const CourseCard: React.FC<CourseCard> = props => {
  return (
    <div className="CourseCard">
      <div className="CardImage">{props.image}</div>
      <div className="CardBody">
        <CardHeader header={props.header} />
        <div className="teacherLink">
          <Link to="/teacherProfile" className="link">
            <CardDetails details={props.teacher} />
          </Link>
        </div>
        <CardDetails details={props.description} />
        <div className="lastRow">
          <div className="CardRow">
            <CardDetails details={props.date} />
            <CardDetails details={props.time} />
            <CardDetails details={props.amount} />
          </div>
          <div className="ViewMore">
            <Link to="/course" className="link">
              <CardButton btnname={props.btn1} />
            </Link>
          </div>
          <Link to="/course" className="link">
            <CardButton btnname={props.btn2} />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CourseCard;
