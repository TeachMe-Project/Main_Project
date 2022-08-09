import * as React from 'react';
import { CardDetails } from './CardDetails';
import { CardButton } from './CardButton';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import { ButtonCommon } from '../Button/ButtonCommon';

type InstituteCard = {
  instituteid?: string;
  institutename?: string;
  image?: JSX.Element;
  btn1?: string;
  btn2?: string;
  btn3?: string;
};

export const InstituteCard: React.FC<InstituteCard> = props => {
  return (
    <div className="SearchResultCard">
      <Col xl={2}>
        <div className="CardImage">{props.image}</div>
      </Col>

      <Col xl={2}>
        <CardDetails details={props.instituteid} />
        <CardDetails details={props.institutename} />
      </Col>

      <Col xl={6}>
        <div className="ViewMore">
          <Link to="" className="link ViewMoreBtn">
            <CardButton btnname={props.btn1} />
          </Link>
        </div>
      </Col>

      <Col xl={1}>
        <Link to="" className=" link SubscribeBtn">
          <CardButton btnname={props.btn2} />
        </Link>
      </Col>

      <Col xl={1}>
        <Link to="" className=" link SubscribeBtn">
          <ButtonCommon name={props.btn3} />
        </Link>
      </Col>
    </div>
  );
};
export default InstituteCard;
