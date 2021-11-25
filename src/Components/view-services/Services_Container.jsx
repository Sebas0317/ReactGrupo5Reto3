import React from "react";
import "../styles/servicios.css";
import Information from "./Information";
import All_Services from "./All_Services";
import Social from "../social/Social";

class Services_Container extends React.Component{
  componentDidMount(){document.title = 'Servicios'}
  render(){
    return(
      <main>
        <div className="container-fluit pt-4 my-5">
          <React.Fragment>
            <Social />
            <Information />
            <All_Services />
          </React.Fragment>
        </div>
      </main>
    );
  }
}

export default Services_Container;