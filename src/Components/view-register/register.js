import {useState, useEffect} from "react";
import "../styles/login.css";
import verPass from "../assets/verPass.svg";
import {Link, useHistory} from "react-router-dom";
import verPassNone from "../assets/verPassNone.svg";
import ok from "../assets/ok.png";
import Modal from "../modal/modal";

function Login (){
	let history = useHistory();

	let [name, setName] = useState("");
	let [email, setEmail] = useState("");
	let [pass, setPass] = useState("");
	let [pass1, setPass1] = useState("");
	let [modal, setModal] = useState(false);

	let session = JSON.parse(localStorage.getItem("session"));

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

	if(session){
		if (session.estado == true) {
			history.push("/");
		}
	}


	function mostrarPass1(){
		let oculto = true;
		let btnVerPass = document.querySelector("#inputPass1 img");
		let inputPass = document.querySelector("#inputPass1 input");
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

	let users = false;
	fetch("https://avilap.herokuapp.com/api/users",{
		method:"GET"
	})
	.then((response)=>{
		if (response.ok) {
			response.json()
			.then((res)=>{
				users = res;
			});
		}
	})
	.catch((err)=>{
		console.log(err)
	});

	function validar(e){
		e.preventDefault();
		let inputEmail = document.querySelector("#inputEmail");
		let inputPass = document.querySelector("#inputPass");
		let emailMensaje = document.querySelector(".loginEmailVal");
		let nameMensaje = document.querySelector("#loginEmailVal1");
		let passMensaje = document.querySelector("#loginPassVal");
		let inputName = document.querySelector("#inputName");
		let inputPass1 = document.querySelector("#inputPass1");
		let passMensaje1 = document.querySelector("#loginPassVal1");

		if (email.length == 0 && pass.length == 0 && name.length == 0 && pass1.length == 0) {
			inputEmail.style.border="1px solid #C42424";
			inputPass.style.border="1px solid #C42424";
			inputName.style.border="1px solid #C42424";
			emailMensaje.textContent="Rellena este campo.";
			emailMensaje.style.opacity=1;
			passMensaje.textContent="Rellena este campo.";
			passMensaje.style.opacity=1;
			nameMensaje.textContent="Rellena este campo."
			nameMensaje.style.opacity=1;
			inputPass1.style.border="1px solid #C42424";
			passMensaje1.textContent="Rellena este campo.";
			passMensaje1.style.opacity=1
		
		} else {
			inputPass.style.border="none";
			inputEmail.style.border="none";
			inputName.style.border="none";
			inputPass1.style.border="none";
			emailMensaje.textContent="";
			emailMensaje.style.opacity=0;
			passMensaje.textContent="";
			passMensaje.style.opacity=0;
			nameMensaje.textContent=""
			nameMensaje.style.opacity=0;
			passMensaje1.textContent="";
			passMensaje1.style.opacity=0

			function valName(){
				if (name.length > 0) {
				const valName = new RegExp('^[A-ZÁÉÍÓÚÑ ]+$', 'i');
				if (valName.test(name)) {
					return true;
				} else {
					inputName.style.border="1px solid #C42424";
					nameMensaje.textContent="Ingresa solo letras."
					nameMensaje.style.opacity="1";
				}
				} else {
					inputName.style.border="1px solid #C42424";
					nameMensaje.textContent="Rellena este campo."
					nameMensaje.style.opacity="1";
				}
			}
			valName();

			function validarEmail (){
				const valEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
				if (email.length != 0) {
					if (valEmail.test(email)) {
						return true;
					} else {
						inputEmail.style.border="1px solid #C42424";
						emailMensaje.textContent="Ingresa un email verdadero.";
						emailMensaje.style.opacity=1;
					}
				} else {
					inputEmail.style.border="1px solid #C42424";
					emailMensaje.textContent="Rellena este campo.";
					emailMensaje.style.opacity=1;
				}
			}
			validarEmail();

			function valPass (){
				if (pass.length != 0) {
					if (pass.length >= 5) {
						return true;
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
			}
			valPass();

			function valPass1 (){
				if (pass1.length > 0) {
					if (pass1.length < 5) {
						inputPass1.style.border="1px solid #C42424";
						passMensaje1.textContent="La contraseña debe tener minimo 5 caracteres.";
						passMensaje1.style.opacity=1;
					} else {
						if (pass1 == pass) {
							return true;
						} else {
							if (pass.length > 4) {
								inputPass.style.border="1px solid #C42424";
								inputPass1.style.border="1px solid #C42424";
								passMensaje.textContent="Las contraseñas no son iguales.";
								passMensaje.style.opacity=1;
							} else {
								valPass();
							}
						}
					}
				} else {
					inputPass1.style.border="1px solid #C42424";
					passMensaje1.textContent="Rellena este campo.";
					passMensaje1.style.opacity=1;
				}
			}
			valPass1();
			if (valName() && validarEmail() && valPass() && valPass1()) {
				comprobarCuenta();
			} else {
			}
		}
	}

	//Comprobar que no exista la cuenta
	function comprobarCuenta(){
		for (let i = 0; i < users.length; i++){
			if (email == users[i].email) {
				let inputEmail = document.querySelector("#inputEmail");
				let emailMensaje = document.querySelector(".loginEmailVal");
				inputEmail.style.border="1px solid #C42424";
				emailMensaje.textContent="El correo ya se encuentra registrado.";
				emailMensaje.style.opacity=1;
				break;
			} else{
				let val = i;
				val++
				if (val == users.length) {
					guardarCuenta();
					break;
				}
			}
		}
	}

	function guardarCuenta(){
		let info = {email:email, name:name, pass:pass, rol:"cliente"};
		fetch("https://avilap.herokuapp.com/api/users", {
			method:"POST",
			headers:{"Content-Type":"application/json; charset=utf-8"},
			body:JSON.stringify(info)
		})
		.then((response)=>{
			if (response.ok) {
				setModal(true);
				setTimeout(()=>{
					setModal(false);
					document.querySelector(".loginContainer form").reset();
					history.push("/login")
				}, 2000);
			}
		})
		.catch((err)=>{
			console.log(err);
			console.log(err.status);
		});
		
	}

	

	useEffect(()=>{
		mostrarPass();
		mostrarPass1();
		document.title="Registro"
	})
	return (
		<div className="loginContainer">
			{ modal &&
				<Modal isVisible={true} setVisible={()=>setModal(false)}>
					<div style={{backgroundColor:"#fff", width:"27%", padding:"25px", borderRadius:"3px", display:"flex", alignItems:"center", justifyContent:"center"}}>
						<h3 style={{fontSize:"22px", margin:"auto 0px"}}>Registrado correctamente</h3>
						<img style={{height:"auto", marginLeft:"2%", width:"9%"}} src={ok}/>
					</div>
				</Modal>
			}
			<form>
				<div className="loginFoto2"/>
				<div className="formCont">
					<h2>Registro</h2>
					<label>Nombre <p id="loginEmailVal1">asdsad</p></label>
					<input className="inputEmail" id="inputName" type="text" onChange={(e)=>setName(e.target.value)} placeholder="Ingresa tu nombre"/>
					<label style={{marginTop:"5px"}}>Correo electronico <p className="loginEmailVal"></p></label>
					<input className="inputEmail" id="inputEmail" onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Ingresa tu correo"/>
					<label className="passLabel">Contraseña <p className="loginPassVal" id="loginPassVal"></p></label>
					<div className="inputPass" id="inputPass">
						<input type="password" onChange={(e)=>setPass(e.target.value)} placeholder="Ingresa tu contraseña"/>
						<img src={verPass}/>
					</div>
					<label className="passLabel">Repite tu contraseña</label>
					<div className="inputPass" id="inputPass1">
						<input type="password" onChange={(e)=>setPass1(e.target.value)} placeholder="Ingresa de nuevo tu contraseña"/>
						<img src={verPass}/>
					</div>
					<label><p className="loginPassVal" id="loginPassVal1"></p></label>
					<div style={{position:"absolute", width:"100%", left:0, alignItems:"center", bottom:8, display:"flex", flexDirection:"column"}}>
						<button onClick={(e)=>validar(e)}>Registrarme</button>
						<p style={{margin:0, marginTop:3}}>
							¿Ya tienes una cuenta? Inicia sesión&nbsp; 
							<Link to="/login" style={{textDecoration:'none',color:'#4F2634',fontWeight:'bolder'}}>
								Aquí
							</Link>
						</p>
					</div>
				</div>
			</form>
		</div>
	)
}

export default Login
