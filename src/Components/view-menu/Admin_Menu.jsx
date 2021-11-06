import React, { Component } from "react";
import "./admin.css";

function Admin_Menu(){
  
    return (
      <div className="row mt-5 mx-0 p-0">
        <div className="col-sm-12 top-serv ps-5 pe-1">
          <p className="title-Adserv">Gestión de Menú</p>
          <div className="editdelete">
          <div className="row gestion-ser p-5">
            <a type="button" className="btn" onClick="()">
              Agregar Plato
            </a>
          </div>
          <div className="row gestion-ser p-5">
            <a type="button" className="btn">
              Eliminar Plato
            </a>
          </div>
          </div>
        </div>
      </div>
    );
  
}

export default Admin_Menu;
