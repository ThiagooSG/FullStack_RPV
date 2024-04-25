/* 
Crie um programa que leia a idade de uma pessoa expressa
em dias e mostre-a expressa em anos, meses e dias
*/

const promptSync = require('prompt-sync');
const prompt = promptSync();

let dias = Number(prompt("Digite a quantidade de dias: "));

let anos = Math.floor(dias / 365);
dias %= 365;
let meses = Math.floor(dias / 30);
dias %= 30;

console.log(`A idade expressa em anos, meses e dias é: ${anos} anos, ${meses} meses e ${dias} dias.`);



