// Importamos la función que queremos probar
import {getProducts} from '../api';

// Preparamos un mock para el fetch global
global.fetch = jest.fn();

describe('API functions', () => {
	beforeEach(() => {
		// Limpiamos los mocks antes de cada prueba
		fetch.mockClear();
	});

	it('getProducts should fetch products from the API', async () => {
		// Datos de prueba
		const mockProducts = [
			{id: 1, title: 'Producto 1', price: 100, image: 'url-imagen-1'},
			{id: 2, title: 'Producto 2', price: 200, image: 'url-imagen-2'}
		];

		// Configurar el mock de fetch para que resuelva con los datos de prueba
		fetch.mockResolvedValueOnce({
			json: async () => mockProducts
		});

		// Llamar a la función para obtener productos
		const products = await getProducts();

		// Verificamos que fetch fue llamado correctamente
		expect(fetch).toHaveBeenCalledTimes(1);
		expect(fetch).toHaveBeenCalledWith('https://web-api-products.runasp.net/api/Products');

		// Verificamos que los productos devueltos son los esperados
		expect(products).toEqual(mockProducts);
	});

	it('getProducts should handle errors properly', async () => {
		// Configurar el mock de fetch para que rechace con un error
		fetch.mockRejectedValueOnce(new Error('API error'));

		// Asegurarnos de que la función getProducts rechaza el error
		await expect(getProducts()).rejects.toThrow('API error');
	});
});
