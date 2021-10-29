import React from "react";
import Comentario from "./Comment";
import cliente1 from "../assets/cliente1.png"
import cliente2 from "../assets/cliente2.png"
import cliente3 from "../assets/cliente3.png"

class All_comments extends React.Component{
  render(props){
    return(
      <div className="row testimony m-0">
        <div id="controls" className="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <Comentario act="carousel-item active" img={cliente2} alt="img_testimony1" nomCliente="Mario García" />
            <Comentario act="carousel-item" img={cliente1} alt="img_testimony2" nomCliente="Miguel Ospino" />
            <Comentario act="carousel-item" img={cliente3} alt="img_testimony3" nomCliente="Vanessa Montero" />
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#controls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#controls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    );
  }
}

export default All_comments;