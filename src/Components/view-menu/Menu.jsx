import React, { Component } from "react";
import MenuContainer from "./MenuContainer";
import "./menu.css";

//Imagenes del menu
import plato1 from "../assets/menu_pl1.png"
import plato2 from "../assets/menu_pl2.jpg"
import plato3 from "../assets/menu_pl3.png"
import plato4 from "../assets/menu_pl4.png"
import plato5 from "../assets/menu_pl5.png"
import plato6 from "../assets/menu_pl6.png"
import plato7 from "../assets/menu_pl7.png"
import plato8 from "../assets/menu_pl8.jpeg"
import plato9 from "../assets/menu_pl9.jpeg"
import plato10 from "../assets/menu_pl10.jpg"
import plato11 from "../assets/menu_pl11.jpeg"
import plato12 from "../assets/menu_pl12.jpg"


class Menu extends Component {
  render(props) {
    let number = 1;
    let platos = [plato1, plato2, plato3, plato4, plato5, plato6, plato7, plato8, plato9, plato10, plato11, plato12];
    return (
      <div className="contenedorPlatos">
        <p className="title">Haz tu pedido</p>
        <div className="platos">
         {platos.map((plato)=>{
            return (
              <MenuContainer plato={plato} id={number++}/>
            )
         })}
        </div>
      </div>
    );
  }
}

export default Menu;
