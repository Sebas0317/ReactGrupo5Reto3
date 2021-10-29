import React from "react";
import { Carousel } from "react-bootstrap";
import "./commentaries.css";
import cliente from "../assets/cliente1.png";

class Comentarios extends React.Component {
  render() {
    return (
      <div class="row testimony m-0">
        <div
          id="controls"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row text-center p-5">
                <div className="col-sm-4">
                  <img
                    className="rounded-circle"
                    src={cliente}
                    alt="img_testimony"
                  />
                </div>
                <div className="col-sm-6 d-flex align-items-center">
                  <p className="fs-6 m-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum vitae similique illum id dolores quos non pariatur
                    sapiente voluptates earum, atque numquam iure deleniti
                    explicabo modi perspiciatis accusantium aliquam dolor!
                    <br />
                    <span className="blockquote-footer">Mario García</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row text-center p-5">
                <div className="col-sm-4">
                  <img
                    className="rounded-circle"
                    src={cliente}
                    alt="img_testimony2"
                  />
                </div>
                <div className="col-sm-6 d-flex align-items-center">
                  <p className="fs-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum vitae similique illum id dolores quos non pariatur
                    sapiente voluptates earum, atque numquam iure deleniti
                    explicabo modi perspiciatis accusantium aliquam dolor!
                    <br />
                    <span className="blockquote-footer">Vanessa Montero</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row text-center p-5">
                <div className="col-sm-4">
                  <img
                    className="rounded-circle"
                    src={cliente}
                    alt="img_testimony3"
                  />
                </div>
                <div className="col-sm-6 d-flex align-items-center">
                  <p className="fs-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum vitae similique illum id dolores quos non pariatur
                    sapiente voluptates earum, atque numquam iure deleniti
                    explicabo modi perspiciatis accusantium aliquam dolor!
                    <br />
                    <span className="blockquote-footer">Miguel Ospino</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#controls"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#controls"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
          </button>
        </div>
      </div>
    );
  }
}

export default Comentarios;
