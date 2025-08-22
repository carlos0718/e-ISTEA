export function notifications(prod, color = 'primary', msg = 'agregado al carrito') {
	let notification = document.querySelector('.toast-container');

	// Crear un nuevo elemento div para el toast en lugar de usar innerHTML
	const toastElement = document.createElement('div');
	toastElement.className = 'toast';
	toastElement.classList.add('text-bg-' + color); // Agregar la clase de color
	toastElement.setAttribute('role', 'alert');
	toastElement.setAttribute('aria-live', 'assertive');
	toastElement.setAttribute('aria-atomic', 'true');
	toastElement.id = `toast-${prod.id}-${Date.now()}`; // ID único usando timestamp

	toastElement.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">
                "${prod.title}" ${msg}. 
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
    `;

	// Agregar el nuevo toast al contenedor
	notification.appendChild(toastElement);

	// Inicializar el toast con Bootstrap
	const bsToast = new bootstrap.Toast(toastElement, {
		autohide: true,
		delay: 5000,
		animation: true
	});

	bsToast.show();

	// Eliminar el toast del DOM después de que se oculte
	toastElement.addEventListener('hidden.bs.toast', () => {
		notification.removeChild(toastElement);
	});
}

// Función insegura para demostración
export function notificationsInsegura(prod, color = 'primary', msg = 'agregado al carrito') {
	let notification = document.querySelector('.toast-container');

	// Simulamos un producto malicioso con código JavaScript inyectado
	if (prod.title.includes('<script>')) {
		console.warn('¡Atención! Detectado intento de inyección de código');
	}

	// Método inseguro usando strings
	notification.innerHTML += `
        <div class="toast text-bg-${color}" role="alert" aria-live="assertive" aria-atomic="true" id="toast-${prod.id}-${Date.now()}">
            <div class="d-flex">
                <div class="toast-body">
                    "${prod.title}" ${msg}
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
    `;

	// Problema: tenemos que buscar el elemento que acabamos de crear
	const toasts = notification.querySelectorAll('.toast');
	const toastElement = toasts[toasts.length - 1];

	// Intento de inicializar Bootstrap (podría fallar)
	try {
		const bsToast = new bootstrap.Toast(toastElement, {
			autohide: true,
			delay: 5000,
			animation: true
		});
		bsToast.show();
		// Eliminar el toast del DOM después de que se oculte
		toastElement.addEventListener('hidden.bs.toast', () => {
			notification.removeChild(toastElement);
		});
	} catch (error) {
		console.error('Error al inicializar el toast:', error);
	}

	// No podemos limpiar el DOM fácilmente porque perdemos la referencia
}

// Función usando selector por ID
export function notificationsConId(prod, color = 'primary', msg = 'agregado al carrito') {
    let notification = document.querySelector('.toast-container');
    
    // Generamos un ID único
    const toastId = `toast-${prod.id}-${Date.now()}`;
    
    // Método usando strings pero con selector por ID
    notification.innerHTML += `
        <div class="toast text-bg-${color}" role="alert" aria-live="assertive" aria-atomic="true" id="${toastId}">
            <div class="d-flex">
                <div class="toast-body">
                    "${prod.title}" ${msg}
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
    `;

    // Usar getElementById es más rápido y específico que querySelectorAll
    const toastElement = document.getElementById(toastId);

    // Inicializar Bootstrap
    try {
        const bsToast = new bootstrap.Toast(toastElement, {
            autohide: true,
            delay: 5000,
            animation: true
        });
        bsToast.show();
        
        // Eliminar el toast del DOM después de que se oculte
        toastElement.addEventListener('hidden.bs.toast', () => {
            if (document.getElementById(toastId)) {  // Verificamos que aún existe
                notification.removeChild(toastElement);
            }
        });
    } catch (error) {
        console.error('Error al inicializar el toast:', error);
    }
}
