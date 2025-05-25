import {showMsg} from "./toast.js";

export function aside() {
	let body = document.querySelector(".offcanvas-body");
	let producStorage = JSON.parse(localStorage.getItem("productosCarrito"));
	let btnsCart = document.querySelector("#btns-cart");
	if (producStorage && producStorage.length) {
		btnsCart.style.display = "block";
	}
	body.innerHTML = "";
	producStorage &&
		producStorage.map((p) => {
			let aside = `
                <div class="card mb-3" style="max-width: 540px;" id="card-${p.id}">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src=${p.image} class="img-fluid rounded-start" alt=${p.title}>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body d-flex flex-column justify-content-center align-items-center">
                                <span class="fs-4 fw-bold text-center mb-3"
                                id="price-${p.id}">
                                    $ ${p.price}
                                </span>
                                <div>
                                    <button type="button" class="btn btn-info"
                                    id="increase-${p.id}">+</button>
                                    <span class="mx-4 fs-5"
                                    id="quantity-${p.id}">${p.quantity}</span>
                                    <button type="button" class="btn btn-danger"
                                    id="decrease-${p.id}">-</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

			setTimeout(() => {
				let btnIncrease = document.querySelector(`#increase-${p.id}`);
				let spanQuantity = document.querySelector(`#quantity-${p.id}`);
				let spanPrice = document.querySelector(`#price-${p.id}`);
				btnIncrease.onclick = () => {
					let objlocalStorage = JSON.parse(localStorage.getItem("productosCarrito"));
					let index = objlocalStorage.findIndex((prod) => prod.id === p.id);
					p.quantity = p.quantity + 1;
					spanQuantity.innerHTML = p.quantity;
					spanPrice.innerHTML = `$ ${p.price * p.quantity}`;
					objlocalStorage[index] = p;
					localStorage.setItem("productosCarrito", JSON.stringify(objlocalStorage));
				};
				let btnDecrease = document.querySelector(`#decrease-${p.id}`);
				btnDecrease.onclick = () => {
					let objlocalStorage = JSON.parse(localStorage.getItem("productosCarrito"));
					let index = objlocalStorage.findIndex((prod) => prod.id === p.id);
					p.quantity = p.quantity - 1;
					if (p.quantity === 0) {
						objlocalStorage.splice(index, 1);
						let card = document.querySelector(`#card-${p.id}`);
						card.remove();
						showMsg("Producto eliminado", "danger");
					} else {
						spanQuantity.innerHTML = p.quantity;
						spanPrice.innerHTML = `$ ${p.price * p.quantity}`;
						objlocalStorage[index] = p;
					}
					localStorage.setItem("productosCarrito", JSON.stringify(objlocalStorage));
				};
			}, 0);

			body.innerHTML += aside;
		});

	let btnFinalizar = document.querySelector("#btn-finalizar");
	btnFinalizar.onclick = () => {
		body.innerHTML = "";
		btnsCart.style.display = "none";
		localStorage.removeItem("productosCarrito");
		showMsg("Compra finalizada", "success");
		aside();
		/* inicializar localstorage */
		debugger;
		if (localStorage.getItem("productosCarrito") === null) {
			localStorage.setItem("productosCarrito", JSON.stringify([]));
		}
	};

	let btnEliminar = document.querySelector("#btn-eliminar");
	btnEliminar.onclick = () => {
		body.innerHTML = "";
		btnsCart.style.display = "none";
		localStorage.removeItem("productosCarrito");
		showMsg("Productos elimados del carrito", "danger");
		aside();
		debugger;
		/* inicializar localstorage */
		if (localStorage.getItem("productosCarrito") === null) {
			localStorage.setItem("productosCarrito", JSON.stringify([]));
		}
	};
}
