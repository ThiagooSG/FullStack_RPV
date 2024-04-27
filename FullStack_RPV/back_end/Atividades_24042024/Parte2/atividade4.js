/*
Crie um programa que leia um valor inicial A e exiba a
sequência de valores do cálculo de A! e o seu resultado.
Ex: 5! = 5 X 4 X 3 X 2 X 1 = 120
*/

const prompt = require('prompt-sync')();

console.log("Calculo de Fatorial:");
function fatorial(n) {
    let resultado = 1;
    let sequencia = '';
    for(let i = n; i > 0; i--) {
        resultado *= i;
        sequencia += (i == 1) ? `${i}` : `${i} X `;
    }
    return `${n}! = ${sequencia} = ${resultado}`;
}
console.log(fatorial(Number(prompt("Digite um número: "))));

