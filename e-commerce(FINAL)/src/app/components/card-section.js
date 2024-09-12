import {modalCard} from "./modal.js";

export function cardSection(product) {
	const $ = document;
	//create div car body
	const divCarBody = $.createElement("div");
	divCarBody.className = "card-body mt-3 text-center";
	/* 	divCarBody.style.overflow = "hidden"; // Oculta el texto que excede el tamaño del contenedor
	divCarBody.style.textOverflow = "ellipsis"; */
	divCarBody.innerHTML = `<h5 class='card-title'>${product.title}</h5>`;

	//create div card
	const divCard = $.createElement("button");
	divCard.type = "button";
	divCard.className = "card w-100 h-100 border-1 shadow-sm bg-white rounded-3";
	/* 	divCard.style.width = "25rem";
	divCard.style.height = "30rem"; */

	// Agregar atributos de datos para abrir el modal
	// divCard.setAttribute("data-bs-toggle", "modal");
	divCard.setAttribute("data-bs-target", `#exampleModal-${product.id}`);
	// divCard.style.overflow = "hidden";
	// divCard.innerHTML = `<img src=${product.image} class='card-img-top' alt=${product.title}/>`;

	//create img card
	const imgCard = $.createElement("img");
	imgCard.src = product.image; // Establece la ruta de la imagen
	imgCard.alt = product.title; // Establece el texto alternativo de la imagen
	imgCard.className = "card-img-top"; // Establece la clase de la imagen
	// 	imgCard.style.width = "15rem"; // Establece un ancho fijo para la img
	imgCard.style.height = "inherit"; // Hereda altura fija para la img
	//imgCard.style.objectFit = "cover"; // Ajusta la imagen para cubrir el tamaño especificado sin deformarla

	//create container img
	const divContainerImg = $.createElement("div");
	divContainerImg.style.height = "18rem";
	divContainerImg.style.width = "16rem";
	divContainerImg.style.margin = "auto";
	divContainerImg.appendChild(imgCard);

	divCard.appendChild(divContainerImg); // Agrega la imagen al div card
	divCard.appendChild(divCarBody);
	// Agregar evento de clic para abrir el modal
	divCard.addEventListener("click", () => modalCard(product));
	//create div col
	const divCol = $.createElement("div");
	divCol.className = "col";
	divCol.appendChild(divCard);

	$.querySelector("#card-list").appendChild(divCol);
}
