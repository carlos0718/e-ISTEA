export function addToStorage(producto) {
	debugger;
	let prod = JSON.parse(localStorage.getItem("products")) || [];
	let i = findIndexProductInStorage(producto);
	debugger;
	i !== -1 && i !== null ? (prod[i].count = prod[i].count + 1) : (producto.count = 1);
	//producto.count ? (producto.count = producto.count + 1) : (producto.count = 1);
	if (i == -1 || i == null) prod.push(producto);

	localStorage.setItem("products", JSON.stringify(prod));
}

function findIndexProductInStorage(producto) {
	let prod = JSON.parse(localStorage.getItem("products"));
	let idx = prod && prod.findIndex((prod) => prod.id === producto.id);
	return idx;
}
