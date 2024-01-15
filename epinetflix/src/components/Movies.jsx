import React, { useEffect, useState } from "react";
import { Button, Col, Container, Alert, Row  } from "react-bootstrap";
import Carousel from "better-react-carousel";
import { Link } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [error, setError] = useState(null);
  const minRating = 6.5;

  const handleAddToList = (movie) => {
    const myList = JSON.parse(localStorage.getItem("myList")) || [];
    myList.push(movie);
    localStorage.setItem("myList", JSON.stringify(myList));
    setShowAlert(true);
    console.log(`${movie.Title} added to My List`);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let allMovies = [];
        const totalPages = 2; 
        for (let page = 1; page <= totalPages; page++) {
          const response = await fetch(`https://www.omdbapi.com/?apikey=1acd27f1&s=movie&page=${page}`);
          
          if (!response.ok) {
            throw new Error("Failed to fetch movies");
          }

          const data = await response.json();
          console.log(data);

          const movieDetailsPromises = (data.Search || []).map(async (movie) => {
            const detailsResponse = await fetch(`https://www.omdbapi.com/?apikey=1acd27f1&i=${movie.imdbID}`);
            if (detailsResponse.ok) {
              const detailsData = await detailsResponse.json();
              return { ...movie, rating: detailsData.imdbRating };
            } else {
              throw new Error(`Failed to fetch details for ${movie.Title}`);
            }
          });

          const movieDetails = await Promise.all(movieDetailsPromises);
          allMovies = allMovies.concat(movieDetails);
        }

        const filteredMovies = allMovies.filter(
          (movie) => movie.rating && parseFloat(movie.rating) >= minRating
        );

        setMovies(filteredMovies);
        setLoading(false);
      } catch (error) {
        setError("An error occurred while fetching movies");
        setLoading(false);
      }
    };

    fetchMovies();
  }, [minRating]);

  return (
    <Container className="mb-5">
      {loading && <p>Loading movies...</p>}
      {error && <p>Error: {error}</p>}

      <h2 className="text-white">Popular Movies</h2>
      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          Movie added to My List!
        </Alert>
      )}
      <Carousel cols={6} rows={1} gap={10} loop>
        {movies.map((movie) => (
          <Carousel.Item key={movie.imdbID}>
          <Link to={`/moviedetails/${movie.imdbID}`}>
            <img className="h-75 poster" width="100%" src={movie.Poster} alt={movie.Title} />
            </Link>
            <Row className="mt-3">
              <Col className="text-center">
              <Button
                variant="outline-danger"
                size="sm"
                onClick={() => handleAddToList (movie.imdbID)}
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
            <Col>
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
                Add to My List
              </Button>
            </Col>
          </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Movies;