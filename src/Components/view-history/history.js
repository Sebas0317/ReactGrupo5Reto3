import react, { useState } from "react";
import MenuContainer from "../view-menu/MenuContainer";
import "../styles/menu.css";
function History() {
  const listPlatos = JSON.parse(window.localStorage.getItem("history"));
  return (
    <>
      <div className="row">
        <div className="header-car pt-5 my-5">
          <p className="title-car ps-5">Historial de compras</p>
        </div>
      </div>

      <div className="platos">
        {listPlatos.length ? (
          listPlatos.map((plato) => {
            return (
              <>
                <div className="item">
                  <img src={plato.Foto} style={{width:'15em',height:'auto'}} alt="img-plato" />
                  <div className="descripcion">
                    <h1 className="titleItem">{plato.Nombre}</h1>
                    <p></p>
                    <h2 className="titlePrecio">
                      {" "}
                      $ {Intl.NumberFormat().format(plato.Precio)}
                    </h2>
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <h2 className="text">No hay historial disponibles</h2>
        )}
      </div>
    </>
  );
}

export default History;
