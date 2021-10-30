let carrito = document.querySelector(".imgCar");

//Comprobar si hay algo en el carrito para cambiar el icono

let url = window.location.href;

if (localStorage.length != 0) {
	let comprobar = url.indexOf("index");
	if (comprobar != -1) {
		carrito.setAttribute("src", "assets/carrito1.png");	
	} else {
		carrito.setAttribute("src", "../assets/carrito1.png");
	}
}

//Mapa sitio

function mostrarMapaSitio() {
	mapaSitio = document.querySelector('#mapasitio');

	if (mapaSitio.style.display == 'none') {

		mapaSitio.style.display = '';

		lista = document.querySelector('.lista-footer');
		lista.style.width = '100%';

		cont = document.querySelector('#contactos');
		cont.style.display= 'none';

		mapa = document.querySelector('#mapa');
		mapa.style.display = 'none';
	} else {
		cerrar();
	}
}

function cerrar() {
	mapaSitio = document.querySelector('#mapasitio');
	mapaSitio.style.display = 'none';

	cont = document.querySelector('#contactos');
	cont.style.display= '';

	mapa = document.querySelector('#mapa');
	mapa.style.display = '';
}