// RecentlyAdded.jsx
import React, { useEffect, useState } from "react";
import { Button, Col, Container } from "react-bootstrap";
import Carousel from "better-react-carousel";
import Error from "./Error";
import Loading from "./Loading";
import { Link, useNavigate } from "react-router-dom";

const RecentlyAdded = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecentlyAddedMovies = async () => {
        try {
          const response = await fetch(`https://www.omdbapi.com/?apikey=1acd27f1&s=movie&y=2023`);
          
          if (!response.ok) {
            throw new Error("Failed to fetch recently added movies");
          }
      
          const data = await response.json();
          console.log("API Response:", data);
          setMovies(data.Search || []);
        } catch (error) {
          console.error("Error fetching recently added movies:", error);
          setError("An error occurred while fetching recently added movies");
        } finally {
          setLoading(false);
        }
      };
    fetchRecentlyAddedMovies();
  }, []);

  const handleButtonClick  = (imdbID) => {
    setTimeout(() => {
      navigate(`/moviedetails/${imdbID}`);
    }, 500);
  };

  return (
    <Container className="mb-5">
      {loading && <Loading />}
      {error && <Error />}

      <h2>Recently Added Movies (2023)</h2>
      <Carousel cols={6} rows={1} gap={10} loop>
        {movies.map((movie) => (
          <Carousel.Item key={movie.imdbID}>
            <Link to={`/moviedetails/${movie.imdbID}`}>
              <img className="h-75 poster" width="100%" src={movie.Poster} alt={movie.Title} />
            </Link>
            <Col className="text-center">
              <Button
                className="my-2"
                variant="outline-danger"
                size="sm"
                onClick={() => handleButtonClick(movie.imdbID)}
              >
                View Details
              </Button>
            </Col>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default RecentlyAdded;
