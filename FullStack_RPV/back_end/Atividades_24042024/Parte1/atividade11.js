/*
Crie um programa que leia o tempo de duração de uma
atividade em segundos e mostre-o expresso em horas,
minutos e segundos.
*/

const promptSync = require('prompt-sync');
const prompt = promptSync();

console.log(`Tempo de duração de uma atividade.`);

let segundos = Number(prompt("Digite a quantidade de segundos: "));

let horas = Math.floor(segundos / 3600);
segundos %= 3600;
let minutos = Math.floor(segundos / 60);
segundos %= 60;

console.log(`O tempo expresso em horas, minutos e segundos é: ${horas} horas, ${minutos} minutos e ${segundos} segundos.`);