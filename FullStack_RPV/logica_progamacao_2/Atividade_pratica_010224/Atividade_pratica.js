console.clear();
const promptSync = require('prompt-sync');
const prompt = promptSync();

let num1, num2;
let operador;
let menu = `
Tabela de Operadores
Digite + para somar
Digite - para Subtrair
Digite * para Multiplicar
Digite / para Divisão
`;

function calcula() {
    do {
        num1 = Number(prompt("Digite o primeiro número: "));
    } while (isNaN(num1))
    do {
        num2 = Number(prompt("Digite o segundo número: "));
    } while (isNaN(num2))
    
    
    do {
        console.log(menu);
        operador = prompt("Digite o operador do tipo de cálculo desejado: ");
    
        switch (operador) {
            case '/':
                console.log(`Resultado da divisão: ${num1 / num2}`);
                break;
            case '*':
                console.log(`Resultado da multiplicação: ${num1 * num2}`);
                break;
            case '-':
                console.log(`Resultado da subtração: ${num1 - num2}`);
                break;
            case '+':
                console.log(`Resultado da soma: ${num1 + num2}`);
                break;
            default:
                console.clear();
                console.log(`Operador inválido, digite novamente.`);
                break;
        }
    } while (operador != '/' && operador != '*' && operador != '-' && operador != '+')
};

calcula();

