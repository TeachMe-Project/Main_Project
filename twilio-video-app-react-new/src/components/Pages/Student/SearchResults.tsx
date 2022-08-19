import * as React from 'react';
import Card from '../../Card/Card';
import CardHeader from '../../Card/CardHeader';
import CardDetails from '../../Card/CardDetails';
import { Container, Row, Col } from 'react-bootstrap';

import Searchbar from '../../Searchbar/Searchbar';
import SearchResultCard from '../../Card/SearchResultCard';

type SearchResults = {
  topic?: string;
  date?: string;
};
export const SearchResults: React.FC<SearchResults> = props => {
  return (
    <div className="SearchResults">
      <Container>
        <Searchbar />
        <div className="Panel">
          <div className="PanelTopic">Search Results</div>
          <div className="PanelBody">
            <SearchResultCard
              subject="Mathematics"
              image={<img src={'/Images/subjects/maths.png'} />}
              teacher="Mr. Indika Prasad"
              amount="LKR 2,500"
              btn1="View more"
              btn2="Enroll"
            />
            <SearchResultCard
              subject="Mathematics"
              image={<img src={'/Images/subjects/maths.png'} />}
              teacher="Mr. Lasitha Nuwan"
              amount="LKR 2,000"
              btn1="View more"
              btn2="Enroll"
            />
            <SearchResultCard
              subject="Mathematics"
              image={<img src={'/Images/subjects/maths.png'} />}
              teacher="Mrs. Sepali Wijesundara"
              amount="LKR 2,400"
              btn1="View more"
              btn2="Enroll"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SearchResults;
