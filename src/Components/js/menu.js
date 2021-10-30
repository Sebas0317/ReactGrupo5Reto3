let btnMas = "xd";
let btnMenos = false;
let valor = false;
let carrito = document.querySelector(".imgCar");
let cant1 = 1;
let cant2 = 1;
let cant3 = 1;
let cant4 = 1;
let cant5 = 1;
let cant6 = 1;

//Comprobar si hay algo en el carrito para cambiar el icono
if (localStorage.length != 0) {
	carrito.setAttribute("src", "../assets/carrito1.png");
}

// DEVOLVER NUM
function devolver (num, operacion){
	if(num == 1){
		if (operacion == "suma"){
			cant1++
		} else if (operacion == "resta") {
			cant1--
		}
		return cant1
	} 
	else if (num == 2){
		if (operacion == "suma"){
			cant2++
		} else if (operacion == "resta"){
			cant2--
		}
		return cant2
	}
	else if (num == 3){
		if (operacion == "suma"){
			cant3++
		} else if (operacion == "resta"){
			cant3--
		}
		return cant3
	}
	else if (num == 4){
		if (operacion == "suma"){
			cant4++
		} else if (operacion == "resta"){
			cant4--
		}
		return cant4
	}else if (num == 5){
		if (operacion == "suma"){
			cant5++
		} else if (operacion == "resta"){
			cant5--
		}
		return cant5
	}
	else if (num == 6){
		if (operacion == "suma"){
			cant6++
		} else if (operacion == "resta"){
			cant6--
		}
		return cant6
	}
}

// SUMAR CANTIDAD 

function sumar (num){
	let val = devolver(num, "suma");
	valor = document.querySelector("#valor"+num);
	valor.textContent = val;
}

// RESTAR CANTIDAD 

function restar (num){
	valor = document.querySelector("#valor"+num);
	let val = devolver(num, undefined);
	if (val != 1){
		val = devolver(num, "resta")
	}
	valor.textContent = val;
	
}

// MODAL | ABRIR Y CERRAR

let modal = document.querySelector(".modall");
let modal1 = document.querySelector(".confirmacion");
let unidades = document.querySelector(".unidades");
let precio = document.querySelector(".precio");
let btnOk = document.querySelector(".btnOk");
let uniText = document.querySelector(".unidadText");

//modal.addEventListener("click", ()=>{
//	quitar();
//})/


function abrir (num) {
	let val = devolver(num);
	if (val != 1) {
		uniText.textContent = "unidades";
	} else {
		uniText.textContent = "unidad";
	}
	unidades.textContent = val;
	precio.textContent = new Intl.NumberFormat().format(25000*val);

	btnOk.setAttribute("onclick", `guardar(${num}, ${val})`)

	modal.classList.remove("quitar");
	modal1.classList.remove("quitar");
}

function quitar (){
	modal.classList.add("quitar");
	modal1.classList.add("quitar");	
}

// GUARDAR EN CARRITO

function guardar (num, val){
	quitar();
	carrito.setAttribute("src", "../assets/carrito1.png");
	localStorage.setItem(`Plato${num}`, 25000*val);
	console.log("El numero es: "+num);
}

