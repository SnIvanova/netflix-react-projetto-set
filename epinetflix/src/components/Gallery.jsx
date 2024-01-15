import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Alert  } from "react-bootstrap";
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
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();


  const handleAddToList = (movie) => {
    const myList = JSON.parse(localStorage.getItem("myList")) || [];
    myList.push(movie);
    localStorage.setItem("myList", JSON.stringify(myList));
    setShowAlert(true);
    console.log(`${movie.Title} added to My List`);
  };

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
    {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          Movie added to My List!
        </Alert>
      )}
    <Carousel cols={6} rows={1} gap={10} loop>
      {movies?.Search.map((movie) => (
        <Carousel.Item key={movie.imdbID}>
          <Link to={`/moviedetails/${movie.imdbID}`}>
            <img className="h-75 poster" width="100%" src={movie.Poster} alt={movie.Title} />
          </Link>
          <Row className="mt-3">
              <Col className="text-center">
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

export default Gallery;
