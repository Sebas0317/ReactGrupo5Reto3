import React, { useEffect } from "react";
import "../styles/reserva.css"

export default function Reservas_cliente(){

  useEffect(()=>document.title = 'Ver reservas')

  let reservas = [1, 2, 3, 4, 5]

  return(
    <div className="container-fluid pt-5">
      <div className="row title-reservation pt-5 vstack">
        <h2 className="title-reservas ps-5">Reservaciones</h2>
      </div>
      <div className="row p-5 g-4" >
        {
          reservas.length ?
            reservas.map((reservation, index)=>{
              return (
                <div className="col-sm-4">
                  <div className="card-reservations mb-3" style={{maxWidth:'18rem'}}>
                    <div className="card-header">
                      <h6 className="m-0">Nombre</h6>
                      <div className="d-flex">
                        <i 
                          type="button"
                          title="Editar" 
                          className="fas fa-pen" 
                          style={{fontSize:'15px'}}
                          // onClick={()=>editar(index)}
                          >
                        </i>
                        <i 
                          type="button"
                          title="Eliminar" 
                          className="fas fa-trash ms-3" 
                          style={{fontSize:'15px'}}
                          // onClick={()=>delete(index)}
                          >
                        </i>
                        
                      </div>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        <b>Email :</b> Email
                      </p>
                      <p className="card-text">
                        <b>Fecha :</b> Fecha
                      </p>
                      <p className="card-text">
                        <b>Teléfono :</b> Telefono
                      </p>
                      <p className="card-text">
                        <b>Hora :</b> Hora
                      </p>
                      <p className="card-text">
                        <b>Servicio :</b> Servicio
                      </p>
                      <p className="card-text">
                        <b>Número de personas :</b> Numero
                      </p>
                      <p className="card-text">
                        <b>Solicitud especial :</b> Mensaje
                      </p>
                      <p className="card-text">
                        <b>Estado :</b> Estado
                      </p>
                    </div>
                  </div>
                </div>
              )
            })
          :
          <h4 style={{fontFamily:'Branding', height:'50vh'}} >No hay reservas</h4>
        }
      </div>
    </div>
  )
}