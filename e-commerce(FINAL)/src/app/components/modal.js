import {addToStorage} from "../../scripts/add-to-storage.js";
import {sideBar} from "./sidebar.js";

const $ = document;
export function modalCard(product) {
	// Eliminar el modal existente, si existe
	const existingModal = $.querySelector(`#exampleModal-${product.id}`);
	if (existingModal) {
		console.log("Eliminando modal existente");
		$.body.removeChild(existingModal);
		// modalContainer.removeChild(existingModal);

		console.log(existingModal.length);
	}

	// Crear un nuevo modal
	const modalContainer = $.createElement("div");
	modalContainer.className = "modal fade";
	modalContainer.id = `exampleModal-${product.id}`;
	modalContainer.setAttribute("tabindex", "-1");
	modalContainer.setAttribute("aria-labelledby", `exampleModal-${product.id}Label`);
	modalContainer.setAttribute("aria-hidden", "true");
	modalContainer.setAttribute("data-bs-config", "{backdrop:true}");

	// create modal title
	const modalTitle = $.createElement("h6");
	modalTitle.className = "modal-title";
	modalTitle.textContent = product.title;
	// create container title
	const containerTitle = $.createElement("div");
	containerTitle.className = "flex-grow-1";
	containerTitle.appendChild(modalTitle);

	// create modal price
	const modalPrice = $.createElement("p");
	modalPrice.className = "modal-title text-bg-info fw-medium";
	modalPrice.textContent = `$ ${product.price * 1000}`;
	// create container price
	const containerPrice = $.createElement("div");
	containerPrice.className = "p-2 flex-fill text-center w-50";
	containerPrice.appendChild(modalPrice);

	// create modal button close
	const modalButtonClose = $.createElement("button");
	modalButtonClose.type = "button";
	modalButtonClose.className = "btn-close";
	modalButtonClose.setAttribute("data-bs-dismiss", "modal");
	modalButtonClose.setAttribute("aria-label", "Close");
	// create container button
	const containerButton = $.createElement("div");
	containerButton.className = "p-2";
	containerButton.appendChild(modalButtonClose);

	// create modal header
	const modalHeader = $.createElement("div");
	modalHeader.className = "modal-header d-flex";
	modalHeader.appendChild(containerTitle);
	modalHeader.appendChild(containerPrice);
	modalHeader.appendChild(containerButton);
	// create modal image
	const modalImage = $.createElement("img");
	modalImage.src = product.image;
	modalImage.className = "img-thumbnail";
	modalImage.alt = product.title;
	// create modal description
	const modalDescription = $.createElement("p");
	modalDescription.textContent = product.description;

	// create modal body
	const modalBody = $.createElement("div");
	modalBody.className = "modal-body text-center";
	modalBody.appendChild(modalImage);
	modalBody.appendChild(modalDescription);
	// modalBody.appendChild(modalDescription);

	// create modal button footer
	const modalButtonFooter = $.createElement("button");
	modalButtonFooter.type = "button";
	modalButtonFooter.className = "btn btn-info";
	modalButtonFooter.textContent = "AGREGAR AL CARRITO";
	modalButtonFooter.setAttribute("data-bs-dismiss", "modal");
	modalButtonFooter.setAttribute("aria-label", "Close");
	// event click to add product to cart
	modalButtonFooter.onclick = () => {
		addToStorage(product);
		const addToProd = $.querySelector("#add-to-prod");
		addToProd.innerHTML = "";
		sideBar();
		Swal.fire({
			position: "top-end",
			icon: "success",
			title: "Producto agregado al carrito",
			showConfirmButton: false,
			timer: 1500,
		});
	};

	// create modal footer
	const modalFooter = $.createElement("div");
	modalFooter.className = "modal-footer text-center";
	modalFooter.style.display = "block";
	modalFooter.appendChild(modalButtonFooter);

	// create modal content
	const modalContent = $.createElement("div");
	modalContent.className = "modal-content";
	modalContent.appendChild(modalHeader);
	modalContent.appendChild(modalBody);
	modalContent.appendChild(modalFooter);
	// create modal dialog
	const modalDialog = $.createElement("div");
	modalDialog.className = "modal-dialog modal-dialog-centered modal-lg";
	modalDialog.appendChild(modalContent);
	modalContainer.appendChild(modalDialog);
	/* 
	modal.innerHTML = `
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
			<div class="modal-header d-flex">
				<div class="flex-grow-1">
					<h6 class="modal-title">${product.title} </h6>
				</div>
				<div class="p-2 flex-fill text-center w-50">
					<p class="modal-title text-bg-info fw-medium">$ ${product.price * 1000}</p>
				</div>
				<div class="p-2">
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
			</div>
			<div class="modal-body text-center">
				<img src="${product.image}" class="img-thumbnail" alt="${product.title}">
				<p>${product.description}</p>
			</div>
			<div class="modal-footer text-center">
				<button type="button" class="btn btn-info" >AGREGAR AL CARRITO</button>
			</div>
        </div>
    </div>
  `; */

	$.body.appendChild(modalContainer);
	/* 	// Agregar el modal al cuerpo del documento
	// Obtener una referencia al modal por su ID
	const modalElement = $.querySelector(`#exampleModal-${product.id}`);
	// Crear una instancia de modal de bootstrap
	const modalBootstrap = new bootstrap.Modal(modalElement); */
	/* new bootstrap.Modal(modalElement, {
		// backdrop: "static",
		keyboard: false,
		focus: true,
	}); */

	// Abrir el modal
	// modalBootstrap.showModal();
	// setTimeout(() => modalBoostrap.showModal(), 100);

	$.addEventListener("DOMContentLoaded", openModal(`#exampleModal-${product.id}`));
}
function openModal(id) {
	// Obtener una referencia al modal por su ID
	const modalElement = $.querySelector(id);
	// Crear una instancia de modal de bootstrap
	const modalBootstrap = new bootstrap.Modal(modalElement, {backdrop: "static"});
	/* new bootstrap.Modal(modalElement, {
		// backdrop: "static",
		keyboard: false,
		focus: true,
	}); */

	// Abrir el modal
	modalBootstrap.show();
	// setTimeout(() => modalBoostrap.showModal(), 100);
}
