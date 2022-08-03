import * as React from 'react';
import { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import PanelContainer from '../../Layout/PanelContainer';
import ChatAppRouter from '../../ChatBox/ChatAppRouter/ChatAppRouterStudent';
import People from '../../ChatBox/People/PeopleStudentChat';
import { AiOutlinePlus } from 'react-icons/ai';
import NewChatPopup from '../../ChatBox/NewChatPopup/NewChatPopup';

type Messages = {
  name?: string;
  date?: string;
};

const Messages: React.FC<Messages> = props => {
  // const [popupVisible, setPopupVisible] = useState<boolean>(false)

  // function togglePopup() {
  //   setPopupVisible(!popupVisible)
  // }

  return (
    <div className="Messages">
      <Container>
        <Row>
          <PanelContainer />
          <div className="PanelHeader">
            <h2>Messages</h2>
          </div>
          <div className="Panel">
            <div className="PanelBody">
              {/* <NewChatPopup /> */}
              <People />
              <ChatAppRouter />
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Messages;
