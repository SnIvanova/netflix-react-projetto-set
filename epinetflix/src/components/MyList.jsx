import React, { useEffect, useState } from "react";
import { Button, Col, Container, Alert, Badge } from "react-bootstrap";
import Carousel from "better-react-carousel";

const MyList = () => {
  const [myList, setMyList] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
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
    setAlertMessage(`${title} removed from My List!`);
    setShowAlert(true);
  };

  const handleClearList = () => {
    setMyList([]);
    localStorage.removeItem("myList");
    setAlertMessage("My List cleared!");
    setShowAlert(true);
  };

  return (
    <Container className="mb-5">
      <h2 className="text-white mb-4">My List</h2>
      {myList.length === 0 && (
        <p className="text-white">Your list is empty. Add some movies.</p>
      )}
      <Carousel cols={6} rows={1} gap={10} loop>
        {myList.map((movie) => (
          <Carousel.Item key={movie.imdbID}>
            <img className="h-75 poster" width="100%" src={movie.Poster} alt={movie.Title} />
            <Col className="text-center mt-2">
              <Button
                className="mx-2"
                variant="outline-danger"
                size="sm"
                onClick={() => handleRemoveFromList(movie.imdbID, movie.Title)}
                style={{
                  borderRadius: "8px",
                  transition: "0.3s",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                Remove
              </Button>
              <Badge variant="danger" className="mt-2">
                {movie.Year}
              </Badge>
            </Col>
          </Carousel.Item>
        ))}
      </Carousel>
      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          {alertMessage}
        </Alert>
      )}
      {myList.length > 0 && (
        <Button
          className="my-3"
          variant="outline-danger"
          size="sm"
          onClick={handleClearList}
          style={{
            borderRadius: "8px",
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
