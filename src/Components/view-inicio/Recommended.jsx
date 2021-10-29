import React from "react";
import carta from "../assets/carta.png"
import { Link } from "react-router-dom";

class Recommended extends React.Component{
  render(){
    return(
      <div className="mainCenter">
        <div className="centerLeft">
          <h2>Los recomendados del chef</h2>
          <div className="recomendaciones">
            <div className="recomendados"></div>
            <div className="recomendados"></div>
            <div className="recomendados"></div>
            <div className="recomendados"></div>
          </div>
        </div>
        <div className="centerRight">
          <img className="imgCarta" src={carta} alt="menu"/>
          <Link 
            to="/menu"
            className="btnConsultar"
            type="button"
          > Consultar el menú
          </Link>
        </div>
      </div>
    );
  }
}

export default Recommended;