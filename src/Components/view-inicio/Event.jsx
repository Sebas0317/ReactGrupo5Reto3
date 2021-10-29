import React from "react";
import { Link } from "react-router-dom";
import icoMas from "../assets/mas.svg"

class Event extends React.Component{
  render(props){
    return(
      <div className="opcion">
        <img className="opImg1" src={this.props.ico} />
        <h3>{this.props.titulo}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          incidunt enim sed mollitia tempore quisquam delectus esse fugit
          nesciunt adipisci molestias sit ipsum assumenda, quidem illum
          doloremque modi illo ullam!
        </p>
        <Link to="/contacto">
          <img className="opImg2" src={icoMas} />
        </Link>
      </div>
    );
  }
}

export default Event;