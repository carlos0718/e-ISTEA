import {createModal} from './modal.js';

export function createCards(data) {
	let containerCards = document.querySelector('#list-products');
	containerCards.innerHTML = '';
	window.mostrarDetalle = (prod) => {
		createModal(prod);
	};

	data.forEach((p) => {
		let template = `<div class="col">
						<div class="card" style="height:450px">
							<img src="${p.image}" class="card-img-top img-fluid" alt="${p.title}" style="height: 350px; object-fit:scale-down;">
							<div class="card-body">
								<h5 class="card-title text-truncate">${p.title}</h5>
							   <button type='button' class='btn btn-primary' onclick='mostrarDetalle(${JSON.stringify(p)})' id="${p.id}"> Más detalle</button>
							</div>
						</div>
					</div>`;
		containerCards.innerHTML += template;
	});
}
