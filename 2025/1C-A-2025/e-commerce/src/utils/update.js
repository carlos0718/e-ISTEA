export function sumQttyProd(prod) {
	// leyendo del localStorage, parseando y agregando el producto al array
	let dataLs = localStorage.getItem('carrito');
	dataLs = JSON.parse(dataLs);
	// verificando si el producto ya existe en el carrito
	let indexLs = dataLs.findIndex((p) => p.id === prod.id);
	if (indexLs === -1) {
		prod.quantity = 1;
		dataLs.push(prod);
	} else {
		dataLs[indexLs].quantity++;
	}
	// guardando el array en el localStorage
	localStorage.setItem('carrito', JSON.stringify(dataLs));

	if (indexLs !== -1) return dataLs[indexLs].quantity;
}

export function restQttyProd(prod) {
	// leyendo del localStorage, parseando y agregando el producto al array
	let dataLs = localStorage.getItem('carrito');
	dataLs = JSON.parse(dataLs);
	// verificando si el producto ya existe en el carrito
	let indexLs = dataLs.findIndex((p) => p.id === prod.id);

	dataLs[indexLs].quantity--;

	// guardando el array en el localStorage
	localStorage.setItem('carrito', JSON.stringify(dataLs));

	return dataLs[indexLs].quantity;
}

export function deleteProd(prod) {
	let dataLs = localStorage.getItem('carrito');
	dataLs = JSON.parse(dataLs);
	// verificando si el producto ya existe en el carrito
	let indexLs = dataLs.findIndex((p) => p.id === prod.id);

	dataLs.splice(indexLs, 1);
	// guardando el array en el localStorage
	localStorage.setItem('carrito', JSON.stringify(dataLs));
}
