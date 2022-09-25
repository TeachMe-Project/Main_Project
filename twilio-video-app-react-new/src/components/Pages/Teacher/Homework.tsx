import * as React from "react";
import Card from "../../Card/Card";
import { Container, Row } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";

type Homework = {
  topic?: string;
  date?: string;
};
export const Homework: React.FC<Homework> = props => {
  return (
    <div className="Homework">
      <Container>
        <Row>
          <Card
            header={props.topic}
            detail={props.date}
            btnname={
              <a
                download="note1.pdf"
                href="https://learninggp2.blob.core.windows.net/homework/ProposalPresentationNew.pdf"
                target="_blank"
              >
                <FiDownload className="ReactIcon" />
                  <AiFillDelete className="Reacticon" />

              </a>
            }
          />
        </Row>
      </Container>
    </div>
  );
};

export default Homework;
