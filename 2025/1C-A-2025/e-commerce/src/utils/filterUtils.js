// Función pura para filtrar productos basado en un texto de búsqueda
export function filterProducts(products, searchText) {
	if (!products || !Array.isArray(products)) {
		return [];
	}

	const searchLower = searchText.toLowerCase();
	return products.filter((product) => {
		return product.title.toLowerCase().includes(searchLower);
	});
}
