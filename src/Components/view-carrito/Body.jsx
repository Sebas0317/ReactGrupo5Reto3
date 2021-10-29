import React from "react";
import All_menus from "./All_menus";
import Card from "./Card";

class Body extends React.Component{
  render() {
    return(
      <>
        <div className="row">
          <div className="header-car">
            <p className="title-car ps-5">Carrito de compra</p>
          </div>
        </div>

        <div className="row px-5">
          <All_menus />
          <Card />
        </div>

        <div className="row buy-car p-5">
          <a type="button" className="btn" href="/menu">
            CONTINUAR COMPRANDO
          </a>
        </div>
      </>
    );
  }
}

export default Body;