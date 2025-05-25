// Funciones puras para manejar el carrito
export function addProductToCart(cart, product) {
	if (!product || !product.id) {
		throw new Error('Product must have an id');
	}

	const existingProduct = cart.find((item) => item.id === product.id);

	if (existingProduct) {
		return cart.map((item) => (item.id === product.id ? {...item, quantity: item.quantity + 1} : item));
	} else {
		return [...cart, {...product, quantity: 1}];
	}
}

export function removeProductFromCart(cart, productId) {
	return cart.filter((item) => item.id !== productId);
}

export function updateProductQuantity(cart, productId, newQuantity) {
	if (newQuantity <= 0) {
		return removeProductFromCart(cart, productId);
	}

	return cart.map((item) => (item.id === productId ? {...item, quantity: newQuantity} : item));
}

export function calculateCartTotal(cart) {
	return cart.reduce((total, item) => {
		return total + item.price * item.quantity;
	}, 0);
}

export function getCartItemCount(cart) {
	return cart.reduce((count, item) => count + item.quantity, 0);
}
