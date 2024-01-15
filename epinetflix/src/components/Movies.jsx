import React, { useEffect, useState } from "react";
import { Button, Col, Container } from "react-bootstrap";
import Carousel from "better-react-carousel";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const minRating = 6.5;

  const handleAddToList = (movie) => {
    const myList = JSON.parse(localStorage.getItem("myList")) || [];
    myList.push(movie);
    localStorage.setItem("myList", JSON.stringify(myList));
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
      <Carousel cols={6} rows={1} gap={10} loop>
        {movies.map((movie) => (
          <Carousel.Item key={movie.imdbID}>
            <img className="h-75 poster" width="100%" src={movie.Poster} alt={movie.Title} />
            <Col className="text-center">
              <Button
                className="my-2"
                variant="outline-danger"
                size="sm"
                onClick={() => console.log(`Clicked on ${movie.Title}`)}
              >
                View Details
              </Button>
              <Button
                className="my-2"
                variant="outline-danger"
                size="sm"
                onClick={() => handleAddToList(movie)}
              >
                Add to My List
              </Button>
            </Col>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Movies;