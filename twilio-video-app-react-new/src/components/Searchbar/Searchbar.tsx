import * as React from 'react';
import { ImSearch } from 'react-icons/im';

const Searchbar = () => {
  return (
    <div className="Searchbar">
      <input type="text" placeholder="Search by Course name, Tutor name, Institute, Subject or Grade" />
      <ImSearch className="SearchIcon" />
    </div>
  );
};

export default Searchbar;
