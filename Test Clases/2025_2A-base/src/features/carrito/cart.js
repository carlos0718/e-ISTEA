import {getProductById} from '../../services/api.js';
import {setProductsStorage, updateItemStorage} from '../../utils/storage.js';

export async function agregarProductoAlCarrito(product, qtty) {
	let index = updateItemStorage(product.id, parseInt(qtty));
	if (index === -1) {
		// El producto no existe en el carrito, lo agregamos
		setProductsStorage({...product, quantity: parseInt(qtty)});
		//o
		/* product.quantity = qtty;
		setProductsStorage(product); */
	}
}
