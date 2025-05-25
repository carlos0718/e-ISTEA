import {getProducts} from './../api/api.js';

export function createCards() {
	let containerCards = document.querySelector('#list-products');
	getProducts().then((data) => {
		window.mostrarDetalle = (prod) => {
			console.log('Hola desde el evento>>', prod);
		};

		data.forEach((p) => {
			let template = `<div class="col">
                            <div class="card" style="height:450px">
                                <img src="${p.image}" class="card-img-top img-fluid" alt="${p.title}" style="height: 350px; object-fit:scale-down;">
                                <div class="card-body">
                                    <h5 class="card-title">${p.title}</h5>
                                   <button type='button' class='btn btn-primary' onclick='mostrarDetalle(${JSON.stringify(p)})' id="${
				p.id
			}"> Más detalle</button>
                                </div>
                            </div>
                        </div>`;
			containerCards.innerHTML += template;
		});
	});
}
