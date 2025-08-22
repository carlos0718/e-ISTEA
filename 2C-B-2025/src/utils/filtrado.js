export function filtrarProductos(texto, productos) {
	if (texto === '') return productos;

	let productosFiltrados = productos.filter((prod) => {
		return prod.title.toLowerCase().includes(texto.toLowerCase());
	});

	return productosFiltrados;
}
