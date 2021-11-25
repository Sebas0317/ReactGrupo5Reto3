import React, {useState, useEffect} from "react";
import "../styles/login.css";
import verPass from "../assets/verPass.svg";
import verPassNone from "../assets/verPassNone.svg";
import {Link, useHistory} from "react-router-dom";
import Logo from "../assets/logo.png";
import Loading from "../modal/loading";

function Login (){
	
	let history = useHistory();

	let [email, setEmail] = useState("");
	let [pass, setPass] = useState("");
	let [obj, setObj] = useState(1);
	let [users, setUsers] = useState("");
	let [load, setLoad] = useState(false);

	let session = JSON.parse(localStorage.getItem("session"));
	if (session) {
		if (session.estado == true) {
			history.push("/");
		}
	}


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
	

	useEffect(()=>{
		mostrarPass();
		document.title="Iniciar sesión"
	}, []);

	useEffect(()=>{
		async function obtenerUsuariosBD(){
			await fetch("https://avilap.herokuapp.com/api/users",{
				method:"GET"
			})
			.then((response)=>{
				if (response.ok) {
					response.json()
					.then((res)=>{
						setUsers(res);
					});
				};
			})
			.catch((err)=>{
				setLoad(false);
				alert("Comprueba tu conexion");
				console.log(err)
			});
		}
		obtenerUsuariosBD();
	},[obj]);

	

	


	async function validarCuenta(){
		
		let inputEmail = document.querySelector(".inputEmail");
		let emailMensaje = document.querySelector(".loginEmailVal");
		let inputPass = document.querySelector(".inputPass");
		let passMensaje = document.querySelector(".loginPassVal");

		obj++
		setObj(obj);

		for (let i = 0; i < users.length; i++) {
			if (email == users[i].email) {
				if (pass == users[i].pass) {
					localStorage.setItem("session", JSON.stringify({estado:true, user:users[i]}))
					setLoad(false);
					document.querySelector("#btnActualizar").click();
					if (users[i].rol == "admin") {
						history.push("/admin");
					} else {
						history.push("/");
					}
				} else {
					setLoad(false);
					inputPass.style.border="1px solid #C42424";
					passMensaje.textContent="La contraseña es incorrecta.";
					passMensaje.style.opacity=1;
				}
				break;
			} else {
				let val = i;
				val++;
				if (val == users.length) {
					setLoad(false);
					emailMensaje.textContent="El usuario no existe.";
					emailMensaje.style.opacity=1;
					inputEmail.style.border="1px solid #C42424";
				}
			}
		};
		
	}


	return (
		<div className="loginContainer">
			<Loading isVisible={load}/>
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
						<p style={{margin:0, marginTop:3}}>
							¿No tienes cuenta? Regístrate&nbsp; 
							<Link to="/register" style={{textDecoration:'none',color:'#4F2634',fontWeight:'bolder'}}>
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
