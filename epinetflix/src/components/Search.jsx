import React, { useState } from "react";
import { MDBIcon } from 'mdb-react-ui-kit';

const Search = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchValue);
  };

  return (
    <div className="d-flex align-items-center">
      <input
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={handleInputChange}
        className="form-control me-2"
      />
      <MDBIcon fas icon="search" onClick={handleSearch} className="cursor-pointer" />
    </div>
  );
};

export default Search;
