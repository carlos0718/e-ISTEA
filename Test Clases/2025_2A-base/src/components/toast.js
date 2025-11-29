export function showToast(message, duration = 3000) {
	let template = `
        <div class="toast align-items-center text-bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true" style="max-width: 350px;">
            <div class="d-flex">
                <div class="toast-body">
                ${message}
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
    `;
	const toastContainer = document.querySelector('.toast-container');
	toastContainer.insertAdjacentHTML('beforeend', template);

	// Seleccionar el último toast agregado
	const toasts = toastContainer.querySelectorAll('.toast');
	console.log(toasts);
	const lastToast = toasts[toasts.length - 1];

	const bootstrapToast = new bootstrap.Toast(lastToast, {delay: duration});
	bootstrapToast.show();
}
