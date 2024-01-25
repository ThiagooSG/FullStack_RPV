console.clear();
const promptSync = require('prompt-sync');
const prompt = promptSync();

let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));
let cod = Number(prompt("Digite 1 para soma, 2 para multiplicação ou 3 para dividir o primeiro número pelo segundo: "));

while (true) {
    if (cod === 1) {
        let soma = num1 + num2;
        console.log(`O resultado da soma de ${num1} com ${num2} é: ${soma}`);
        break
    } else if (cod === 2) {
        let multiplicacao = num1 * num2;
        console.log(`O resultado da multiplicação de ${num1} com ${num2} é: ${multiplicacao}`);
        break
    } else if (cod === 3) {
        let divisao = num1 / num2;
        console.log(`O resultado da divisão de ${num1} por ${num2} é: ${divisao}`);
        break
    } else {
        console.log("Escolha inválida!!!");
        cod = Number(prompt("Digite 1 para soma, 2 para multiplicação ou 3 para dividir o primeiro número pelo segundo: "));
    }
}

