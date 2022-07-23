import * as React from 'react';
import { CardDetails } from './CardDetails';

type MessageCard = {
  teacher?: string;
  subject?: string;
  lastmessage?: string;
  image?: JSX.Element;
};

export const MessageCard: React.FC<MessageCard> = props => {
  return (
    <div className="CourseCard">
      <div className="CardImage">{props.image}</div>
      <div className="CardBody">
        <div className="teacherName">
          <CardDetails details={props.teacher} />
        </div>
        <div className="teacherSubject">
          <CardDetails details={props.subject} />
        </div>
        <div className="lastRow">
          <CardDetails details={props.lastmessage} />
        </div>
      </div>
    </div>
  );
};
export default MessageCard;
