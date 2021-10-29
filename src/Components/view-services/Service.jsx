import React from "react";

class Service extends React.Component{
  render(props){
    return(
      <div className="col-sm-6">
        <div className="row service m-0 p-0">
          <div className="col-sm-6 p-0 img-serv">
            <img src={this.props.imgagen} alt={this.props.alt} />
          </div>
          <div className="col-sm-6 d-grid gap-2 m-0 p-3">
            <h3>{this.props.titulo}</h3> 
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus suscipit ut blanditiis 
              perspiciatis dolores quod hic quas, minima at excepturi aut voluptates in eveniet nisi. 
              Nihil cumque doloribus facilis.
            </p>
            <a className="btn btn-sm p-2" href="/reserva">
              Reservar
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Service;