import React from "react";
import Service from "./Service";
import Cumple from "../assets/serv_cumple.png"
import Aniversarios from "../assets/serv_aniversario.png"
import Infantil from "../assets/serv_infantil.png"
import Propuestas from "../assets/serv_propuesta.png"
import Despedidas from "../assets/serv_despedida.png"
import Amigos from "../assets/serv_amigos.png"

class All_Services extends React.Component{
  render(props){
    return(
      <div className="row services g-3 m-0 py-4 px-5">
        <React.Fragment>
          <Service imgagen={Cumple} titulo="Celebración de cumpleaños" alt="img_cumple" />
          <Service imgagen={Aniversarios} titulo="Aniversarios" alt="img_aniversario" />
          <Service imgagen={Infantil} titulo="Fiestas infantiles" alt="img_infantil" />
          <Service imgagen={Propuestas} titulo="Declaraciones o propuestas" alt="img_propuesta" />
          <Service imgagen={Despedidas} titulo="Despedidas" alt="img_despedida" />
          <Service imgagen={Amigos} titulo="Cena con amigos" alt="img_amigos" />
        </React.Fragment>
      </div>
    );
  }
}

export default All_Services;