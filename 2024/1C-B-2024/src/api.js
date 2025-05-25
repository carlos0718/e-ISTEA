const URL = "https://api.escuelajs.co/api/v1/products";

export function getProducts() {
	return fetch(URL)
		.then((response) => response.json())
		.then((data) => data);
}
