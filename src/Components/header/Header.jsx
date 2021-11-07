import React from "react";
import Navbar from "./Navbar";
import "../styles/Header.css"
import "../styles/Footer.css"
function Header (){
    return (
      <>
        <div className="head">
          <div className="logo">
            <a href="index.html">
              <img src="" />
            </a>
          </div>
          <Navbar mandar={()=>{alert("xdd")}}/>
        </div>
      </>
    );
}

export default Header;