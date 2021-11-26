import React, {useEffect, useState } from "react";
import logofooter from "../assets/logo.png";
import "../styles/Footer.css"
import MapaSitio from "./MapaSitio";
import json from "../json/datos.json";

export default function Footer () {

    function mostrarMapaSitio() {
      let mapaSitio = document.querySelector('#mapasitio');
    
      if (mapaSitio.style.display == 'none') {
    
        mapaSitio.style.display = '';
    
        let lista = document.querySelector('.lista-footer');
        lista.style.width = '100%';
    
        let cont = document.querySelector('#contactos');
        cont.style.display= 'none';
    
        let mapa = document.querySelector('#mapa');
        mapa.style.display = 'none';
      } else {
        cerrar();
      }
    }
    
    function cerrar() {
      let mapaSitio = document.querySelector('#mapasitio');
      mapaSitio.style.display = 'none';
    
      let cont = document.querySelector('#contactos');
      cont.style.display= '';
    
      let mapa = document.querySelector('#mapa');
      mapa.style.display = '';
    }

    let [footerInfo, setFooterInfo] = useState([]);

    useEffect(()=>{
      fetch("https://avilap.herokuapp.com/api/footer",{
        method:"GET"
      })
      .then((response)=>response.json())
      .then((data)=>{
        setFooterInfo(data[0]);
      })
      .catch((err)=>{

      })
    },[])

  return (
      <footer>
        <div className="img-foot">
          <img src={logofooter} alt="sal&salsa" width="320px" />
        </div>
        <div className="lista-footer">
          <div className="datos-footer">
            <li>
              <a type="button" onClick={()=>mostrarMapaSitio()}> MAPA DEL SITIO </a>
            </li>
            <li>
              <a href="/contacto"> CONTACTANOS</a>
            </li>
            <li>
              <a href="/reserva"> RESERVAS</a>
            </li>
          </div>
          <div id="contactos">
            <div className="contactos-footer">
              <li>{footerInfo.restaurante}</li>
              <li>{footerInfo.direccion}</li>
              <li>{footerInfo.email}</li>
              <li>{footerInfo.telefono}</li>
            </div>
            <div className="copy">
              <p className="m-0">© 2020 all rights reserved</p>
            </div>
          </div>
          
          <MapaSitio />
        </div>

        <div className="map-footer" id="mapa">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.934234432425!2d-74.07400785034109!3d4.605797243740843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a1f30307cf%3A0xf863232d4608bc5b!2zQ2wuIDE5ICM3LTMwLCBCb2dvdMOh!5e0!3m2!1ses!2sco!4v1631394323994!5m2!1ses!2sco"
            width="400px"
            height="240px"
            margin-top="25px"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </footer>
    );
  }
