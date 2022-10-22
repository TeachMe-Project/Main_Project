import * as React from 'react';
import { CardDetails } from './CardDetails';
import { CardHeader } from './CardHeader';
import { CardButton } from './CardButton';

type Card = {
  id?:string;
  btnname?: string;
  date?: string;
  teacher?: string;
  grade?: string;
  detail?: string;
  time?: string;
  header?: string;
  amount?: string;
  icon?: any;
  image?: JSX.Element;
};

export const Card: React.FC<Card> = props => {
  return (
    <div className="Card">
      <div className="CardImage">{props.image}</div>
      <div className="CardBody">
        <CardHeader header={props.header} />
        <CardDetails details={props.grade} />
        <CardDetails details={props.teacher} />
        <CardDetails details={props.detail} />
        <CardDetails details={props.time} />
        <CardDetails details={props.date} />
        <CardDetails details={props.amount} />
        <CardButton btnname={props.btnname} id={props.id}/>
      </div>
    </div>
  );
};
export default Card;
