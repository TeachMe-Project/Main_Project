import * as React from 'react';
import Card from '../../Card/Card';
import CardHeader from '../../Card/CardHeader';
import CardDetails from '../../Card/CardDetails';
import { Container, Row, Col } from 'react-bootstrap';
import { FiDownload } from 'react-icons/fi';

type Homework = {
  name?: string;
  date?: string;
};

const Homework: React.FC<Homework> = props => {
  return (
    <div className="Homework">
      <Container>
        <Row>
          <Card
            header={props.name}
            detail={props.date}
            btnname={
              <a
                download="note1.pdf"
                href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
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

export default Homework;
