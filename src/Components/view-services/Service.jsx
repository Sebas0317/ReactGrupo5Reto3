import React from "react";

class Service extends React.Component{
  render(props){
    return(
      <div className="col-sm-6">
        <div className="row service m-0 p-0">
          <div className="col-sm-6 p-0 img-serv">
            <img src={this.props.imgagen} alt="img-servicio" />
          </div>
          <div className="col-sm-6 d-grid gap-2 m-0 p-3">
            <h3>{this.props.nombre}</h3> 
            <p>
              {this.props.descripcion}
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