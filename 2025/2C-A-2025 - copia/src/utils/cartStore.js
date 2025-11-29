import {createCart} from '../components/carrito.js';

export function guardarProductoEnCarrito(producto) {
	// Obtener el carrito del localStorage
	let carritoLs = obtenerCarrito();
	// Verificar si el producto ya está en el carrito
	let idx = validarProductoEnCarrito(carritoLs, producto);

	if (idx !== -1) sumarCantidadProductoEnCarrito(carritoLs, idx);
	else inizializarProductoEnCarrito(carritoLs, producto);

	actualizarCarrito(carritoLs);
	createCart(carritoLs);
}

function obtenerCarrito() {
	let carrito = localStorage.getItem('lista-carrito');
	if (carrito) {
		return JSON.parse(carrito);
	} else {
		return [];
	}
}

export function validarProductoEnCarrito(carritoLs, producto) {
	let existIdx = carritoLs.findIndex((c) => c.id === producto.id);
	return existIdx;
}

export function actualizarCarrito(carrito) {
	localStorage.setItem('lista-carrito', JSON.stringify(carrito));
}

export function sumarCantidadProductoEnCarrito(carritoLs, productIdx) {
	carritoLs[productIdx].cantidad += 1;
}

export function restarCantidadProductoEnCarrito(carritoLs, productIdx) {
	if (carritoLs[productIdx].cantidad > 1) carritoLs[productIdx].cantidad -= 1;
}

function eliminarProductoEnCarrito(carritoLs, productIdx) {
	carritoLs.splice(productIdx, 1);
	actualizarCarrito(carritoLs);
}

function inizializarProductoEnCarrito(carritoLs, producto) {
	producto.cantidad = 1;
	carritoLs.push(producto);
}
