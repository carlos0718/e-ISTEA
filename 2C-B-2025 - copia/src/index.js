import {createCards} from './components/cards.js';
import {guardarProductoEnCarrito} from './utils/cartStore.js';

localStorage.getItem('lista-carrito') || localStorage.setItem('lista-carrito', JSON.stringify([]));

createCards();

guardarProductoEnCarrito();
