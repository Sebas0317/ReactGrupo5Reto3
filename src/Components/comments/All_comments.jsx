import React from "react";
import {Link} from "react-router-dom";
import Comentario from "./Comment";
import json from "../json/datos.json"
import cliente1 from "../assets/cliente1.png"
import cliente2 from "../assets/cliente2.png"
import cliente3 from "../assets/cliente3.png"

class All_comments extends React.Component{

  render(props){
    let comentariosimg = [cliente1, cliente2, cliente3]

    let comentaries = JSON.parse(localStorage.getItem('comentarios'))
    
    return(
      <div className="row testimony m-0">
        <div id="controls" className="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {comentaries.map((comentario, index)=>{
              return (
                <Comentario 
                  act={index==0 ? "carousel-item active" : "carousel-item"} 
                  img={comentariosimg[index]} 
                  user={comentario.usuario} 
                  comentario={comentario.comentarioText}
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

        <div className="row gestion-ser p-5 mt-50">
          <Link type="button" className="btn" to="/gestioncomentarios">
            Gestionar Comentarios
          </Link>
        </div>
      </div>
      
    );
    
  }
}

export default All_comments;