import React from "react";
import Modal_eliminar from "./Modal_eliminar";

class Menu extends React.Component{
  render() {
    return(
      <>
        <div className="col-sm-8 menus-car" id="menus">
          <h1>Menú</h1>
        </div>
        <Modal_eliminar />
      </>
    );
  }
}

export default Menu;