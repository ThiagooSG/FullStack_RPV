/*
Crie um programa que leia o tempo de duração de uma
atividade em horas, minutos e segundos e mostre-o expresso
em segundos.
*/

const promptSync = require('prompt-sync');
const prompt = promptSync();

console.log(`Tempo de duração de uma atividade.`);
let horas = Number(prompt("Digite a quantidade de horas: "));
let minutos = Number(prompt("Digite a quantidade de minutos: "));
let segundos = Number(prompt("Digite a quantidade de segundos: "));

let totalSegundos = horas * 3600 + minutos * 60 + segundos;

console.log(`A tempo expresso em segundos é: ${totalSegundos}`);