import React from "react";
import Modal_pedido from "./Modal_pedido";

class Card extends React.Component{
  render() {
    return(
      <>
        <div className="col-sm-4 target-car">
          <div className="pay-car">
            <div className="d-flex">
              <h3>TOTAL :</h3>
              <h3 className="price-car"> $ <span className="total-car">0</span> </h3>
            </div>
            <div>
              <button 
                type="button" 
                className="btn" 
                data-bs-toggle="modal" 
                data-bs-target='#modal-pedido'
                id="finalizar">
                FINALIZAR PEDIDO
              </button>
            </div>
          </div>
        </div>
        <Modal_pedido />
      </>
    );
  }
}

export default Card;