import React from "react";
import Service from "./Service";

/*FOTOS*/
import Cumple from "../assets/serv_cumple.png"
import Aniversarios from "../assets/serv_aniversario.png"
import Infantil from "../assets/serv_infantil.png"
import Propuestas from "../assets/serv_propuesta.png"
import Despedidas from "../assets/serv_despedida.png"
import Amigos from "../assets/serv_amigos.png"
import json from "../json/datos.json"

class All_Services extends React.Component{
  render(props){
    let servicios = [Cumple, Aniversarios, Infantil, Propuestas, Despedidas, Amigos]
    return(
      <>
      <div className="row services g-3 m-0 py-4 px-5">
        {json.servicios.map((servicio, index)=>{
          return (
            <Service 
              imagen={servicios[index]} 
              nombre={servicio.nombre}
              descripcion={servicio.descripcion}
            />
          )
        })}
      </div>
      <div className="row gestion-ser p-5">
        <a type="button" className="btn" href="/gestionservicios">
          Gestionar Servicios
        </a>
      </div>
      </>
    );
  }
}

export default All_Services;