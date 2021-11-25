import React,{useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import "../styles/contacto.css";
import Modal from "../modal/modal";
import Ok from "../assets/ok.png";
import Social from "../social/Social";
import Load from "../modal/loading";

export default function Contacto (){

  let history = useHistory();

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [tel, setTel] = useState("");
  let [asunto, setAsunto] = useState("");
  let [tipo, setTipo] = useState("");
  let [msg, setMsg] = useState("");
  let [check, setCheck] = useState("");
  let [modal, setModal]= useState(false);
  let [loading, setLoading]= useState(false);

  let valTxt = new RegExp('^[A-ZÁÉÍÓÚÑ ]+$', 'i');

  function validarNombre (validar){
    let nameInput = document.querySelector("#apellidos");
    if (name.length > 0) {
      nameInput.style.outline="none";
      if (valTxt.test(name)) {
         nameInput.style.border="none";
         nameInput.style.border="1px solid #4BD142";
         return true
      } else {
        nameInput.style.border="1px solid #C42424";
        return false
      }
    } else {
      nameInput.style.border="none";
      nameInput.style.outline="";
      if (validar == true) {
        nameInput.style.border="1px solid #C42424";
      }
      return false
    }
    
  }

  function validarEmail (validar){
    const valEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let emailInput = document.querySelector("#correo");
    if (email.length != 0) {
      emailInput.style.outline="none";
      if (valEmail.test(email)) {
        emailInput.style.border="1px solid #4BD142";
        return true
      }else {
        emailInput.style.border="1px solid #C42424"
        return false
      }
    } else {
      emailInput.style.border="none";
      emailInput.style.outline="";
      if (validar == true) {
        emailInput.style.border="1px solid #C42424"
      }
      return false
    }
  }

  function validarTel (validar){
    let telInput = document.querySelector("#telContacto");
    const valNum = /^[0-9]+$/;
    if (tel.length != 0) {
      telInput.style.outline="none";
      if (valNum.test(tel)) {
        if (tel.length == 7 || tel.length == 10) {
          telInput.style.border="1px solid #4BD142";
          return true
        } else {
          telInput.style.border="1px solid #C42424";
          return false
        }
      } else {
        telInput.style.border="1px solid #C42424";
        return false
      }
    } else {
      telInput.style.border="none";
      telInput.style.outline="";
      if (validar == true) {
        telInput.style.border="1px solid #C42424";
      }
      return false
    }
  }

  function validarAsunto (validar){
    let asuntoInput = document.querySelector("#nombres");
    if (asunto.length != 0) {
      asuntoInput.style.outline="none";
      if (asunto.length < 4) {
        asuntoInput.style.border="1px solid #C42424";
        return false
      } else {
         asuntoInput.style.border="1px solid #4BD142"
         return true
      }
    } else {
       asuntoInput.style.border="none";
      asuntoInput.style.outline="";
      if (validar == true) {
         asuntoInput.style.border="1px solid #C42424";
      }
      return false
    }
  }

  function validarTipo(validar){
    let tipoInput = document.querySelector("#select");
    if (tipo.length != 0) {
      tipoInput.style.outline="none";
      if (tipo.length == "Tipo de mensaje") {
        tipoInput.style.border="1px solid #C42424";
        return false
      } else {
        tipoInput.style.border="1px solid #4BD142";
        return true
      }
    } else {
      tipoInput.style.outline="";
      if (validar == true) {
         tipoInput.style.border="1px solid #C42424";
      }
      return false
    }
  }

  function validarMsg (validar){
    let msgInput = document.querySelector("#textoArea");
    if (msg.length > 0) {
      msgInput.style.outline="none";
      if (msg.length < 7) {
        msgInput.style.border="1px solid #C42424";
        return false
      } else {
        msgInput.style.border="1px solid #4BD142";
        return true
      }
    } else {
      msgInput.style.border="none";
       msgInput.style.outline="";
      if (validar == true) {
        msgInput.style.border="1px solid #C42424";
      }
      return false
    }
  }

function validarCheck (validar){
    let checkCont = document.querySelector(".checkboxContenedor");
    if (check == true) {
      checkCont.style.border="none";
      return true
    } else {
       checkCont.style.border="none";
      if (validar == true) {
        checkCont.style.border="1px solid #C42424";  
      }
      return false
    }
  }


  function enviarABD(data){
    let newData = data;
    let ruta = "solicitudes";
    if (data.tipo == "Solicitud y/o Pregunta") {
      ruta = "solicitudes";
      newData = data;
    } else {
      let fecha = new Date();
      newData = {usuario:data.nombre, comentario:data.mensaje, fecha:fecha.toLocaleDateString()}
      ruta = "comentarios";
    }

    if(data.tipo == "Solicitud y/o Pregunta"){
      ruta = "solicitudes";
    } else {
      ruta = "comentarios";
    }
    let url = "https://avilap.herokuapp.com/api/" + ruta;

    fetch(url, {
      method:"POST",
      headers:{"Content-Type":"application/json; charset=utf-8"},
      body: JSON.stringify(newData)
    })
    .then((response)=>{
      console.log(response);
    })
    .then((data)=>{
      setLoading(false);
      setModal(true);
      setTimeout(()=>{
        setModal(false);
        history.push("/");
      }, 3000);
    })
    .catch((err)=>{
       setLoading(false);
       alert("Upss, hubo un error al intentar enviar su mensaje :(");
       console.log(err);
    });
  }

  useEffect(()=>{
    validarNombre();
    validarEmail();
    validarTel();
    validarAsunto();
    validarTipo();
    validarMsg();
    validarCheck();


    document.querySelector(".form-register form").addEventListener("submit", (e)=>{
      e.preventDefault();
      let nam = validarNombre(true);
      let ema = validarEmail(true);
      let tell = validarTel(true);
      let asu = validarAsunto(true);      
      let tip =validarTipo(true);
      let ms = validarMsg(true);
      let chec = validarCheck(true);

      if (nam && ema && tell && asu && tip && ms && chec) {
        setLoading(true);
        let data = {nombre:name, email:email, telefono:tel, asunto:asunto, mensaje:msg, tipo:tipo};
        let mensaje = `Tu mensaje para Sal&Salsa se envio correctamente, Muchas gracias!:<br><br> 
          Nombre: <b>${name}</b> <br>
          Correo: <b>${email}</b> <br>
          Telefono: <b>${tel}</b> <br>
          Asunto: <b>${asunto}</b> <br>
          Nombre: <b>${name}</b> <br>
          Tipo de mensaje: <b>${tipo}</b> <br>
          Mensaje: <b>${msg}</b> <br>
        `;
        window.Email.send({
          SecureToken : "07760063-8f87-4c65-9a2c-42ece65d3891",
          To : email,
          From : "grupo5juventic@gmail.com",
          Subject : "Tu mensaje para Sal&Salsa",
          Body : mensaje
        })
        .then(()=>{
            enviarEmail(data);
        })
        .catch(()=>{
          setLoading(false);
          alert("Ha ocurrido un error, disculpanos :(");
        });
      }
       
    });
  });

  useEffect(()=>{
    document.title = 'Contáctanos';
  },[])


  function enviarEmail (data){
    let mensaje1 = `
      Nombre: <b>${name}</b> <br>
      Correo: <b>${email}</b> <br>
      Telefono: <b>${tel}</b> <br>
      Nombre: <b>${name}</b> <br>
      Tipo de mensaje: <b>${tipo}</b> <br>
      Mensaje: <b>${msg}</b> <br>
    `;
    window.Email.send({
      SecureToken : "07760063-8f87-4c65-9a2c-42ece65d3891",
      To : "grupo5juventic@gmail.com",
      From : "grupo5juventic@gmail.com",
      Subject : asunto,
      Body : mensaje1
    })
    .then(()=>{
      setName("");
      setEmail("");
      setTel("");
      setAsunto("");
      setMsg("");
      setTipo("");
      document.querySelector(".form-register form").reset();
      enviarABD(data);     
    })
    .catch(()=>{
      setLoading(false);
      alert("Ha ocurrido un error, disculpanos :(");
    });
  }

	return (
		<div className="contactoCont">
      <Social />
     { modal &&
      <Modal isVisible={true} setVisible={()=>setModal(false)}>
        <div style={{backgroundColor:"#fff", padding:"30px", borderRadius:"5px"}}>
          <img src={Ok} style={{width:"13%"}}/>
          <h3 style={{fontSize:"17px", marginTop:"5px", color:"#000", fontWeight:"bold"}}>Tu mensaje se envio correctamente. <br/> Muchas gracias por tomarse la molestia</h3>
        </div>
      </Modal>
     }
    { loading &&
      <Load isVisible={true}/>
    }
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
          <form>
             <input
              className="controls"
              type="text"
              name="apellidos"
              id="apellidos"
              onChange={(e)=>setName(e.target.value)}
              placeholder="Nombre Completo"
            />
             <input
              onChange={(e)=>setEmail(e.target.value)}
              className="controls"
              name="correo"
              id="correo"
              placeholder="Correo electronico"
            />
            <input
              onChange={(e)=>setTel(e.target.value)}
              id="telContacto"
              type="tel"
              className="controls"
              placeholder="Telefono"
            />
            <input
              onChange={(e)=>setAsunto(e.target.value)}
              className="controls"
              type="text"
              name="asunto"
              id="nombres"
              placeholder="Asunto"
            />
            <select className="controls" id="select" onChange={(e)=>setTipo(e.target.value)}>
              <option selected disabled>Tipo de mensaje</option>
              <option>Comentario</option>
              <option>Solicitud y/o Pregunta</option>
            </select>
            <textarea
              onChange={(e)=>setMsg(e.target.value)}
              className="controls"
              name="textoArea"
              id="textoArea"
              placeholder="Su mensaje"
            />
            <div className="checkboxContenedor checkboxCont" >
              <input type="checkbox" name="terminos" onChange={(e)=>setCheck(e.target.checked)}/>
              <label for="terminos"> Acepto los terminos y condiciones</label>
            </div>
            <input className="botons btn-color" type="submit" value="Enviar" />
          </form>
        </section>
      </div>
    </div>
		)
}