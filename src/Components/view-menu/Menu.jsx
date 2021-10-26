import React, { Component } from "react";
import "./menu.css";
import MenuContainer from "./MenuContainer";

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
  render() {
    return (
      <div className="contenedorPlatos">
        <p className="title">Haz tu pedido</p>
        <div className="platos">
          <MenuContainer plato={plato1} precio="10000" />
          <MenuContainer plato={plato2}precio="10000" />
          <MenuContainer plato={plato3}precio="10000" />
          <MenuContainer plato={plato4}precio="10000" />
          <MenuContainer plato={plato5}precio="10000" />
          <MenuContainer plato={plato6}precio="10000" />
          <MenuContainer plato={plato7}precio="10000" />
          <MenuContainer plato={plato8}precio="10000" />
          <MenuContainer plato={plato9}precio="10000" />
          <MenuContainer plato={plato10}precio="10000" />
          <MenuContainer plato={plato11}precio="10000" />
          <MenuContainer plato={plato12}precio="10000" />
        </div>
      </div>
    );
  }
}

export default Menu;
