console.clear();
const promptSync = require('prompt-sync');
const prompt = promptSync();

let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));
let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;
console.clear();
console.log(`O resultado da soma de ${num1} com ${num2} é: ${soma}`);
console.log(`O resultado da subtração de ${num1} por ${num2} é: ${subtracao}`);
console.log(`O resultado da multiplicação de ${num1} com ${num2} é: ${multiplicacao}`);
console.log(`O resultado da divisão de ${num1} por ${num2} é: ${divisao}`);