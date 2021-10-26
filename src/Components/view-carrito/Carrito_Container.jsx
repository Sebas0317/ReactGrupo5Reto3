import React from "react";
import "../styles/carrito.css"
import Body from "./Body";
import Social from "../social/Social"

class Carrito_Container extends React.Component{
  render() {
    return(
      <main>
        <React.Fragment>
          <Social />
          <Body />
        </React.Fragment>
      </main>
    );
  }
}

export default Carrito_Container;