export async function getProducts() {
	let result = fetch('https://web-api-products.runasp.net/api/Products')
		.then((res) => res.json())
		.then((data) => data);

	return result;
}
