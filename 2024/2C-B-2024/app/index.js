import {addTocart} from './src/carrito.js';
import {createCards} from './src/create-cards.js';

createCards();

if (localStorage.getItem('products-cart') === null) {
	localStorage.setItem('products-cart', '[]');
}

let btnSiderCart = document.querySelector('#btn-sidebar');
btnSiderCart.addEventListener('click', addTocart());
