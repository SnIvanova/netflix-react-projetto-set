import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ShowSearch = ({ results }) => {
  return (
    <Row className="justify-content-center my-5">
      {results.map((result) => (
        <Col key={result.imdbID} xs={12} md={4} lg={3}>
          <Card className="mb-4">
            <Card.Img variant="top" src={result.Poster} />
            <Card.Body>
              <Card.Title>{result.Title}</Card.Title>
              <Card.Text>{result.Year}</Card.Text>
              <Card.Text>Type: {result.Type}</Card.Text>
              <Link to={`/details/${result.imdbID}`} className="btn btn-primary">
                View Details
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ShowSearch;
