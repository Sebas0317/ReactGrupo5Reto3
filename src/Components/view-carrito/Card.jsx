import React, { useState, useEffect } from "react";
import Modal from "../modal/modal";
import { useLocalStorage } from "../hooks/useLocalStorage";

function Card() {
  let [modal, setModal] = useState(false);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let list = [];
  let val = localStorage.getItem("pedidos");
  if (val) {
    list = JSON.parse(val);
  }

  //VALIDANDO NOMBRE
  function validarNombre(validar) {
    const valName = new RegExp("^[A-ZÁÉÍÓÚÑ ]+$", "i");
    let nameMensaje = document.querySelector(".valName-car");
    let nameInput = document.querySelector("#nameUser");
    if (name.length != 0) {
      nameInput.style.outline = "none";
      if (valName.test(name)) {
        nameInput.style.border = "1px solid #4BD142";
        nameMensaje.textContent = "";
        nameMensaje.style.opacity = "0";
        return true;
      } else {
        nameInput.style.border = "1px solid #C42424";
        nameMensaje.textContent = "Solo se admiten letras";
        nameMensaje.style.opacity = "1";
      }
    } else {
      nameMensaje.style.opacity = "0";
      nameMensaje.textContent = "";
      nameInput.style.outline = "";
      nameInput.style.border = "1px solid #fff";
      if (validar == true) {
        nameInput.style.border = "1px solid #C42424";
        nameMensaje.style.opacity = "1";
        nameMensaje.textContent = "Rellena este campo";
      }
      return false;
    }
  }

  // VALIDANDO EMAIL
  function validarEmail(validar) {
    const valEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let emailMensaje = document.querySelector(".valEmail-car");
    let emailInput = document.querySelector("#emailUser");
    if (email.length != 0) {
      emailInput.style.outline = "none";
      if (valEmail.test(email)) {
        emailInput.style.border = "1px solid #4BD142";
        emailMensaje.style.opacity = "0";
        return true;
      } else {
        emailInput.style.border = "1px solid #C42424";
        emailMensaje.textContent = "Ingresa un correo verdadero";
        emailMensaje.style.opacity = "1";
      }
    } else {
      emailInput.style.outline = "";
      emailMensaje.style.opacity = "0";
      emailInput.style.border = "1px solid #fff";
      if (validar == true) {
        emailInput.style.border = "1px solid #C42424";
        emailMensaje.style.opacity = "1";
        emailMensaje.textContent = "Rellena este campo";
      }
      return false;
    }
  }

  function mensaje() {
    let listPlatos = "";
    list.map(
      (plato) =>
        (listPlatos += `<b>${plato["Nombre"]}</b> <br>
      Precio unitario: $${Intl.NumberFormat().format(plato["Precio"])} <br>
      Cantidad: ${eval(plato["Total"] + "/" + plato["Precio"])} <br>
      Total: $${Intl.NumberFormat().format(plato["Total"])} <br><br>`)
    );

    let mensaje = `<b>DATOS DEL PEDIDO:</b> <br><br> 
                      <b>Cliente:</b> ${name} <br><br>  
                      <b>Platos:</b> <br> ${listPlatos}
                      <b>TOTAL DEL PEDIDO:</b> $${
                        document.querySelector(".total-car").innerHTML
                      }`;
    return mensaje;
  }
  const [id,setId] = useState(0);
  function correo() {
    if (validarNombre(true) && validarEmail(true)) {
      /*
        Juan Camilo -> 
      */
      window.localStorage.setItem('history', JSON.stringify(list));
      window.Email.send({
        SecureToken: "07760063-8f87-4c65-9a2c-42ece65d3891",
        To: email,
        From: "grupo5juventic@gmail.com",
        Subject: "Confirmación de pedido",
        Body: mensaje(),
      })
        .then(() => {
          document.querySelector(".closeModal").click();
          alert(
            "¡Pedido exitoso! Se ha enviado la confirmación a su correo electrónico"
          );
          list.splice(0, list.length);
          localStorage.setItem("pedidos", JSON.stringify(list));
          document.querySelector("#btnActualizarMenu").click();
        })
        .catch((error) => {
          alert(
            "Ha ocurrido un error al intentar enviar el pedido, disculpanos.."
          );
        });
    }
  }

  useEffect(() => {
    if (!list.length) {
      document.getElementById("finalizar").disabled = true;
    }
    validarNombre();
    validarEmail();
  });

  return (
    <div className="col-sm-4 target-car">
      <Modal isVisible={modal} setVisible={() => setModal(false)}>
        <div className="styleModal">
          <h3 className="text-center">Realizar pedido</h3>
          <div className="modal-body">
            <p className="valName-car"></p>
            <div className="form-group py-2">
              <input
                type="text"
                id="nameUser"
                className="form-control"
                name="name"
                placeholder="Nombre Completo"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <p className="valEmail-car"></p>
            <div className="form-group py-2">
              <input
                type="email"
                id="emailUser"
                className="form-control"
                name="email"
                placeholder="Correo electrónico"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="btns">
            <button className="closeModal">CANCELAR</button>
            <button onClick={() => correo()} className="btnOk">
              Ok
            </button>
          </div>
        </div>
      </Modal>
      <div className="pay-car">
        <div className="d-flex">
          <h3>TOTAL :</h3>
          <h3 className="price-car">
            {" "}
            $ <span className="total-car">0</span>{" "}
          </h3>
        </div>
        <div>
          <button
            type="button"
            className="btn"
            onClick={() => setModal(true)}
            id="finalizar"
          >
            FINALIZAR PEDIDO
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
