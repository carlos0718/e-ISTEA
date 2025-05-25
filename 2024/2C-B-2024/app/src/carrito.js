let sidebar = document.querySelector('#sidebarcart');
export function addTocart() {
	let cartLs = JSON.parse(localStorage.getItem('products-cart'));
	sidebar.innerHTML = '';
	cartLs.forEach((p) => {
		let card = `
                    <div class="card mb-3" style="max-width: 540px;" id='card-${p.id}'>
                        <div class="row g-0">
                            <div class="col-md-4">
                            <img src=${p.image} class="img-fluid rounded-start" alt=${p.title}>
                            </div>
                            <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${p.title}</h5>
                               <div>
                                <button class='btn btn-danger'
                                type='button' id="btnRest-${p.id}" ${p.quantity === 1 ? 'disabled' : null} > - </button>
                                <span id='qty-${p.id}' class='m-2 fw-bold'>${p.quantity}</span>
                                <button class='btn btn-primary'
                                type='button' id="btnAdd-${p.id}"> + </button>
                                <button class='btn btn-danger'
                                 type='button' id="btnDelete-${p.id}"> delete </button>
                               </div>
                            </div>
                            </div>
                        </div>
                        </div>
                `;

		sidebar.innerHTML += card;
		/* 
		let btnRest = document.querySelector(`#btnRest-${p.id}`);
		btnRest.addEventListener('click', () => {
			console.log('restar');
		}); */
	});
	cartLs.forEach((p) => {
		let btnRest = document.querySelector(`#btnRest-${p.id}`);
		let qty = document.querySelector(`#qty-${p.id}`);
		btnRest.addEventListener('click', () => {
			p.quantity -= 1;
			if (p.quantity <= 1) {
				btnRest.disabled = true;
			}
			qty.innerHTML = '';
			qty.innerHTML = p.quantity;
			localStorage.setItem('products-cart', JSON.stringify(cartLs));
		});

		let btnAdd = document.querySelector(`#btnAdd-${p.id}`);
		btnAdd.addEventListener('click', () => {
			p.quantity += 1;
			qty.innerHTML = '';
			qty.innerHTML = p.quantity;
			btnRest.removeAttribute('disabled');
			localStorage.setItem('products-cart', JSON.stringify(cartLs));
		});

		let btnDelete = document.querySelector(`#btnDelete-${p.id}`);
		btnDelete.addEventListener('click', () => {
			if (confirm('¿Desea eliminar este producto del carrito?')) {
				let index = cartLs.findIndex((el) => el.id === p.id);
				cartLs.splice(index, 1);
				localStorage.setItem('products-cart', JSON.stringify(cartLs));

				let card = document.querySelector(`#card-${p.id}`);
				card.remove();
			}
		});
	});
}

function buyProducts() {
	let cartList = document.querySelector('#btn-comprar');
	cartList.addEventListener('click', () => {
		let cartLs = JSON.parse(localStorage.getItem('products-cart'));
		let total = cartLs.reduce((acc, el) => acc + el.price * el.quantity, 0);
		let message = `Total a pagar: $ ${total}`;
		alert(message);
		localStorage.removeItem('products-cart');
		sidebar.innerHTML = '';
		if (localStorage.getItem('products-cart') === null) {
			localStorage.setItem('products-cart', '[]');
		}
	});
}

buyProducts();
