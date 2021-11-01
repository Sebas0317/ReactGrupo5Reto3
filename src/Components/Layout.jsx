import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./styles/layout.css"
function Layout(props) {
  return (
      <div className="PaginaContenedor">
       <Header/>
          <div className="PaginaContenido">{props.children}</div>
        <Footer/>
      </div>
  );
}

export default Layout;
