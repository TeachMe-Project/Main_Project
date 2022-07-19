import * as React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FiDownload } from 'react-icons/fi';

import { RequestCard } from '../../RequestCard/RequestCard';
import { RequestCardHeader } from '../../RequestCard/RequestCardHeader';
import { RequestCardDetails } from '../../RequestCard/RequestCardDetails';
import { AiFillPropertySafety } from 'react-icons/ai';

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
