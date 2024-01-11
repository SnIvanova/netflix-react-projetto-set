import { Component } from "react";
import Gallery from "./Gallery";

class AllGalleries extends Component {
  render() {
    return (
      <div>
        <Gallery title="Voglia di magia?" search="harry%20potter" />
        <Gallery
          title="O muori da eroe, o vivi tanto a lungo da diventare il cattivo."
          search="Batman"
        />
        <Gallery title="Una proposta che non potrai rifiutare.." search="mafia" />
        <Gallery title="Azione senza esclusione di colpi!" search="avengers" />
      </div>
    );
  }
}

export default AllGalleries;