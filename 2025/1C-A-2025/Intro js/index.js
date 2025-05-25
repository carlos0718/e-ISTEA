console.log('Hello, world!');

//var num = 1;
let num = 1;
const PI = 3.14;

num = num * 5;
console.log(num);

//if(booleano) => TRUE or FALSE

if (num == 3) {
	console.log('Es 3');
} else {
	console.log('No es 3');
}
num = 3; // number
// '3' or "3" => string
if (num == '3') {
	// == solo compara el valor
	console.log('usando == Es 3');
} else {
	console.log('usando == , No es 3');
}

if (num === '3') {
	// === compara el valor y el tipo de dato
	console.log('usando = = = Es 3');
} else {
	console.log('usando = = = , No es 3');
}

// ! = not
if (num != 3 || num > 5) {
	// OR
	console.log('No es 3');
} else {
	console.log('Es 3');
}

if (num == 3 || num > 5) {
	// OR
	console.log('Usando OR => No es 3');
} else {
	console.log('Es 3');
}

if (num == 3 && num > 5) {
	// AND
	console.log('No es 3');
} else {
	console.log('Usando AND => Es 3');
}

if (num == 3 && num > 5) {
	// AND
	console.log('No es 3');
} else if (num == 3 && num < 5) {
	console.log('Usando AND => Es 3');
} else {
	console.log('No es 3');
}

//loops
//for, while, do while
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/* for (let i = 0; i < arr.length; i++) {
	console.log(`${i} => ${arr[i]}`);
} */

//map
arr.map((element, index) => {
	console.log(`${index} => ${element}`);
});

let obj = {
	nombre: 'Juan',
	apellido: 'Perez',
	edad: 30
};

console.log(`Nombre>${obj.nombre}`);

let arrObj = [
	{nombre: 'Juan', apellido: 'Perez', edad: 30},
	{nombre: 'Maria', apellido: 'Lopez', edad: 25},
	{nombre: 'Pedro', apellido: 'Gomez', edad: 40}
];

arrObj.map((element, index) => {
	console.log(`${index} => ${element.nombre} ${element.apellido}`);
});
