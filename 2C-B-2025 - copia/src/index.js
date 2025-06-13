import {getProducts} from './api/api.js';
import {createCards} from './components/cards.js';
import {createCart} from './components/carrito.js';
import {filterInput} from './utils/filterInput.js';

// Inicializar el carrito si no existe
localStorage.getItem('lista-carrito') || localStorage.setItem('lista-carrito', JSON.stringify([]));

// Inicializar la aplicación
async function initializeApp() {
	try {
		// Mostrar loading inicial
		createCards(null);

		// Obtener productos
		const data = await getProducts();
		console.log('Data fetched:', data.length, 'products');

		// Mostrar productos iniciales después de cargar
		createCards(data);

		// Configurar el filtrado
		const input = document.querySelector('#filter');
		if (input) {
			input.addEventListener('input', (e) => {
				const searchTerm = e.target.value.trim();
				if (searchTerm === '') {
					createCards(data);
				} else {
					const filteredData = filterInput(data, searchTerm);
					console.log('Filtered Data:', filteredData.length, 'products found');
					createCards(filteredData);
				}
			});
		}

		// Inicializar carrito
		createCart(JSON.parse(localStorage.getItem('lista-carrito')));
	} catch (error) {
		console.error('Error initializing app:', error);
		const container = document.querySelector('#list-products');
		if (container) {
			container.innerHTML = `
                <div class="alert alert-danger text-center" role="alert">
                    <h4 class="alert-heading">Error</h4>
                    <p>Lo sentimos, ha ocurrido un error al cargar los productos.</p>
                    <hr>
                    <p class="mb-0">Por favor, intente recargar la página.</p>
                </div>
            `;
		}
	}
}

// Iniciar la aplicación
initializeApp();
