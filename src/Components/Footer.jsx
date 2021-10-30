import React, { Component } from "react";
import logofooter from "./assets/logo.png";
import "./styles/Footer.css"
class Footer extends Component {
  render() {
    return (
      <div>
      <footer>
        <div className="img-foot">
          <img src={logofooter} alt="sal&salsa" width="320px" />
        </div>
        <div className="lista-footer">
          <div className="datos-footer">
            <li>
              <a href="javascript:mostrarMapaSitio();"> MAPA DEL SITIO</a>
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
              <li>Restaurante Sal y Salsa Ltda.</li>
              <li>Calle 19 No. 7 - 30, Bogotá</li>
              <li>reservas@salysalsa.com</li>
              <li>312 325 25 321</li>
            </div>
            <div className="copy">
              <p className="m-0">© 2020 all rights reserved</p>
            </div>
          </div>
          <div id="mapasitio" style={{ display: "none" }}>
            <div className="mapa">
              <table style={{ width: "100%" }}>
                <tbody>
                  <tr>
                    <th>
                      <h4>
                        <a href="/">Inicio</a>
                      </h4>
                    </th>
                    <th>
                      <h4>
                        <a href="/nosotros">Nosotros</a>
                      </h4>
                    </th>
                    <th>
                      <h4>
                        <a href="/servicios">Servicios</a>
                      </h4>
                    </th>
                    <th>
                      <h4>
                        <a href="/menu">Menú</a>
                      </h4>
                    </th>
                    <th>
                      <h4>
                        <a href="/reserva">Reservas</a>
                      </h4>
                    </th>
                  </tr>
                  <tr className="contenido">
                    <th>
                      <ul className="list">
                        <li>Presentación</li>
                        <li>Propuesta</li>
                        <li>Menús</li>
                        <li>Eventos</li>
                        <li>Testimonios</li>
                      </ul>
                    </th>
                    <th>
                      <ul className="list">
                        <li>Historia</li>
                        <li>Equipo</li>
                        <li>Testimonios</li>
                      </ul>
                    </th>
                    <th>
                      <ul className="list">
                        <li>Servicios</li>
                        <li>Reservas</li>
                      </ul>
                    </th>
                    <th>
                      <ul className="list">
                        <li>Platos</li>
                        <li>Pedidos</li>
                      </ul>
                    </th>
                    <th>
                      <ul className="list">
                        <li>Información</li>
                        <li>Formulario</li>
                      </ul>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
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
      </div>
    );
  }
}

export default Footer;
