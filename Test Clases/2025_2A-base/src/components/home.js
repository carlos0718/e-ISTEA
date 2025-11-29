import {getProducts} from '../services/api.js';
import {RenderCards} from './cards.js';

export function RenderHome() {
	getProducts().then((products) => {
		document.getElementById('search-input').addEventListener('input', (event) => {
			const searchTerm = event.target.value.toLowerCase();
			if (searchTerm !== '') {
				const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(searchTerm));
				return RenderCards(filteredProducts);
			}
		});

		RenderCards(products);
	});
}
