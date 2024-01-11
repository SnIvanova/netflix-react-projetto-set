import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AllGalleries from "./components/AllGalleries";
import Footer from "./components/Footer";
import MovieDetails from "./components/MovieDetails";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import Top from "./components/Top";
import { TvShows } from "./components/TvShows";
import { Helmet } from "react-helmet";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Helmet>
          <link rel="icon" type="image/png" href="./assets/favicon.ico" sizes="16x16" />
        </Helmet>
        <NavBar />
        <Top />
        <Routes>
          <Route path="/" element={<AllGalleries />} />
          <Route path="/tvshows" element={<TvShows />} />
          <Route path="/search" element={<ShowSearch />} />
          <Route path="/moviedetails/:id" element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;