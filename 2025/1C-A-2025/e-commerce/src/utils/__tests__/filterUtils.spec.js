// Importamos la función que queremos probar

import {filterProducts} from '../filterUtils';

// Un "describe" agrupa pruebas relacionadas
describe('filterProducts', () => {
	// "it" o "test" define una prueba individual
	// ? when the text exists in the title
	it('should filter products by title', () => {
		//! ARRANGE: Preparamos los datos de prueba
		const products = [
			{id: 1, title: 'iPhone 14', price: 999},
			{id: 2, title: 'Samsung Galaxy', price: 799},
			{id: 3, title: 'iPad Pro', price: 1099}
		];
		const searchText = 'iPhone';

		//! ACT: Ejecutamos la función que queremos probar
		const result = filterProducts(products, searchText);

		//! ASSERT: Verificamos que el resultado sea el esperado
		// "expect" se usa para verificar resultados
		expect(result).toHaveLength(1);
		expect(result[0].title).toBe('iPhone 14');
	});
	// ? when the text no match with any title product
	it('should return empty array when no products match', () => {
		const products = [
			{id: 1, title: 'iPhone 14', price: 999},
			{id: 2, title: 'Samsung Galaxy', price: 799}
		];
		const searchText = 'Nokia';

		const result = filterProducts(products, searchText);

		expect(result).toHaveLength(0);
	});

	// ? when the text is keysensiteve
	it('should be case insensitive', () => {
		const products = [{id: 1, title: 'iPhone 14', price: 999}];
		const searchText = 'iphone'; // minúsculas

		const result = filterProducts(products, searchText);

		expect(result).toHaveLength(1);
	});

	// ? when the text is empty
	it('should handle empty products array', () => {
		const products = [];
		const searchText = 'iPhone';

		const result = filterProducts(products, searchText);

		expect(result).toHaveLength(0);
	});
	// ? when the parameter product is null or undefined
	it('should handle null or undefined products', () => {
		expect(filterProducts(null, 'iPhone')).toEqual([]);
		expect(filterProducts(undefined, 'iPhone')).toEqual([]);
	});
});
