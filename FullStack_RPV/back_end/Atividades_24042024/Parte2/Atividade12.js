/*
Tendo como dados de entrada a altura e o sexo de uma pessoa, crie um programa que calcule seu peso ideal, utilizando as seguintes fórmulas: para homens: (72.7 * h) - 58; para mulheres: (62.1 * h) - 44.7. 
*/

const prompt = require('prompt-sync')();

const altura = Number(prompt("\nDigite a altura da pessoa (em centímetros): "));
const sexo = prompt("Digite o sexo da pessoa (M para masculino, F para feminino): ");

let pesoIdeal;
if (sexo.toUpperCase() === "M") {
    pesoIdeal = (72.7 * (altura / 100)) - 58;
} else if (sexo.toUpperCase() === "F") {
    pesoIdeal = (62.1 * (altura / 100)) - 44.7;
} else {
    console.log("\nSexo inválido. Digite M para masculino ou F para feminino.\n");
}

if (pesoIdeal) {
    console.log(`\nO peso ideal para uma pessoa de ${altura} cm de altura é aproximadamente ${pesoIdeal.toFixed(2)} kg.\n`);
}
