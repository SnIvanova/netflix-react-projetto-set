import React, { useEffect, useState } from "react";
import Gallery from "./Gallery";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        // Fetch movies data from your API or external source
        const response = await fetch("https://api.example.com/movies");
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        setError("An error occurred while fetching movies");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const title = "Popular Movies";

  return (
    <div>
      <h2>{title}</h2>
      {loading && <p>Loading movies...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && <Gallery title={title} movies={movies} />}
    </div>
  );
};

export default Movies;
