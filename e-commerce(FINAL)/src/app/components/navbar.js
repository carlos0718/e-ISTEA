import {sideBar} from "./sidebar.js";

export function navBar() {
	const $ = document;

	//create div container
	const divContainer = $.createElement("div");
	divContainer.className = "container-fluid";
	divContainer.innerHTML = "<a class='navbar-brand'>F A K E - S H O P </a>";

	//create icon cart
	const btnCart = $.createElement("button");
	btnCart.type = "button";
	btnCart.setAttribute("data-bs-toggle", "offcanvas");
	btnCart.setAttribute("data-bs-target", "#offcanvasRight");
	btnCart.setAttribute("aria-controls", "offcanvasRight");
	btnCart.className = "btn btn-outline-primary";
	btnCart.innerHTML = "<i class='bi bi-cart3'></i>";

	divContainer.appendChild(btnCart);
	//btnCart.onclick = null;
	btnCart.onclick = sideBar();

	$.querySelector("#nav-bar").appendChild(divContainer);

	sideBar();
}
