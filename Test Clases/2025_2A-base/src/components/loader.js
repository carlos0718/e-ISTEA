export function loader() {
	let template = `
        <div class="d-flex justify-content-center align-items-center" id="loader" style="min-height: 100vh;">
            <div class="spinner-grow text-dark" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    `;
	let container = document.querySelector('.offcanvas-body');
	container.innerHTML = template;
}
