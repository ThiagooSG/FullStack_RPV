console.clear();
const promptSync = require('prompt-sync');
const prompt = promptSync();

let nota1 = Number(prompt("Digite o primeiro número: "));
let nota2 = Number(prompt("Digite o segundo número: "));

let media = (nota1 + nota2) / 2;

if (media == 10) {
    console.log("Aprovado com Distinção");
} else if (media >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}
