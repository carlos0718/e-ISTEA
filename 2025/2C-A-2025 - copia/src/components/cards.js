import {animate} from 'https://cdn.jsdelivr.net/npm/motion@latest/+esm';

import {createModal} from './modal.js';

let isLoaded = false;

export function createCards(data) {
	let containerCards = document.querySelector('#list-products');
	if (!data) {
		// Si no hay datos, mostrar loading
		showloading(containerCards);
		return;
	}

	// Configurar la función global para mostrar detalles
	window.mostrarDetalle = (prod) => {
		createModal(prod);
	};

	// Construir las cards
	let template = '';
	data.forEach((p) => {
		let card = `<div class="col">
                        <div class="card" style="height:450px">
                            <img src="${p.image}" class="card-img-top img-fluid" alt="${p.title}" style="height: 350px; object-fit:scale-down;">
                            <div class="card-body">
                                <h5 class="card-title text-truncate">${p.title}</h5>
                                <button type='button' class='btn btn-primary' onclick='mostrarDetalle(${JSON.stringify(p)})'> Más detalle</button>
                            </div>
                        </div>
                    </div>`;
		template += card;
	});

	// Actualizar el contenido y animar
	containerCards.innerHTML = template;
	isLoaded = true;
	if (isLoaded) {
		animateCards();
	}
}
function animateCards() {
	// Seleccionar todos los elementos de tarjeta para animar
	let elements = document.querySelectorAll('.card');
	if (elements.length > 0) {
		// Animar las tarjetas con efecto de entrada
		elements.forEach((el, index) => {
			// Stagger effect - cada tarjeta se anima con un pequeño retraso
			animate(
				el,
				{
					opacity: [0, 1],
					scale: [0.8, 1],
					y: [50, 0]
				},
				{
					delay: index * 0.1, // retraso escalonado
					duration: 0.8,
					easing: 'ease-out'
				}
			);
		});

		// Añadir efectos al hacer hover en las tarjetas
		elements.forEach((el) => {
			el.addEventListener('mouseenter', () => {
				animate(el, {scale: 1.05, y: -5}, {duration: 0.3, easing: 'ease-out'});
			});

			el.addEventListener('mouseleave', () => {
				animate(el, {scale: 1, y: 0}, {duration: 0.3, easing: 'ease-out'});
			});
		});
	}
}

function showloading(containerCards) {
	console.log('Cargando productos...');
	// Configurar el cuerpo del documento para ocupar al menos toda la altura de la ventana
	document.body.style.minHeight = '100vh';
	document.body.style.display = 'flex';
	document.body.style.flexDirection = 'column';

	// Hacer que el contenedor principal (main) ocupe todo el espacio disponible
	document.querySelector('main').style.flex = '1';

	// Mostrar mensaje de carga centrado en la pantalla
	containerCards.innerHTML = `
		<div class="position-absolute top-50 start-50 translate-middle text-center">
			<div class="spinner-border text-warning" role="status" style="width: 3rem; height: 3rem;">
				<span class="visually-hidden">Cargando...</span>
			</div>
			<h4 class="mt-3 text-warning">CARGANDO...</h4>
		</div>
	`;
}
