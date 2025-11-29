import {getProducts} from './api/api.js';
import {createCards} from './components/cards.js';
import {crearSeccionCarrito} from './components/carrito.js';
import {filtrarProductos} from './utils/filtrado.js';

//localstorage
localStorage.getItem('carrito') || localStorage.setItem('carrito', JSON.stringify([]));

let input = document.querySelector('#filter');

getProducts()
	.then((data) => {
		createCards(data);
		input.addEventListener('input', (e) => {
			let filterProd = filtrarProductos(e.target.value, data);
			createCards(filterProd);
		});
	})
	.catch((error) => {
		console.error('Error fetching products:', error);
	});

crearSeccionCarrito(JSON.parse(localStorage.getItem('carrito')));
