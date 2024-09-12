import { cardSectionCart } from "./card-section-cart.js";

export function sideBar() {
	const $ = document;

	//create title offcanvas
	const canvaTitle = $.createElement("h5");
	canvaTitle.className = "offcanvas-title";
	canvaTitle.id = "offcanvasRightLabel";
	canvaTitle.textContent = "Lista de productos";

	//create button close
	const btnClose = $.createElement("button");
	btnClose.type = "button";
	btnClose.className = "btn-close";
	btnClose.setAttribute("data-bs-dismiss", "offcanvas");
	btnClose.setAttribute("aria-label", "Close");

	//create offcanvas header
	const canvaHeader = $.createElement("div");
	canvaHeader.className = "offcanvas-header";
	canvaHeader.appendChild(canvaTitle);
	canvaHeader.appendChild(btnClose);

	//create offcanvas body
	const canvaBody = $.createElement("div");
	canvaBody.className = "offcanvas-body";
	canvaBody.id = "add-to-prod";
	//call function to create card section cart
	cardSectionCart();

	const btnFinalizePurchase = $.createElement("button");
	btnFinalizePurchase.type = "button";
	btnFinalizePurchase.className = "btn btn-primary w-100 m-3";
	btnFinalizePurchase.textContent = "Finalizar compra";
	btnFinalizePurchase.id = "finalize-purchase";
	btnFinalizePurchase.onclick = () => {
		localStorage.removeItem("products");
		window.location.reload();
	};

	// create btn delete products of cart
	const btnDelete = $.createElement("button");
	btnDelete.type = "button";
	btnDelete.className = "btn btn-danger w-100 m-3";
	btnDelete.textContent = "Eliminar todos los productos";
	btnDelete.id = "delete-products";
	btnDelete.onclick = () => {
		localStorage.removeItem("products");
		window.location.reload();
	};

	//create offcanvas container
	const canvaContainer = $.createElement("div");
	canvaContainer.className = "offcanvas offcanvas-end w-25";
	canvaContainer.tabIndex = -1;
	canvaContainer.id = "offcanvasRight";
	canvaContainer.setAttribute("data-bs-backdrop", "static");
	canvaContainer.setAttribute("aria-labelledby", "offcanvasRightLabel");
	canvaContainer.appendChild(canvaHeader);
	canvaContainer.appendChild(canvaBody);
	//validate if exist products in localstorage
	localStorage.getItem("products")
		? (canvaContainer.appendChild(btnFinalizePurchase), canvaContainer.appendChild(btnDelete))
		: null;

	$.body.appendChild(canvaContainer);
}
