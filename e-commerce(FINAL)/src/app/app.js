import {getAllProducts} from "./api/products-api.js";
import {cardSection} from "./components/card-section.js";
import {navBar} from "./components/navbar.js";
/**
 * Renderizado del Nav Bar
 */
navBar();
/**
 * Renderizado de las cards con los objetos de la API
 */
getAllProducts().then((products) => {
	products.forEach((product) => cardSection(product));
});
