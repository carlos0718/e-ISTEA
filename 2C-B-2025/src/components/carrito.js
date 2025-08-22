import {eliminarProductoDelCarrito, guardarEnLocalStorage, restarCantidadProducto, sumarCantidadProducto} from '../utils/carritoStorage.js';

export function crearSeccionCarrito(carrito) {
	let containerCarrito = document.querySelector('.offcanvas-body');
	containerCarrito.innerHTML = '';
	carrito.forEach((c) => {
		let template = `<div class="card mb-3" style="max-width: 540px;" id="card-${c.id}">
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
                                            <span class="fw-bolder">Precio: $${(c.price * c.cantidad).toFixed(2)}</span>
                                        </div>
                                        <div>
                                            <button class="btn btn-outline-danger" onclick='eliminarProdcuto(${c.id})'>
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
		let idx = carrito.findIndex((item) => item.id === id);
		sumarCantidadProducto(carrito, idx);
		guardarEnLocalStorage(carrito);
		actualizarSpanCantidad(id, carrito[idx].cantidad);
	};

	window.restarCantidad = (id) => {
		let idx = carrito.findIndex((item) => item.id === id);
		restarCantidadProducto(carrito, idx);
		guardarEnLocalStorage(carrito);
		actualizarSpanCantidad(id, carrito[idx].cantidad);
	};
	window.eliminarProdcuto = (id) => {
		let idx = carrito.findIndex((item) => item.id === id);
		eliminarProductoDelCarrito(carrito, idx);
		let card = document.querySelector(`#card-${id}`);
		containerCarrito.removeChild(card);
	};
}

function actualizarSpanCantidad(id, cantidad) {
	let qtySpan = document.querySelector(`#qty-${id}`);
	qtySpan.innerHTML = '';
	qtySpan.innerHTML = cantidad;
}
