import React, { useState } from "react";
import { Navbar, Container, Nav, Form, FormControl, Button, Alert } from "react-bootstrap";
import { NavLink as RouterNavLink, useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBIcon } from 'mdb-react-ui-kit';
import Search from "./Search";
import ShowSearch from "./ShowSearch"; 

const NavBar = () => {
    const location = useLocation();
    const navigate = useNavigate(); // Initialize navigate
    const [showSearch, setShowSearch] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [searchError, setSearchError] = useState(null);
  
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
    </Nav>
  );

  const handleSearchIconClick = () => {
    setShowSearch(!showSearch);
  };

  const handleUserIconClick = () => {
    navigate("/profile");
  };

  const handleSearch = (searchTerm) => {
    if (searchTerm.trim() !== "") {
      // Navigate to the search page
      navigate(`/search?term=${encodeURIComponent(searchTerm)}`);
    } else {
      setSearchError("Please enter a search term");
    }
  };
   
  const renderRightNavIcons = () => (
    <Nav className="ms-auto text-light align-items-center">
      <MDBIcon fas icon="search" className={`ms-3 d-none d-lg-inline${showSearch ? " active" : ""}`} onClick={handleSearchIconClick} />
      {showSearch ? (
        <Search onSearch={handleSearch} onCancel={() => setShowSearch(false)} />
      ) : (
        searchResults.length > 0 && <ShowSearch results={searchResults} />
      )}
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
