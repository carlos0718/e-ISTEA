import {getProducts} from '../services/api.js';
import {Modal} from './modal.js';

export function RenderCards(products) {
	let productList = document.querySelector('#product-list');
	let tempalte = '';
	products.forEach((p) => {
		tempalte += `
			<div class="col d-flex justify-content-center align-items-center">
				<div class="card" style="width: 300px;">
					<img src="${p.image}" class="card-img-top" alt="${p.title}" style="height: 300px; width: 250px ;object-fit: contain;">
					<div class="card-body" style="width: 300px;">
						<h5 class="card-title text-truncate">${p.title}</h5>
					</div>
					<div class="mb-3 d-flex justify-content-center align-items-center">
						<button class="btn btn-dark" id="btn-${p.id}"> Más detalles</button>
					</div>
				</div>
			</div>
	`;
	});

	productList.innerHTML = tempalte;

	//asignando eventos onclick a los botones
	products.forEach((p) => {
		let btn = document.querySelector(`#btn-${p.id}`);
		btn.addEventListener('click', () => {
			Modal(p);
		});
	});
}
