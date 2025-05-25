import {getProductos} from './api.js';
import {createModal} from './modal.js';

export function createCards() {
	getProductos().then((data) => {
		console.log(data);
		let card_container = document.querySelector('#cards');
		data.forEach((p) => {
			let card = `<div class="col" style="max-width: 300px; height: 500px">
                            <div class="card">
                            <img src="${p.image}" class="card-img-top" alt="${p.title}" height="350px">
                            <div class="card-body">
                                <h5 class="card-title text-truncate">${p.title}</h5>
                            </div>
							<button class="btn btn-primary" id="btn-${p.id}">Mas deatlles</button>
                            </div>
                        </div>`;

			card_container.innerHTML += card;
			setTimeout(() => {
				let btn = document.querySelector(`#btn-${p.id}`);
				btn.addEventListener('click', () => {
					createModal(p);
				});
			}, 0);
		});
	});
}
