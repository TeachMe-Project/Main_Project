import * as React from "react";
import { BiSearch } from "react-icons/bi";

const SearchbarTest = () => {
  return (
    <div className="Searchbar">
      <input type="text" placeholder="Search by Student name, Course or Grade" />
      {/*<Link to="/searchresults" className="link">*/}
      <BiSearch className="SearchIcon" />
      {/*</Link>*/}
    </div>
  );
};

export default SearchbarTest;
