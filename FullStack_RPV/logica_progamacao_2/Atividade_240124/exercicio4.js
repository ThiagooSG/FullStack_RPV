console.clear();
const promptSync = require('prompt-sync');
const prompt = promptSync();

let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));
let num3 = Number(prompt("Digite o terceiro número: "));
media = (num1 + num2 + num3) / 3;
console.log(`A média aritmética de ${num1} + ${num2} + ${num3} é : ${media}`);