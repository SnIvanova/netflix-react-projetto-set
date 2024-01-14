import React, { useEffect, useState } from "react";
import Gallery from "./Gallery";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const minRating = 7.5;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=1acd27f1&s=movie`);
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        const data = await response.json();
  
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
        const filteredMovies = movieDetails.filter(
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
    <div>
      <h2>Popular Movies</h2>
      {loading && <p>Loading movies...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && <Gallery title="Filtered Movies" movies={movies} />}
    </div>
  );
};

export default Movies;
