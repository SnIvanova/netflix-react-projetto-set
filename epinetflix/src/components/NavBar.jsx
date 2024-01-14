import React, { useState } from "react";
import { Navbar, Container, Nav, Form, FormControl, Button, Alert } from "react-bootstrap";
import { NavLink as RouterNavLink, useLocation, useNavigate } from "react-router-dom"; 
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBIcon } from 'mdb-react-ui-kit';
import Movies from "./Movies";
import SearchPage from "./SearchPage";

const NavBar = () => {
    const location = useLocation();
    const navigate = useNavigate(); 
    const [searchError, setSearchError] = useState(null);
  
    /* class MovieDetails extends Component {
        constructor(props) {
          super(props);
          this.state = {
            movie: null,
            loading: true,
            error: null,
          };
        }

        componentDidMount() {
    this.fetchMovieDetails();
  }
async fetchMovieDetails() {
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
      });
    } catch (error) {
      this.setState({
        error: "An error occurred while fetching the movie details",
        loading: false,
      });
    }
  }

  render() {
    const { movie, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

 */

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/tvshows", text: "Tv Shows" },
    { to: "/movies", text: "Movies" },
    { to: "/recentlyadded", text: "Recently Added" },
    { to: "/mylist", text: "My List" },
    { to: '/settings', text: 'Settings' },
    
  ];

  const renderNavLinks = () => (
    <Nav className="me-auto">
      {navLinks.map(({ to, text }) => (
        <NavLink key={to} to={to} text={text} currentPath={location.pathname} />
      ))}
{/*       <NavLink to="/movies" text="Movies" currentPath={location.pathname} /> */}
    </Nav>
  );


  const handleUserIconClick = () => {
    navigate("/profile");
  };

  const handleSearchIconClick = () => {
    navigate("/search");
  };

   
  const renderRightNavIcons = () => (
    <Nav className="ms-auto text-light align-items-center">
      <MDBIcon fas icon="search" className={"ms-3 d-none d-lg-inline"} onClick={handleSearchIconClick} />
      <div id="kids" className="ms-3 d-none d-lg-inline">KIDS</div>
      <MDBIcon fas icon="bell" className="ms-3 d-none d-lg-inline" />
      <MDBIcon fas icon="user" className="ms-3 d-none d-lg-inline" onClick={handleUserIconClick} />
    </Nav>
  );

  return (
    <Navbar expand="lg" variant="dark">
      <Container>
        <Navbar.Brand as={RouterNavLink} to="/">
          <img
            src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940"
            style={{ width: "110px", height: "60px" }}
            alt="Logo Netflix"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {renderNavLinks()}
          {renderRightNavIcons()}
        </Navbar.Collapse>
      </Container>
      {searchError && <Alert variant="danger">{searchError}</Alert>}
      
    </Navbar>
    
  );
};

const NavLink = ({ to, text, currentPath }) => (
  <Nav.Item>
    <Nav.Link as={RouterNavLink} to={to} className={`nav-link${currentPath === to ? " active" : ""}`}>
      {text}
    </Nav.Link>
  </Nav.Item>
);

export default NavBar;
