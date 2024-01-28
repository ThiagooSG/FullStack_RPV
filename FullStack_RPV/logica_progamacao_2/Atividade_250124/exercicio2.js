console.clear();
const promptSync = require('prompt-sync');
const prompt = promptSync();

let menu = `
Escolha:
1 para Soma
2 para Subtração
3 para Multiplicação
4 Divisão`;

console.log(`====== Calculadora ======`)

let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo numero: "));
console.log(menu);
let opcao = prompt("Operação: ")

switch (opcao) {
    case '1':
        console.log(`${num1} + ${num2} = ${num1 + num2}
        `);
        break;
    case '2':
        console.log(`${num1} - ${num2} = ${num1 - num2}
        `);
        break;
    case '3':
        console.log(`${num1} * ${num2} = ${num1 * num2}
        `);
        break;
    case '4':
        console.log(`${num1} / ${num2} = ${num1 / num2}
        `);
        break;
    default:
        console.log(`Opção inválida, refaça a operação.
        `)
}