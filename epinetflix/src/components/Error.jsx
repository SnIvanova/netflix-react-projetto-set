import { Component } from "react";
import { Alert } from "react-bootstrap";

class Error extends Component {
  render() {
    return (
      <div className="text-center my-3 alert">
        <Alert variant="danger">"Something went wrong"</Alert>
      </div>
    );
  }
}

export default Error;