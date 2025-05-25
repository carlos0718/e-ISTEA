import {
  addProductToCart,
  removeProductFromCart,
  updateProductQuantity,
  calculateCartTotal,
  getCartItemCount
} from '../cartUtils';

describe('cartUtils', () => {
  // Datos de prueba que reutilizaremos
  const mockProduct1 = { id: 1, title: 'iPhone 14', price: 999 };
  const mockProduct2 = { id: 2, title: 'Samsung Galaxy', price: 799 };
  
  describe('addProductToCart', () => {
    it('should add new product to empty cart', () => {
      const cart = [];
      const result = addProductToCart(cart, mockProduct1);
      
      expect(result).toHaveLength(1);
      expect(result[0]).toEqual({ ...mockProduct1, quantity: 1 });
    });

    it('should increment quantity for existing product', () => {
      const cart = [{ ...mockProduct1, quantity: 1 }];
      const result = addProductToCart(cart, mockProduct1);
      
      expect(result).toHaveLength(1);
      expect(result[0].quantity).toBe(2);
    });

    it('should add different product to existing cart', () => {
      const cart = [{ ...mockProduct1, quantity: 1 }];
      const result = addProductToCart(cart, mockProduct2);
      
      expect(result).toHaveLength(2);
      expect(result[1]).toEqual({ ...mockProduct2, quantity: 1 });
    });

    it('should throw error for invalid product', () => {
      const cart = [];
      
      expect(() => addProductToCart(cart, null))
        .toThrow('Product must have an id');
      
      expect(() => addProductToCart(cart, { title: 'No ID' }))
        .toThrow('Product must have an id');
    });
  });

  describe('removeProductFromCart', () => {
    it('should remove product from cart', () => {
      const cart = [
        { ...mockProduct1, quantity: 1 },
        { ...mockProduct2, quantity: 2 }
      ];
      
      const result = removeProductFromCart(cart, 1);
      
      expect(result).toHaveLength(1);
      expect(result[0].id).toBe(2);
    });

    it('should return same cart if product not found', () => {
      const cart = [{ ...mockProduct1, quantity: 1 }];
      const result = removeProductFromCart(cart, 999);
      
      expect(result).toEqual(cart);
    });
  });

  describe('updateProductQuantity', () => {
    it('should update product quantity', () => {
      const cart = [{ ...mockProduct1, quantity: 1 }];
      const result = updateProductQuantity(cart, 1, 5);
      
      expect(result[0].quantity).toBe(5);
    });

    it('should remove product when quantity is 0', () => {
      const cart = [{ ...mockProduct1, quantity: 1 }];
      const result = updateProductQuantity(cart, 1, 0);
      
      expect(result).toHaveLength(0);
    });

    it('should remove product when quantity is negative', () => {
      const cart = [{ ...mockProduct1, quantity: 1 }];
      const result = updateProductQuantity(cart, 1, -1);
      
      expect(result).toHaveLength(0);
    });
  });

  describe('calculateCartTotal', () => {
    it('should calculate total for single item', () => {
      const cart = [{ ...mockProduct1, quantity: 2 }];
      const result = calculateCartTotal(cart);
      
      expect(result).toBe(1998); // 999 * 2
    });

    it('should calculate total for multiple items', () => {
      const cart = [
        { ...mockProduct1, quantity: 1 }, // 999
        { ...mockProduct2, quantity: 2 }  // 799 * 2 = 1598
      ];
      const result = calculateCartTotal(cart);
      
      expect(result).toBe(2597); // 999 + 1598
    });

    it('should return 0 for empty cart', () => {
      const result = calculateCartTotal([]);
      expect(result).toBe(0);
    });
  });

  describe('getCartItemCount', () => {
    it('should count total items in cart', () => {
      const cart = [
        { ...mockProduct1, quantity: 3 },
        { ...mockProduct2, quantity: 2 }
      ];
      const result = getCartItemCount(cart);
      
      expect(result).toBe(5); // 3 + 2
    });

    it('should return 0 for empty cart', () => {
      const result = getCartItemCount([]);
      expect(result).toBe(0);
    });
  });
});
