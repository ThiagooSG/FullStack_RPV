/*
Tendo como dados de entrada dois valores numéricos digitados pelo usuário, crie um programa para uma calculadora com as seguintes
operações: soma, subtração, multiplicação e divisão. Após a escolha da operação exiba no console o resultado.
*/

const prompt = require('prompt-sync')();

console.log("Calculadora simples:");
const valor1 = Number(prompt("Digite o primeiro valor: "));
const valor2 = Number(prompt("Digite o segundo valor: "));

const operacao = prompt(`Escolha a operação:
    1 - Soma
    2 - Subtração
    3 - Multiplicação
    4 - Divisão 
    = `);

let resultado;
switch (operacao) {
    case "1":
        resultado = valor1 + valor2;
        break;
    case "2":
        resultado = valor1 - valor2;
        break;
    case "3":
        resultado = valor1 * valor2;
        break;
    case "4":
        resultado = valor1 / valor2;
        break;
    default:
        console.log("Operação inválida.");
        break;
}

if (resultado !== undefined) {
    console.log(`Resultado: ${resultado}`);
}