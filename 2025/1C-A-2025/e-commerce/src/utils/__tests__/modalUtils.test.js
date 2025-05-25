import {calculateDiscountedPrice, generateModalHTML} from '../modalUtils';

describe('modalUtils', () => {
	describe('generateModalHTML', () => {
		const validProduct = {
			id: 1,
			title: 'iPhone 14',
			price: 999,
			image: 'https://example.com/iphone.jpg',
			description: 'Latest iPhone model'
		};

		it('should generate correct modal HTML for valid product', () => {
			const result = generateModalHTML(validProduct);

			expect(result).toContain('iPhone 14');
			expect(result).toContain('$999');
			expect(result).toContain('https://example.com/iphone.jpg');
			expect(result).toContain('Latest iPhone model');
			expect(result).toContain('modal-dialog');
		});

		it('should handle product without description', () => {
			const productWithoutDescription = {
				id: 2,
				title: 'Samsung Galaxy',
				price: 799,
				image: 'https://example.com/samsung.jpg'
			};

			const result = generateModalHTML(productWithoutDescription);

			expect(result).toContain('Sin descripción');
		});

		it('should throw error when product is null or undefined', () => {
			expect(() => generateModalHTML(null)).toThrow('Product is required');
			expect(() => generateModalHTML(undefined)).toThrow('Product is required');
		});

		it('should throw error when product lacks required fields', () => {
			const incompleteProduct = {
				id: 1,
				title: 'iPhone 14'
				// Faltan price e image
			};

			expect(() => generateModalHTML(incompleteProduct)).toThrow('Product must have title, price, and image');
		});
	});

	describe('calculateDiscountedPrice', () => {
		it('should calculate 10% discount correctly', () => {
			const result = calculateDiscountedPrice(100, 10);
			expect(result).toBe(90);
		});

		it('should calculate 50% discount correctly', () => {
			const result = calculateDiscountedPrice(200, 50);
			expect(result).toBe(100);
		});

		it('should return original price with 0% discount', () => {
			const result = calculateDiscountedPrice(150, 0);
			expect(result).toBe(150);
		});

		it('should return 0 with 100% discount', () => {
			const result = calculateDiscountedPrice(150, 100);
			expect(result).toBe(0);
		});

		it('should throw error for invalid price', () => {
			expect(() => calculateDiscountedPrice(-10, 10)).toThrow('Price must be a positive number');

			expect(() => calculateDiscountedPrice('100', 10)).toThrow('Price must be a positive number');
		});

		it('should throw error for invalid discount percentage', () => {
			expect(() => calculateDiscountedPrice(100, -10)).toThrow('Discount percentage must be between 0 and 100');

			expect(() => calculateDiscountedPrice(100, 110)).toThrow('Discount percentage must be between 0 and 100');

			expect(() => calculateDiscountedPrice(100, 'invalid')).toThrow('Discount percentage must be between 0 and 100');
		});
	});
});
