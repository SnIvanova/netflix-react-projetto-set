import React, { useState } from "react";
import { Form, FormControl, Button, Alert, Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchError, setSearchError] = useState(null);
  const navigate = useNavigate();

/*   class SearchPage extends Component {
    state = {
      searchTerm: "",
      searchResults: [],
      searchError: null,
    };
   */

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setSearchError(null);
  };

/*   handleInputChange = (e) => {
    this.setState({ searchTerm: e.target.value, searchError: null });
  }; */

  const handleSearch = async () => {
    if (searchTerm.trim() !== "") {

/*handleSearch = async () => {
    const { searchTerm } = this.state; */

      try {
        const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=1acd27f1&s=${searchTerm}`);
        if (response.ok) {
          const data = await response.json();
     /*   this.setState({ searchResults: data.Search || [] }); */
          setSearchResults(data.Search || []);
        } else {
          console.error("Failed to fetch search results");
    /*    this.setState({ searchError: "Failed to fetch search results" }); */
          setSearchError("Failed to fetch search results");
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
  /*    this.setState({ searchError: "Error fetching search results" }); */
        setSearchError("Error fetching search results");
      }
    } else {
/*   this.setState({ searchError: "Please enter a search term" }); */
      setSearchError("Please enter a search term");
    }
  };

  const handleItemClick = (imdbID) => {
/*  this.navigate(`/details/${imdbID}`); */
    navigate(`/details/${imdbID}`);
  };

/*   render() {
    const { searchTerm, searchResults, searchError } = this.state; */

  return (
    <div className="container mt-4 ">
      <h1 className="text-white">Search</h1>
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
      </Form>
      {searchError && <Alert variant="danger">{searchError}</Alert>}
      {searchResults.length > 0 && (
        <Row className="justify-content-center my-5">
          {searchResults.map((result) => (
            <Col key={result.imdbID} xs={12} md={4} lg={3}>
              <Card className="mb-4">
                <Card.Img variant="top" src={result.Poster} />
                <Card.Body>
                  <Card.Title>{result.Title}</Card.Title>
                  <Card.Text>{result.Year}</Card.Text>
                  <Card.Text>Type: {result.Type}</Card.Text>
                  <Button variant="primary" onClick={() => handleItemClick(result.imdbID)}>
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default SearchPage;
