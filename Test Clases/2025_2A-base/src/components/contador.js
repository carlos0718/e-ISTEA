import {getProductById} from '../services/api.js';

export function contador(id) {
	let contador = 1;
	let template = `
        <div class="d-flex align-items-center gap-3">
            <button class="btn btn-dark" id="decrementar-${id}">-</button>
            <span id="qtty-${id}">${contador}</span>
            <button class="btn btn-dark" id="incrementar-${id}">+</button>
        </div>
    `;

	return template;
}

// Función para agregar los event listeners a los botones
export function eventsOnclick(id, initialCount) {
	let contador = initialCount;
	document.getElementById(`decrementar-${id}`).addEventListener('click', () => {
		if (contador > 1) {
			contador--;
		}
		document.getElementById(`qtty-${id}`).innerText = contador;
	});
	document.getElementById(`incrementar-${id}`).addEventListener('click', () => {
		contador++;
		document.getElementById(`qtty-${id}`).innerText = contador;
	});
}
