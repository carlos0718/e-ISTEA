export function getProducts() {
	let res = fetch('https://fakestoreapi.com/products')
		.then((response) => response.json())
		.then((data) => data);

	return res;
}

export function getProductById(id) {
	let res = fetch(`https://fakestoreapi.com/products/${id}`)
		.then((response) => response.json())
		.then((data) => data);

	return res;
}

export function getCategories() {
	let res = fetch('https://fakestoreapi.com/products/categories')
		.then((response) => response.json())
		.then((data) => data);

	return res;
}
