import {aside} from "./aside.js";
import {showMsg} from "./toast.js";

export function createModal(product) {
	let modal = `<div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">
                        ${product.title}
                        </h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="card mb-3" style="max-width: 540px;">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img id="modal-img" src=${product.image} class="img-fluid rounded-start" alt=${product.title}>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <p class="card-text" id="modal-description">
                                        ${product.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button title="Add to cart" type="button" class="btn btn-primary" id=add-to-cart-${product.id} >Add to cart</button>
                    </div>
                </div>
            </div>`;

	let modalContainer = document.querySelector("#staticBackdrop");
	modalContainer.innerHTML = modal;

	setTimeout(() => {
		let btnAddToCart = document.querySelector(`#add-to-cart-${product.id}`);
		btnAddToCart.onclick = () => {
			let objlocalStorage = JSON.parse(localStorage.getItem("productosCarrito"));
			let producExist = objlocalStorage.find((prod) => prod.id === product.id);
			let index = objlocalStorage.findIndex((prod) => prod.id === product.id);

			if (producExist) {
				producExist.quantity = producExist.quantity + 1;
				objlocalStorage[index] = producExist;
			} else {
				product.quantity = 1;
				objlocalStorage.push(product);
			}
			/* leer de localstorage */
			/* objlocalStorage.push(product); */
			/* guardar en localstorage. solo admite tipo string */
			localStorage.setItem("productosCarrito", JSON.stringify(objlocalStorage));
			showMsg("Product added to cart", "info");
			aside();
		};
	}, 0);

	const myModal = new bootstrap.Modal(modalContainer);
	myModal.show();
}
