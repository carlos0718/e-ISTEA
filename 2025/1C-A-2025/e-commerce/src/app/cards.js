import {getProducts} from '../api/api.js';
import {createModal} from './modal.js';

export function createCard() {
	let list = document.querySelector('#container-cards');

	getProducts().then((data) => {
		window.showProductDetails = (product) => {
			//let product = data.find((p) => p.id === id);
			createModal(product);
		};
		console.log(data);
		data.map((p) => {
			let templateCard = `<div class="col">
                <div class="card" style="height: 550px">
                    <img src='${p.image}' class="card-img-top p-4 img-fluid" style="height: 450px; object-fit: contain;" alt="${p.title}"/>
                    <div class="card-body">
                        <h5 class="card-title text-truncate">${p.title}</h5>
                      <div>
                      <button type="button" class="btn btn-primary" onclick='showProductDetails(${JSON.stringify(p)})'; 
					  id="prod-${p.id}">Mas detalles</button>
                      </div>
                    </div>
                </div>
            </div>`;

			list.innerHTML += templateCard;
		});
	});
}
