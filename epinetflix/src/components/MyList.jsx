import React, { useEffect, useState } from "react";
import { Button, Col, Container, Alert } from "react-bootstrap";
import Carousel from "better-react-carousel";

const MyList = () => {
  const [myList, setMyList] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [removedMovie, setRemovedMovie] = useState(null);

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("myList")) || [];
    setMyList(storedList);
  }, []);

  const handleRemoveFromList = (imdbID, title) => {
    const updatedList = myList.filter((movie) => movie.imdbID !== imdbID);
    setMyList(updatedList);
    localStorage.setItem("myList", JSON.stringify(updatedList));
    setRemovedMovie(title);
    setShowAlert(true);
  };

  const handleClearList = () => {
    setMyList([]);
    localStorage.removeItem("myList");
    setShowAlert(true);
  };

  return (
    <Container className="mb-5">
      <h2 className="text-white">My List</h2>
      {myList.length === 0 && (
        <p className="text-white">Your list is empty. Add movies from the search or recently added.</p>
      )}
      <Carousel cols={6} rows={1} gap={10} loop>
        {myList.map((movie) => (
          <Carousel.Item key={movie.imdbID}>
            <img className="h-75 poster" width="100%" src={movie.Poster} alt={movie.Title} />
            <Col className="text-center">
              <Button
                className="my-2 mx-2"
                variant="outline-danger"
                size="sm"
                onClick={() => handleRemoveFromList(movie.imdbID, movie.Title)}
                style={{
                  borderRadius: "9px",
                  transition: "0.3s",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                Remove
              </Button>
            </Col>
          </Carousel.Item>
        ))}
      </Carousel>
      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          {removedMovie ? `${removedMovie} removed from My List!` : "My List cleared!"}
        </Alert>
      )}
      {myList.length > 0 && (
        <Button
          className="my-3"
          variant="outline-danger"
          size="sm"
          onClick={handleClearList}
          style={{
            borderRadius: "9px",
            transition: "0.3s",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          Clear List
        </Button>
      )}
    </Container>
  );
};

export default MyList;
