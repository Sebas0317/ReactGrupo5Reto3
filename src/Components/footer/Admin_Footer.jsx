import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Modal from "../modal/modal.js";
import json from "../json/datos.json";

let footerInfo = json.footer[0];
if (!localStorage.getItem("footerInfo")) {
  localStorage.setItem("footerInfo", JSON.stringify(footerInfo));
} else {
  footerInfo = JSON.parse(localStorage.getItem("footerInfo"));
}


localStorage.setItem("footerInfo", JSON.stringify(footerInfo));
export default function Admin_Footer() {
  useEffect(()=>document.title = 'Gestión de informacion');
  return (
      <div className="container-fluit pt-4 my-5">
      <div className="row mt-5 mx-0 p-0">
    <div className="col-sm-12 top-serv ps-5 pe-1">
      <p className="title-Adserv">Gestión de Información</p>
    </div>
  </div>
  </div>
  )
}