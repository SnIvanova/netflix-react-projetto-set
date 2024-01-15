import React, { useEffect, useState } from "react";
import { Button, Col, Container, Alert, Row } from "react-bootstrap";
import Carousel from "better-react-carousel";
import Error from "./Error";
import Loading from "./Loading";
import { Link, useNavigate } from "react-router-dom";

const RecentlyAdded = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleAddToList = (movie) => {
    const myList = JSON.parse(localStorage.getItem("myList")) || [];
    myList.push(movie);
    localStorage.setItem("myList", JSON.stringify(myList));
    setShowAlert(true);
    console.log(`${movie.Title} added to My List`);
  };

  useEffect(() => {
    const fetchRecentlyAddedMovies = async () => {
      try {
        let allMovies = [];
        const totalPages = 2; 
        for (let page = 1; page <= totalPages; page++) {
          const response = await fetch(`https://www.omdbapi.com/?apikey=1acd27f1&s=movie&y=2023&page=${page}`);
          
          if (!response.ok) {
            throw new Error("Failed to fetch recently added movies");
          }

          const data = await response.json();
          console.log(data);
          allMovies = allMovies.concat(data.Search || []);
        }

        setMovies(allMovies);
      } catch (error) {
        setError("An error occurred while fetching recently added movies");
      } finally {
        setLoading(false);
      }
    };

    fetchRecentlyAddedMovies();
  }, []);

  const handleButtonClick = (imdbID) => {
    setTimeout(() => {
      navigate(`/moviedetails/${imdbID}`);
    }, 500);
  };

  return (
    <Container className="mb-5">
      {loading && <Loading />}
      {error && <Error />}

      <h2 className="text-white mb-4">Recently Added Movies (2023)</h2>
      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          Movie added to My List!
        </Alert>
      )}
      <Carousel
        itemClass="carousel-item-padding-40-px"
        cols={7} 
        rows={2} 
        gap={10}
        loop
      >
        {movies.map((movie) => (
          <Carousel.Item key={movie.imdbID}>
            <Link to={`/moviedetails/${movie.imdbID}`}>
              <img className="h-75 poster" width="100%" src={movie.Poster} alt={movie.Title} />
            </Link>
            <Row className="mt-3 text-center">
              <Col >
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => handleButtonClick(movie.imdbID)}
                  style={{
                    borderRadius: "9px",
                    transition: "0.3s",
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  View Details
                </Button>
              </Col>
              <Col >
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => handleAddToList(movie)}
                  style={{
                    borderRadius: "9px",
                    transition: "0.3s",
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                  
                >
                  {showAlert ? "Added!" : "Add to My List"}
                </Button>
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default RecentlyAdded;
