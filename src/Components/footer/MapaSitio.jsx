import React from "react";

function MapaSitio() {
  return(
    <div id="mapasitio" style={{display:"none"}}>
      <div className="mapa">
        <table style={{width:"100%"}}>
          <tr>
            <th><h4><a href="/">Inicio</a></h4></th>
            <th><h4><a href="/nosotros">Nosotros</a></h4></th>
            <th><h4><a href="/servicios">Servicios</a></h4></th>
            <th><h4><a href="/menu">Menú</a></h4></th>
            <th><h4><a href="/reserva">Reservas</a></h4></th>
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
        </table>
      </div>
    </div>
  );
}

export default MapaSitio;