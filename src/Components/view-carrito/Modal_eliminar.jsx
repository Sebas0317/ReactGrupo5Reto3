import React from "react";

class Modal_eliminar extends React.Component{
  render() {
    return(
      <div className="modal fade" id="modal-eliminar">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Eliminar menú</h5>
              <button 
                type="button"
                className="btn-close" 
                data-bs-dismiss="modal" 
                aria-label="Close">
            </button>
            </div>
            <div className="modal-body"> 
              ¿Desea eliminar el menú <span className="nomMenu-car"></span>?
            </div>
            <div className="modal-footer">
              <button 
                type="button" 
                className="btn btn-sm px-2" 
                data-bs-dismiss="modal"> 
                CANCELAR 
              </button>
              <button 
                type="button" 
                className="btn btn-sm px-2"
                // onclick="eliminarMenu()"
                data-bs-dismiss="modal"> 
                ACEPTAR 
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal_eliminar;