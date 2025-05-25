import {createNotification} from '../utils/notificacion.js';
import {sumQttyProd} from '../utils/update.js';
import {seccionCarrito} from './carrito.js';

export function createModal(product) {
	let modalContainer = document.querySelector('#modal-container');

	window.agregarACarrito = (prod) => {
		sumQttyProd(prod);
		seccionCarrito();
		createNotification(prod);
	};
	modalContainer.innerHTML = '';
	let modalHtml = `<div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">${product.title}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="card mb-3" style="max-width: 540px;">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                    <img src=${product.image} class="img-fluid rounded-start" alt='${product.title}'>
                                    </div>
                                    <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">$ ${product.price}</h5>
                                        <p class="card-text">${product.description}</p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" onclick='agregarACarrito(${JSON.stringify(product)})'>
                            Agregar al carrito</button>
                        </div>
                    </div>
                </div>`;

	modalContainer.innerHTML = modalHtml;
	const myModal = new bootstrap.Modal(modalContainer);
	myModal.show();
}
