import React from "react";

class Carousel extends React.Component{
  render(){
    return(
      <header>
        <div id="controls-header" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner text-center">
            <div className="carousel-item active header">
              <div className="imgHeader mx-auto d-block"></div>
              <h2>Sabores que exaltan tus sentidos</h2>
            </div>

            <div className="carousel-item header">
              <div className="imgHeader mx-auto d-block"></div>
              <h2>Sabores que exaltan tus sentidos</h2>
            </div>

            <div className="carousel-item header">
              <div className="imgHeader mx-auto d-block"></div>
              <h2>Sabores que exaltan tus sentidos</h2>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#controls-header" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#controls-header" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </header>
    );
  }
}

export default Carousel;