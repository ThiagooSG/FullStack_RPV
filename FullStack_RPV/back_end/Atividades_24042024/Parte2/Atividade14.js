/*
Tendo como dados de entrada o peso (em quilogramas) e a altura (em metros) de uma pessoa, crie um programa que calcule o Índice de Massa Corporal (IMC) dessa pessoa.
Calcule o IMC usando a fórmula: IMC = peso / (altura * altura).
Classifique o IMC da seguinte forma:
- IMC < 18,5 Kg/m2: Abaixo do Peso
- IMC >= 18,5 Kg/m2 e < 24,9 Kg/m2: Peso Ideal
- IMC >= 25 Kg/m2 e < 29,9 Kg/m2: Excesso de Peso
- IMC >= 30 Kg/m2: Obesidade 
*/

const prompt = require('prompt-sync')();

const peso = Number(prompt("Digite o peso (em kg): "));
const altura = Number(prompt("Digite a altura (em metros): "));

const imc = peso / (altura * altura);

let classificacao;
if (imc < 18.5) {
    classificacao = "Abaixo do Peso";
} else if (imc >= 18.5 && imc < 24.9) {
    classificacao = "Peso Ideal";
} else if (imc >= 25 && imc < 29.9) {
    classificacao = "Excesso de Peso";
} else {
    classificacao = "Obesidade";
}

console.log(`\nIMC: ${imc.toFixed(2)} Kg/m²`);
console.log(`Classificação: ${classificacao}\n`);