import * as React from 'react';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Searchbar = () => {
  return (
    <div className="Searchbar">
      <input type="text" placeholder="Search by Course name, Tutor name, Institute, Subject or Grade" />
      <Link to="/searchresults" className="link">
        <BiSearch className="SearchIcon" />
      </Link>
    </div>
  );
};

export default Searchbar;
