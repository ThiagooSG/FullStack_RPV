/* 
Crie um programa que leia 5 números e mostre o somatório
entre eles.
*/

const promptSync = require('prompt-sync');
const prompt = promptSync();

num1 = Number(prompt("Digite o primeiro número: "));
num2 = Number(prompt("Digite o segundo número: "));
num3 = Number(prompt("Digite o terceiro número: "));
num4 = Number(prompt("Digite o quarto número: "));
num5 = Number(prompt("Digite o quinto número: "));

soma = num1 + num2 + num3 + num4 + num5;

console.log(`A soma total entre eles é: ${soma}`);