import {createCards} from './components/cards.js';

console.log('hola javascript');

createCards();

//localstorage

let arrProd = [
	{
		id: 1,
		title: 'Producto 1',
		image: 'https://via.placeholder.com/150',
		description: 'Descripción del producto 1',
		price: 100
	},
	{
		id: 2,
		title: 'Producto 2',
		image: 'https://via.placeholder.com/150',
		description: 'Descripción del producto 2',
		price: 200
	},
	{
		id: 3,
		title: 'Producto 3',
		image: 'https://via.placeholder.com/150',
		description: 'Descripción del producto 3',
		price: 300
	}
];

localStorage.setItem('productos', JSON.stringify(arrProd));
let obj = JSON.parse(localStorage.getItem('productos'));
console.log('objeto parseado', obj);
console.log('objeto parseado 1', obj[0].title);
