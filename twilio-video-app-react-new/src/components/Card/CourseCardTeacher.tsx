import * as React from 'react';
import { CardDetails } from './CardDetails';
import { CardHeader } from './CardHeader';
import { CardButton } from './CardButton';
import { Link } from 'react-router-dom';

type CourseCardTeacher = {
  date?: string;

  description?: string;
  time?: string;
  header?: string;
  amount?: string;
  image?: JSX.Element;
  btn1?: string;
};

export const CourseCardTeacher: React.FC<CourseCardTeacher> = props => {
  return (
    <div className="CourseCard">
      <div className="CardImage">{props.image}</div>
      <div className="CardBody">
        <CardHeader header={props.header} />

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
        </div>
      </div>
    </div>
  );
};
export default CourseCardTeacher;
