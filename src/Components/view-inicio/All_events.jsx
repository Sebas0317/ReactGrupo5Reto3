import React from "react";
import Evento from "./Event";
import ico1 from "../assets/ico1.png"
import ico2 from "../assets/ico2.png"
import ico3 from "../assets/ico3.png"
import ico4 from "../assets/ico4.png"

class All_event extends React.Component{
  render(props){
    return(
      <div className="mainBottom">
        <h2>Organizamos tu evento</h2>
        <div className="eventos">
          <Evento ico={ico1} titulo="Fiestas tematicas" />
          <Evento ico={ico2} titulo="Matrimonios" />
          <Evento ico={ico3} titulo="Cenas empresariales" />
          <Evento ico={ico4} titulo="Cumpleaños" />
        </div>
      </div>
    );
  }
}

export default All_event;