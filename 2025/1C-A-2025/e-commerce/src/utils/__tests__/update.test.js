import {deleteProd, restQttyProd, sumQttyProd} from '../update';

describe('update products into cart', () => {
	beforeEach(() => {
		// Limpiamos los mocks antes de cada prueba
		jest.clearAllMocks();
		// Reseteamos el localStorage antes de cada prueba
		localStorage.clear();
		// Inicializamos el localStorage con un carrito vacío
		localStorage.setItem('carrito', JSON.stringify([]));
	});

	const mockProduct1 = {
		id: 1,
		title: 'Macbook Pro',
		price: 1000
	};
	const mockProduct2 = {
		id: 2,
		title: 'Macbook Air',
		price: 800
	};
	const mockProduct3 = {
		id: 3,
		title: 'Macbook Pro M1',
		price: 1200
	};
	// products in cart
	const mockCart = [
		{id: 1, title: 'Macbook Pro', price: 1000, quantity: 1},
		{id: 2, title: 'Macbook Air', price: 800, quantity: 2}
	];

	describe('sumQttyProd', () => {
		it('should add new product to empty cart with quantity 1', () => {});
		it('should increment quantity if product already exist', () => {});
	});

	describe('restQttyProd', () => {
		it('should decrement quantity of exisitng product in the cart', () => {});
	});
	describe('deleteProd', () => {
		it('should delete one product from the cart', () => {});
		it('should delete all products from the cart', () => {});
	});
});
