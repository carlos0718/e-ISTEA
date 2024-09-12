import { getAllProducts } from "../app/api/products-api.js";
import { cardSection } from "../app/components/card-section.js";

const $ = document;
const input = $.querySelector("#filter-prod");

input.addEventListener("input", (e) => {
	const value = e.target.value.toLowerCase();
	console.log("Input value:", value);

	getAllProducts().then((data) => {
		const filteredProducts = data.filter((product) => {
			return product.title && product.title.toLowerCase().includes(value);
		});
		console.log("Filtered products:", filteredProducts);
		$.querySelector("#card-list").innerHTML = "";
		filteredProducts.forEach( prod => cardSection(prod));
	});
});
