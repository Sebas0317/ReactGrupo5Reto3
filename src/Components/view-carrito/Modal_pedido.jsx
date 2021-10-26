import React from "react";

class Modal_pedido extends React.Component{
  render() {
    return(
      <div className="modal fade" id="modal-pedido">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Pedido</h5>
              <button 
                type="button" 
                className="btn-close" 
                data-bs-dismiss="modal" 
                aria-label="Close">
              </button>
            </div>
            <form className="form1">
              <div className="modal-body">
                <p className="valName-car"></p>
                <div className="form-group py-2">
                  <input 
                    type="text" 
                    id="nameUser"
                    className="form-control" 
                    name="name" 
                    placeholder="Nombre Completo"
                  /> 
                </div>
                <p className="valEmail-car"></p>
                <div className="form-group py-2">
                  <input 
                    id="emailUser"
                    className="form-control" 
                    name="email" 
                    placeholder="Correo electrónico" 
                  /> 
                </div> 
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-sm px-2">Aceptar</button>
              </div>
            </form> 
          </div>
        </div>
      </div>
    );
  }
}

export default Modal_pedido;