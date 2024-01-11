import React from "react";
import Gallery from "./Gallery";

const galleryData = [
  { id: 1, title: "Voglia di magia?", search: "harry%20potter" },
  { id: 2, title: "Batman", search: "Batman" },
  { id: 3, title: "Continua guardare", search: "mafia" },
  { id: 4, title: "Diventa un hero", search: "avengers" },
];

const AllGalleries = () => (
  <div>
    {galleryData.map(({ id, ...galleryProps }) => (
      <Gallery key={id} {...galleryProps} />
    ))}
  </div>
);

export default AllGalleries;
