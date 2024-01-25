console.clear();
const promptSync = require('prompt-sync');
const prompt = promptSync();

let a = Number(prompt("Digite um número inteiro: "));
let b = Number(prompt("Digite outro número inteiro: "));

if(a === b) {
    c = a + b;
    console.log(`O valor da soma de ${a} com ${b} é ${c}`);
} else {
    c = a * b;
    console.log(`O valor da multiplicação de ${a} por ${b} é ${c}`);
}