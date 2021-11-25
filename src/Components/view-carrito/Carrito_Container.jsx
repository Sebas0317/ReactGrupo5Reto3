import React from "react";
import "../styles/carrito.css"
import Body from "./Body";
import Social from "../social/Social"

class Carrito_Container extends React.Component{
  componentDidMount(){document.title = 'Carrito'}
  render() {
    return(
      <main className="pt-5 my-5">
        <React.Fragment>
          <Social />
          <Body />
        </React.Fragment>
      </main>
    );
  }
}

export default Carrito_Container;