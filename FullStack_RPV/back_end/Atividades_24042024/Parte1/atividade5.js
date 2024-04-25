/* 
Crie um programa que exiba na tela a tabuada do número
digitado pelo usuário.
*/

const promptSync = require('prompt-sync');
const prompt = promptSync();

let numero = Number(prompt("Digite um número de 1 a 10 para calcular a tabuada: "));

for (let i = 1; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + numero * i);
}