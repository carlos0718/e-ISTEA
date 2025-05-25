export function createNotification(prod, message = 'agreado al carrito', color = 'primary') {
	const divToast = document.createElement('div');
	divToast.className = 'toast';
	divToast.classList.add('text-bg-' + color);
	divToast.setAttribute('role', 'alert');
	divToast.setAttribute('aria-live', 'assertive');
	divToast.setAttribute('aria-atomic', 'true');

	divToast.id = `toast-${prod.id}-${Date.now()}`;

	divToast.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">
                "${prod.title}" ${message}
            </div>
            <button type="button" class="btn-close btn-btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>`;

	const toastContainer = document.querySelector('.toast-container');
	toastContainer.appendChild(divToast);

	const bsToast = new bootstrap.Toast(divToast, {
		autohide: true,
		delay: 3000,
		animation: true
	});
	bsToast.show();

	divToast.addEventListener('hidden.bs.toast', () => {
		divToast.remove();
	});
}
