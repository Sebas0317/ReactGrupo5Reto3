import React, {useState, useEffect} from "react";
import "./styles/reserva.css";

export default function Reserva() {
	let button = document.querySelector(".btnReserva");

	let [name, setName] = useState("");
	let [tel, setTel] = useState("");
	let [email, setEmail] = useState("");
	let [personas, setPersonas] = useState("");
	let [fecha, setFecha] = useState("");

	useEffect(()=>{

		//VALIDANDO NOMBRE
		const valName = new RegExp('^[A-ZÁÉÍÓÚÑ ]+$', 'i');
		let nameInput = document.querySelector(".name");
		if (name.length != 0) {
			nameInput.style.outline="none";
			if (valName.test(name)){
				nameInput.style.border="1px solid #4BD142"
			} else {
				nameInput.style.border="1px solid #C42424"
			}
		}else {
			nameInput.style.outline="";
			nameInput.style.border="1px solid #fff"
		}

		// VALIDANDO TELEFONO
		const valNum = /^[0-9]+$/;
		let telInput = document.querySelector(".tel");
		if (tel.length != 0){
			telInput.style.outline="none";
			if (valNum.test(tel)) {
				telInput.style.border="1px solid #4BD142";
			} else {
				telInput.style.border="1px solid #C42424";
			}
		} else {
			telInput.style.outline="";
			telInput.style.border="1px solid #fff"
		}

		// VALIDANDO EMAIL
		const valEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		let emailInput = document.querySelector(".email");
		if (email.length != 0) {
			emailInput.style.outline="none";
			if (valEmail.test(email)){
				emailInput.style.border="1px solid #4BD142"
			} else {
				emailInput.style.border="1px solid #C42424"
			}
		} else {
			emailInput.style.outline="";
			emailInput.style.border="1px solid #fff";
		}

		//VALIDANDO CANTIDAD DE PERSONAS
		let personasInput = document.querySelector(".personas");
		if (personas.length != 0) {
			personasInput.style.outline="none"
			if (valNum.test(personas)){
				if (personas > 0 && personas <= 25) {
					personasInput.style.border="1px solid #4BD142"
				} else {
					personasInput.style.border="1px solid #C42424"
				}
			} else {
				personasInput.style.border="1px solid #C42424"
			}
		} else {
			personasInput.style.outline=""
			personasInput.style.border="1px solid #fff"
		}

		//VALIDANDO FECHA


	});

	function validar (e){
		e.preventDefault();
		alert("enviado");
	}

	return (
		<div className="contenedorReserva">
			<h2>Reserva</h2>
			<form className="formReserva">
				<input onChange={(e) => setName(e.target.value)} className="name" placeholder="Nombre completo"/>
				<div className="espacio"/>
				<input className="tel" type="tel" onChange={(e) => setTel(e.target.value)} placeholder="Numero de contacto"/>
				<div className="espacio"/>
				<input className="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Correo electronico"/>
				<div className="espacio"/>
				<div>
					<label className="label">Cantidad de personas</label>
					<input className="inputLargo personas" type="number" max="25" min="1" onChange={(e)=>setPersonas(e.target.value)}/>
				</div>
				<div className="espacio"/>
				<div>
					<label className="label">Fecha de la reserva</label>
					<input className="inputLargo fecha" onChange={(e)=>setFecha(e.target.value)}  type="date"/>
				</div>
				<div className="espacio"/>
				<div>
 					<label className="label">Servicio</label>
					<select className="inputLargo">
						<option disabled selected>Selecciona un servicio</option>
						<option>Celebracion de cumple años</option>
						<option>Aniversarios</option>
						<option>Fiestas infantiles</option>
						<option>Declaraciones o propuestas</option>
						<option>Despedidas</option>
						<option>Cena con amigos</option>
					</select>
				</div>
				<div className="espacio"/>
				<textarea placeholder="Escribe tu comentario y/o solicitud" cols="30" rows="5"/>
				<div className="espacio"/>
				<div>
					<input type="checkbox"/>
					<label>Acepto la politica de tratamiento de datos</label>
				</div>
				<div className="espacio"/>
				<button type="submit" onClick={validar} className="btnReserva">Enviar</button>
			</form>
		</div>
	)
}