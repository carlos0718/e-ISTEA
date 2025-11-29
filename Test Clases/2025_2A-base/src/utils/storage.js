const NAME_KEY_STORAGE = 'cart';

export function initLocalstorage() {
	if (!localStorage.getItem(NAME_KEY_STORAGE)) {
		localStorage.setItem(NAME_KEY_STORAGE, JSON.stringify([]));
	}
}

export function getProductsStorage() {
	let products = JSON.parse(localStorage.getItem(NAME_KEY_STORAGE));
	return products;
}
export function setProductsStorage(item) {
	let products = getProductsStorage();
	products.push(item);
	localStorage.setItem(NAME_KEY_STORAGE, JSON.stringify(products));
}

export function updateItemStorage(itemId, qtty) {
	let products = getProductsStorage();
	let index = products.findIndex((prod) => prod.id === itemId);
	if (index !== -1) {
		products[index].quantity += qtty;
		localStorage.setItem(NAME_KEY_STORAGE, JSON.stringify(products));
	}
	return index;
}

export function removeItemStorage(itemId) {
	let products = getProductsStorage();
	products = products.filter((prod) => prod.id !== itemId);
	localStorage.setItem(NAME_KEY_STORAGE, JSON.stringify(products));
}
