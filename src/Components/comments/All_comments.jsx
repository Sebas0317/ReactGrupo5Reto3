import React from "react";
import Comentario from "./Comment";
import json from "../json/datos.json"
import cliente1 from "../assets/cliente1.png"
import cliente2 from "../assets/cliente2.png"
import cliente3 from "../assets/cliente3.png"

class All_comments extends React.Component{
  render(props){
    let servicios = [cliente1, cliente2, cliente3]
    return(
      <div className="row testimony m-0">
        <div id="controls" className="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {json.comentarios.map((comentario, index)=>{
              return (
                <Comentario 
                  act={index==0 ? "carousel-item active" : "carousel-item"} 
                  img={servicios[index]} 
                  user={comentario.user} 
                  comentario={comentario.comentario}
                />
              )
            })}
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