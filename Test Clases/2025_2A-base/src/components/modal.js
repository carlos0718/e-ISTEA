import {agregarProductoAlCarrito} from '../features/carrito/cart.js';
import {cartList} from './cartList.js';
import {contador, eventsOnclick} from './contador.js';
import {showToast} from './toast.js';

export function Modal(product) {
	let qtty = 0;
	let container = document.querySelector('#productModal');
	let template = `
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">${product.title}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6 d-flex justify-content-center align-items-center mb-4">
                            <img src="${product.image}" alt="${product.title}" style="width: 220px; height: 100%; object-fit: contain">
                        </div>
                        <div class="col-md-6 d-flex flex-column justify-content-center align-content-center pe-4">
                            <p class="mb-4">${product.description}</p>
                            <div class="row px-5">
                                <div class="col-md-6">
                                    ${contador(product.id)}
                                </div>
                                <div class="col-md-6 d-flex justify-content-center align-items-center">
                                    <p class="fw-bold text-dark mb-0">Precio: $ ${product.price}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-dark" id="agregarAlCarrito-${product.id}">Agregar al carrito</button>
                </div>
            </div>
        </div>
    `;

	container.innerHTML = template;
	const myModal = new bootstrap.Modal(container);
	myModal.show();
	eventsOnclick(product.id, 1);
	document.getElementById(`agregarAlCarrito-${product.id}`).addEventListener('click', () => {
		qtty = document.getElementById(`qtty-${product.id}`).innerText;
		agregarProductoAlCarrito(product, qtty);
		showToast(`Producto ${product.title} agregado al carrito`, 2000);
		//myModal.hide();
		cartList();
	});
}

// ModalBootstrap: versión con Bootstrap y la imagen proporcionada
export function ModalBootstrap(product) {
	let container = document.querySelector('#productModal');
	let template = `
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header border-0">
                    <h5 class="modal-title fw-bold">College jacket</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6 text-center">
                            <img src="https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                                 alt="College jacket" 
                                 class="img-fluid rounded mb-3" 
                                 style="max-height: 400px; object-fit: cover;" />
                            <div class="d-flex justify-content-center gap-2 mt-2">
                                <img src="https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                                     alt="thumb1" class="img-thumbnail" style="width: 60px; height: 60px; object-fit: cover;" />
                                <img src="https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                                     alt="thumb2" class="img-thumbnail" style="width: 60px; height: 60px; object-fit: cover;" />
                                <img src="https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                                     alt="thumb3" class="img-thumbnail" style="width: 60px; height: 60px; object-fit: cover;" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-2">
                                <span class="fs-4 fw-bold text-black me-2">$40.00</span>
                                <span class="text-muted text-decoration-line-through">$90.00</span>
                            </div>
                            <div class="mb-2">
                                <span class="text-warning">★★★☆☆</span>
                                <span class="ms-2 text-muted">25 REVIEWS</span>
                            </div>
                            <p class="mb-3">Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.</p>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Size <span class="text-muted">(required)</span></label>
                                <select class="form-select">
                                    <option selected>SMALL</option>
                                    <option>MEDIUM</option>
                                    <option>LARGE</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Type <span class="text-muted">(required)</span></label>
                                <div class="btn-group w-100" role="group">
                                    <button type="button" class="btn btn-outline-secondary active">HOODIE</button>
                                    <button type="button" class="btn btn-outline-secondary">COLLEGE</button>
                                </div>
                            </div>
                            <div class="mb-3 d-flex align-items-center gap-2">
                                <input type="number" class="form-control" style="width: 80px;" min="1" value="1" />
                                <button class="btn btn-dark flex-grow-1">
                                    🛒 ADD TO CART
                                </button>
                            </div>
                            <div class="mb-2">
                                <span class="fw-bold">Category:</span> Jackets
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
	container.innerHTML = template;
	const myModal = new bootstrap.Modal(container);
	myModal.show();
}
