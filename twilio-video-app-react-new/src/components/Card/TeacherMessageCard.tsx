import * as React from 'react';
import { useState } from 'react';
import { CardDetails } from './CardDetails';

type MessageCard = {
  student?: string;
  // subject?: string;
  // lastmessage?: string;
  image?: JSX.Element;
};

export const MessageCard: React.FC<MessageCard> = props => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // 👇️ toggle
    setIsActive(current => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };

  return (
    <div
      className="ChatCard"
      style={{
        backgroundColor: isActive ? '#ddf3fa' : '',
        color: isActive ? '#1e90ff' : '',
        boxShadow: isActive ? '1px 7px 25px rgb(0 0 0 / 13%)' : '',
        transform: isActive ? 'translateY(-4px)' : '',
      }}
      onClick={handleClick}
    >
      <div className="ChatCardImage">{props.image}</div>
      <div className="CardBody">
        <div className="teacherName">
          <CardDetails details={props.student} />
        </div>
        {/* <div className="teacherSubject">
          <CardDetails details={props.subject} />
        </div> */}
        {/* <div className="lastRow">
          <CardDetails details={props.lastmessage} />
        </div> */}
      </div>
    </div>
  );
};
export default MessageCard;
