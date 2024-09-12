import {getProducts} from "./api.js";
import {aside} from "./app/aside.js";
import {createCards} from "./app/cards.js";

createCards();

/* inicializar localstorage */
if (localStorage.getItem("productosCarrito") === null) {
	localStorage.setItem("productosCarrito", JSON.stringify([]));
}

aside();
