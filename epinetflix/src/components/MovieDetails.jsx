import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Alert, Badge, Col, Row, Spinner } from "react-bootstrap";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

/*   class MovieDetails extends Component {
    constructor(props) {
      super(props);
      this.state = {
        movie: null,
        loading: true,
        error: null,
      };
    } */

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=1acd27f1&i=${id}`);

        if (!response.ok) {
          throw new Error("Movie not found");
        }

        const data = await response.json();
        setMovie(data);
        console.log(data);
      } catch (error) {
        setError("An error occurred while fetching the movie details");
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);


 /*  async componentDidMount() {
    this.fetchMovieDetails();
  }

  async componentDidUpdate(prevProps) {
    const { id: prevId } = prevProps.match.params;
    const { id } = this.props.match.params;

    if (id !== prevId) {
      this.fetchMovieDetails();
    }
  } 
    fetchMovieDetails = async () => {
    const { id } = this.props.match.params;
  try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=1acd27f1&i=${id}`);

      if (!response.ok) {
        throw new Error("Movie not found");
      }

      const data = await response.json();
      this.setState({
        movie: data,
        loading: false,
        error: null,
      });
    } catch (error) {
      this.setState({
        movie: null,
        loading: false,
        error: "An error occurred while fetching the movie details",
      });
    }
  };*/

  const renderMovieCard = () => {
    if (loading) return <Spinner animation="border" variant="success" />;
    if (error) return <Alert variant="danger">{error}</Alert>;
    if (!movie) return null;

    return (
      <Card style={{ width: "18rem" }} className="mx-auto">
        <Card.Img variant="top" src={movie.Poster} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>{movie.Plot}</Card.Text>
          <Card.Body>
            Rating: <Badge bg="danger">{movie.imdbRating}</Badge>
          </Card.Body>
        </Card.Body>
      </Card>
    );
  };


  /* render() {
    const { movie, loading, error } = this.state;

    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Error: {error}</p>;
    }

    if (!movie) {
      return <p>Movie not found</p>;
    }
 */
  return (
    <Row className="justify-content-center my-5">
      <Col className="text-center" xs={12} md={6}>
        {renderMovieCard()}
      </Col>
    </Row>
  );
};

export default MovieDetails;
