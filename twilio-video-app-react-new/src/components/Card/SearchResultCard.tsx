import * as React from 'react';
import { CardDetails } from './CardDetails';
import { CardButton } from './CardButton';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';

type SearchResultCard = {
  teacher?: string;
  subject?: string;
  amount?: string;
  image?: JSX.Element;
  btn1?: string;
  btn2?: string;
};

export const SearchResultCard: React.FC<SearchResultCard> = props => {
  return (
    <div className="SearchResultCard">
      <Col xl={1}>
        <div className="CardImage">{props.image}</div>
      </Col>

      <Col xl={2}>
        <CardDetails details={props.subject} />
      </Col>

      <Col xl={3}>
        <CardDetails details={props.teacher} />
      </Col>

      <Col xl={2}>
        <CardDetails details={props.amount} />
      </Col>

      <Col xl={2}>
        <div className="ViewMore">
          <Link to="/courseDetails" className="link ViewMoreBtn">
            <CardButton btnname={props.btn1} />
          </Link>
        </div>
      </Col>

      <Col xl={2}>
        <Link to="/course" className=" link SubscribeBtn">
          <CardButton btnname={props.btn2} />
        </Link>
      </Col>
    </div>
  );
};
export default SearchResultCard;
