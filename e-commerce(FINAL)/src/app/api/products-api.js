import { API_URL } from "./api-url.js";

function getAllProducts() {
	return fetch(`${API_URL}/products`).then((response) => response.json()).then((data) => data);
}

export { getAllProducts };
