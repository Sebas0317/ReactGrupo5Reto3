import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo1.png"
import carrito from "./assets/carrito.svg"
import inicio from "./inicio";

class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="navbar-index">
          <div className="logo">
            <Link to="/inicio">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="nav-link text-light" >
            <Link to="/">Nosotros</Link>
            <Link to="/">EL MENU</Link>
            <Link to="/">SERVICIOS</Link>
            <Link to="/">RESERVAS</Link>
          </div>
          <div className="carrito">
            <Link to="/">
              <img className="imgCar" src={carrito} />
              </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
