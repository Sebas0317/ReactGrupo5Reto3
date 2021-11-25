import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Modal from "../modal/modal.js";
import json from "../json/datos.json";
import ico_basura from "../assets/car-ico-basura.svg";
import ico_edit from "../assets/ad-ser-edit.svg";
import "../styles/Footer.css"

let footerInfo = json.footer;
if (!localStorage.getItem("footerInfo")) {
  localStorage.setItem("footerInfo", JSON.stringify(footerInfo));
} else {
  footerInfo = JSON.parse(localStorage.getItem("footerInfo"));
}

localStorage.setItem("footerInfo", JSON.stringify(footerInfo));
export default function Admin_Footer() {
  return (
    //map the footerInf
    <div className="container-fluit pt-4 my-5">
      <div className="row mt-5 mx-0 p-0">
        <div className="col-sm-12 top-serv ps-5 pe-1">
          <p className="title-InfoFoo">Gestión de Informacion</p>
        </div>
        <div className="d-block align-items-center justify-content-between">
        <div className="d-flex justify-content-end infoFoo">
           
          </div>
          <h3 className="col-sm-12 top-serv ps-5 pe-1" id="nombreServicioh3">
          Restaurante Sal y Salsa Ltda.
          </h3>
          <h3 className="col-sm-12 top-serv ps-5 pe-1" id="nombreServicioh3">
          Calle 19 No. 7 - 30, Bogotá
          </h3>
          <h3 className="col-sm-12 top-serv ps-5 pe-1" id="nombreServicioh3">
          reservas@salysalsa.com
          </h3>
          <h3 className="col-sm-12 top-serv ps-5 pe-1" id="nombreServicioh3">
          312 325 25 321
          </h3>
          
        </div>
        <div className="row gestion-foo pt-4">
          <button type="button" className="btn">
            Actualizar información
          </button>
          
        </div>
      </div>
    </div>
  );
}
