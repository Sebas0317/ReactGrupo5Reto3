import React from "react";
import "./styles/contacto.css";

export default function Contacto (){
	return (
		<div>
		<div class="parrafo">
        <p class="titulo">Contáctanos</p>
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
      <div class="formulario">
        <section class="form-register">
          <form method="post" action="#">
            <select class="controls">
              <option selected disabled>Seleccione un valor</option>
              <option>Celebracion de cumpleaños</option>
              <option>Aniversarios</option>
              <option>Fiestas infantiles</option>
              <option>Declaraciones o propuestas</option>
              <option>Despedidas</option>
              <option>Cena con amigos</option>
            </select>
            <input
              class="controls"
              minlength="5"
              maxlength="20"
              type="text"
              name="asunto"
              id="nombres"
              placeholder="Asunto"
              required=""
              pattern="[a-zA-Z]+"
            />
            <input
              class="controls"
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
              class="controls"
              minlength="5"
              maxlength="20"
              type="email"
              name="correo"
              id="correo"
              placeholder="Correo electronico"
              required=""
            />
            <textarea
              class="controls"
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
            <input class="botons btn-color" type="submit" value="Registrar" />
          </form>
        </section>
      </div>
    </div>
		)
}