import {useState, useEffect} from "react";
import "../styles/login.css";
import verPass from "../assets/verPass.svg";
import verPassNone from "../assets/verPassNone.svg";
import {Link} from "react-router-dom";
import Logo from "../assets/logo.png";

function Login (){
	
	let [email, setEmail] = useState("");
	let [pass, setPass] = useState("");

	function mostrarPass(){
		let oculto = true;
		let btnVerPass = document.querySelector(".inputPass img");
		let inputPass = document.querySelector(".inputPass input");
		btnVerPass.addEventListener("click", ()=>{
			if (oculto == true) {
				btnVerPass.src=verPassNone;
				inputPass.type="text";
				oculto = false;
			} else {
				btnVerPass.src=verPass;
				inputPass.type="password";
				oculto = true;
			}
		})
	}

	function validar(e){
		e.preventDefault();
		let inputEmail = document.querySelector(".inputEmail");
		let inputPass = document.querySelector(".inputPass");
		let emailMensaje = document.querySelector(".loginEmailVal");
		let passMensaje = document.querySelector(".loginPassVal");

		if (email.length == 0 && pass.length == 0) {
			inputEmail.style.border="1px solid #C42424";
			inputPass.style.border="1px solid #C42424";
			emailMensaje.textContent="Rellena este campo.";
			emailMensaje.style.opacity=1;
			passMensaje.textContent="Rellena este campo.";
			passMensaje.style.opacity=1;
		
		} else {
			inputEmail.style.border="none";
			inputPass.style.border="none";
			emailMensaje.textContent="";
			emailMensaje.style.opacity=0;
			passMensaje.textContent="";
			passMensaje.style.opacity=0;	

			if (email.length != 0) {
				const valEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
				if (valEmail.test(email)) {

				} else {
					inputEmail.style.border="1px solid #C42424";
					emailMensaje.textContent="Ingresa un email verdadero.";
					emailMensaje.style.opacity=1;
				}
				if (pass.length != 0) {
					if (pass.length >= 5) {
						if (valEmail.test(email)) {
							validarCuenta();
						}
					} else {
						inputPass.style.border="1px solid #C42424";
						passMensaje.textContent="La contraseña debe tener minimo 5 caracteres.";
						passMensaje.style.opacity=1;
					}
				} else {
					inputPass.style.border="1px solid #C42424";
					passMensaje.textContent="Rellena este campo.";
					passMensaje.style.opacity=1;
				}
			} else {
				inputEmail.style.border="1px solid #C42424";
				emailMensaje.textContent="Rellena este campo.";
				emailMensaje.style.opacity=1;
			}
		}
	}

	let users = false;
	if (!localStorage.getItem("users")) {
		localStorage.setItem("users", JSON.stringify([{"user":"admin@salysalsa.co", pass:"admin123", rol:"admin", name:"Administrador"}]))
	} else {
		users = JSON.parse(localStorage.getItem("users"));
	}

	function validarCuenta(){
		for (let i = 0; i < users.length; i++) {
			if (email == users[i].user) {
				if (pass == users[i].pass) {
					alert("login");
				} else {
					alert("La contraseña es incorrecta");
				}
				break;
			} else {
				let val = i;
				val++
				if (val == users.length) {
					alert("El usuario no existe");
				}
			}
		};
		
	}

	

	useEffect(()=>{
		mostrarPass()
	})
	return (
		<div className="loginContainer">
			<form>
				<div className="loginFoto2"/>
				<div className="formCont">
					<img className="loginLogo" src={Logo} alt="Logo"/>
					<h2>Inicia sesion</h2>
					<label>Correo electronico <p className="loginEmailVal"></p></label>
					<input className="inputEmail" onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Ingresa tu correo"/>
					<label className="passLabel">Contraseña <p className="loginPassVal"></p></label>
					<div className="inputPass">
						<input type="password" onChange={(e)=>setPass(e.target.value)} placeholder="Ingresa tu contraseña"/>
						<img src={verPass} alt="pass"/>
					</div>
					<div style={{position:"absolute", width:"100%", left:0, alignItems:"center", bottom:8, display:"flex", flexDirection:"column"}}>
						<button onClick={(e)=>validar(e)}>Iniciar sesion</button>
						<p style={{margin:0, marginTop:3}}>¿No tienes cuenta? registrate <Link to="/register">Aqui</Link></p>
					</div>
				</div>
			</form>
		</div>
	)
}

export default Login