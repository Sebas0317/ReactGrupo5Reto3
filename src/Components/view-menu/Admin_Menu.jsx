import React, { Component } from "react";
import "../styles/admin.css";
import json from "../json/datos.json"
import ico_basura from "../assets/car-ico-basura.png";
import ico_edit from "../assets/ad-ser-edit.png";

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

function Admin_Menu(){
  
  let platos = [plato1, plato2, plato3, plato4, plato5, plato6, plato7, plato8, plato9, plato10, plato11, plato12];
    return (
      <div className="contenedorPlatos">
        <p className="title-AdMenu">Gestión de menús</p>
        <div className="row m-0">
          {json.platos.map((plato, index)=>{
            return (
              <div className="col-sm-6 d-flex mb-4 item-Ad">
                <img className="w-50 h-100" src={platos[index]} alt="img-plato"/>
                <div className="descripcion-Ad">
                  <div className="d-flex align-items-center justify-content-between">
                    <h2 className="titleItem">{plato.nombre}</h2>
                    <div className="d-flex justify-content-end">
                      <img
                        src={ico_edit}
                        type="button"
                        id="editarBtn"
                        alt="img_edit"
                        width="25"
                        height="25"
                        className="mx-2"
                      />
                      <img
                        src={ico_basura}
                        type="button"
                        id="eliminarBtn"
                        alt="img_trash"
                        width="25"
                        height="25"
                      />
                    </div>
                  </div>
                  <p>
                    {plato.descripcion}
                  </p>
                  <h3 className="titlePrecio"> $ {Intl.NumberFormat().format(plato.precio)}</h3>
                </div>
              </div>
            )
          })}
        </div>
        <div className="row gestion-menu p-5">
          <a type="button" className="btn" href="#">
            Agregar menú
          </a>
        </div>
      </div>
    );
  
}

export default Admin_Menu;
