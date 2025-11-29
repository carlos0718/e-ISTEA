import {getProducts} from '../services/api.js';
import {Modal, ModalBootstrap} from './modal.js';

export function RenderCards(products) {
	let productList = document.querySelector('#product-list');

	let tempalte = '';
	products.forEach((p) => {
		tempalte += `
			<div class="col mb-4 d-flex justify-content-center align-items-center">
				<div class="card justify-content-center align-items-center" style="width: 300px;">
					<img src="${p.image}" class="card-img-top" alt="${p.title}" style="width: 200px; height: 220px; object-fit: contain">
					<div class="card-body" style="width: inherit;">
						<h5 class="card-title text-truncate">${p.title}</h5>
					</div>
					<div class="mb-3">
						<button class="btn btn-dark" id="btn-modal-${p.id}">Mas detalles</button>
					</div>
				</div>
			</div>
	`;
	});

	productList.innerHTML = tempalte;
	products.forEach((p) => {
		document.getElementById(`btn-modal-${p.id}`).addEventListener('click', () => {
			Modal(p);
			//ModalBootstrap(p);
		});
	});
}
