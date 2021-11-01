import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo1.png"
import carrito from "./assets/carrito.svg"

class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="navbar-index">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="nav-link text-light" >
            <Link to="/nosotros">NOSOTROS</Link>
            <Link to="/Menu">EL MENU</Link>
            <Link to="/servicios">SERVICIOS</Link>
            <Link to="/reserva">RESERVAS</Link>
            <Link className="pocoMargin" to="/carrito">
              <img className="imgCar" src={carrito} />
            </Link>
            <Link className="pocoMargin" to="/login">LOGIN</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
