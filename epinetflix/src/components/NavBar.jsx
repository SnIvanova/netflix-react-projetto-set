import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBIcon } from 'mdb-react-ui-kit';

const NavBar = (props) => {
  const location = useLocation();
  console.log("location", location);
  return (
    <Navbar expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="logo">
          <img src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940" style={{ width: "110px", height: "60px" }} alt="Logo Netflix" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className={"nav-link" + (location.pathname === "/" ? " active" : "")} to="/">
              Home
            </Link>
            <Link
              className={"nav-link" + (location.pathname === "/twshows" ? " active" : "")}
              to="/twshows"
            >
              Tv Shows
            </Link>
            <Link
              className={"nav-link" + (location.pathname === "/movies" ? " active" : "")}
              to="/movies"
            >
              Movies
            </Link>
            <Link
              className={"nav-link" + (location.pathname === "/recentlyadded" ? " active" : "")}
              to="/recentlyadded"
            >
              Recently Added
            </Link>
            <Link
              className={"nav-link" + (location.pathname === "/mylist" ? " active" : "")}
              to="/mylist"
            >
              My List
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end ">
          <Navbar.Text className="d-flex align-items-lg-center">
            <MDBIcon fas icon="search" className='ms-2'/>
            <div id="kids" className='ms-2'>KIDS</div>
            <MDBIcon fas icon="bell" className='ms-2'/>
            <MDBIcon fas icon="user" className='ms-2'/>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;