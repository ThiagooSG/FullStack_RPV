/*
Crie um programa que leia o valor da matrícula de um curso,
calcule e mostre o seu novo valor, com 20% de desconto.
*/

let valorMatricula = 350.00;

valorComDesconto = valorMatricula - (valorMatricula * 0.20);

console.log(`O valor da matrícula do curso é: R$ ${valorMatricula.toFixed(2)}`)
console.log(`O preço do curso com 20% de desconto é: R$ ${valorComDesconto.toFixed(2)}`);