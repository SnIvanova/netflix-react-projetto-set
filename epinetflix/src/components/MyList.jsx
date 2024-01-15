import React, { useEffect, useState } from "react";
import { Button, Col, Container } from "react-bootstrap";
import Carousel from "better-react-carousel";

const MyList = () => {
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("myList")) || [];
    setMyList(storedList);
  }, []);

  return (
    <Container className="mb-5">
      <h2>My List</h2>
      <Carousel cols={6} rows={1} gap={10} loop>
        {myList.map((movie) => (
          <Carousel.Item key={movie.imdbID}>
            <img className="h-75 poster" width="100%" src={movie.Poster} alt={movie.Title} />
            <Col className="text-center">
              <Button className="my-2" variant="outline-danger" size="sm" disabled>
                Added to My List
              </Button>
            </Col>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default MyList;