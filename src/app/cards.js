import {getProducts} from "../api.js";

let cardContainer = document.querySelector("#template-card");

export function createCards() {
	getProducts().then((data) => {
		data.map((prod) => {
			let card = `<div class="col">
                           <div class="card" style="height: 500px">
                           <img src=${prod.image} class="card-img-top img-fluid object-fit-contain h-75" alt=${prod.title}>
                           <div class="card-body text-center">
                               <h5 class="card-title">${prod.title}</h5>
                           </div>
                           </div>
                       </div>`;
			cardContainer.innerHTML += card;
		});
	});
}
