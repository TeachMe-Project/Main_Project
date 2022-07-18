import * as React from 'react';
import Card from '../../Card/Card';
import { Row, Col, Container } from 'react-bootstrap';
import PanelContainer from '../../Layout/PanelContainer';

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
            <div className="PanelBody"></div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Messages;
