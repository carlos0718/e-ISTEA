export function showMessage(text, color) {
	let taostContainer = document.querySelector('#toast-container');
	let toastHtml = `
            <div id="liveToast" class="toast align-items-center text-bg-${color} border-0 z-3" role="alert"
                 aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                    <strong class="me-auto"></strong>
                    <small>11 mins ago</small>
                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                    ${text}
                </div>
            </div>
    `;
	taostContainer.innerHTML = toastHtml;

	let toast = document.querySelector('#liveToast');
	let myToast = new bootstrap.Toast(toast);
	myToast.show();
}
