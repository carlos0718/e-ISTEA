import {createNotification} from '../utils/notificacion.js';
import {deleteProd, restQttyProd, sumQttyProd} from '../utils/update.js';

export function seccionCarrito() {
	let canvaBody = document.querySelector('#offcanvas-body');
	canvaBody.innerHTML = '';
	let dataLs = JSON.parse(localStorage.getItem('carrito'));

	dataLs.forEach((p) => {
		let templateCard = `<div class="card mb-3" style="max-width: 540px;" id="card-${p.id}">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                    <img src="${p.image}" class="img-fluid rounded-start" alt="${p.title}">
                                    </div>
                                    <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title text-truncate">${p.title}</h5>
                                        <p class="card-text" id="total-${p.id}"> Total: $ ${p.price * p.quantity}</p>
                                        <div>
                                            <button class="btn btn-primary" onclick='decrementProd(${JSON.stringify(p)})'> - </button>
                                            <span class="text-black" id="qty-${p.id}">${p.quantity}</span>
                                            <button class="btn btn-primary" onclick='incrementProd(${JSON.stringify(p)})'> + </button>
                                        </div>
                                        <button type="button" class="btn btn-outline-danger m-3" onclick='eliminarProd(${JSON.stringify(
											p
										)})'>Eliminar</button>
                                    </div>
                                    </div>
                                </div>
                            </div>`;

		canvaBody.innerHTML += templateCard;
		window.incrementProd = (prod) => {
			let qty = sumQttyProd(prod);
			let qtyElement = document.querySelector(`#qty-${prod.id}`);
			qtyElement.innerHTML = '';
			qtyElement.innerHTML = qty;

			let totalElement = document.querySelector(`#total-${prod.id}`);
			totalElement.innerHTML = '';
			totalElement.innerHTML = `Total: $ ${prod.price * qty}`;
		};

		window.decrementProd = (prod) => {
			let qty = restQttyProd(prod);
			let qtyElement = document.querySelector(`#qty-${prod.id}`);
			qtyElement.innerHTML = '';
			qtyElement.innerHTML = qty;

			let totalElement = document.querySelector(`#total-${prod.id}`);
			totalElement.innerHTML = '';
			totalElement.innerHTML = `Total: $ ${prod.price * qty}`;
		};

		window.eliminarProd = (prod) => {
			deleteProd(prod);
			let cardElement = document.querySelector(`#card-${prod.id}`);
			canvaBody.removeChild(cardElement);
			createNotification(prod, 'eliminado del carrito', 'danger');
		};
	});
}
