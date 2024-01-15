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
import Profile from './components/Profile';
import Settings from "./components/Settings";
import SearchPage from "./components/SearchPage";
import Movies from "./components/Movies";
import RecentlyAdded from "./components/RecentlyAdded";


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
          <Route path="/moviedetails/:id" element={<MovieDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/recentlyadded" element={<RecentlyAdded />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;