import * as React from "react";
import { Button, Container, Row } from "react-bootstrap";

import { RequestCard } from "../../RequestCard/RequestCard";

type Instituterequest = {
  name?: string;
};
export const Instituterequest: React.FC<Instituterequest> = props => {
  return (
    <div className="Instituterequest">
      <Container>
        <Row>
          <RequestCard
            header={props.name}
            acceptbtnname={
              <Button type="button" className="btn-success">
                Accept
              </Button>
            }
            rejectbtnname={
              <Button type="button" className="btn-danger">
                Decline
              </Button>
            }
          />
        </Row>
      </Container>
    </div>
  );
};

export default Instituterequest;
