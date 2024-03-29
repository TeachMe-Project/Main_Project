import * as React from 'react';
import Card from '../../Card/Card';
import CardHeader from '../../Card/CardHeader';
import CardDetails from '../../Card/CardDetails';
import { Container, Row, Col } from 'react-bootstrap';
import { FiDownload } from 'react-icons/fi';

type Notes = {
  topic?: string;
  date?: string;
};
export const Notes: React.FC<Notes> = props => {
  return (
    <div className="Notes">
      <Container>
        <Row>
          <Card
            header={props.topic}
            detail={props.date}
            btnname={
              <a
                download="note1.pdf"
                href="https://learninggp2.blob.core.windows.net/notes/ProposalPresentationNew.pdf"
                target="_blank"
              >
                <FiDownload className="ReactIcon" />
              </a>
            }
          />
        </Row>
      </Container>
    </div>
  );
};

export default Notes;
