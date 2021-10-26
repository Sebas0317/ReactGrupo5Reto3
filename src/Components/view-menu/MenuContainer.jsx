import React, { Component } from "react";
import "./menu.css";

//Imagenes
import carrito from "../assets/carrito.svg"
import mas from "../assets/mas1.svg"

class menuContainer extends Component {
  render() {
    return (
      <div className="item">
        <img src={this.props.plato} />
        <div className="descripcion">
          <h1 className="titleItem">Lorem ipsum dolor sit amet conse.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo
          </p>
          <h2 className="titlePrecio">{this.props.precio}</h2>
        </div>
        <div className="cantidad">
          <h5 className="titleCant">CANTIDAD</h5>
          <div className="botones">
            <button onclick="restar(5)" id="btnMenos5" className="buttonMenos">
              <div className="btnMenos"></div>
            </button>
            <p id="valor5" className="valor">
              1
            </p>
            <button onclick="sumar(5)" className="buttonMas">
              <img className="imgMas" src={mas} />
            </button>
          </div>
          <button onclick="abrir(5)" className="btnAgregar">
            <img src={carrito} />
            <p>AÑADIR AL CARRITO</p>
          </button>
        </div>
      </div>
    );
  }
}

export default menuContainer;