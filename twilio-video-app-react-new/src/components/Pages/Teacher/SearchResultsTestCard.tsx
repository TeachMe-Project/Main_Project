import * as React from 'react';
// import CardDetails from '../../Card/'
import { CardDetails } from '../../Card/CardDetails';
import { CardButton } from '../../Card/CardButton';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';

type SearchResultTestCard = {
  student?: string;
  grade?: string;
  courseID?: string;
  course?: string;
  image?: JSX.Element;
  btn1?: string;
};

export const SearchResultTestCard: React.FC<SearchResultTestCard> = props => {
  return (
    <div className="SearchResultsTestCard">
      <Col xl={2}>
        <div className="CardImage">{props.image}</div>
      </Col>

      <Col xl={3}>
        <CardDetails details={props.student} />
      </Col>

      <Col xl={3}>
        <CardDetails details={props.course} />
      </Col>

      <Col xl={2}>
        <CardDetails details={props.grade} />
      </Col>

      <Col xl={2}>
        <div className="ViewMore">
          <Link to="/courseDetails" className="link ViewMoreBtn">
            <CardButton btnname={props.btn1} />
          </Link>
        </div>
      </Col>
    </div>
  );
};
export default SearchResultTestCard;
