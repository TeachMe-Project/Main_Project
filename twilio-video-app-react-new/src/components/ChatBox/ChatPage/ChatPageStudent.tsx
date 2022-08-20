import * as React from 'react';
import ChatArea from '../ChatArea/ChatAreaStudent';
import MessageSender from '../MessageSender/MessageSender';

const ChatPage = () => (
  <section className="styledChatPage">
    <ChatArea />
    <MessageSender />
  </section>
);

export default ChatPage;
