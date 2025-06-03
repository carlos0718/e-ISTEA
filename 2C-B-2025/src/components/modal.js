export function createModal(producto) {
	let containterModal = document.querySelector('#exampleModal');
	let template = `<div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">${producto.title}</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <img src="${producto.image}" class="card-img-top img-fluid" alt="${producto.title}" style="height: 350px; object-fit:scale-down;">
                                <div class="text-center mt-4">
                                    <p>Descripción: ${producto.description}</p>
                                    <p class='fw-bolder' >Price: $${producto.price}</p>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary"><span><i class="bi bi-basket3"></i></span> Agregar a carrito</button>
                            </div>
                        </div>
                    </div>`;

	containterModal.innerHTML = template;
	let modalBs = new bootstrap.Modal(containterModal);
	modalBs.show();
}
