import {getCategories, getProducts} from '../services/api.js';
import {RenderCards} from './cards.js';

export function optionsCategories() {
	getCategories().then((categories) => {
		let template = '';
		categories.forEach((category) => {
			template += `<li class="nav-item">
                                <span class="nav-link" style="cursor: pointer;" id="${category}">${category}</span>
                            </li>`;
		});
		document.getElementById('navbar-categories').innerHTML = template;

		// Aquí puedes agregar los event listeners para las categorías si es necesario
		addEventListenersToCategories(categories);
	});
}

function addEventListenersToCategories(categories) {
	// Event listener para Home (solo una vez, fuera del loop)
	let homeElement = document.getElementById('home');
	if (homeElement) {
		homeElement.addEventListener('click', () => {
			console.log('Home seleccionado');
			getProducts().then((products) => {
				RenderCards(products);
			});
		});
	}

	// Event listeners para categorías
	categories.forEach((category) => {
		let categoryElement = document.getElementById(category);
		if (categoryElement) {
			categoryElement.addEventListener('click', () => {
				console.log(`Categoría seleccionada: ${category}`);
				productsByCategory(category);
			});
		}
	});
}

function productsByCategory(category) {
	// Lógica para filtrar productos por categoría
	console.log(`Filtrando productos por categoría: ${category}`);
	// Aquí puedes llamar a una función que renderice los productos filtrados
	getProducts().then((products) => {
		const filteredProducts = products.filter((product) => product.category === category);
		console.log(filteredProducts);
		// Llama a la función que renderiza los productos, por ejemplo:
		RenderCards(filteredProducts);
	});
}
