import * as React from 'react';
import { connect } from 'react-redux';
import Message from '../Message/Message';
import { scrollToBottom } from '../Utilities/common';
// import { IMessage } from '../Message/Message';

interface IChatAreaState {
  messageState: {
    messages: [];
  };
}

interface IChatAreaProps {
  messages: [];
}

export class ChatArea extends React.Component {
  private chatAreaRef = React.createRef<HTMLDivElement>();

  public render() {
    const { messages } = this.props as IChatAreaProps;

    return (
      <section className="StyledChatArea">
        {/* {messages.map((element: IMessage, idx: number) => {
              return (
                <React.Fragment key={idx}>
                  <Message message={element}/>
                </React.Fragment>
               ) 
             })}  */}
        <Message />
      </section>
    );
  }

  public componentDidUpdate(): void {
    const chatAreaElement: Element = this.chatAreaRef.current as Element;
    const shouldScroll: boolean =
      chatAreaElement.scrollTop + chatAreaElement.clientHeight !== chatAreaElement.scrollHeight;

    if (shouldScroll) {
      scrollToBottom(chatAreaElement);
    }
  }
}

const mapStateToProps = (state: IChatAreaState) => ({
  messages: state.messageState.messages,
});

//   export default connect(mapStateToProps)(ChatArea);
export default ChatArea;
