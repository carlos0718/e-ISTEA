export function createModal(product) {
	let containerModal = document.querySelector('#exampleModalFullscreen');

	window.agregarACarrito = (item) => {
		console.log('Producto agregado al carrito:', item);
	};

	let template = ` <div class="modal-dialog modal-fullscreen">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalFullscreenLabel">${product.title}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-6 d-flex flex-column justify-content-center align-items-center">
                                <img src="${product.image}" class="img-fluid bg-transparent object-fit-contain" alt="${product.title}">
                            </div>
                            <div class="col-md-6 bg-primary text-white d-flex flex-column justify-content-center align-items-center"
                                 style="min-height: 80vh;">
                                <h2 class="text-center mb-5">
                                    Nombre del Producto</h2>
                                <p><strong>Precio:</strong> $99.99</p>
                                <p><strong>Categoría:</strong> Electrónica</p>
                                <p>Descripción detallada del producto:
                                    ${product.description}.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onclick='agregarACarrito(${JSON.stringify(product)})'>Agregar a carrito</button>
                    </div>
                </div>
            </div>`;

	containerModal.innerHTML = template;
	// Initialize Bootstrap modal
	const modal = new bootstrap.Modal(containerModal);
	modal.show();

	containerModal.addEventListener('hidden.bs.modal', () => {
		let modalContent = containerModal.querySelector('.modal-dialog');
		containerModal.removeChild(modalContent); // Remove the modal dialog
	});
}
