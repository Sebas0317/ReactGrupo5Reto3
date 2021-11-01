import {useState, useEffect} from "react";
import "./styles/login.css";
import verPass from "./assets/verPass.svg";
import verPassNone from "./assets/verPassNone.svg";
import Logo from "./assets/logo.png";
import Foto2 from "./assets/foto2.png";

function Login (){
	
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

	useEffect(()=>{
		mostrarPass()
	})
	return (
		<div className="loginContainer">
			<form>
				<img className="loginFoto2" src={Foto2}/>
				<div className="formCont">
					<img className="loginLogo" src={Logo} alt="Logo"/>
					<h2>Inicia sesion</h2>
					<label>Correo electronico</label>
					<input className="inputEmail" type="email" placeholder="Ingresa tu correo"/>
					<label className="passLabel">Contraseña</label>
					<div className="inputPass">
						<input type="password" placeholder="Ingresa tu contraseña"/>
						<img src={verPass}/>
					</div>
					<button>Iniciar sesion</button>
				</div>
			</form>
		</div>
	)
}

export default Login