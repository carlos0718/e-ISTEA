import {addTocart} from './carrito.js';
import {showMessage} from './toast.js';

export function createModal(prod) {
	let modalHtml = document.querySelector('#modal');
	let modal = ` <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${prod.title} | $ ${prod.price}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <img src="${prod.image}" class="img-fluid"/>
                        <p>${prod.description}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" id="modal-${prod.id}">Agregar a carrito</button>
                    </div>
                </div>
            </div>`;

	modalHtml.innerHTML = modal;

	let btn = document.querySelector(`#modal-${prod.id}`);
	btn.addEventListener('click', () => {
		/* 	let cartLs = JSON.parse(localStorage.getItem('products-cart'));
		localStorage.setItem('products-cart', JSON.stringify([...cartLs, prod])); */
		let cartLs = JSON.parse(localStorage.getItem('products-cart'));
		let exist = cartLs.find((p) => p.id === prod.id);
		let existIndex = cartLs.findIndex((p) => p.id === prod.id);
		if (!exist) {
			prod.quantity = 1;
			cartLs.push(prod);
		} else {
			cartLs[existIndex].quantity += 1;
		}
		localStorage.setItem('products-cart', JSON.stringify(cartLs));

		const toastLiveExample = document.getElementById('liveToast');
		showMessage('Producto agregado al carrito', 'primary');
		addTocart();
	});

	let myModal = new bootstrap.Modal(modalHtml);
	myModal.show();
}
