/* 
Crie um programa que leia a idade de uma pessoa expressa
em anos, meses e dias e mostre-a expressa apenas em dias.
*/

const promptSync = require('prompt-sync');
const prompt = promptSync();

let anos = Number(prompt("Digite a quantidade de anos: "));
let meses = Number(prompt("Digite a quantidade de meses: "));
let dias = Number(prompt("Digite a quantidade de dias: "));

let totalDias = anos * 365 + meses * 30 + dias;

console.log(`A idade expressa em dias é: ${totalDias}`);