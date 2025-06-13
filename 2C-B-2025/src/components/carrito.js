import {guardarEnLocalStorage, restarCantidadProducto, sumarCantidadProducto} from '../utils/carritoStorage.js';

export function crearSeccionCarrito(carrito) {
	let containerCarrito = document.querySelector('.offcanvas-body');

	carrito.forEach((c) => {
		let template = `<div class="card mb-3" style="max-width: 540px;">
                            <div class="row g-0">
                                <div class="col-md-4">
                                <img src="${c.image}" class="img-fluid rounded-start" alt="${c.title}">
                                </div>
                                <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title text-truncate">${c.title}</h5>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="">
                                            <button class="btn btn-outline-primary" onclick='restarCantidad(${c.id})'>-</button>
                                            <span id="qty-${c.id}">${c.cantidad}</span>
                                            <button class="btn btn-outline-primary" onclick='sumarCantidad(${c.id})'>+</button>
                                        </div>
                                        <div>
                                            <span class="fw-bolder">Precio: $${c.price}</span>
                                        </div>
                                        <div>
                                            <button class="btn btn-outline-danger">
                                                <i class="bi bi-trash"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>`;
		containerCarrito.innerHTML += template;
	});

	window.sumarCantidad = (id) => {
		console.log(`Sumar cantidad del producto con ID: ${id}`);
		let idx = carrito.findIndex((item) => item.id === id);
		sumarCantidadProducto(carrito, idx);
		guardarEnLocalStorage(carrito);
		actualizarSpanCantidad(id, carrito[idx].cantidad);
	};

	window.restarCantidad = (id) => {
		console.log(`Sumar cantidad del producto con ID: ${id}`);
		let idx = carrito.findIndex((item) => item.id === id);
		restarCantidadProducto(carrito, idx);
		guardarEnLocalStorage(carrito);
		actualizarSpanCantidad(id, carrito[idx].cantidad);
	};
}

function actualizarSpanCantidad(id, cantidad) {
	let qtySpan = document.querySelector(`#qty-${id}`);
	qtySpan.innerHTML = '';
	qtySpan.innerHTML = cantidad;
}
