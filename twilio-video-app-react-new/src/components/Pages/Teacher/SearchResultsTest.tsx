import * as React from "react";
import { Container } from "react-bootstrap";
import SearchbarTest from "../Teacher/SearchbarTest";
import SearchResultsTestCard from "./SearchResultsTestCard";

type SearchResultsTest = {
  topic?: string;
  date?: string;
};
export const SearchResultsTest: React.FC<SearchResultsTest> = props => {
  return (
    <div className="SearchResultsTest">
      <Container>
        <SearchbarTest />
        <div className="Panel">
          <div className="PanelBody">
            <SearchResultsTestCard
              student="Nuwani Alubomulla"
              grade="Gr. 9"
              course="Mathematics"
              image={<img src={"/Images/Students/st3.jpg"} />}
              btn1="View more"
              btn2="Provide Free Card"
            />
            <SearchResultsTestCard
              student="Amri Faleel"
              grade="Gr. 9"
              course="Mathematics"
              image={<img src={"/Images/Students/st1.jpg"} />}
              btn1="View more"
              btn2="Provide Free Card"
            />
            <SearchResultsTestCard
              student="Akila Panwila"
              grade="Gr. 9"
              course="Mathematics"
              image={<img src={"/Images/Students/st4.jpg"} />}
              btn1="View more"
              btn2="Provide Free Card"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SearchResultsTest;
