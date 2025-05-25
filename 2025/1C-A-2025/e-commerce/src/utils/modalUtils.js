// Función pura para generar el HTML del modal
export function generateModalHTML(product) {
	if (!product) {
		throw new Error('Product is required');
	}

	if (!product.title || !product.price || !product.image) {
		throw new Error('Product must have title, price, and image');
	}

	return `<div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">${product.title}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="card mb-3" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${product.image}" class="img-fluid rounded-start" alt="${product.title}">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">${product.description || 'Sin descripción'}</p>
                <p class="card-text"><strong>$${product.price}</strong></p>
                <button type="button" class="btn btn-primary" onclick='agregarACarrito(${JSON.stringify(product)})'>
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

// Función para calcular el precio con descuento
export function calculateDiscountedPrice(price, discountPercentage) {
	if (typeof price !== 'number' || price < 0) {
		throw new Error('Price must be a positive number');
	}

	if (typeof discountPercentage !== 'number' || discountPercentage < 0 || discountPercentage > 100) {
		throw new Error('Discount percentage must be between 0 and 100');
	}

	return price * (1 - discountPercentage / 100);
}
