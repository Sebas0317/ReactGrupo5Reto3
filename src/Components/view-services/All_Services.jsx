import React from "react";
import Service from "./Service";
import {Link} from "react-router-dom";

/*FOTOS*/
import Cumple from "../assets/serv_cumple.png";
import Aniversarios from "../assets/serv_aniversario.png";
import Infantil from "../assets/serv_infantil.png";
import Propuestas from "../assets/serv_propuesta.png";
import Despedidas from "../assets/serv_despedida.png";
import Amigos from "../assets/serv_amigos.png";
import json from "../json/datos.json";

class All_Services extends React.Component {
  render(props) {
    let servicios = [
      Cumple,
      Aniversarios,
      Infantil,
      Propuestas,
      Despedidas,
      Amigos,
    ];

    let session = JSON.parse(localStorage.getItem("session"));
    
    let infoservices = false;

    if (!localStorage.getItem("servicios")) {
      localStorage.setItem("servicios", JSON.stringify(json.servicios));
      infoservices = json.servicios;
    } else {
      infoservices = JSON.parse(localStorage.getItem("servicios"));
    }

    return (
      <>
        <div className="row services g-3 m-0 py-4 px-5">
          {infoservices.length ?
            infoservices.map((servicio, index) => {
              return (
                <Service
                  imagen={servicios[index]}
                  nombre={servicio.nombre}
                  descripcion={servicio.descripcion}
                />
              );
            }):
            <p style={{ fontSize: "30px", fontFamily:"Branding" }}>No hay servicios disponibles</p>
          }
        </div>
        <div className="row gestion-ser p-5">
          { session.user.rol == "admin" &&
            <Link type="button" className="btn" to="/gestionservicios">
            Gestionar Servicios
          </Link>}
        </div>
      </>
    );
  }
}

export default All_Services;
