import * as React from 'react';

interface IUnreadMessagesCounterProps {
  count: number;
}

class UnreadMessagesCounter extends React.Component<IUnreadMessagesCounterProps> {
  public render() {
    const { count } = this.props;

    return count > 0 && <div className="unreadCounter">{count}</div>;
  }
}

export default UnreadMessagesCounter;
