import React, { Component } from 'react'
import NosotrosC from "./NosotrosC"
import Empleados from "./Empleados"
import Comentarios from "../comments/All_comments"
import Social from '../social/Social'
import "../styles/nosotros.css";

class Nosotros extends Component {
  componentDidMount(){document.title = 'Nosotros'}
  render() {
    return (
      <div className="contenedorNos">
        <div className="container-fluid p-0">
          <Social />
          <NosotrosC />
          <Empleados />
          <Comentarios /> 
        </div>
      </div>
    )
  }
}

export default Nosotros;
