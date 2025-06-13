import {createCards} from './components/cards.js';
import {crearSeccionCarrito} from './components/carrito.js';

//localstorage
localStorage.getItem('carrito') || localStorage.setItem('carrito', JSON.stringify([]));
createCards();

crearSeccionCarrito(JSON.parse(localStorage.getItem('carrito')));
