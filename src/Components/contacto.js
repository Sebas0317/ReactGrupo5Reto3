import React from "react";
import "./styles/contacto.css";

export default function Contacto (){
	return (
		<div className="contenedor">
		<div className="parrafo">
        <p className="titulo">Contáctanos</p>
        <p>
          Simplemente el texto de relleno de las imprentas y archivos de texto.
          Lorem Ipsum ha sido el texto de relleno estándar de las industrias
          desde el año 1500, cuando un impresor (N. del T. persona que se dedica
          a la imprenta) desconocido usó una galería de textos y los mezcló de
          tal manera que logró hacer un libro de textos especimen. No sólo
          sobrevivió 500 años, sino que tambien ingresó como texto de relleno en
          documentos electrónicos, quedando esencialmente igual al original. Fue
          popularizado en los 60s con la creación de las hojas "Letraset", las
          cuales contenian pasajes de Lorem Ipsum, y más recientemente con
          software de autoedición, como por ejemplo Aldus PageMaker, el cual
          incluye versiones de Lorem Ipsum.
        </p>
      </div>
      <div className="formulario">
        <section className="form-register">
          <form method="post" action="#">
             <input
              className="controls"
              minlength="3"
              maxlength="40"
              type="text"
              name="apellidos"
              id="apellidos"
              placeholder="Nombre Completo"
              required=""
              pattern="[a-zA-Z]+"
            />
             <input
              className="controls"
              minlength="5"
              maxlength="20"
              type="email"
              name="correo"
              id="correo"
              placeholder="Correo electronico"
              required=""
            />
            <input
              className="controls"
              placeholder="Telefono"
            />
            <input
              className="controls"
              minlength="5"
              maxlength="20"
              type="text"
              name="asunto"
              id="nombres"
              placeholder="Asunto"
              required=""
              pattern="[a-zA-Z]+"
            />
            <select className="controls">
              <option selected disabled>Tipo de mensaje</option>
              <option>Comentario</option>
              <option>Solicitud</option>
            </select>
            <textarea
              className="controls"
              minlength="5"
              maxlength="50"
              name="textoArea"
              id="textoArea"
              placeholder="Su mensaje"
              required=""
            ></textarea>
            <input type="checkbox" name="terminos" required=""/>
              <label for="terminos"> Acepta terminos y condiciones</label
            >
            <input className="botons btn-color" type="submit" value="Registrar" />
          </form>
        </section>
      </div>
    </div>
		)
}