import * as React from 'react';
import Card from '../../Card/Card';
type Messages = {
  name?: string;
  date?: string;
};

const Messages: React.FC<Messages> = props => {
  return <div className="Messages">Messages</div>;
};

export default Messages;
