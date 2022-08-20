import * as React from 'react';
import { RequestCardButton } from './RequestCardButton';
import { RequestCardDetails } from './RequestCardDetails';
import { RequestCardHeader } from './RequestCardHeader';

import { Container, Row, Col, Button } from 'react-bootstrap';

import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { useNavigate } from 'react-router-dom';

library.add(fas);
type RequestCard = {
  acceptbtnname?: any;
  rejectbtnname?: any;
  date?: string;
  teacher?: string;
  detail?: string;
  time?: string;
  header?: string;
  amount?: string;
  icon?: any;
  image?: JSX.Element;
};

export const RequestCard: React.FC<RequestCard> = props => {
  const navigate = useNavigate();
  const directToCourse = () => {
    navigate('/');
  };
  return (
    <div className="RequestCard">
      <div className="RequestCardImage">{props.image}</div>
      <div className="RequestCardBody">
        <div>
          <RequestCardHeader header={props.header} />
        </div>

        <div style={{ width: '50%', display: 'flex', float: 'right' }}>
          <RequestCardButton requestbtnname={props.acceptbtnname} />
          <RequestCardButton requestbtnname={props.rejectbtnname} />
        </div>
      </div>
    </div>
  );
};
export default RequestCard;
