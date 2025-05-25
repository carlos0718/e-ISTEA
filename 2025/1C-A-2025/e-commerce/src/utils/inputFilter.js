import {getProducts} from '../api/api.js';
import {filterProducts} from './filterUtils.js';

let filter = document.querySelector('#filter-input');

export async function filterInput() {
	let data = await getProducts();

	filter.addEventListener('input', (e) => {
		let value = e.target.value.toLowerCase();

		let cardlist = document.querySelector('#container-cards');
		cardlist.innerHTML = '';

		let newList = filterProducts(data, value);

		newList.forEach((p) => {
			let templateCard = `<div class="col">
                <div class="card" style="height: 550px">
                    <img src='${p.image}' class="card-img-top p-4 img-fluid" style="height: 450px; object-fit: contain;" alt="${p.title}"/>
                    <div class="card-body">
                        <h5 class="card-title text-truncate">${p.title}</h5>
                      <div>
                      <button type="button" class="btn btn-primary" onclick='showProductDetails(${JSON.stringify(p)})'; id="prod-${
				p.id
			}">Mas detalles</button>
                      </div>
                    </div>
                </div>
            </div>`;

			cardlist.innerHTML += templateCard;
		});
	});
}
