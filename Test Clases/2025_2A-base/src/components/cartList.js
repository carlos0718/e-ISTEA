import {getProductsStorage, removeItemStorage} from '../utils/storage.js';
import {loader} from './loader.js';

export function cartList() {
	let template = '';

	let productsStorage = getProductsStorage();

	productsStorage.forEach((element) => {
		template += `
            <div class="card mb-3 border-0 border-top border-dark-subtle" style="max-width: 540px; height: 140px;" id="item-${element.id}">
                <div class="row g-0">
                    <div class="col-md-4 col-4">
                        <img src="${element.image}" class="img-fluid rounded-start" style="object-fit: contain; height: 130px;" alt="${element.title}">
                    </div>
                    <div class="col-md-8 col-8">
                        <div class="card-body">
                            <div>
                                <h6 class="card-title text-truncate">${element.title}</h6>
                                <p class="card-text text-muted ">Cantidad: ${element.quantity}</p>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <small class="fw-bold">Precio: $ ${element.price}</small>
                                <button class="btn btn-outline-danger border-0" title="Eliminar del carrito" id="remove-${element.id}"><i class="bi bi-trash"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
	});

	let container = document.querySelector('.offcanvas-body');
	container.innerHTML = template;
	addEventOnClick(productsStorage);
}

function addEventOnClick(productsStorage) {
	productsStorage.forEach((element) => {
		let btnDelete = document.getElementById(`remove-${element.id}`);
		if (btnDelete) {
			btnDelete.addEventListener('click', () => {
				// Aquí puedes agregar la lógica para eliminar el producto del carrito
				removeItemStorage(element.id);

				setTimeout(() => {
					let hideLoader = document.getElementById('loader');
					if (hideLoader) {
						hideLoader.style.display = 'none';
					}
					cartList(); // Actualiza la lista del carrito después de eliminar el producto
				}, 1000);
				loader();
			});
		}
	});
}
