export function deleteProduct(id) {
	let product = JSON.parse(localStorage.getItem("products"));
	let index = product.findIndex((prod) => prod.id === id);
	console.log("index::", index);
	product.splice(index, 1);
	console.log("product::", product);
	localStorage.setItem("products", JSON.stringify(product));

	//remove card of DOM
	const card = document.getElementById(`card-${id}`);
	card.remove();
}
