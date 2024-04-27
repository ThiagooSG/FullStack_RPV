/* 
Crie um programa para receber um número qualquer e
exibir no console se é par ou ímpar.
*/

const prompt = require('prompt-sync')();

console.log("Verificando se um número é par ou impar:");
num = Number(prompt("Digite um número: "));

parImpar = num % 2;
if (parImpar === 0) {
    console.log(`O ${num} é um número par!`);
} else {
    console.log(`O ${num} é um número impar!`);
}
