import {aside} from "./app/aside.js";
import {createCards} from "./app/cards.js";
import {buscador} from "./search.js";

createCards();
buscador();
/* inicializar localstorage */
if (localStorage.getItem("productosCarrito") === null) {
	localStorage.setItem("productosCarrito", JSON.stringify([]));
}

aside();
