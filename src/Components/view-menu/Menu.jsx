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

  componentDidMount () {
    const script = document.createElement("script");
    script.src = "../js/menu.js";
    script.async = true;
    document.body.appendChild(script);
  }

  render(props) {
    return (
      <div className="contenedorPlatos">
        <p className="title">Haz tu pedido</p>
        <div className="platos">
          <MenuContainer plato={plato1} id="valor1" res="restar(1)" sum="sumar(1)" abr="abrir(1)" />
          <MenuContainer plato={plato2} id="valor2" res="restar(2)" sum="sumar(2)" abr="abrir(2)" />
          <MenuContainer plato={plato3} id="valor3" res="restar(3)" sum="sumar(3)" abr="abrir(3)" />
          <MenuContainer plato={plato4} id="valor4" res="restar(4)" sum="sumar(4)" abr="abrir(4)" />
          <MenuContainer plato={plato5} id="valor5" res="restar(5)" sum="sumar(5)" abr="abrir(5)" />
          <MenuContainer plato={plato6} id="valor6" res="restar(6)" sum="sumar(6)" abr="abrir(6)" />
          <MenuContainer plato={plato7} id="valor7" res="restar(7)" sum="sumar(7)" abr="abrir(7)" />
          <MenuContainer plato={plato8} id="valor8" res="restar(8)" sum="sumar(8)" abr="abrir(8)" />
          <MenuContainer plato={plato9} id="valor9" res="restar(9)" sum="sumar(9)" abr="abrir(9)" />
          <MenuContainer plato={plato10} id="valor10" res="restar(10)" sum="sumar(10)" abr="abrir(10)" />
          <MenuContainer plato={plato11} id="valor11" res="restar(11)" sum="sumar(11)" abr="abrir(11)" />
          <MenuContainer plato={plato12} id="valor12" res="restar(12)" sum="sumar(12)" abr="abrir(12)" />
        </div>
      </div>
    );
  }
}

export default Menu;
