import React from "react";
import Navbar from "./Navbar";
import "./styles/Header.css"
import "./styles/Footer.css"
class Header extends React.Component {
  render() {
    return (
      <>
        <div className="head">
          <div className="logo">
            <a href="index.html">
              <img src="" />
            </a>
          </div>
          <Navbar />
        </div>
      </>
    );
  }
}

export default Header;