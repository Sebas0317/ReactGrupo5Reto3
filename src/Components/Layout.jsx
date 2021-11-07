import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import "./styles/layout.css"
function Layout({children}) {

  return (
      <div className="PaginaContenedor">
       <Header/>
          <div className="PaginaContenido">{children}</div>
        <Footer/>
      </div>
  );
}

export default Layout;
