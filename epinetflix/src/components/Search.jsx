// Search.jsx

import React, { useState } from "react";
import { Form, FormControl, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ShowSearch from "./ShowSearch";

const Search = ({ onSearch, onCancel }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchError, setSearchError] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setSearchError(null);
  };

  const handleSearch = async () => {
    if (searchTerm.trim() !== "") {
      try {
        const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=1acd27f1&s=${searchTerm}`);
        if (response.ok) {
          const data = await response.json();
          setSearchResults(data.Search || []);
        } else {
          console.error("Failed to fetch search results");
          setSearchError("Failed to fetch search results");
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
        setSearchError("Error fetching search results");
      }
    } else {
      setSearchError("Please enter a search term");
    }
  };

  const handleItemClick = (imdbID) => {
    navigate(`/details/${imdbID}`);
  };

  return (
    <>
      <Form className="d-flex">
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-2"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <Button variant="outline-success" onClick={handleSearch}>
          Search
        </Button>
        <Button variant="outline-danger" onClick={onCancel} className="ms-2">
          Cancel
        </Button>
      </Form>
      {searchError && <Alert variant="danger">{searchError}</Alert>}
      {searchResults.length > 0 && <ShowSearch results={searchResults} onItemClick={handleItemClick} />}
    </>
  );
};

export default Search;
