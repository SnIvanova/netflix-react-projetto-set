import React, { useEffect, useState } from "react";
import { Button, Col, Container } from "react-bootstrap";
import Carousel from "better-react-carousel";
import Error from "./Error";
import Loading from "./Loading";
import { Link, useNavigate } from "react-router-dom";

const Gallery = (props) => {
  // state = {
  //   Movies: null,
  //   loading: true,
  //   error: false,
  // };
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();


   // componentDidMount() {
  //   this.fetchMovies();
  // }
  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=1acd27f1&s=${props.search}`);
      if (response.ok) {
        const data = await response.json();
        // this.setState({ Movies: data, loading: false, error: false });
        setMovies(data);
        setLoading(false);
        setError(false);
      } else {
        console.error("Failed to fetch movies");
         // this.setState({ loading: false, error: true });
        setLoading(false);
        setError(true);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
         // this.setState({ loading: false, error: true });
      setLoading(false);
      setError(true);
    }
  };

  const handleButtonClick = (imdbID) => {
    setTimeout(() => {
      navigate(`/moviedetails/${imdbID}`);
    }, 500);
  };

  return (
    <Container className="mb-5">
      {loading && <Loading />}
      {error && <Error />}

      <h4 className="text-left">{props.title}</h4>
      <Carousel cols={6} rows={1} gap={10} loop>
        {movies?.Search.map((movie) => (
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
                Vai
              </Button>
            </Col>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Gallery;
