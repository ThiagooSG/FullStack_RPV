/*
Crie um programa que leia os valores A, B, C e exiba no
console os números ordenados em ordem crescente e
depois em ordem decrescente.
*/

let A = 15;
let B = 8;
let C = 11;

let numeros = [A, B, C];

numeros.sort((a, b) => a - b);
console.log(`Ordem crescente: ${numeros}`);

numeros.sort((a, b) => b - a);
console.log(`Ordem decrescente: ${numeros}`);
