import React, {useState, useEffect} from "react";
import "../styles/reserva.css";
import {useHistory} from "react-router-dom";
import Modal from "../modal/modal";
import Ok from "../assets/incorrecto.png";

export default function Reserva() {
	let button = document.querySelector(".btnReserva");
	let user = []
	let valSession = localStorage.getItem("session");
	if (valSession)
		user = JSON.parse(valSession);

	let history = useHistory();

	let [name, setName] = useState(valSession && user.estado ? user.user.name : "");
	let [tel, setTel] = useState("");
	let [email, setEmail] = useState(valSession && user.estado ? user.user.email : "");
	let [personas, setPersonas] = useState("");
	let [fecha, setFecha] = useState("");
	let [hora, setHora] = useState("");
	let [servicio, setServicio] = useState("");
	let [comentario, setComentario] = useState("");
	let [checkbox, setCheckbox] = useState("");
	let [modall, setModall] = useState(false);
	let [txt, setTxt] = useState("");

	

	useEffect(()=>{
		let session = false;
		let valSession = localStorage.getItem("session");
	    if (valSession) {
	      session = JSON.parse(valSession);
	      if (session){
	        if (session.estado === true){
	        } else {
	        	setModall(true);
	        	setTimeout(()=>{
	        		setTxt("Redirigiendo..");
	        	}, 3000);
	        	setTimeout(()=>{
	        		setModall(false);
	        		history.push("/login");
	        	}, 5500)
	        }
	      }
	   } else {
			setModall(true);
			setTimeout(()=>{
				setTxt("Redirigiendo..");
			}, 3000);
			setTimeout(()=>{
				setModall(false);
				history.push("/login");
			}, 5500)
		}
	})

	//VALIDANDO NOMBRE
	function validarNombre(validar){
		const valName = new RegExp('^[A-ZÁÉÍÓÚÑ ]+$', 'i');
		let nameMensaje = document.querySelector(".nameVal");
		let nameInput = document.querySelector(".name");
		if (name.length != 0) {
			nameInput.style.outline="none";
			if (valName.test(name)){
				nameInput.style.border="1px solid #4BD142"
				nameMensaje.textContent="";
				nameMensaje.style.opacity="0";
				return true
			} else {
				nameInput.style.border="1px solid #C42424"
				nameMensaje.textContent = "Solo se admiten letras." 
				nameMensaje.style.opacity="1";
			}
		}else {
			nameMensaje.style.opacity="0";
			nameMensaje.textContent=""
			nameInput.style.outline="";
			nameInput.style.border="1px solid #fff"
			if (validar == true){
				nameInput.style.border="1px solid #C42424"
				nameMensaje.style.opacity="1";
				nameMensaje.textContent="Rellena este campo."
			}
			return false
		}
	}

	
	// VALIDANDO TELEFONO
	function validarTel(validar){
		const valNum = /^[0-9]+$/;
		let telInput = document.querySelector(".tel");
		let telMensaje = document.querySelector(".telVal");
		if (tel.length != 0){
			telInput.style.outline="none";
			if (valNum.test(tel)) {
				if (tel.length == 7 || tel.length == 10) {
					telInput.style.border="1px solid #4BD142";
					telMensaje.textContent="";
					telMensaje.style.opacity=""
					return true
				} else {
					telInput.style.border="1px solid #C42424";
					telMensaje.textContent="Ingresa un numero de telefono verdadero.";
					telMensaje.style.opacity="1"
				}
			} else {
				telMensaje.textContent="Solo se admiten numeros.";
				telMensaje.style.opacity="1"
				telInput.style.border="1px solid #C42424";
			}
		} else {
			telMensaje.textContent="";
			telMensaje.style.opacity=""
			telInput.style.outline="";
			telInput.style.border="1px solid #fff"
			if (validar == true){
				telInput.style.border="1px solid #C42424";
				telMensaje.textContent="Rellena este campo";
				telMensaje.style.opacity="1"	
			}
			return false
		}
	
	}


	// VALIDANDO EMAIL
	function validarEmail (validar){
		const valEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		let emailMensaje = document.querySelector(".emailVal");
		let emailInput = document.querySelector(".email");
		if (email.length != 0) {
			emailInput.style.outline="none";
			if (valEmail.test(email)){
				emailInput.style.border="1px solid #4BD142"
				emailMensaje.style.opacity="0"
				return true
			} else {
				emailInput.style.border="1px solid #C42424"
				emailMensaje.textContent="Ingresa un correo verdadero."
				emailMensaje.style.opacity="1"
			}
		} else {
			emailInput.style.outline="";
			emailMensaje.style.opacity="0"
			emailInput.style.border="1px solid #fff";
			if(validar == true){
				emailInput.style.border="1px solid #C42424"
				emailMensaje.style.opacity="1"
				emailMensaje.textContent="Rellena este campo."
			}
			return false
		}
	}

	
	//VALIDANDO CANTIDAD DE PERSONAS
	function validarPersonas (validar){
		const valNum = /^[0-9]+$/;
		let personasInput = document.querySelector(".personas");
		let personasMensaje = document.querySelector(".personasVal");
		if (personas.length != 0) {
			personasInput.style.outline="none"
			if (valNum.test(personas)){
				if (personas > 0 && personas <= 25) {
					personasInput.style.border="1px solid #4BD142"
					personasMensaje.style.opacity="0"
					return true
				} else {
					personasInput.style.border="1px solid #C42424"
					personasMensaje.textContent="Solo se permiten entre 1-25 personas"
					personasMensaje.style.opacity="1"
				}
			} else {
				personasMensaje.textContent="Solo se admiten numeros."
				personasMensaje.style.opacity="1"
				personasInput.style.border="1px solid #C42424"
			}
		} else {
			personasMensaje.style.opacity="0"
			personasMensaje.textContent=""
			personasInput.style.outline=""
			personasInput.style.border="1px solid #fff"
			if (validar == true){
				personasInput.style.border="1px solid #C42424"
				personasMensaje.textContent="Rellena este campo."
				personasMensaje.style.opacity="1"
			}
			return false
		}
	}


	//VALIDANDO FECHA
	let fechaActual = new Date();
	function validarFecha (validar){
		let fechaMensaje = document.querySelector(".fechaVal");
		let fechaInput = document.querySelector(".fecha");
		if (fecha.length != 0) {	
			let obtenerAño = fecha.at(0) + fecha.at(1) + fecha.at(2) + fecha.at(3);
			let obtenerMes = fecha.at(5) + fecha.at(6);
			let obtenerDia = fecha.at(8) + fecha.at(9);

			if (obtenerAño < fechaActual.getFullYear()){
				fechaInput.style.border="1px solid #C42424"
				fechaMensaje.style.opacity="1";
				fechaMensaje.textContent="El año que seleccionaste ya paso.";
			} else {
				if (obtenerAño == fechaActual.getFullYear()) {
					if (obtenerMes < fechaActual.getMonth()+1) {
						fechaInput.style.border="1px solid #C42424"
						fechaMensaje.style.opacity="1";
						fechaMensaje.textContent="El mes que seleccionaste ya paso.";
					} else {
						if (obtenerMes == fechaActual.getMonth()+1) {
							if (obtenerDia < fechaActual.getDate()) {
								fechaInput.style.border="1px solid #C42424"
								fechaMensaje.style.opacity="1";
								fechaMensaje.textContent="El dia que seleccionaste ya paso.";
							} else {
								fechaMensaje.style.opacity="0";
								fechaInput.style.border="1px solid #4BD142"
								return true
							}
						} else {
							fechaMensaje.style.opacity="0";
							fechaInput.style.border="1px solid #4BD142"
							return true		
						}
					}
				} else {
					fechaMensaje.style.opacity="0";
					fechaInput.style.border="1px solid #4BD142"
					return true
				}
				
			} 
			
		} else {
			fechaInput.style.border="1px solid #fff"
			if (validar == true) {
				fechaInput.style.border="1px solid #C42424"
				fechaMensaje.style.opacity="1";
				fechaMensaje.textContent="Rellena este campo.";
			}
			return false
		}
	}


	//VALIDANDO HORA
	function validarHora(validar){
		let horaInput = document.querySelector(".hora");
		let horaMensaje = document.querySelector(".horaVal");
		if (hora.length != 0) {
			horaMensaje.style.opacity="0";
			horaInput.style.border="1px solid #4BD142";
			return true
		} else {
			horaMensaje.style.opacity="0";
			horaInput.style.border="1px solid #fff";
			if (validar === true) {
				horaMensaje.style.opacity="1";
				horaMensaje.textContent="Rellena este campo.";
				horaInput.style.border="1px solid #C42424";
				return false
			}
		}
		
	}

	//VALIDAR SERVICIOS
	function validarServicio(validar){
		let servicioInput = document.querySelector(".servicioCont");
		if (servicio.length == 0) {
			servicioInput.style.border="1px solid #E5E5E5";
			if (validar == true) {
				servicioInput.style.border="1px solid #C42424";
			}
			return false
		} else {
			servicioInput.style.border="1px solid #E5E5E5";
			return true
		}
	}


	//VALIDANDO COMENTARIOS O SOLITUDES
	function validarComentario(validar){
					let comentInput = document.querySelector(".comentarioReserva");
					if (comentario.length != 0) {
						comentInput.style.outline="none";
						if (comentario.length > 8 && comentario.length < 250) {
							comentInput.style.border="1px solid #4BD142";
							return true
						} else {
							comentInput.style.border="1px solid #C42424";
							return false
						}
					} else {
						comentInput.style.outline="";
						comentInput.style.border="1px solid #fff";
						return true
					}	
	}


	//VALIDAR CHECKBOX
		function validarCheckbox(validar){
			let checkboxInput = document.querySelector(".checkboxContenedor");
			let checkboxMensaje = document.querySelector(".checkboxVal");
			if (checkbox === true) {
				checkboxInput.style.border="1px solid #E5E5E5";
				checkboxMensaje.style.opacity="0";
				return true
			} else {
				checkboxInput.style.border="1px solid #E5E5E5";
				checkboxMensaje.style.opacity="0";
				if (validar == true) {
					checkboxInput.style.border="1px solid #C42424";
					checkboxMensaje.style.opacity="1";
					checkboxMensaje.textContent="Tienes que confirmar este campo."
				}
				return false
			}
		}

	let fechaCO = fecha.charAt(8) + fecha.charAt(9) + "/" + fecha.charAt(5) + fecha.charAt(6) + "/" + fecha.charAt(0) + fecha.charAt(1) + fecha.charAt(2) + fecha.charAt(3);

	useEffect(()=>{
		validarNombre();
		validarTel();
		validarEmail();
		validarPersonas();
		validarFecha();
		validarHora()
		validarServicio();
		validarComentario();
		validarCheckbox();
		document.title="Reservas";
	});

	let [modal, setModal] = useState(false);
	function validar (e){
		e.preventDefault();
		if (validarNombre(true) && validarEmail(true) && validarTel(true) && validarPersonas(true) && validarFecha(true) && validarHora(true) && validarServicio(true) && validarComentario(true) && validarCheckbox(true)) {
			setModal(true);
		}
	}

	//ENVIAR RESERVA
	function enviarReserva (){
		let mensaje = `<b>DATOS DE LA RESERVA:</b><br><br> 
										Cliente: <b>${name}</b><br> 
										Teléfono: <b>${tel}</b><br> 
										Número de personas: <b>${personas}</b><br> 
										Servicio: <b>${servicio}</b><br> 
										Fecha: <b>${fechaCO}</b><br> 
										Hora: <b>${hora}</b><br> 
										Indicaciones especiales: <b>${comentario}</b>
			`;

		window.Email.send({
	      SecureToken : "07760063-8f87-4c65-9a2c-42ece65d3891",
	      To : email,
	      From : "grupo5juventic@gmail.com",
	      Subject : "Confirmación de reserva",
	      Body : mensaje
  		})
  		.then(()=>{
  			document.querySelector(".closeModal").click();
				addReserva();
  			setName("");
				setTel("");
				setEmail("");
				setPersonas("");
				setFecha("");
				setHora("");
				setComentario("");
				document.querySelector(".contenedorReserva form").reset();
	  		alert("Reserva enviada exitosamente!");
	  	})
  		.catch((error)=>{
  			alert("Ha ocurrido un error al intentar enviar la reserva, disculpanos..");
				alert(error);
  		})
	}

	//AGREGAR RESERVA A BD
	function addReserva() {
    let datos = {
      nombre: name,
			email: email,
			fecha: fecha,
			telefono: tel,
			hora: hora,
			servicio: servicio,
			personas: Number(personas),
			mensaje: comentario,
			estado: 'En espera'
    };

    fetch("https://avilap.herokuapp.com/api/reservas", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(datos)
    })
      .then(response => {
        if (response.ok){
          console.log('Bien:' + response.text());
        }  
        else{
          console.log(response.status)
        }
      })
      .then(data => {
        console.log('Bien')
      });
  }

	return (
		<div className="contenedorReserva">
			{ modal &&
				<Modal isVisible={modal} setVisible={()=>{setModal(false)}}>
							<div style={{display:"flex", padding:"20px", flexDirection:"column", width:"45%", backgroundColor:"#310101", color:"#fff", borderRadius:"5px"}}>
								<h3>Bien, tu reserva quedó así:</h3>
								<br/>
								<div className="infoReserva"><p>Nombre:</p> <b>{name}</b></div>
								<div className="infoReserva"><p>Numero de contacto:</p> <b>{tel}</b></div>
								<div className="infoReserva"><p>Correo electronico:</p> <b>{email}</b></div>
								<div className="infoReserva"><p>Cantidad de personas:</p> <b>{personas}</b></div>
								<div className="infoReserva"><p>Fecha de la reserva:</p> <b>{fechaCO}</b></div>
								<div className="infoReserva"><p>Hora:</p> <b>{hora}</b></div>
								<div className="infoReserva"><p>Servicio:</p> <b>{servicio}</b></div>
								<div className="infoReserva"><p>Indicaciones:</p> <b>{comentario}</b></div>
								<div className="btnsReserva">
									<button className="closeModal">CANCELAR</button>
									<button className="btnReserva" onClick={()=>enviarReserva()}>RESERVAR</button>	
								</div>
							</div>
						</Modal>
			}
			 <div style={{display:modall ? "flex" : "none", minWidth:"25%", backgroundColor:"#3E0202", zIndex:"500", left:"1%"}} className="modalAdminFooter">
        <span>Debe iniciar sesión para reservar {txt}</span>
        <img src={Ok} />
      </div>
			<h2 className="title-reservas">Reservas</h2>
			<form className="formReserva">
				<p>Los campos marcados con un <span>*</span> son obligatorios</p>
				<div className="nameCont">
					<p className="nameVal"></p>
					<input className="name" value={valSession && user.estado ? user.user.name : "Nombre"} disabled/>
				</div>
				<div className="espacio"/>
				<div className="telCont">
					<p className="telVal"></p>
					<input className="tel" type="tel" onChange={(e) => setTel(e.target.value)} placeholder="Numero de contacto*"/>
				</div>
				<div className="espacio"/>
				<div className="emailCont">
					<p className="emailVal"></p>
					<input className="email" value={valSession && user.estado ? user.user.email : "Email"} disabled/>
				</div>
				<div className="espacio"/>
				<div className="personasCont">
					<label className="label">Cantidad de personas<span>*</span></label>
					<p className="personasVal"></p>
					<input className="inputLargo personas" type="number" max="25" min="1" onChange={(e)=>setPersonas(e.target.value)}/>
				</div>
				<div className="espacio"/>
				<div className="fechaCont">
					<label className="label">Fecha de la reserva<span>*</span></label>
					<p className="fechaVal"></p>
					<input className="inputLargo fecha" min="26-10-2021" onChange={(e)=>setFecha(e.target.value)}  type="date"/>
				</div>
				<div className="espacio"/>
				<div className="horaCont">
					<label className="label">Hora de la reserva<span>*</span></label>
					<p className="horaVal"></p>
					<input onChange={(e)=>setHora(e.target.value)} className="inputLargo hora" type="time"/>
				</div>
				<div className="espacio"/>
				<div className="servicioCont">
 					<label className="label">Servicio<span>*</span></label>
					<select className="inputLargo servicio" onChange={(e)=>setServicio(e.target.value)}>
						<option disabled selected>Selecciona un servicio</option>
						<option>Celebración de cumpleaños</option>
						<option>Aniversarios</option>
						<option>Fiestas infantiles</option>
						<option>Declaraciones o propuestas</option>
						<option>Despedidas</option>
						<option>Cena con amigos</option>
					</select>
				</div>
				<div className="espacio"/>
				<textarea className="comentarioReserva coment" onChange={(e)=>setComentario(e.target.value)} placeholder="Escribe indicaciones (opcional)" cols="30" rows="3"/>
				<div className="espacio"/>
				<div className="checkboxContenedor"> 
					<input className="checkbox" onChange={(e)=>setCheckbox(e.target.checked)} type="checkbox"/>
					<p className="checkboxVal"></p>
					<label>Acepto la politica de tratamiento de datos<span>*</span></label>
				</div>
				<div className="espacio"/>
				<button type="submit" onClick={validar}>Enviar</button>
			</form>
		</div>
	)
}