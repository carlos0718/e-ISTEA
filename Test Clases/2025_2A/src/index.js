import {RenderCards} from './components/cards.js';
import {cartList} from './components/cartList.js';
import {getProducts} from './services/api.js';
import {initLocalStorage} from './storage/storage.js';

initLocalStorage();

getProducts().then((products) => {
	let inputSearch = document.querySelector('#inputSearch');
	let home = document.querySelector('#home');
	home.addEventListener('click', () => {
		return RenderCards(products);
	});
	let electronics = document.querySelector('#electronics');
	electronics.addEventListener('click', () => {
		let result = products.filter((p) => p.category === 'electronics');
		return RenderCards(result);
	});

	inputSearch.addEventListener('input', (event) => {
		console.log(event.target.value);
		let query = event.target.value;
		if (query !== '') {
			let result = products.filter((p) => p.title.toLowerCase().includes(query.toLowerCase()));
			return RenderCards(result);
		}
	});
	RenderCards(products);
});

cartList();
