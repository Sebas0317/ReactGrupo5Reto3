import React from "react";
import { Carousel } from "react-bootstrap";
import fondo from "../assets/foto1.png";
import "./carousel.css"

class carousel extends React.Component {
  render() {
    return (
        <div className="carouseHeader">
        <div id="controls-header" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner text-center">
          <div className="carousel-item active header">
            <div className="imgHeader mx-auto d-block" />
            <h2>Sabores que exaltan tus sentidos</h2>
          </div>
          <div className="carousel-item header">
            <div className="imgHeader mx-auto d-block" />
            <h2>Sabores que exaltan tus sentidos</h2>
          </div>
          <div className="carousel-item header">
            <div className="imgHeader mx-auto d-block" />
            <h2>Sabores que exaltan tus sentidos</h2>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#controls-header"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#controls-header"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
        </button>
      </div>
      </div>
    );
  }
}

export default carousel;
