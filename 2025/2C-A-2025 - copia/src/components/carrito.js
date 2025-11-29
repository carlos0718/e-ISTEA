import {actualizarCarrito, restarCantidadProductoEnCarrito, sumarCantidadProductoEnCarrito} from '../utils/cartStore.js';

export function createCart(carritoLs) {
	let containerCart = document.querySelector('.offcanvas-body');
	containerCart.innerHTML = ''; // Limpiar el contenido previo
	carritoLs.forEach((producto) => {
		let template = ` <div class="card mb-3" style="max-width: 540px;">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src=${producto.image} class="img-fluid rounded-start" alt="${producto.title}">
                                </div>
                                <div class="col-md-8">
                                    <div class="mt-1 mx-2">
                                        <h5 class="card-title text-truncate">${producto.title}</h5>
                                    </div>
                                    <div class="card-body d-flex flex-column justify-content-center align-items-center">
                                        <div class="d-flex align-items-center justify-content-center">
                                            <button class="btn btn-outline-primary rounded-5" style="width: 37px" onclick='restarCantidad(${producto.id})'>-</button>
                                            <span class="mx-3" id="qtty-${producto.id}">${producto.cantidad}</span>
                                            <button class="btn btn-outline-primary rounded-5" onclick='sumarCantidad(${producto.id})'>+</button>
                                            <span class="badge fs-6 bg-primary w-50 ms-4">$${producto.price}</span>
                                        </div>
                                        <button class="mt-2 btn btn-outline-danger ms-2 rounded-5"><i class="bi bi-trash"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>`;
		containerCart.innerHTML += template;
	});

	window.sumarCantidad = (id) => {
		let idx = carritoLs.findIndex((c) => c.id === id);
		sumarCantidadProductoEnCarrito(carritoLs, idx);
		actualizarCarrito(carritoLs);
		updateSpanCantidad(id, carritoLs[idx].cantidad);
	};
	window.restarCantidad = (id) => {
		let idx = carritoLs.findIndex((c) => c.id === id);
		restarCantidadProductoEnCarrito(carritoLs, idx);
		actualizarCarrito(carritoLs);
		updateSpanCantidad(id, carritoLs[idx].cantidad);
	};
}

function updateSpanCantidad(id, cantidad) {
	let span = document.querySelector(`#qtty-${id}`);
	span.innerText = '';
	span.innerText = cantidad;
}
