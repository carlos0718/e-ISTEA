import {crearSeccionCarrito} from '../components/carrito.js';

export function guardarProductoEnCarrito(producto) {
	let carrito = JSON.parse(localStorage.getItem('carrito'));
	validarProductoEnCarrito(carrito, producto);
	guardarEnLocalStorage(carrito);
	crearSeccionCarrito(carrito);
}

export function validarProductoEnCarrito(carrito, producto) {
	let idx = carrito.findIndex((item) => item.id === producto.id);
	if (idx !== -1) {
		sumarCantidadProducto(carrito, idx);
	} else {
		producto.cantidad = 1;
		carrito.push(producto);
	}
}

export function guardarEnLocalStorage(carrito) {
	localStorage.setItem('carrito', JSON.stringify(carrito));
}

export function sumarCantidadProducto(carrito, idx) {
	carrito[idx].cantidad += 1;
}

export function restarCantidadProducto(carrito, idx) {
	if (carrito[idx].cantidad > 1) carrito[idx].cantidad -= 1;
}
