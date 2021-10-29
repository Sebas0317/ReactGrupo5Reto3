import React from "react";
import "../styles/inicio.css"
import Carousel from "./Carousel"
import Propuesta from "./OurProposal"
import Recomendados from "./Recommended"
import Eventos from "./All_events"
import Comentarios from "./All_comments"


class Inicio_Container extends React.Component{
  render(){
    return(
      <div className="container-fluid p-0 m-0 ">
        <React.Fragment>
          <Carousel />
          <main className="main">
            <Propuesta />
            <Recomendados />
            <Eventos />
            <Comentarios />
          </main>
        </React.Fragment>
      </div>
    );
  }
}

export default Inicio_Container;