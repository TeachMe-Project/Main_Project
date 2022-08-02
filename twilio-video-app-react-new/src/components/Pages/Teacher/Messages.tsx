import * as React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import PanelContainer from '../../Layout/PanelContainer';
import ChatAppRouter from '../../ChatBox/ChatAppRouter/ChatAppRouterTeacher';
import People from '../../ChatBox/People/PeopleTeacherChat';

type Messages = {
  name?: string;
  date?: string;
};

const Messages: React.FC<Messages> = props => {
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
