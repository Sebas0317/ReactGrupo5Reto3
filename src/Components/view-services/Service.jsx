import React from "react";

function Service({imagen,nombre, descripcion}){
  
  return(
      <div className="col-sm-6">
        <div className="row service m-0 p-0 h-100">
          <div className="col-sm-6 p-0 img-serv">
            <img src={imagen} alt="img-servicio" />
          </div>
          <div className="col-sm-6 d-grid gap-2 m-0 p-3">
            <h3>{nombre}</h3> 
            <p>
              {descripcion}
            </p>
            <a className="btn btn-sm h-300" href="/reserva">
              Reservar
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default Service;